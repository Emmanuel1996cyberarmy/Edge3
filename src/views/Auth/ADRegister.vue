<template>
  <div class="min-h-screen flex items-center justify-between bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }">
    <!-- Left side with the image of the man and logo (hidden on small screens) -->
    <div class="hidden md:flex items-center justify-center w-1/2 relative">
      <img :src="manImage" alt="Man" class="rounded-lg max-h-full max-w-full" />
      <img :src="logoImage" alt="E3 Athlete Intelligence Logo" class="absolute z-10 h-32"
        style="top: 60%; left: 65%; transform: translate(-50%, -50%)" />
    </div>

    <!-- Right side with the form (takes full width on small screens) -->
    <div class="w-full md:w-1/2 p-8 lg:pt-0 lg:-pl-10 lg:-ml-20 rounded-lg max-w-md mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-medium text-white text-center md:text-left">
          AD/GM
        </h1>
        <p class="text-lg text-gray-300 text-center md:text-left">
          Profile Setup
        </p>
      </div>

      <form @submit.prevent="submitForm">
        <!-- Full Name Field -->
        <div class="mb-4">
          <input v-model="form.firstName" type="text" placeholder="First Name"
            class="form-input text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="submitted && errors.firstName" class="form-error">
            {{ errors.firstName }}
          </p>
        </div>

        <!-- Last Name Field -->
        <div class="mb-4">
          <input v-model="form.lastName" type="text" placeholder="Last Name"
            class="form-input text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="submitted && errors.lastName" class="form-error">
            {{ errors.lastName }}
          </p>
        </div>
        <!-- Username Field -->
        <div class="mb-4">
          <input v-model="form.username" type="text" placeholder="Username"
            class="form-input text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="submitted && errors.username" class="form-error">
            {{ errors.username }}
          </p>
        </div>

        <!-- Email Field -->
        <div class="mb-4">
          <input v-model="form.email" type="email" placeholder="samuel@company.com"
            class="form-input text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="submitted && errors.email" class="form-error">
            {{ errors.email }}
          </p>
        </div>

        <!-- Phone Field -->
        <div class="mb-4">
          <input v-model="form.phone" type="tel" placeholder="Phone number"
            class="form-input text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="submitted && errors.phone" class="form-error">
            {{ errors.phone }}
          </p>
        </div>

        <!-- Password Field -->
        <div class="mb-6">
          <input v-model="form.password" type="password" placeholder="min 7 characters"
            class="form-input text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="submitted && errors.password" class="form-error">
            {{ errors.password }}
          </p>
        </div>

        <!-- Submit Button -->
        <button type="submit"
          class="w-full bg-[#a4cd39] text-white py-2 px-4 rounded hover:bg-green-600 focus:bg-green-700"
          :disabled="isSubmitting">
          {{ isSubmitting ? "Submitting..." : "Get Started" }}
        </button>
      </form>

      <!-- Signup Link -->
      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">
          Already have an account?
          <router-link to="/login" class="text-[#a4cd39] hover:underline">
            Sign in
          </router-link>
        </p>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="toastVisible" :class="{
        'bg-red-500 text-white': isErrorToast,
        'bg-green-500 text-white': !isErrorToast,
      }" class="fixed bottom-4 right-4 shadow-lg p-4 rounded">
      <div class="font-bold text-lg">{{ toastMessage }}</div>
      <p>{{ toastDescription }}</p>
      <button @click="toastVisible = false" class="mt-2 text-blue-500 hover:underline">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

import bgImage from "@/assets/background.png";
import manImage from "@/assets/Layer 787.png";
import logoImage from "@/assets/logo_light-1.png";

export default {
  setup() {
    const router = useRouter();
    const isSubmitting = ref(false);
    const toastVisible = ref(false);
    const toastMessage = ref("");
    const toastDescription = ref("");
    const submitted = ref(false); // To track form submission attempts
    const isErrorToast = ref(false); // To track if the toast is for error

    // Form data
    const form = ref({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    });
    const errors = ref({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    });

    // Watch form fields and clear validation errors when a field is updated
    watch(form.value, (newVal, oldVal) => {
      if (newVal.firstName) errors.value.firstName = "";
      if (newVal.lastName) errors.value.lastName = "";
      if (newVal.username && newVal.username.length >= 3)
        errors.value.username = "";
      if (newVal.email.includes("@")) errors.value.email = "";
      if (newVal.phone) errors.value.phone = "";
      if (newVal.password && newVal.password.length >= 7)
        errors.value.password = "";
    });

    const validateForm = () => {
      const newErrors = {};
      if (!form.value.firstName) newErrors.firstName = "First name is required";
      if (!form.value.lastName) newErrors.lastName = "Last name is required";
      if (form.value.username.length < 3)
        newErrors.username = "Username must be at least 3 characters";
      if (!form.value.email.includes("@"))
        newErrors.email = "Invalid email address";
      if (!form.value.phone) newErrors.phone = "Phone number is required";
      if (form.value.password.length < 7)
        newErrors.password = "Password must be at least 7 characters";
      return newErrors;
    };

    const submitForm = async () => {
      submitted.value = true;
      const newErrors = validateForm();
      errors.value = newErrors;

      if (Object.keys(newErrors).length > 0) {
        isErrorToast.value = true; // Show error toast
        toastMessage.value = "Error";
        toastDescription.value = "Please fix the errors in the form.";
        toastVisible.value = true;
        return;
      }

      isSubmitting.value = true;
      toastMessage.value = "";
      toastDescription.value = "";

      const payload = {
        first_name: form.value.firstName || "Firstname",
        last_name: form.value.lastName || "Lastname",
        email: form.value.email,
        phone: form.value.phone,
        password: form.value.password,
        role_id: 1,
        organization: "NFL",
      };

      try {
        const response = await fetch("http://54.211.110.238/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok) {
          isErrorToast.value = false; // Success toast
          toastMessage.value = "Success!";
          toastDescription.value = "You have successfully registered!";
          toastVisible.value = true;
          localStorage.setItem("userEmail", form.value.email);
          setTimeout(() => {
            toastVisible.value = false;
            router.push("/ad-profile");
          }, 1000);
        } else {
          // Display specific validation errors
          if (result.errors) {
            Object.keys(result.errors).forEach((field) => {
              errors.value[field] = result.errors[field][0]; // Get the first error for each field
            });
          }
          throw new Error(result.message || "Registration failed.");
        }
      } catch (error) {
        isErrorToast.value = true; // Error toast
        toastMessage.value = "Error";
        toastDescription.value = error.message;
        toastVisible.value = true;
      } finally {
        isSubmitting.value = false;
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
      manImage,
      logoImage, // Return the imported images
    };
  },
};
</script>

<style scoped>
/* General Layout */
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
