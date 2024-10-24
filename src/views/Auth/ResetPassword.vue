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
          Reset your password to secure your account
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
              Reset Password
            </h3>
            <p class="text-sm text-gray-600">
              Enter your new password to reset your account.
            </p>
          </div>
          <form @submit.prevent="resetPassword" class="space-y-5">
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

            <!-- New Password Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >New Password</label
              >
              <input
                v-model="form.password"
                type="password"
                class="w-full p-2 border rounded-md"
                placeholder="New Password"
              />
            </div>

            <!-- Confirm Password Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                v-model="form.password_confirmation"
                type="password"
                class="w-full p-2 border rounded-md"
                placeholder="Confirm Password"
              />
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-2 px-4 bg-[#a4cd39] text-white rounded-lg"
            >
              {{ isSubmitting ? "Resetting..." : "Reset Password" }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div
      v-if="toastVisible"
      :class="{
        'bg-red-500 text-white': isErrorToast,
        'bg-green-500 text-white': !isErrorToast,
      }"
      class="fixed bottom-4 right-4 shadow-lg p-4 rounded"
    >
      <div class="font-bold text-lg">{{ toastMessage }}</div>
      <p>{{ toastDescription }}</p>
      <button
        @click="toastVisible = false"
        class="mt-2 text-blue-500 hover:underline"
      >
        Close
      </button>
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
      password: "",
      password_confirmation: "",
    });
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const router = useRouter();

    // Toast state
    const toastVisible = ref(false);
    const toastMessage = ref("");
    const toastDescription = ref("");
    const isErrorToast = ref(false);

    onMounted(() => {
      // Load email and reset token from localStorage
      form.value.email = localStorage.getItem("userEmail") || "";
    });

    const resetPassword = async () => {
      if (form.value.password !== form.value.password_confirmation) {
        errorMessage.value = "Passwords do not match.";
        showToast("Error", "Passwords do not match", true);
        return;
      }

      isSubmitting.value = true;
      errorMessage.value = "";

      try {
        const response = await fetch(
          "http://54.211.110.238/api/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: form.value.email,
              reset_token: localStorage.getItem("resetToken"), // Load reset token
              password: form.value.password,
              password_confirmation: form.value.password_confirmation,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          showToast("Success", "Password reset successfully!", false);
          router.push("/login");
        } else {
          errorMessage.value =
            result.message || "Password reset failed. Try again.";
          showToast("Error", errorMessage.value, true);
        }
      } catch (error) {
        errorMessage.value = "Password reset failed. Please try again.";
        showToast("Error", errorMessage.value, true);
      } finally {
        isSubmitting.value = false;
      }
    };

    // Show toast function
    const showToast = (title, message, isError) => {
      toastMessage.value = title;
      toastDescription.value = message;
      isErrorToast.value = isError;
      toastVisible.value = true;

      // Auto-close the toast after 3 seconds
      setTimeout(() => {
        toastVisible.value = false;
      }, 3000);
    };

    return {
      form,
      isSubmitting,
      errorMessage,
      resetPassword,
      bgImage,
      logoImage,
      toastVisible,
      toastMessage,
      toastDescription,
      isErrorToast,
    };
  },
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

.fixed {
  position: fixed;
}
</style>
