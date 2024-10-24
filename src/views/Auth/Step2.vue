<template>
  <div
    class="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center p-4 sm:p-6 md:p-10"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <img
      :src="logo"
      alt="E3 Athlete Intelligence Logo"
      class="w-48 sm:w-56 md:w-64 -mb-12"
    />
    <div
      class="flex flex-col -mt-6 md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-[-10px]"
    >
      <div
        class="relative group cursor-pointer flex-shrink-0 w-full sm:w-[400px] md:w-[380px] lg:w-[420px] xl:w-[450px] h-auto"
        style="margin-left: 0px; min-width: 350px"
        @click="handleRedirect('/ad-register')"
      >
        <div
          class="relative overflow-hidden w-full h-[700px] sm:h-[600px] md:h-[650px]"
        >
          <img
            :src="adImage"
            alt="AD/GM"
            class="w-full h-full object-contain"
          />
          <div
            class="absolute bottom-28 mb-4 lg:-mt-10 left-0 lg:-left-10 right-0 flex items-center justify-center"
            style="transform: translateX(-20px)"
          >
            <p
              class="text-white text-md shadow-xl uppercase font-medium p-4 py-0 lg:-mb-2 pl-0 lg:-ml-20 rounded"
            >
              AD/GM
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative group cursor-pointer flex-shrink-0 w-full sm:w-[400px] md:w-[380px] lg:w-[420px] xl:w-[450px] h-auto"
        style="margin-left: -165px; min-width: 350px"
        @click="handleRedirect('/signup')"
      >
        <div
          class="relative overflow-hidden w-full h-[700px] sm:h-[600px] md:h-[650px]"
        >
          <img
            :src="athleteImage"
            alt="Athlete"
            class="w-full h-full object-contain"
          />
          <div
            class="absolute bottom-28 mb-4 lg:-mt-10 left-0 lg:-left-10 right-0 flex items-center justify-center"
            style="transform: translateX(-20px)"
          >
            <p
              class="text-white text-md shadow-xl uppercase font-medium p-4 py-0 lg:-mb-2 pl-0 lg:-ml-20 rounded"
            >
              Athlete
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative group cursor-pointer flex-shrink-0 w-full sm:w-[400px] md:w-[380px] lg:w-[420px] xl:w-[450px] h-auto"
        style="margin-left: -165px; min-width: 350px"
        @click="handleRedirect('/signup')"
      >
        <div
          class="relative overflow-hidden w-full h-[700px] sm:h-[600px] md:h-[650px]"
        >
          <img
            :src="coachImage"
            alt="Coach"
            class="w-full h-full object-contain"
          />
          <div
            class="absolute bottom-28 mb-4 lg:-mt-10 left-0 lg:-left-10 right-0 flex items-center justify-center"
            style="transform: translateX(-20px)"
          >
            <p
              class="text-white text-md shadow-xl uppercase font-medium p-4 py-0 lg:-mb-2 pl-0 lg:-ml-20 rounded"
            >
              Coach
            </p>
          </div>
        </div>
      </div>
    </div>

    <p class="text-white text-xl font-medium -mt-20 sm:-mt-16">
      Select your role.
    </p>
  </div>
</template>

<script>
import bgImage from "@/assets/background.png";
import logo from "@/assets/logo_light-1.png";
import adImage from "@/assets/first.png";
import athleteImage from "@/assets/second2.png";
import coachImage from "@/assets/third2.png";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      bgImage,
      logo,
      adImage,
      athleteImage,
      coachImage,
    };
  },
  methods: {
    handleRedirect(defaultRoute) {
      const token = Cookies.get("authToken");
      if (token) {
        this.$router.push({ name: " Dashboard" });
      } else {
        this.$router.push(defaultRoute);
      }
    },
  },
};
</script>

<style scoped></style>
