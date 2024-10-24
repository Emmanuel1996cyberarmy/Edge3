<template>
  <div class="min-h-screen text-white" style="background-color: #151616">
    <Header
      :bgColor="headerBackgroundColor"
      :userAvatar="user.avatar"
      :userName="user.name"
      :userRole="user.role"
      :isRatingsPage="true"
    />

    <Sidebar :bgColor="sidebarBackgroundColor" />
    <!-- Header -->
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
              type="text"
              placeholder="Search Player"
              class="w-full py-2 px-4 rounded-full outline-none text-sm"
              style="background-color: #151516; font-size: 14px"
            />
            <button
              class="relative p-2 rounded-full ml-2 m-1 bg-gray-700 w-10 h-10 flex items-center justify-center"
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
          <!-- Left side: Filter Options and Reset Filters -->
          <div class="flex items-center w-1/2 space-x-4">
            <div style="font-size: 14px">Showing 1135 Results</div>
            <!-- Vertical Line -->
            <div class="w-1 h-10 bg-gray-700 rounded mx-3"></div>
            <!-- filter by season -->
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
              <select
                id="season-select"
                class="w-full rounded-lg py-1"
                style="background-color: #292929; font-size: 16px"
              >
                <option value="2024/25">2024/25</option>
                <option value="2023/24">2023/24</option>
              </select>
            </div>

            <!-- Filter by Rating -->
            <div
              class="relative rounded-lg px-2 py-1 rounded-md w-40"
              style="background-color: #292929; border: 2px solid #4b4b4b"
            >
              <label
                for="rating-select"
                class="block text-xs font-medium"
                style="font-size: 10px"
              >
                Filter by Rating
              </label>
              <select
                id="rating-select"
                class="w-full rounded-lg py-1"
                style="background-color: #292929; font-size: 16px"
              >
                <option value="Green Risk">Green Risk</option>
                <option value="Yellow Risk">Yellow Risk</option>
                <option value="Red Risk">Red Risk</option>
              </select>
            </div>
          </div>

          <!-- Right side: Search Input -->
          <div class="flex items-center w-1/2 justify-end">
            <!-- Reset Filters -->
            <div class="flex items-center pr-20">
              <div class="w-6 h-6 bg-white rounded-md mr-2"></div>
              <span class="uppercase text-xs text-white" style="font-size: 11px"
                >Reset Filters</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Position Filters -->
      <div class="mb-8" style="padding-left: 100px; padding-top: 20px">
        <div class="mb-3" style="font-size: 14px">Players</div>
        <div class="flex gap-2 flex-wrap">
          <button
            @click="setActive('all')"
            :class="[
              'rounded-full flex justify-center items-center',
              activeButton === 'all'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white',
            ]"
            style="font-size: 11px; padding: 5px 10px; width: 60px"
          >
            All
          </button>
          <button
            @click="setActive('offense')"
            :class="[
              'rounded-full',
              activeButton === 'offense'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white',
            ]"
            style="padding: 5px 10px"
          >
            Offense
          </button>
          <button
            @click="setActive('defense')"
            :class="[
              'rounded-full',
              activeButton === 'defense'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white',
            ]"
            style="padding: 5px 10px"
          >
            Defense
          </button>
        </div>
        <div class="flex gap-2 mt-4 flex-wrap">
          <button
            v-for="position in positions"
            :key="position"
            class="px-3 py-1 rounded-full text-xs"
            style="
              background-color: #151616;
              min-width: 64px;
              padding: 5px 10px;
              border: 2px solid #4b4b4b;
            "
          >
            {{ position }}
          </button>
        </div>
      </div>
      <!-- Players Table -->
      <div
        class="overflow-x-auto mt-16"
        style="padding-left: 100px; padding-right: 70px"
      >
        <table class="w-full">
          <!-- Add table-auto and border-collapse -->
          <thead>
            <tr
              class="text-left text-sm table-row-spacing"
              style="
                background-color: #1e1f1f;
                border-bottom: 2px #4b4b4b;
                background-clip: padding-box;
                font-size: 14px;
                font-weight: 100;
              "
            >
              <th class="py-3 px-2">RATING</th>

              <th class="py-3 px-2">PLAYER</th>
              <th class="py-3 px-2">POS</th>
              <th class="py-3 px-2">TEAM</th>
              <th class="py-3 px-2">JER</th>
              <th class="py-3 px-2" style="text-align: center">OVR</th>
              <th class="py-3 px-2" style="text-align: center">SPD</th>
              <th class="py-3 px-2" style="text-align: center">STR</th>
              <th class="py-3 px-2" style="text-align: center">AGI</th>
              <th class="py-3 px-2" style="text-align: center">COO</th>
              <th class="py-3 px-2" style="text-align: center">INJ</th>
              <th class="py-3 px-2" style="text-align: center">AWR</th>
              <th class="py-3 px-2" style="text-align: center"></th>
            </tr>
          </thead>
          <tbody class="border border-gray-700">
            <tr
              v-for="(player, index) in players"
              :key="index"
              style="
                background-color: #000;
                border: 2px solid #4b4b4b;
                padding: 0 5px;
                font-size: 16px;
              "
            >
              <td class="px-1" style="width: 20px">{{ player.rating }}</td>
              <!-- Add padding -->
              <td class="px-2 max-w-[80px]">
                <!-- Adjust max-width if needed -->
                <div class="flex items-center gap-2">
                  <div
                    class="bg-gray-700 rounded"
                    style="width: 48px; height: 48px; background-color: #393939"
                  ></div>
                  {{ player.name }}
                </div>
              </td>
              <td class="px-2" style="width: 50px">
                <div
                  class="mx-1 p-1 text-center rounded-lg"
                  style="background-color: #393939"
                >
                  <!-- Adjust padding and margin -->
                  {{ player.position }}
                </div>
              </td>
              <td class="px-2 max-w-[80px]">
                <!-- Adjust max-width if needed -->
                <div class="flex items-center gap-2">
                  <div
                    class="bg-white rounded-full"
                    style="width: 40px; height: 40px"
                  ></div>
                  {{ player.team }}
                </div>
              </td>
              <td class="px-2">#--</td>
              <td class="px-2" style="padding: 6px">
                <div
                  :class="['px-3  rounded', getRiskClass(player.risk)]"
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  --
                </div>
              </td>
              <td class="px-0" style="background-clip: content-box">
                <div
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-top-left-radius: 5%;
                    border-bottom-left-radius: 5%;
                  "
                >
                  --
                </div>
              </td>
              <td class="px-0" style="background-clip: content-box">
                <div
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  --
                </div>
              </td>
              <td class="px-0" style="background-clip: content-box">
                <div
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  --
                </div>
              </td>
              <td class="px-0" style="background-clip: content-box">
                <div
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  --
                </div>
              </td>
              <td class="px-0" style="background-clip: content-box">
                <div
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  --
                </div>
              </td>
              <td class="px-0" style="background-clip: content-box">
                <div
                  style="
                    background-color: #323232;
                    text-align: center;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-top-right-radius: 5%;
                    border-bottom-right-radius: 5%;
                  "
                >
                  --
                </div>
              </td>

              <td class="pl-2">
                <div class="relative" style="width: 100%; height: 62px">
                  <div
                    :class="[
                      'w-8 h-12 rounded-sm absolute',
                      getRiskColor(player.risk),
                    ]"
                    style="right: -2px; height: 62px"
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";

