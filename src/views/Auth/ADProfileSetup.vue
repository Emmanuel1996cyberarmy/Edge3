<template>
  <div class="min-h-screen flex items-center justify-between bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }">
    <!-- Left side with the image of the man and the overlayed logo - hidden on smaller screens -->
    <div class="hidden md:flex items-center justify-center w-1/2 relative">
      <img :src="manImage" alt="Man" class="rounded-lg max-h-full max-w-full" />
      <img :src="logoImage" alt="E3 Athlete Intelligence Logo" class="absolute z-10 h-32"
        style="top: 60%; left: 65%; transform: translate(-50%, -50%)" />
    </div>

    <!-- Right side with the form -->
    <div class="z-10 w-full md:w-1/2 lg:pt-0 p-8 lg:pl-0 lg:-ml-20 rounded-lg max-w-md mx-auto">
      <div class="mb-8 text-center md:text-left">
        <h1 class="text-4xl font-medium text-white">AD/GM</h1>
        <p class="text-lg text-gray-300">Profile Setup</p>
      </div>

      <form class="space-y-5">
        <div class="mb-4">
          <p class="text-white mb-2">Collegiate or Highschool?</p>
          <select v-model="selectedLevel" class="w-full h-10 bg-white px-2 rounded-md text-black">
            <option value="">Select Level</option>
            <option value="Collegiate">Collegiate</option>
            <option value="Highschool">Highschool</option>
          </select>
        </div>

        <div class="mb-4">
          <p class="text-white mb-2">Conference?</p>
          <select v-model="selectedConference" class="w-full h-10 rounded-md px-2 bg-white text-black">
            <option value="">Select Conference</option>
            <option value="Conference1">Conference 1</option>
            <option value="Conference2">Conference 2</option>
          </select>
        </div>

        <div class="mb-4">
          <p class="text-white mb-2">University?</p>
          <select v-model="selectedUniversity" class="w-full h-10 bg-white px-2 rounded-md text-black">
            <option value="">Select University</option>
            <option value="University1">University 1</option>
            <option value="University2">University 2</option>
          </select>
        </div>

        <!-- Button aligned to the right -->
        <div class="flex justify-end mt-6">
          <button class="bg-[#a4cd39] rounded-md text-white px-6 py-2" @click.prevent="handleNextClick">
            Next
          </button>
        </div>
      </form>
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
    const selectedLevel = ref("");
    const selectedConference = ref("");
    const selectedUniversity = ref("");

    const handleNextClick = () => {
      // Perform any validation or save data before navigating
      router.push("/adf-profile");
    };

    return {
      selectedLevel,
      selectedConference,
      selectedUniversity,
      handleNextClick,
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
