<template>
  <main class="w-full flex flex-col lg:flex-row min-h-screen">
    <!-- Left section with logo and Back to website button -->
    <div class="flex-1 flex items-center bg-white justify-center relative"
      :class="{ 'h-screen': isLargeScreen, 'h-auto': !isLargeScreen }">
      <!-- Logo and button section -->
      <div class="absolute top-8 pr-6 pl-8 flex justify-between w-full">
        <!-- Logo image -->
        <img class="h-16 w-auto" :src="logoImage" alt="EDGE3 Logo" />
        <!-- Back to website button -->
        <router-link to="/" class="text-sm">
          <Button class="bg-[#a4cd39] flex gap-2 rounded-full hover:bg-green-600 hover:text-white">
            <span>Back to website</span>
            <svg class="h-4 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </router-link>
      </div>

      <!-- Login form section -->
      <div class="w-full max-w-md space-y-8 px-4 text-gray-600 sm:px-0">
        <!-- Login form (to be replaced with actual form component) -->
        <LoginForm />

        <!-- Footer -->
        <div class="absolute bottom-5 left-0 right-0 flex justify-center items-center text-sm text-gray-600">
          <div class="text-center">© EDGE 3 Sports 2024-2025</div>
        </div>
      </div>
    </div>

    <!-- Right section with background image -->
    <div class="relative flex-1 hidden lg:flex items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }" :class="{ 'h-screen': isLargeScreen }">
      <div class="absolute bottom-16 z-10 w-full max-w-md text-center">
        <h3 class="text-white text-2xl font-medium">
          Athlete Intelligence for the Modern Athlete
        </h3>
      </div>
    </div>
  </main>
</template>

<script>
import backgroundImage from "@/assets/ea2.png"; // Import background image
import logoImage from "@/assets/logo_dark_only-1.png"; // Import logo image
import Button from "@/components/ui/Button.vue"; // Button component
import LoginForm from "./components/LoginForm.vue"; // Import Login form component
import { ref, onMounted } from "vue";

export default {
  name: "Login",
  components: {
    Button,
    LoginForm,
  },
  data() {
    return {
      backgroundImage,
      logoImage,
      isLargeScreen: false, // Boolean to track screen size
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      // Check if the screen is large (above 1024px)
      this.isLargeScreen = window.innerWidth >= 1024;
    },
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

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.relative {
  position: relative;
}

.h-screen {
  height: 100vh;
}

/* Responsive layout for different screen sizes */
@media (max-width: 1023px) {
  .h-screen {
    height: auto; /* Allow flexible height on smaller screens */
  }

  .h-auto {
    height: auto;
  }
}
</style>
