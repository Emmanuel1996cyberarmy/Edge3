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
          Intelligence Platform and Tools to assist in making Your College
          Selection
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
              Let’s Get Started
            </h3>
            <p class="text-sm text-gray-600">
              Already have an account?
              <router-link to="/login" class="text-[#a4cd39] hover:underline">
                Log in
              </router-link>
            </p>
          </div>
          <form @submit.prevent="submitForm" class="space-y-5">
            <!-- Full Name Field -->
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                v-model="form.fullName"
                type="text"
                id="fullName"
                placeholder="Samuel Nzubechi"
                class="mt-1 form-input w-full"
              />
              <p v-if="submitted && errors.fullName" class="form-error">
                {{ errors.fullName }}
              </p>
            </div>

            <!-- Organization and Role Fields -->
            <div class="flex space-x-4">
              <!-- Organization Field -->
              <div class="w-full">
                <label
                  for="organization"
                  class="block text-sm font-medium text-gray-700"
                >
                  Organization
                </label>
                <select
                  v-model="form.organization"
                  id="organization"
                  class="mt-1 form-input w-full"
                >
                  <option value="" disabled>Select Organization</option>
                  <option value="company1">@company1.com</option>
                  <option value="company2">@company2.com</option>
                  <option value="company3">@company3.com</option>
                </select>
                <p v-if="submitted && errors.organization" class="form-error">
                  {{ errors.organization }}
                </p>
              </div>

              <!-- Role Field -->
              <div class="w-full">
                <label
                  for="role"
                  class="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  v-model="form.role"
                  id="role"
                  class="mt-1 form-input w-full"
                >
                  <option value="" disabled>Select Role</option>
                  <option value="Administration">Administration</option>
                  <option value="Coach">Coach</option>
                  <option value="Athlete">Athlete</option>
                </select>
                <p v-if="submitted && errors.role" class="form-error">
                  {{ errors.role }}
                </p>
              </div>
            </div>

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

            <!-- Password Field -->
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                v-model="form.password"
                type="password"
                id="password"
                placeholder="min 7 characters"
                class="mt-1 form-input w-full"
              />
              <p v-if="submitted && errors.password" class="form-error">
                {{ errors.password }}
              </p>
            </div>

            <!-- Terms and Conditions Checkbox -->
            <div class="flex items-center gap-x-4">
              <input
                v-model="agreed"
                type="checkbox"
                id="agree"
                class="form-checkbox h-4 w-4"
              />
              <label for="agree" class="text-sm text-gray-600">
                I agree to the
                <router-link to="#">
                  <span class="font-semibold text-[#a4cd39]">
                    Terms & Privacy
                  </span>
                </router-link>
              </label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="!agreed"
              class="w-full py-2 px-4 rounded-lg text-white"
              :class="{
                'bg-[#a4cd39] hover:bg-green-600': agreed && !isSigningIn,
                'bg-gray-500 cursor-not-allowed': !agreed,
                'cursor-wait': isSigningIn,
              }"
            >
              {{ isSigningIn ? "Signing up..." : "Sign up" }}
            </button>

            <!-- Divider -->
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            <!-- Google and Apple Signup Buttons -->
            <div
              class="flex flex-col sm:flex-row justify-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                class="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg"
              >
                <!-- <CheckIcon class="mr-2 h-6 w-6" />  -->Google
              </button>
              <button
                class="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg"
              >
                <!-- <CheckIcon class="mr-2 h-6 w-6" />  -->Apple
              </button>
            </div>
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
import { ref } from "vue";
import { CheckIcon } from "@heroicons/vue/24/solid"; // Updated import for Heroicons v2
import bgImage from "@/assets/ea1.png";
import logoImage from "@/assets/logo_light-1.png";

export default {
  name: "SignUp", // Ensure the component is named
  setup() {
    const isSigningIn = ref(false);
    const agreed = ref(false);
    const toastVisible = ref(false);
    const toastMessage = ref("");
    const toastDescription = ref("");
    const isErrorToast = ref(false);
    const submitted = ref(false);

    const form = ref({
      fullName: "",
      organization: "",
      role: "",
      email: "",
      password: "",
    });

    const errors = ref({
      fullName: "",
      organization: "",
      role: "",
      email: "",
      password: "",
    });

    const validateForm = () => {
      const newErrors = {};
      if (!form.value.fullName) newErrors.fullName = "Full name is required";
      if (!form.value.organization)
        newErrors.organization = "Organization is required";
      if (!form.value.role) newErrors.role = "Role is required";
      if (!form.value.email.includes("@"))
        newErrors.email = "Invalid email address";
      if (form.value.password.length < 7)
        newErrors.password = "Password must be at least 7 characters";
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

      isSigningIn.value = true;
      toastMessage.value = "";
      toastDescription.value = "";

      setTimeout(() => {
        isSigningIn.value = false;
        toastMessage.value = "Success!";
        toastDescription.value = "Form submitted successfully!";
        toastVisible.value = true;
      }, 1000);
    };

    return {
      form,
      errors,
      isSigningIn,
      agreed,
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
