<template>
  <div class="min-h-screen text-white" style="background-color: #151616">
    <Header :bgColor="headerBackgroundColor" />

    <Sidebar :bgColor="sidebarBackgroundColor" />

    <!-- Main Content -->
    <div>
      <div style="background-color: #292929; padding: 130px 0 10px 0">
        <div class="mb-8 text-center">
          <h1 class="mb-4" style="font-size: 40px">
            Edge3 Athlete Intelligence Ratings - Week 4 Ratings
          </h1>
          <p class="max-w-lg mx-auto mb-6" style="font-size: 16px">
            Check out all the Edge3 Athlete Intelligence Ratings! Think any
            players need a Ratings boost? Call the Ratings Hotline at +1
            555-555-5555 and let us know your thoughts!
          </p>
          <div
            class="flex items-center border border-gray-600 rounded-full overflow-hidden w-full max-w-md mx-auto"
            style="background-color: #151516"
          >
            <input
              v-model="searchQuery"
              @input="fetchPlayers"
              type="text"
              placeholder="Search Player"
              class="w-full py-2 px-4 rounded-full outline-none text-sm"
              style="background-color: #151516; font-size: 14px"
            />
            <button
              class="relative p-2 rounded-full ml-2 m-1 bg-gray-700 w-10 h-10 flex items-center justify-center"
              @click="fetchPlayers"
            >
              <div
                class="w-6 h-6 rounded-full"
                style="border: 2px solid #4b4b4b"
              ></div>
            </button>
          </div>
        </div>

        <!-- Search and Filters -->
        <div
          class="flex items-center justify-between mb-6 p-2"
          style="padding-left: 100px"
        >
          <div class="flex items-center w-1/2 space-x-4">
            <div style="font-size: 14px">
              Showing {{ players.length }} Results
            </div>
            <div class="w-1 h-10 bg-gray-700 rounded mx-3"></div>

            <!-- Filter by Rating -->

            <div
              class="relative rounded-lg px-2 py-1 border rounded-md w-40"
              style="background-color: #292929; border: 2px solid #4b4b4b"
            >
              <label
                for="season-select"
                class="block font-medium"
                style="font-size: 10px"
              >
                Filter by Rating
              </label>
              <div class="relative">
                <select
                  id="rating-select"
                  v-model="selectedRiskTier"
                  class="w-full rounded-lg py-1 appearance-none pr-10 text-white"
                  style="background-color: #292929; font-size: 16px"
                  @change="fetchPlayers"
                >
                  <option value="">All Risks</option>
                  <option value="Green">Green</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Red">Red</option>
                </select>

                <!-- Custom SVG Icon -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="relative rounded-lg px-2 py-1 border rounded-md w-40"
              style="background-color: #292929; border: 2px solid #4b4b4b"
            >
              <label
                for="season-select"
                class="block font-medium"
                style="font-size: 10px"
              >
                Filter by Season
              </label>
              <div class="relative">
                <select
                  id="season-select"
                  class="w-full rounded-lg py-1 appearance-none pr-10 text-white"
                  style="background-color: #292929; font-size: 16px"
                >
                  <option value="2024/25">2024/25</option>
                  <option value="2023/24">2023/24</option>
                </select>

                <!-- Custom SVG Icon -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="relative rounded-lg px-2 py-1 border rounded-md w-40"
              style="background-color: #292929; border: 2px solid #4b4b4b"
            >
              <label
                for="season-select"
                class="block font-medium"
                style="font-size: 10px"
              >
                Filter by Position
              </label>
              <div class="relative">
                <select
                  id="season-select"
                  class="w-full rounded-lg py-1 appearance-none pr-10 text-white"
                  style="background-color: #292929; font-size: 16px"
                >
                  <option value="All">All</option>
                </select>

                <!-- Custom SVG Icon -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center max-w-sm justify-betweeen mb-3 mt-3"
        style="font-size: 16px; padding-left: 100px"
      >
        <div class="flex items-center mr-3">
          <span class="text-white mr-3">Filter</span>
          <div class="w-4 h-4 bg-white rounded"></div>
        </div>
        <div class="flex items-center mr-3">
          <span class="text-white mr-3">Position</span>
          <div class="w-4 h-4 bg-white rounded mt-1"></div>
        </div>
        <div class="flex items-center">
          <span class="text-white mr-2">Rating</span>
          <!-- <div class="w-4 h-4 bg-white rounded mt-1"></div> -->
        </div>
      </div>

      <div
        class="flex items-center justify-between mb-4 overflow-x-auto scroll-container"
        style="
          font-size: 12px !important;
          white-space: nowrap;
          padding-left: 100px;
        "
      >
        <div
          class="bg-white rounded-full px-2 py-1 text-sm text-gray-700 text-xs flex items-center mr-2"
          style="height: 32px"
        >
          Week 4 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 3 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 2 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 1 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
          style="background-color: #3b3c3c; height: 32px"
        >
          Season up-to-date
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 4 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 3 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 2 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Week 1 Ratings
        </div>
        <div
          class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center mr-2"
          style="background-color: #3b3c3c; height: 32px"
        >
          Season up-to-date
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="text-center py-8">Loading...</div>

      <!-- Players Table -->
      <div
        v-if="!isLoading"
        class="overflow-x-auto mt-16"
        style="padding-left: 100px; padding-right: 30px"
      >
        <template v-if="players.length > 0">
          <table class="w-full">
            <thead>
              <tr
                class="text-left text-sm table-row-spacing"
                style="
                  background-color: #1e1f1f;
                  border-bottom: 2px #4b4b4b;
                  background-clip: padding-box;
                  font-size: 16px;
                  font-weight: 300 !important;
                "
              >
                <th class="py-3 px-2" style="font-weight: 300">RATING</th>

                <th class="py-3 px-2" style="font-weight: 300">PLAYER</th>
                <th class="py-3 px-2" style="font-weight: 300">POS</th>
                <th class="py-3 px-2" style="font-weight: 300">TEAM</th>
                <th class="py-3 px-2" style="font-weight: 300">Contribution</th>

                <th class="py-3 px-2" style="font-weight: 300">Height</th>
                <th class="py-3 px-2" style="font-weight: 300">Weight</th>
                <th class="py-3 px-2" style="font-weight: 300">Rank</th>
                <th class="py-3 px-2" style="font-weight: 300">School Year</th>
                <th class="py-3 px-2" style="font-weight: 300">Gender</th>

                <th class="py-3 px-2" style="font-weight: 300">Risk Tier</th>
              </tr>
            </thead>
            <tbody class="border border-gray-700">
              <tr
                v-for="(player, index) in filteredPlayers"
                :key="index"
                @click="goToPlayerProfile(player.athlete_id)"
                class="cursor-pointer"
                style="
                  background-color: #000;
                  border: 2px solid #4b4b4b;
                  padding: 0 5px;
                  font-size: 14px;
                "
              >
                <td class="px-1" style="width: 20px">
                  {{ player.star_rating }}
                </td>

                <td class="px-2 max-w-[120px]" style="padding: 6px">
                  <div class="flex items-center gap-2">
                    <div
                      class="bg-gray-700 rounded"
                      style="
                        width: 48px;
                        height: 48px;
                        background-color: #393939;
                      "
                    ></div>
                    {{ player.first_name }} {{ player.last_name }}
                  </div>
                </td>
                <td class="px-2" style="width: 50px">
                  <div
                    class="mx-1 p-1 text-center rounded-lg"
                    style="background-color: #393939"
                  >
                    {{ player.position_code }}
                  </div>
                </td>
                <td class="px-2 max-w-[90px]">
                  <div class="flex items-center flex-nowrap gap-2">
                    <!-- White square -->
                    <img
                      src="../assets/images/team.png"
                      alt="avatar"
                      style="height: 20px; width: 20px; border-radius: 50%"
                    />
                    <span
                      :title="player.school_name"
                      class="max-w-[70px]"
                      style="
                        text-overflow: ellipsis;
                        display: block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                      >{{ player.school_name }}</span
                    >
                  </div>
                </td>

                <td class="px-2 max-w-[80px]" style="padding: 6px">
                  <div
                    :class="[
                      'px-3  rounded',
                      getRiskBorderColor(player.risk_tier),
                    ]"
                    style="
                      text-align: center;
                      height: 50px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    {{ player.contribution }}
                  </div>
                </td>

                <td class="px-2">
                  {{ player.height }}
                </td>
                <td class="px-2">{{ player.weight }}</td>
                <td class="px-2">{{ player.player_rank }}</td>
                <td class="px-2">{{ player.school_year }}</td>

                <td class="px-2 max-w-[80px]" style="padding: 6px">
                  <div
                    :class="['px-3  rounded', getRiskClass(player.risk_tier)]"
                    style="
                      background-color: #323232;
                      text-align: center;
                      height: 50px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    {{ player.gender }}
                  </div>
                </td>

                <td class="px-2 max-w-[40px]">
                  <div class="relative" style="width: 100%; height: 62px">
                    <div
                      :class="[
                        'w-8 h-12 rounded-sm absolute',
                        getRiskClass(player.risk_tier),
                      ]"
                      style="right: -2px; height: 62px"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </template>

        <p v-else class="text-center text-gray-400 py-8">No Data Found</p>

        <!-- Pagination -->
        <div class="flex justify-center items-center my-6">
          <button
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-2 mx-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            Previous
          </button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 mx-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import { ref, computed, onMounted } from "vue";
