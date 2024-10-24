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
          Football Profile Setup
        </h1>
      </div>

      <form @submit.prevent="submitForm">
        <div class="mb-6">
          <h2 class="text-white mb-2">Recruiting Budget</h2>

          <!-- Players Budget Field -->
          <label class="text-white mb-2">Players</label>
          <input v-model="form.playersBudget" type="text" placeholder="Enter players budget"
            class="text-black rounded-md p-2 placeholder-gray-400 bg-white w-full mb-4" />
          <p v-if="errors.playersBudget" class="text-red-500">
            {{ errors.playersBudget }}
          </p>

          <!-- Review Prospects Field -->
          <div class="flex items-center justify-between mb-4">
            <label class="text-white">Review Recruit Prospects</label>
            <div class="flex space-x-6">
              <label class="text-white">
                <input type="radio" value="yes" v-model="form.reviewProspects" class="mr-2" />
                Yes
              </label>
              <label class="text-white">
                <input type="radio" value="no" v-model="form.reviewProspects" class="mr-2" />
                No
              </label>
            </div>
          </div>

          <!-- Approve All Offers Field -->
          <div class="flex items-center justify-between mb-6">
            <label class="text-white">Approve All Offers</label>
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
          </div>

          <!-- Coaches Budget Field -->
          <label class="text-white mb-2">Coaches</label>
          <input v-model="form.coachesBudget" type="text" placeholder="Enter coaches budget"
            class="text-black rounded-md p-2 placeholder-gray-400 bg-white w-full mb-4" />
          <p v-if="errors.coachesBudget" class="text-red-500">
            {{ errors.coachesBudget }}
          </p>
        </div>

        <!-- Submit Button -->
        <div class="mb-4">
          <button type="submit" class="w-full rounded-md bg-[#a4cd39] text-white py-2">
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
import manImage from "@/assets/Layer 787.png"; // Man image import
import logoImage from "@/assets/logo_light-1.png"; // Logo image import

export default {
  name: "ManagerOnboarding",
  setup() {
    const router = useRouter();

    // Form state
    const form = ref({
      playersBudget: "",
      coachesBudget: "",
      reviewProspects: "no",
      approveOffers: "no",
    });

    // Error state
    const errors = ref({});

    // Validation function
    const validateForm = () => {
      errors.value = {};
      if (!form.value.playersBudget)
        errors.value.playersBudget = "Please enter players budget";
      if (!form.value.coachesBudget)
        errors.value.coachesBudget = "Please enter coaches budget";
      if (!form.value.reviewProspects)
        errors.value.reviewProspects = "Please select an option";
      if (!form.value.approveOffers)
        errors.value.approveOffers = "Please select an option";
      return Object.keys(errors.value).length === 0;
    };

    // Form submission
    const submitForm = () => {
      if (validateForm()) {
        console.log(form.value);
        router.push("/manager-setup"); // Navigate to the next page
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

.fixed {
  position: fixed;
}
</style>
