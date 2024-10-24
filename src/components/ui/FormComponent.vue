<template>
  <Form @submit="submitForm" class="space-y-4">
    <!-- Username Field -->
    <div class="space-y-2">
      <Label :for="usernameFieldId" :class="{ 'text-red-500': usernameError }">
        Username
      </Label>
      <Input
        :id="usernameFieldId"
        v-model="username"
        name="username"
        type="text"
        :class="{ 'border-red-500': usernameError }"
        aria-describedby="usernameDescription usernameMessage"
        aria-invalid="usernameError"
      />
      <p id="usernameDescription" class="text-sm text-gray-500">
        Enter your username
      </p>
      <p id="usernameMessage" v-if="usernameError" class="text-sm text-red-500">
        {{ usernameErrorMessage }}
      </p>
    </div>

    <!-- Password Field -->
    <div class="space-y-2">
      <Label :for="passwordFieldId" :class="{ 'text-red-500': passwordError }">
        Password
      </Label>
      <PasswordInput
        :id="passwordFieldId"
        v-model="password"
        name="password"
        :class="{ 'border-red-500': passwordError }"
        aria-describedby="passwordDescription passwordMessage"
        aria-invalid="passwordError"
      />
      <p id="passwordDescription" class="text-sm text-gray-500">
        Enter your password
      </p>
      <p id="passwordMessage" v-if="passwordError" class="text-sm text-red-500">
        {{ passwordErrorMessage }}
      </p>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">
      Submit
    </button>
  </Form>
</template>

<script>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import Label from "@/components/ui/Label.vue"; // Importing the Label component
import Input from "@/components/ui/Input.vue"; // Importing the Input component
import PasswordInput from "@/components/ui/PasswordInput.vue"; // Importing the PasswordInput component

export default {
  components: { Label, Input, PasswordInput },
  setup() {
    // Form validation schema
    const schema = yup.object({
      username: yup.string().required("Username is required"),
      password: yup.string().required("Password is required"),
    });

    const { handleSubmit } = useForm({
      validationSchema: schema,
    });

    // Username field
    const {
      value: username,
      errorMessage: usernameErrorMessage,
      meta: usernameMeta,
    } = useField("username");
    const usernameFieldId = "usernameFieldId";
    const usernameError = ref(false);

    // Password field
    const {
      value: password,
      errorMessage: passwordErrorMessage,
      meta: passwordMeta,
    } = useField("password");
    const passwordFieldId = "passwordFieldId";
    const passwordError = ref(false);

    // Form submit handler
    const submitForm = handleSubmit((values) => {
      console.log("Form values:", values);
    });

    return {
      username,
      usernameErrorMessage,
      usernameMeta,
      usernameFieldId,
      usernameError,

      password,
      passwordErrorMessage,
      passwordMeta,
      passwordFieldId,
      passwordError,

      submitForm,
    };
  },
};
</script>

<style scoped>
/* Scoped CSS for styling */
input {
  outline: none;
  transition: border-color 0.3s;
}
input:focus {
  border-color: #3182ce;
}
</style>
