<template>
  <div class="min-h-screen flex items-center justify-between bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }">
    <!-- Left side with the image of the man and logo (hidden on small screens) -->
    <div class="hidden md:flex items-center justify-center w-1/2 relative">
      <img :src="manImage" alt="Man" class="rounded-lg max-h-full max-w-full" />
      <img :src="logoImage" alt="E3 Athlete Intelligence Logo" class="absolute z-10 h-32"
        style="top: 60%; left: 65%; transform: translate(-50%, -50%)" />
    </div>

    <!-- Right side with the OTP input form -->
    <div class="w-full md:w-1/2 p-8 lg:pt-0 lg:-pl-10 lg:-ml-20 rounded-lg max-w-md mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-medium text-white text-center md:text-left">
          Verify OTP
        </h1>
        <p class="text-lg text-gray-300 text-center md:text-left">
          Enter the 6-digit code sent to your email
        </p>
      </div>

      <!-- OTP Input Fields -->
      <div class="flex justify-center mb-6">
        <input v-for="(value, index) in otp" :key="index" :id="'otp' + index" type="text" maxlength="1"
          v-model="otp[index]" @input="handleInput(index)" @keydown="handleKeyDown($event, index)"
          class="w-12 h-12 text-2xl text-center text-black bg-white border border-gray-400 rounded-lg mx-2" />
      </div>

      <!-- Submit Button -->
      <div class="mb-4">
        <button @click="handleSubmit" class="w-full bg-[#a4cd39] text-white py-2 px-4 rounded" :disabled="loading">
          {{ loading ? "Verifying..." : "Verify OTP" }}
        </button>
      </div>

      <!-- Resend OTP Link -->
      <div class="mb-4 text-center">
        <button @click="handleResend" class="text-[#a4cd39] underline" :disabled="timer > 0">
          {{ timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP" }}
        </button>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="text-center text-red-500 mb-4">
        {{ errorMessage }}
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="toastVisible" class="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded">
      <h3 class="font-bold">{{ loading ? "Verifying..." : "Success" }}</h3>
      <p>
        {{ loading ? "Verifying your OTP..." : "OTP verified successfully!" }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import bgImage from "@/assets/background.png";
import manImage from "@/assets/Layer 787.png";
import logoImage from "@/assets/logo_light-1.png";

export default {
  name: "ADotp",
  setup() {
    const otp = ref(Array(6).fill(""));
    const toastVisible = ref(false);
    const loading = ref(false);
    const errorMessage = ref("");
    const timer = ref(0); // Timer for resend button
    const router = useRouter();

    const handleInput = (index) => {
      const input = otp.value[index];
      if (isNaN(input) || input === " ") {
        otp.value[index] = "";
      } else if (otp.value[index] !== "" && index < 5) {
        document.getElementById(`otp${index + 1}`)?.focus();
      }
    };

    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && otp.value[index] === "" && index > 0) {
        document.getElementById(`otp${index - 1}`)?.focus();
      }
    };

    const handleSubmit = async () => {
      const email = localStorage.getItem("userEmail");

      if (!email) {
        errorMessage.value = "Email not found. Please try again.";
        return;
      }

      loading.value = true;
      errorMessage.value = "";

      const otpCode = otp.value.join("");

      try {
        const response = await fetch(
          "http://54.211.110.238/api/account/activate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              code: otpCode,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          toastVisible.value = true;
          setTimeout(() => {
            router.push("/login");
          }, 1500);
        } else {
          loading.value = false;
          errorMessage.value =
            result.message || "Invalid OTP. Please try again.";
        }
      } catch (error) {
        loading.value = false;
        errorMessage.value = "An error occurred. Please try again.";
      } finally {
        loading.value = false;
      }
    };

    const handleResend = async () => {
      const email = localStorage.getItem("userEmail");

      if (!email) {
        errorMessage.value = "Email not found. Please try again.";
        return;
      }

      try {
        const response = await fetch(
          "http://54.211.110.238/api/account/resend-activation-code",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          errorMessage.value = "";
          startTimer();
        } else {
          errorMessage.value =
            result.message || "Failed to resend OTP. Please try again.";
        }
      } catch (error) {
        errorMessage.value = "An error occurred. Please try again.";
      }
    };

    const startTimer = () => {
      timer.value = 60;
      const interval = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    };

    return {
      otp,
      toastVisible,
      loading,
      errorMessage,
      timer,
      handleInput,
      handleKeyDown,
      handleSubmit,
      handleResend,
      bgImage,
      manImage,
      logoImage,
    };
  },
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
