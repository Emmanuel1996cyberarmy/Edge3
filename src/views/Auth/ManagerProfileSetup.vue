<template>
  <div class="min-h-screen flex items-center justify-between bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundColor: '#111' }">
    <!-- Left side with the image of the man and logo (hidden on small screens) -->
    <div class="hidden md:flex items-center justify-center w-1/2 relative">
      <img :src="manImage" alt="Man" class="rounded-lg max-h-full max-w-full" />
      <img :src="logoImage" alt="E3 Athlete Intelligence Logo" class="absolute z-10 h-32"
        style="top: 60%; left: 65%; transform: translate(-50%, -50%)" />
    </div>

    <!-- Right side with the form -->
    <div class="w-full md:w-1/2 p-8 lg:pt-0 lg:pl-0 lg:-ml-20 rounded-lg max-w-md mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-medium text-white text-center md:text-left">
          Manager Profile Setup
        </h1>
      </div>

      <form @submit.prevent="submitForm">
        <!-- Email Input -->
        <div class="mb-4">
          <label class="text-white mb-2">Email Address</label>
          <input v-model="form.email" type="email" placeholder="Enter your email"
            class="form-input rounded-md p-2 text-black placeholder-gray-400 bg-white w-full" />
          <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
        </div>

        <!-- Player Type Selection -->
        <div class="mb-4">
          <label class="text-white mb-2">Player Type</label>
          <select v-model="form.playerType" class="text-black rounded-md p-2 bg-white w-full mb-2">
            <option value="" disabled>Select a player type</option>
            <option value="Cannabis">Cannabis</option>
            <option value="CBD">CBD</option>
            <option value="Others">Others</option>
          </select>
          <p v-if="errors.playerType" class="text-red-500">
            {{ errors.playerType }}
          </p>
        </div>

        <!-- Budget Input -->
        <div class="mb-4">
          <label class="text-white mb-2">Budget</label>
          <input v-model="form.budget" type="text" placeholder="$400.00"
            class="text-black rounded-md p-2 bg-white w-full mb-2" />
          <p v-if="errors.budget" class="text-red-500">{{ errors.budget }}</p>
        </div>

        <!-- Review Offers Radio -->
        <div class="mb-4">
          <label class="text-white mb-2">Review Recruit Offers</label>
          <div class="flex space-x-6">
            <label class="text-white">
              <input type="radio" value="yes" v-model="form.reviewOffers" class="mr-2" />
              Yes
            </label>
            <label class="text-white">
              <input type="radio" value="no" v-model="form.reviewOffers" class="mr-2" />
              No
            </label>
          </div>
          <p v-if="errors.reviewOffers" class="text-red-500">
            {{ errors.reviewOffers }}
          </p>
        </div>

        <!-- Approve All Offers Radio -->
        <div class="mb-6">
          <label class="text-white mb-2">Approve All Offers</label>
          <div class="flex space-x-6">
            <label class="text-white">
              <input type="radio" value="yes" v-model="form.approveOffers" class="mr-2" />
              Yes
            </label>
            <label class="text-white">
              <input type="radio" value="no" v-model="form.approveOffers" class="mr-2" />
              No
            </label>
          </div>
          <p v-if="errors.approveOffers" class="text-red-500">
            {{ errors.approveOffers }}
          </p>
        </div>

        <!-- Submit Button -->
        <div class="mb-4">
          <button type="submit" class="w-full rounded-md rounded-md bg-[#a4cd39] text-white py-2">
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
import bgImage from "@/assets/background.png"; // Import background image
import manImage from "@/assets/Layer 787.png"; // Import man image
import logoImage from "@/assets/logo_light-1.png"; // Import logo image

export default {
  name: "ManagerProfileSetup",
  setup() {
    const router = useRouter();

    const form = ref({
      email: "",
      playerType: "",
      budget: "",
      reviewOffers: "no",
      approveOffers: "no",
    });

    const errors = ref({});

    const validateForm = () => {
      errors.value = {};
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!form.value.email) {
        errors.value.email = "Please enter your email";
      } else if (!emailPattern.test(form.value.email)) {
        errors.value.email = "Please enter a valid email address";
      }

      if (!form.value.playerType)
        errors.value.playerType = "Please select player type";
      if (!form.value.budget) errors.value.budget = "Please enter a budget";
      if (!form.value.reviewOffers)
        errors.value.reviewOffers = "Please choose yes or no";
      if (!form.value.approveOffers)
        errors.value.approveOffers = "Please choose yes or no";
      return Object.keys(errors.value).length === 0;
    };

    const submitForm = () => {
      if (validateForm()) {
        console.log(form.value);
        router.push("/otp");
      }
    };

    return {
      form,
      errors,
      submitForm,
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