const activeButton = ref("all");

const setActive = (button) => {
  activeButton.value = button;
  return {
    activeButton,
    setActive,
  };
};

const positions = [
  "QB",
  "HB",
  "FB",
  "WR",
  "TE",
  "LT",
  "LG",
  "C",
  "RG",
  "RT",
  "LE",
  "RE",
  "DT",
  "LOLB",
  "MLB",
  "ROLB",
  "CB",
  "FS",
  "SS",
];

const players = ref([
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "green",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "green",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "green",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "yellow",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "yellow",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "yellow",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "red",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "red",
    team: "Team A",
  },
  {
    rating: 11,
    name: "Name of Player",
    position: "HB",
    risk: "red",
    team: "Team A",
  },
]);

const user = ref({
  avatar: "src/assets/images/avatar.jpg",
  name: "John Doe",
  role: "Team Manager",
});

const getRiskClass = (risk) => {
  const classes = {
    green: "bg-green-900/20 border border-green-500",
    yellow: "bg-yellow-900/20 border border-yellow-500",
    red: "bg-red-900/20 border border-red-500",
  };
  return classes[risk];
};

const getRiskColor = (risk) => {
  const colors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };
  return colors[risk];
};

const headerBackgroundColor = ref("#151616");
const sidebarBackgroundColor = ref("#000");
</script>

<style scoped>
.content-container {
  padding-left: 90px; /* Ensure content starts after the sidebar width */
  padding-top: 70px; /* Ensure content starts below the header height */
}
.activeColor {
  background-color: white;
  color: black;
}
</style>
