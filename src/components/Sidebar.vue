<template>
  <aside class="sidebar" :style="{ backgroundColor: bgColor }">
    <nav class="menu" style="padding-bottom: 100px !important;">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        :title="item.name"
        class="menu-item"
        :class="{ active: $route.path === item.path }"
      >
        <span v-html="item.icon"></span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  bgColor: {
    type: String,
  },
});

// Menu items for the sidebar
const menuItems = ref([
  {
    path: "/users",
    icon: `<svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

`,
    active: false,
    name: "Users"
  },
  {
    path: "/dashboard",
    icon: `<svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>
`,
    active: false,
    name:"Dashboard"
  },
  {
    path: "/ratings",
    icon: `<svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>
`,
    active: true,
    name: "Ratings"
  },
  {
    path: "/chat",
    icon: `<svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
</svg>

`,
    active: false,
    name: "Chat"
  },
  {
    path: "/board",
    icon: `<svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
</svg>
`,
    active: false,
  },
  {
    path: "/pitch",
    icon: `<ion-icon name="barcode-outline"></ion-icon>
`,
    active: false,
    name: "Pitch"
  },
  {
    path: "/trophy",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>
`,
    active: false,
    name: "Trophy"
  },
  {
    path: "/chart",
    icon: `
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/></svg>`,
    active: false,
    name: "Chart"
  },
  {
    path: "/settings",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>`,
    active: false,
  },
  {
    path: "/logout",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
     `,
    active: false,
    name: "Log Out"
  },

]);
</script>

<style scoped>
.sidebar {
  width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  margin-top: 85px;
  position: fixed;
  z-index: 50;
  margin-right: 25px;
  padding-right: 30px;
  padding-left: 15px;
  overflow-y: auto;
}

.logo-container {
  margin-bottom: 2rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 40px;
  font-size: 40px;
}

.menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 20px;
}

.menu-item {
  width: 48px;
  height: 48px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  padding: 1rem 0.5rem;
  margin-left: 10px;
  align-items: center;
  border-radius: 8px;
  color: #e8eaed;
}

.menu-item.active,
.menu-item:hover {
  background-color: #c5d92c;
  color: black !important;
}

/* .menu-item span {
  font-size: 24px;
  color: #fff;
} */
</style>
