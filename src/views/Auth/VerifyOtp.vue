<template>
  <div class="min-h-screen flex">
    <!-- Left side with the background image and logo (hidden on small screens) -->
    <div
      class="relative flex-1 hidden lg:flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat rounded-r-3xl"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="absolute top-8 left-8">
        <img class="h-16 w-auto" :src="logoImage" alt="EDGE3 Logo" />
      </div>

      <div class="relative z-10 w-full max-w-md text-center mt-16">
        <h3 class="text-white text-4xl font-medium leading-tight">
          EDGE3 - Athlete
        </h3>
        <h3 class="text-[#a4cd39] text-3xl font-medium leading-tight">
          Intelligence Platform
        </h3>
        <p class="text-white text-sm mt-4 leading-relaxed">
          Verify OTP to reset your account password
        </p>
      </div>
    </div>

    <!-- Right side with the form -->
    <div
      class="flex-1 flex items-center bg-white justify-center h-screen overflow-y-auto"
    >
      <div class="w-full max-w-md space-y-8 px-4 text-gray-600 sm:px-0">
        <div class="overflow-y-auto px-1 max-h-screen">
          <div class="mt-5 space-y-2">
            <h3 class="text-gray-800 text-4xl font-medium leading-tight">
              Verify OTP
            </h3>
            <p class="text-sm text-gray-600">
              Enter the 6-digit OTP sent to your email
            </p>
          </div>
          <form @submit.prevent="submitOtpForm" class="space-y-5">
            <!-- Email Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                class="w-full p-2 border rounded-md"
                readonly
              />
            </div>

            <!-- OTP Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700">OTP</label>
              <input
                v-model="form.otp"
                type="text"
                class="w-full p-2 border rounded-md"
                maxlength="6"
                placeholder="Enter OTP"
              />
            </div>

            <!-- Error Message -->
            <p v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </p>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-2 px-4 bg-[#a4cd39] text-white rounded-lg"
            >
              {{ isSubmitting ? "Verifying..." : "Verify OTP" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import bgImage from "@/assets/ea1.png";
import logoImage from "@/assets/logo_light-1.png";
import { useRouter } from "vue-router";

export default {
  setup() {
    const form = ref({
      email: "",
      otp: "",
    });
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const router = useRouter();

    onMounted(() => {
      // Load the saved email from localStorage
      form.value.email = localStorage.getItem("userEmail") || "";
    });

    const submitOtpForm = async () => {
      if (!form.value.otp || form.value.otp.length !== 6) {
        errorMessage.value = "Please enter a valid 6-digit OTP.";
        return;
      }

      isSubmitting.value = true;
      errorMessage.value = "";

      try {
        const response = await fetch("http://54.211.110.238/api/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.value.email,
            otp: form.value.otp,
          }),
        });

        const result = await response.json();

        if (response.ok && result.status === "success") {
          const resetToken = result.data.user.password_reset.reset_token;
          localStorage.setItem("resetToken", result.data.token);

          router.push("/reset-password"); // Redirect to reset password page
        } else {
          errorMessage.value = result.message || "OTP verification failed.";
        }
      } catch (error) {
        errorMessage.value = "OTP verification failed. Please try again.";
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      form,
      isSubmitting,
      errorMessage,
      submitOtpForm,
      bgImage,
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
