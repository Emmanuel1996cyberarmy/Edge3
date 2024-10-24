<template>
  <div
    class="min-h-screen flex items-center justify-between bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }"
  >
    <!-- Left side with the man image and the overlayed logo (hidden on small screens) -->
    <div class="hidden md:flex items-center justify-center w-1/2 relative">
      <img :src="manImage" alt="Man" class="rounded-lg max-h-full max-w-full" />
      <img
        :src="logoImage"
        alt="E3 Athlete Intelligence Logo"
        class="absolute z-10 h-32"
        style="top: 60%; left: 65%; transform: translate(-50%, -50%)"
      />
    </div>

    <!-- Right side with the form -->
    <div
      class="w-full md:w-1/2 p-8 lg:pl-0 lg:pt-0 lg:-ml-20 rounded-lg mx-auto md:mx-0"
    >
      <div class="max-w-md">
        <div class="mb-6 text-center md:text-left">
          <h1 class="text-2xl font-medium text-white">
            AD/GM <span class="text-red-500">🏈</span>
          </h1>
          <p class="text-md rounded-md text-gray-300">Football Profile Setup</p>
        </div>

        <form class="space-y-1">
          <div class="mb-2">
            <label for="annualBudget" class="block text-sm text-white"
              >Annual Budget</label
            >
            <input
              v-model="form.annualBudget"
              type="text"
              id="annualBudget"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-3/4"
            />
          </div>
          <div class="mb-2">
            <label for="numberAthletes" class="block text-sm text-white"
              >Number of Athletes</label
            >
            <input
              v-model="form.numberAthletes"
              type="text"
              id="numberAthletes"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-1/4"
            />
          </div>
          <div class="mb-2">
            <label for="numberCoaches" class="block text-sm text-white"
              >Number of Coaches</label
            >
            <input
              v-model="form.numberCoaches"
              type="text"
              id="numberCoaches"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-1/4"
            />
          </div>
          <div class="mb-2">
            <label for="coachingSalaryCap" class="block text-sm text-white"
              >Coaching Staff Salary Cap</label
            >
            <input
              v-model="form.coachingSalaryCap"
              type="text"
              id="coachingSalaryCap"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-1/2"
            />
          </div>
          <div class="mb-2">
            <label for="teamSalaryCap" class="block text-sm text-white"
              >Team Salary Cap</label
            >
            <input
              v-model="form.teamSalaryCap"
              type="text"
              id="teamSalaryCap"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-1/2"
            />
          </div>
          <div class="mb-2">
            <label for="nilGross" class="block text-sm text-white"
              >NIL Gross</label
            >
            <input
              v-model="form.nilGross"
              type="text"
              id="nilGross"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-1/2"
            />
          </div>
          <div class="mb-2">
            <label for="schoolGross" class="block text-sm text-white"
              >School Gross</label
            >
            <input
              v-model="form.schoolGross"
              type="text"
              id="schoolGross"
              class="text-black p-2 rounded-md placeholder-gray-400 bg-white w-full md:w-1/2"
            />
          </div>
          <div class="flex justify-end mt-4">
            <button
              class="bg-[#a4cd39] rounded-md text-white px-6 py-2"
              @click.prevent="handleNextClick"
            >
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
  name: "ADFProfile",
  setup() {
    const router = useRouter();
    const form = ref({
      annualBudget: "",
      numberAthletes: "",
      numberCoaches: "",
      coachingSalaryCap: "",
      teamSalaryCap: "",
      nilGross: "",
      schoolGross: "",
    });

    const handleNextClick = () => {
      router.push("/manager-onboarding");
    };

    return {
      form,
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

.fixed {
  position: fixed;
}
</style>
