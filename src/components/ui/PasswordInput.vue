<template>
  <Form @submit="submitForm" class="space-y-4">
    <!-- Email Field -->
    <FormItem class="space-y-2">
      <Label :for="emailFieldId" :class="{ 'text-red-500': errors.email }">
        Email address
      </Label>
      <FormControl>
        <Input
          :id="emailFieldId"
          v-model="email"
          name="email"
          type="email"
          placeholder="samuel@company.com"
          :class="{ 'border-red-500': errors.email }"
          aria-describedby="emailDescription emailMessage"
          aria-invalid="errors.email"
        />
      </FormControl>
      <p id="emailDescription" class="text-sm text-gray-500">
        Enter your email address
      </p>
      <FormMessage v-if="errors.email">{{ errors.email }}</FormMessage>
    </FormItem>

    <!-- Password Field -->
    <FormItem class="space-y-2">
      <div class="flex justify-between items-center">
        <Label
          :for="passwordFieldId"
          :class="{ 'text-red-500': errors.password }"
        >
          Password
        </Label>
        <router-link to="#" class="text-[#a4cd39] hover:underline text-sm">
          Forgot password?
        </router-link>
      </div>
      <FormControl>
        <PasswordInput
          :id="passwordFieldId"
          v-model="password"
          placeholder="min 6 characters"
          :class="{ 'border-red-500': errors.password }"
          aria-describedby="passwordDescription passwordMessage"
          aria-invalid="errors.password"
        />
      </FormControl>
      <p id="passwordDescription" class="text-sm text-gray-500">
        Enter your password
      </p>
      <FormMessage v-if="errors.password">{{ errors.password }}</FormMessage>
    </FormItem>

    <!-- Remember Me -->
    <div class="flex items-center gap-x-4">
      <Checkbox v-model="remember" id="remember" class="h-4 w-4" />
      <Label htmlFor="remember" class="text-sm text-gray-600">
        Remember me for 30 days
      </Label>
    </div>

    <!-- Error Message -->
    <p v-if="errorMessage" class="text-red-500 text-center">
      {{ errorMessage }}
    </p>

    <!-- Submit Button -->
    <Button
      type="submit"
      :disabled="isLoggingIn"
      class="w-full bg-[#a4cd39] text-white"
      :class="{ 'cursor-wait': isLoggingIn }"
    >
      {{ isLoggingIn ? "Logging in..." : "Sign in" }}
    </Button>

    <!-- Signup Link -->
    <p class="text-sm text-gray-600 text-center">
      Don’t have an account?
      <router-link to="/auth/sign-up" class="text-[#a4cd39] hover:underline">
        Sign up
      </router-link>
    </p>

    <!-- Toast Notification -->
    <ToastProvider v-if="toastVisible">
      <Toast>
        <ToastTitle>Success</ToastTitle>
        <ToastDescription>Login successful!</ToastDescription>
        <ToastAction @click="toastVisible = false">Close</ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  </Form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
import Label from "@/components/ui/Label.vue"; // Your custom Label component
import Input from "@/components/ui/Input.vue"; // Your custom Input component
import PasswordInput from "@/components/ui/PasswordInput.vue"; // Your custom PasswordInput component
import Toast from "@/components/ui/Toast.vue"; // Your custom Toast component

export default {
  components: {
    Label,
    Input,
    PasswordInput,
    Toast,
  },
  setup() {
    const router = useRouter();
    const isLoggingIn = ref(false);
    const toastVisible = ref(false);
    const errorMessage = ref("");

    const schema = yup.object({
      email: yup
        .string()
        .required("Please enter your email")
        .email("Invalid email address"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(6, "Password must be at least 6 characters long"),
    });

    const { handleSubmit, errors } = useForm({ validationSchema: schema });

    const email = ref("");
    const password = ref("");
    const remember = ref(false);

    const submitForm = handleSubmit(async () => {
      isLoggingIn.value = true;
      errorMessage.value = "";

      const loginData = { email: email.value, password: password.value };

      try {
        const response = await fetch("http://54.211.110.238/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });

        const result = await response.json();

        if (result.status === "success") {
          localStorage.setItem("authToken", result.data.token);
          toastVisible.value = true;
          setTimeout(() => router.push("/dashboard"), 1000);
        } else {
          errorMessage.value = "Invalid credentials, please try again.";
        }
      } catch {
        errorMessage.value = "Something went wrong, please try again later.";
      } finally {
        isLoggingIn.value = false;
      }
    });

    return {
      email,
      password,
      remember,
      isLoggingIn,
      toastVisible,
      errorMessage,
      submitForm,
      errors,
    };
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