import apiClient from "@/services/axiosInstance";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const players = ref([]);
const selectedRiskTier = ref("");
const isLoading = ref(false);
const currentPage = ref(1);
const totalPages = ref(1);
const router = useRouter();

const fetchPlayers = async (page = 1) => {
  isLoading.value = true;
  try {
    const filters = {
      player_name: searchQuery.value || null,
      player_position: null,
      min_height: null,
      max_height: null,
      min_weight: null,
      max_weight: null,
      school_year: null,
      star_rating: null,
      player_rank: null,
      perPage: 10,
      page,
    };

    if (selectedRiskTier.value) {
      filters.risk_tier = selectedRiskTier.value;
    }

    const response = await apiClient.post("/athlete/search", filters);
    if (response.data.status === "success") {
      players.value = response.data.data.data;
      currentPage.value = response.data.data.current_page;
      totalPages.value = response.data.data.last_page;
    } else {
      console.error("Failed to fetch players:", response.data.message);
    }
  } catch (error) {
    console.error("Error fetching players:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPlayers();
});

// Helper method to change the current page
const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    fetchPlayers(page);
  }
};

// Helper method to get CSS class for risk tier
const getRiskClass = (riskTier) => {
  const classes = {
    Green: "bg-green-500",
    Yellow: "bg-yellow-500",
    Red: "bg-red-500",
  };
  return classes[riskTier] || "bg-gray-500";
};

const getRiskBorderColor = (riskTier) => {
  const classes = {
    Green: "border border-green-500",
    Yellow: "border border-yellow-500",
    Red: "border border-red-500",
  };
  return classes[riskTier];
};

const goToPlayerProfile = (playerId) => {
  router.push(`/player-selection/${playerId}`);
};

// Computed property for filtered players
const filteredPlayers = computed(() => {
  if (searchQuery.value) {
    return players.value.filter((player) =>
      `${player.first_name} ${player.last_name}`
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    );
  }
  return players.value;
});

const headerBackgroundColor = ref("#151616");
const sidebarBackgroundColor = ref("#000");
</script>

<style scoped>
.scroll-container {
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
