<template>
  <div class="min-h-screen flex items-center justify-between bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }">
    <!-- Left side with the man image and the overlayed logo (hidden on smaller screens) -->
    <div class="hidden md:flex items-center justify-center w-1/2 lg:-mr-20 relative">
      <img :src="manImage" alt="Man" class="rounded-lg max-h-full max-w-full" />
      <img :src="logoImage" alt="E3 Athlete Intelligence Logo" class="absolute z-10 h-32"
        style="top: 60%; left: 65%; transform: translate(-50%, -50%)" />
    </div>

    <!-- Right side with the form -->
    <div class="w-full md:w-1/2 p-4 lg:pt-0 md:p-8 lg:pl-0 lg:-ml-20 rounded-lg mx-auto md:mx-0">
      <div class="max-w-md">
        <div class="mb-6 md:mb-8 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-medium text-white">AD/GM</h1>
          <p class="text-sm md:text-lg text-gray-300">Profile Setup</p>
        </div>

        <form class="space-y-5">
          <p class="text-white text-sm mb-2">Athletic Programs*</p>

          <div v-for="program in athleticPrograms" :key="program.id" class="flex items-center space-x-2">
            <input type="checkbox" :id="program.id" class="bg-white ptext-black" v-model="selectedPrograms"
              :value="program.label" />
            <label :for="program.id" class="text-white">{{
              program.label
              }}</label>
          </div>

          <!-- Button aligned to the right -->
          <div class="flex justify-end mt-6">
            <button class="bg-[#a4cd39] rounded-md text-white px-6 py-2" @click.prevent="handleNext">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import bgImage from "@/assets/background.png";
import manImage from "@/assets/Layer 787.png";
import logoImage from "@/assets/logo_light-1.png";

export default {
  setup() {
    const router = useRouter();
    const athleticPrograms = ref([
      { id: "football", label: "Football" },
      { id: "basketball", label: "Basketball" },
      { id: "baseball", label: "Baseball" },
      { id: "track-field", label: "Track & Field" },
    ]);

    const selectedPrograms = ref([]);

    const handleNext = () => {
      router.push("/ad-profile-setup");
    };

    return {
      athleticPrograms,
      selectedPrograms,
      handleNext,
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
</style>
