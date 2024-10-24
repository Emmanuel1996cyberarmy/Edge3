<template>
  <header class="fixed top-0 w-full z-50" :style="{ backgroundColor: bgColor }">
    <nav class="px-4 py-3 flex items-center justify-between">
      <div class="logo-container">
        <svg
          class="dark:text-white logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h10"
          />
        </svg>
      </div>
      <div class="flex items-center space-x-8" style="height: 60px">
        <img
          src="../assets/images/logo_light.png"
          alt="E3 Athlete Intelligence"
          style="width: 115px; height: 60px; position: absolute; left: 90px"
        />
      </div>
      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="hover-style"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex items-center justify-between" v-if="isRatingsPage">
        <router-link class="mr-3">HELP</router-link>
        <button
          class="rounded-full focus:outline-none bg-gray-400 text-white py-2 px-3 text-xs w-24"
        >
          LOGOUT
        </button>
      </div>
      <div class="flex items-center space-x-2">
        <button @click="toggleDarkMode" class="p-2 hover:bg-gray-700">
          <svg
            v-if="isDarkMode"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a8 8 0 10.001 16.001A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4a6 6 0 100 12 6 6 0 000-12zM10 0a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </button>
        <div class="flex flex-col items-center space-x-2">
          <img
            :src="userAvatar"
            alt="User Avatar"
            class="h-10 w-10 rounded-md"
          />
          <span class="hidden md:block">{{ userName }}</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Define background color prop
const props = defineProps({
  bgColor: {
    type: String,
  },
  isRatingsPage: {
    type: Boolean,
    default: false,
  },
});

// Reactive variables for user data and navigation items
const userAvatar = ref("");
const userName = ref("");
const navItems = ref([]);
const isDarkMode = ref(false);

// Fetch user data from localStorage and navigation items on mount
onMounted(() => {
  const storedUser = localStorage.getItem("eaUser");
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    userName.value = `${userData.first_name}`;
    userAvatar.value = userData.avatar || "src/assets/images/avatar.jpg";
  }

  // Load navigation items (simulating API call)
  navItems.value = [
    { path: "/dashboard", name: "HOME" },
    { path: "/dashboard", name: "DASHBOARD" },
    { path: "/users", name: "TEAM MANAGEMENT" },
    { path: "/ratings", name: "RATINGS" },
    { path: "/settings", name: "SETTINGS" },
    { path: "/player-comparison", name: "PLAYER COMPARISON" },
    { path: "/player-comparison-result", name: "PLAYER COMPARISON RESULT" },
  ];
});

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<style scoped>
.hover-style {
  font-size: 16px;
}
.hover-style:hover {
  color: #c5d92c;
  font-weight: bold;
}

.logo-container {
  padding-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 40px;
  font-size: 80px;
}
</style>
