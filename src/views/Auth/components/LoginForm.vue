<template>
  <div class="flex min-h-screen items-center justify-center bg-white p-10">
    <form class="space-y-6 w-full max-w-md">
      <div>
        <h1 class="text-2xl font-bold text-center">Welcome Back!</h1>
        <p class="text-gray-500 mb-6 text-center">Please enter your details.</p>
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="form-input"
          placeholder="john@company.com"
          required
        />
        <p v-if="submitted && errors.email && !email" class="form-error">
          {{ errors.email }}
        </p>
      </div>

      <!-- Password Field -->
      <div class="form-group">
        <div class="flex justify-between items-center">
          <label for="password" class="form-label">Password</label>
          <router-link
            to="/forgot-password"
            class="text-[#a4cd39] hover:underline text-sm"
          >
            Forgot password?
          </router-link>
        </div>
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="form-input"
          placeholder="min 8 characters"
          required
        />
        <p v-if="submitted && errors.password && !password" class="form-error">
          {{ errors.password }}
        </p>
      </div>

      <!-- Remember Me -->
      <div class="flex items-center">
        <input
          v-model="remember"
          type="checkbox"
          id="remember"
          class="form-checkbox"
        />
        <label for="remember" class="ml-2 text-sm text-gray-600">
          Remember me for 30 days
        </label>
      </div>

      <!-- Error Message (like validation) -->
      <p v-if="errorMessage === 'Account not activated'" class="form-error">
        {{ errorMessage }}.
        <router-link
          to="/activate-account"
          class="text-[#a4cd39] hover:underline"
          >Activate Account</router-link
        >
      </p>
      <p
        v-if="errorMessage && errorMessage !== 'Account not activated'"
        class="form-error"
      >
        {{ errorMessage }}
      </p>

      <!-- Submit Button -->
      <button
        type="button"
        @click="submitForm"
        class="w-full bg-[#a4cd39] text-white py-2 px-4 rounded hover:bg-green-600 focus:bg-green-700"
        :disabled="isLoggingIn"
      >
        {{ isLoggingIn ? "Logging in..." : "Sign in" }}
      </button>

      <p class="text-sm text-gray-600 text-center">
        Don’t have an account?
        <router-link to="/signup" class="text-[#a4cd39] hover:underline">
          Sign up
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
import Cookies from "js-cookie";

export default {
  setup() {
    const router = useRouter();
    const isLoggingIn = ref(false);
    const submitted = ref(false);
    const errorMessage = ref("");

    const schema = yup.object({
      email: yup
        .string()
        .required("Please enter your email")
        .email("Invalid email address"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(8, "Password must be at least 8 characters long"),
    });

    const { errors, validate } = useForm({
      validationSchema: schema,
      validateOnMount: false,
    });

    const email = ref("");
    const password = ref("");
    const remember = ref(false);

    const submitForm = async () => {
      submitted.value = true;

      if (!email.value || !password.value) {
        errorMessage.value = "Email and password are required.";
        return;
      }

      const isValid = await validate();
      if (!isValid) {
        errorMessage.value = "Invalid email or password.";
        return;
      }

      isLoggingIn.value = true;
      const loginData = { email: email.value, password: password.value };

      try {
        const response = await fetch("http://54.211.110.238/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });

        const result = await response.json();
        if (result.status === "success") {
          const userData = result.data.user;
          localStorage.setItem("eaUser", JSON.stringify(userData));

          if (remember.value) {
            Cookies.set("authToken", result.data.token, { expires: 30 });
          } else {
            Cookies.set("authToken", result.data.token, { expires: 10 });
          }
          router.push("/dashboard");
        } else {
          errorMessage.value = result.message || "Invalid credentials.";
        }
      } catch (error) {
        errorMessage.value =
          error.message || "Something went wrong, please try again later.";
      } finally {
        isLoggingIn.value = false;
      }
    };

    return {
      email,
      password,
      remember,
      isLoggingIn,
      errorMessage,
      submitForm,
      errors,
      submitted,
    };
  },
};
</script>

<style scoped>
/* General Layout */
.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.relative {
  position: relative;
}

/* Form Styles */
.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
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

.form-checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
}

.form-error {
  color: #e53e3e;
  font-size: 12px;
  margin-top: 4px;
}

.button {
  cursor: pointer;
  border-radius: 4px;
}

/* Toast */
.fixed {
  position: fixed;
}
</style>
