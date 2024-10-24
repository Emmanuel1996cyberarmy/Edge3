<template>
  <div class="min-h-screen flex">
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
          Activate your account
        </p>
      </div>
    </div>

    <div
      class="flex-1 flex items-center bg-white justify-center h-screen overflow-y-auto"
    >
      <div class="w-full max-w-md space-y-8 px-4 text-gray-600 sm:px-0">
        <div class="overflow-y-auto px-1 max-h-screen">
          <div class="mt-5 space-y-2">
            <h3 class="text-gray-800 text-4xl font-medium leading-tight">
              Activate Account
            </h3>
            <p class="text-sm text-gray-600">
              Enter your email to receive an activation code
            </p>
          </div>

          <form @submit.prevent="sendActivationCode" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                class="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <p v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </p>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-2 px-4 bg-[#a4cd39] text-white rounded-lg"
            >
              {{ isSubmitting ? "Sending..." : "Send Activation Code" }}
            </button>
          </form>

          <div v-if="activationCodeSent" class="mt-8">
            <h3 class="text-sm text-gray-600">
              Enter the 5-digit code sent to your email
            </h3>

            <div class="mt-2">
              <input
                v-model="form.otp"
                type="text"
                class="w-full p-2 border rounded-md"
                maxlength="6"
                placeholder="Enter 5-digit activation code"
              />
            </div>

            <button
              @click="verifyActivationCode"
              :disabled="isSubmitting"
              class="w-full py-2 px-4 bg-[#a4cd39] text-white rounded-lg mt-5"
            >
              {{ isSubmitting ? "Verifying..." : "Activate Account" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import bgImage from "@/assets/ea1.png";
import logoImage from "@/assets/logo_light-1.png";
import { useRouter } from "vue-router";

export default {
  name: "ActivateAccount",
  setup() {
    const form = ref({
      email: "",
      otp: "",
    });
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const activationCodeSent = ref(false);
    const router = useRouter();

    const sendActivationCode = async () => {
      if (!form.value.email) {
        errorMessage.value = "Please enter a valid email.";
        return;
      }

      isSubmitting.value = true;
      errorMessage.value = "";

      try {
        const response = await fetch(
          "http://54.211.110.238/api/account/resend",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: form.value.email,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          activationCodeSent.value = true;
          errorMessage.value = "";
        } else {
          errorMessage.value =
            result.message ||
            "Failed to send activation code. Please try again.";
        }
      } catch (error) {
        errorMessage.value =
          "Failed to send activation code. Please try again.";
      } finally {
        isSubmitting.value = false;
      }
    };
    const verifyActivationCode = async () => {
      if (!form.value.otp || form.value.otp.length !== 6) {
        errorMessage.value = "Please enter a valid 6-digit activation code.";
        return;
      }

      isSubmitting.value = true;
      errorMessage.value = "";

      try {
        const response = await fetch(
          "http://54.211.110.238/api/account/activate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: form.value.email,
              code: form.value.otp,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          errorMessage.value = "";
          router.push("/login");
        } else {
          errorMessage.value =
            result.message || "Activation failed. Please try again.";
        }
      } catch (error) {
        errorMessage.value = "Activation failed. Please try again.";
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      form,
      isSubmitting,
      errorMessage,
      activationCodeSent,
      sendActivationCode,
      verifyActivationCode,
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
