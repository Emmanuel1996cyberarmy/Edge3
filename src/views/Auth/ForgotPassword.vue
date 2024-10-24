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
          Password Recovery Platform to assist in resetting your account
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
              Forgot Password
            </h3>
            <p class="text-sm text-gray-600">
              Please enter your registered email, and we will send you a link to
              reset your password.
            </p>
          </div>
          <form @submit.prevent="submitForm" class="space-y-5">
            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                placeholder="samuel@company.com"
                class="mt-1 form-input w-full"
              />
              <p v-if="submitted && errors.email" class="form-error">
                {{ errors.email }}
              </p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-2 px-4 rounded-lg text-white"
              :class="{
                'bg-[#a4cd39] hover:bg-green-600': !isSubmitting,
                'cursor-wait': isSubmitting,
              }"
            >
              {{ isSubmitting ? "Sending..." : "Send OTP" }}
            </button>
          </form>
          <div class="text-right mb-4">
            <router-link to="/login" class="text-[#a4cd39] hover:underline">
              Remember password? Log in
            </router-link>
          </div>
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
import { ref } from "vue";
import bgImage from "@/assets/ea1.png";
import logoImage from "@/assets/logo_light-1.png";
import { useRouter } from "vue-router"; // Import the router

export default {
  name: "ForgetPassword",
  setup() {
    const isSubmitting = ref(false);
    const toastVisible = ref(false);
    const toastMessage = ref("");
    const toastDescription = ref("");
    const isErrorToast = ref(false);
    const submitted = ref(false);
    const router = useRouter(); // Add the router here

    const form = ref({
      email: "",
    });

    const errors = ref({
      email: "",
    });

    const validateForm = () => {
      const newErrors = {};
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!form.value.email) {
        newErrors.email = "Please enter your email";
      } else if (!emailPattern.test(form.value.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      return newErrors;
    };

    const submitForm = async () => {
      submitted.value = true;
      const newErrors = validateForm();
      errors.value = newErrors;

      if (Object.keys(newErrors).length > 0) {
        isErrorToast.value = true;
        toastMessage.value = "Error";
        toastDescription.value = "Please fix the errors in the form.";
        toastVisible.value = true;
        return;
      }

      isSubmitting.value = true;
      toastMessage.value = "";
      toastDescription.value = "";

      try {
        const response = await fetch(
          "http://54.211.110.238/api/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: form.value.email }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          toastMessage.value = "Success!";
          toastDescription.value = "OTP sent successfully!";
          isErrorToast.value = false;

          // Save email to localStorage and redirect to OTP verification page
          localStorage.setItem("userEmail", form.value.email);
          router.push("/verify-otp"); // Redirect to the OTP input page
        } else {
          toastMessage.value = "Error!";
          toastDescription.value =
            result.message || "Failed to send OTP. Try again later.";
          isErrorToast.value = true;
        }
      } catch (error) {
        toastMessage.value = "Error!";
        toastDescription.value = "Failed to send OTP. Try again later.";
        isErrorToast.value = true;
      } finally {
        isSubmitting.value = false;
        toastVisible.value = true;
      }
    };

    return {
      form,
      errors,
      isSubmitting,
      toastVisible,
      toastMessage,
      toastDescription,
      isErrorToast,
      submitted,
      submitForm,
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

.form-input {
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #a4cd39;
}

.form-error {
  color: #e53e3e;
  font-size: 12px;
  margin-top: 4px;
}

.fixed {
  position: fixed;
}
</style>
