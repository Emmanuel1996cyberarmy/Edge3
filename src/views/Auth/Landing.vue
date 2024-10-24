<template>
  <ToastProvider>
    <div
      class="min-h-screen flex items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }"
    >
      <div
        class="w-full md:w-1/2 p-8 lg:pt-0 rounded-lg max-w-md mx-auto text-center"
      >
        <img
          :src="logoImage"
          alt="E3 Athlete Intelligence Logo"
          class="mx-auto mb-8 h-32"
        />

        <!-- <div class="mb-8">
          <h1 class="text-4xl font-medium text-white">AD/GM</h1>
          <p class="text-lg text-gray-300">Profile Setup</p>
        </div> -->
        <div class="mb-4">
          <button
            class="w-1/2 bg-[#a4cd39] text-white py-2 px-4 rounded hover:bg-green-600 focus:bg-green-700"
            :disabled="loading"
            @click="handleButtonClick"
          >
            {{ loading ? "Loading..." : "Click to continue" }}
          </button>
        </div>
      </div>
    </div>

    <!-- Toast notification -->
    <div
      v-if="toastVisible"
      class="fixed bottom-4 right-4 bg-white shadow-lg p-4 rounded"
    >
      <div class="font-bold text-lg">Redirecting...</div>
    </div>
  </ToastProvider>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import bgImage from "@/assets/background.png";
import manImage from "@/assets/Layer 787.png";
import logoImage from "@/assets/logo_light-1.png";

export default {
  name: "Landing", // Renamed component
  setup() {
    const loading = ref(false);
    const toastVisible = ref(false);
    const router = useRouter();

    const handleButtonClick = () => {
      loading.value = true;
      toastVisible.value = true;

      // Simulate loading delay before navigating
      setTimeout(() => {
        loading.value = false;
        toastVisible.value = false;
        router.push("/step-two");
      }, 1000);
    };

    return {
      loading,
      toastVisible,
      handleButtonClick,
      bgImage,
      manImage,
      logoImage,
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
