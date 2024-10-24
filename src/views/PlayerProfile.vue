<template>
  <div class="text-white">
    <Header :bgColor="headerBackgroundColor" />

    <Sidebar :bgColor="sidebarBackgroundColor" />

    <div
      class="min-h-screen text-white p-8 background-image"
      style="background-color: #151616"
    >
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center min-h-screen">
        <div class="text-xl text-gray-300">Loading player data...</div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="flex justify-center items-center min-h-screen"
      >
        <div class="text-xl text-gray-300">
          Oops! Sorry, no player found with this ID.
        </div>
      </div>

      <!-- Content -->
      <div v-else>
        <!-- Navigation -->
        <div class="pt-24" style="margin-left: 100px">
          <div class="flex items-center justify-between">
            <div
              class="flex items-center border border-gray-600 rounded-full overflow-hidden w-full max-w-xs mb-8"
              style="background-color: #151516"
            >
              <input
                type="text"
                placeholder="Search Player"
                class="w-full py-2 px-4 rounded-full outline-none text-sm"
                style="background-color: #151516; font-size: 14px"
              />
              <button
                class="relative p-2 rounded-full ml-2 m-1 w-10 h-10 flex items-center justify-center"
                style="background-color: #353636"
              >
                <div
                  class="w-6 h-6 rounded-full"
                  style="background-color: #666767"
                ></div>
              </button>
            </div>
            <div>
              {{ player.first_name }} {{ player.last_name }} Edge3 Athlete
              Intelligence Player Ratings - Week 4
            </div>
          </div>
          <nav class="flex items-center mb-8" style="font-size: 16px">
            <div class="flex items-center space-x-4">
              <a href="#" class="text-gray-400">Home</a>
              <div class="w-6 h-6 bg-white rounded-md mr-2"></div>
              <span>{{ player.first_name }} {{ player.last_name }}</span>
            </div>
          </nav>
        </div>

        <!-- Rating Tabs -->
        <div
          class="flex space-x-2 mb-8"
          style="margin-left: 100px; font-size: 12px"
        >
          <button class="bg-white text-black px-4 py-2 rounded-full">
            Week 4 Ratings
          </button>
          <button
            class="px-4 py-2 rounded-full"
            style="background-color: #363737"
          >
            Week 3 Ratings
          </button>
          <button
            class="px-4 py-2 rounded-full"
            style="background-color: #363737"
          >
            Week 2 Ratings
          </button>
          <button
            class="px-4 py-2 rounded-full"
            style="background-color: #363737"
          >
            Week 1 Ratings
          </button>
          <button
            class="px-4 py-2 rounded-full"
            style="background-color: #363737"
          >
            Season up-to-date
          </button>
        </div>

        <!-- Player Content (rest of the template) -->
        <!-- Left Column - Player Info -->
        <div class="grid grid-cols-4 gap-8" style="margin-left: 100px">
          <div class="col-span-1 space-y-6">
            <!-- Player Card -->
            <div
              class="bg-gray-800 rounded-lg"
              style="
                max-width: 220px;
                background-color: #1e1f1f;
                border: 2px solid #4b4b4b;
                border-left: 10px solid #4b4b4b;
                padding: 12px 0 0 9px;
              "
            >
              <div class="flex items-start mb-1">
                <!-- Image div -->
                <div
                  class="mr-3 rounded-lg"
                  style="width: 128px; height: 128px; background-color: #fff"
                ></div>

                <!-- 99 OVR section -->
                <div class="flex flex-col justify-center items-center">
                  <div
                    style="
                      font-size: 32px;
                      line-height: 1.2;
                      margin-bottom: -5px;
                      margin-top: -5px;
                    "
                  >
                    {{ player.star_rating }}
                  </div>
                  <div class="ml-1" style="font-size: 12px">OVR</div>
                </div>
              </div>

              <!-- Player Name -->
              <div>
                <span class="mb-1" style="font-size: 14px">Week 4 Ratings</span>
                <h2 class="mb-0" style="font-size: 18px">
                  {{ player.first_name }}
                </h2>
                <h1 class="mt-0" style="font-size: 22px; line-height: 1.2">
                  {{ player.last_name }}
                </h1>
              </div>

              <!-- Flex container for Position -->
              <div class="flex justify-start space-x-2 mt-2 mb-5">
                <div
                  class="px-1 py-2 flex items-center rounded-lg"
                  style="background-color: #363737"
                >
                  {{ player.position_code }}
                </div>
              </div>
            </div>

            <!-- Player Details -->
            <div
              class="p-6 space-y-4 rounded-lg"
              style="
                max-width: 270px;
                background-color: #1e1f1f;
                border: 2px solid #4b4b4b;
              "
            >
              <div>
                <div class="text-gray-400 text-sm">Position</div>
                <div class="flex items-center space-x-2 mt-1">
                  <span
                    class="px-2 py-1 rounded-lg text-sm"
                    style="background-color: #363737"
                    >{{ player.position_code }}</span
                  >
                  <span>{{ player.position_code }}</span>
                </div>
              </div>

              <div>
                <div class="text-gray-400 text-sm">Team</div>
                <div>{{ player.school_name }}</div>
              </div>

              <div>
                <div class="text-gray-400 text-sm">Height</div>
                <div>{{ player.height }} cm</div>
              </div>

              <div>
                <div class="text-gray-400 text-sm">Weight</div>
                <div>{{ player.weight }} kg</div>
              </div>

              <div>
                <div class="text-gray-400 text-sm">Risk Tier</div>
                <div>{{ player.risk_tier_desc }}</div>
              </div>

              <div>
                <div class="text-gray-400 text-sm">Handedness</div>
                <div>Right</div>
              </div>
            </div>
          </div>

          <!-- Right Column - Stats Grid -->
          <div class="col-span-3">
            <div class="mb-4">
              <h2 class="mb-1" style="font-size: 16px">Week 4 Ratings</h2>
              <h2 class="mb-0" style="font-size: 24px">
                {{ player.first_name }}
              </h2>
              <h1 class="mt-0" style="font-size: 48px; line-height: 1">
                {{ player.last_name }}
              </h1>
            </div>
            <div
              class="rounded-lg p-6"
              style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
            >
              <!-- Stats Grid -->
              <div class="grid grid-cols-4 gap-x-6">
                <!-- Stats Columns -->
                <div
                  class="space-y-4"
                  v-for="stat in playerStats"
                  :key="stat.title"
                >
                  <h3 class="font-bold mb-4 text-white">{{ stat.title }}</h3>
                  <div class="space-y-1">
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-300">{{
                        stat.label
                      }}</span>
                      <span class="text-sm text-gray-300">{{
                        stat.value
                      }}</span>
                    </div>
                    <div class="relative w-full h-0.5 bg-gray-600">
                      <div
                        class="absolute top-0 left-0 h-0.5"
                        :style="{ width: stat.percentage + '%' }"
                        :class="stat.color"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Player Summary -->
            <div class="grid grid-cols-4 gap-6 mt-6">
              <div
                class="col-span-3 rounded-lg p-6"
                style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
              >
                <p class="text-lg mb-4">
                  {{ player.first_name }} {{ player.last_name }}'s overall
                  rating in Edge3 Athlete Intelligence is
                  {{ player.star_rating }}
                </p>
                <p class="text-gray-300 text-sm max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div
                class="rounded-lg p-6"
                style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
              >
                <div class="grid grid-cols-2 gap-6 text-gray-300">
                  <div class="text-xs">
                    <div>College</div>
                    <div>{{ player.school_name }}</div>
                  </div>
                  <div>
                    <div class="text-sm">Age</div>
                    <div>{{ playerAge }} years</div>
                  </div>
                  <div>
                    <div class="text-sm">Years Pro</div>
                    <div>{{ yearsPro }}</div>
                  </div>
                  <div>
                    <div class="text-sm">Jersey Number</div>
                    <div>--</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Similar Players Section -->
        <div class="mt-12" style="margin-left: 100px">
          <div class="max-w-[1000px]">
            <h2 class="text-xl font-bold mb-6">Similar Players</h2>
            <div
              class="flex justify-between max-w-1000px mx-auto p-4 space-x-4"
            >
              <div
                class="flex-1 p-4 bg-background rounded-lg"
                style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
              >
                <div class="flex items-center mb-3">
                  <div
                    class="px-1 py-2 flex items-center rounded-lg mr-3"
                    style="background-color: #363737"
                  >
                    {{ player.position_code }}
                  </div>
                  <h2 class="text-lg font-bold text-primary">
                    {{ player.position_code }} Position
                  </h2>
                </div>
                <!-- Similar player list -->
                <div class="flex flex-col space-y-2">
                  <!-- Players loop -->
                  <div
                    class="flex items-center justify-between"
                    v-for="similarPlayer in similarPlayers"
                    :key="similarPlayer.athlete_id"
                  >
                    <div class="flex items-center">
                      <div
                        class="bg-white rounded mr-3"
                        style="width: 40px; height: 40px"
                      ></div>
                      <span class="mr-6"
                        >{{ similarPlayer.first_name }}
                        {{ similarPlayer.last_name }}</span
                      >
                    </div>
                    <div class="text-right">
                      <div class="text-muted-foreground">OVR</div>
                      <div class="flex items-center justify-end">
                        <span class="text-green-500">↑1</span>
                        <span class="ml-1">{{
                          similarPlayer.star_rating
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mt-4">
                  <button
                    class="p-2 rounded-full"
                    style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
                  >
                    View All {{ player.position_code }}s
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; // To access the route and get the ID
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import apiClient from "@/services/axiosInstance"; // Assuming you already have axiosInstance set up

const headerBackgroundColor = ref("#151616");
const sidebarBackgroundColor = ref("#282829");

const route = useRoute();
const player = ref({});
const playerAge = ref(0);
const yearsPro = ref(0);
const playerStats = ref([]);
const similarPlayers = ref([]);
const loading = ref(true); // Added loading state
const error = ref(false); // Added error state

const fetchPlayerData = async (id) => {
  try {
    const response = await apiClient.get(`/athlete/${id}`);
    if (response.data && response.data.status === "success") {
      player.value = response.data.data;
      calculatePlayerAge();
      playerStats.value = [
        {
          title: "Contribution",
          label: "Contribution",
          value: player.value.contribution,
          percentage: player.value.contribution,
          color: "bg-green-500",
        },
      ];
      similarPlayers.value = [player.value, player.value]; // Mock similar players
    } else {
      throw new Error(response.data.message); // Trigger error if player not found
    }
  } catch (error) {
    console.error("Error fetching player data:", error);
    error.value = true; // Set error state to true
  } finally {
    loading.value = false; // Set loading to false after data is fetched
  }
};

const calculatePlayerAge = () => {
  const birthDate = new Date(player.value.date_of_birth);
  const today = new Date();
  playerAge.value = today.getFullYear() - birthDate.getFullYear();
  yearsPro.value = today.getFullYear() - Number(player.value.school_year);
};

// Fetch player data on mounted
onMounted(() => {
  const playerId = route.params.id; // Get player ID from the route
  fetchPlayerData(playerId);
});
</script>

<style scoped>
.background-image {
  background-image: url(../assets/images/mask.png);
  background-repeat: no-repeat;
}
</style>
