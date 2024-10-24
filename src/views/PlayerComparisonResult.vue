<template>
  <div class="text-white">
    <Header :bgColor="headerBackgroundColor" />
    <Sidebar :bgColor="sidebarBackgroundColor" />

    <div class="min-h-screen" style="background-color: #292929">
      <div class="pt-16">
        <!-- Header -->
        <div
          class="text-center flex flex-col items-center bg-gray-900 p-8"
          style="padding-top: 50px; margin-bottom: 65px"
        >
          <div
            class="flex items-center gap-2 text-gray-400 text-sm mb-2 bg-gray-500 max-w-[200px] rounded-full px-2 py-1"
          >
            <span
              class="inline-block w-5 h-4 bg-green-500/20 text-gray-400"
            ></span>
            Player Compare Page
          </div>
          <h1
            class="text-4xl text-gray-200 font-semibold mb-4 text-gray-300 mb-7"
          >
            Player Comparison
          </h1>
          <p class="text-gray-400">
            In-Depth NCAA Player Comparison: Comprehensive Stats, Performance
            Metrics, and Football Analysis
          </p>
        </div>

        <!-- Comparison Container -->
        <div class="max-w-2xl mx-auto pb-24">
          <!-- Player Selection Bar -->
          <div
            class="bg-black/50 p-4 rounded-t-lg border-b border-gray-700"
            style="
              background-color: black;
              padding: 15px;
              border-top: 2px solid greenyellow;
              border-bottom: 2px solid lightslategray;
              border-left: 2px solid lightslategray;
              margin-top: 20px;
            "
          >
            <p class="text-center text-gray-300">Select players to compare</p>
          </div>

          <!-- Player Cards -->
          <div class="py-4 mb-4" style="background-color: #393939">
            <div class="flex items-center justify-center w-full">
              <!-- Player 1 -->
              <div class="space-y-4" style="width: 250px; height: 250px">
                <div
                  class="flex justify-between items-center bg-gray-600 rounded py-4"
                >
                  <div class="flex flex-col relative pl-2">
                    <div style="margin-top: -45px">
                      <p class="text-gray-400">Firstname</p>
                      <p class="text-gray-300 text-xl">Lastname</p>
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 bg-gray-300 rounded-md"></div>
                        <span class="text-gray-300 text-sm rounded">WR</span>
                      </div>
                    </div>
                    <div style="position: absolute; top: 60px; bottom: 0">
                      POS
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div
                      class="bg-gray-700 rounded mr-1"
                      style="width: 80px; height: 100px"
                    ></div>
                    <div
                      class="w-6 h-6 bg-gray-300 rounded-md mr-1"
                      style="margin-top: -5px"
                    ></div>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-green-500">
                    <span
                      class="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-xs"
                      >+</span
                    >
                    <span class="text-sm">Show Season Range</span>
                  </div>
                  <div class="relative bg-gray-600 rounded-lg py-1 px-2">
                    <label class="text-sm text-gray-400"
                      >Filter by season</label
                    >
                    <select
                      class="w-full pb-2 pr-10 rounded bg-gray-600 appearance-none text-white"
                    >
                      <option>All Seasons</option>
                    </select>
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

              <!-- Vs Section -->
              <div
                class="px-5 flex items-center justify-center"
                style="height: 100px; margin-top: -50px"
              >
                <div class="text-center text-white text-2xl">Vs</div>
              </div>

              <!-- Player 2 -->
              <div class="space-y-4" style="width: 250px; height: 250px">
                <div
                  class="flex justify-between items-center bg-gray-600 rounded p-4"
                >
                  <div class="flex items-start">
                    <div
                      class="w-6 h-6 bg-gray-300 rounded-md mr-1"
                      style="margin-top: -5px"
                    ></div>
                    <div
                      class="bg-gray-700 rounded mr-1"
                      style="width: 80px; height: 100px"
                    ></div>
                  </div>
                  <div
                    class="flex flex-col relative"
                    style="align-items: flex-end"
                  >
                    <div style="margin-top: -45px">
                      <p class="text-gray-400">Firstname</p>
                      <p class="text-gray-300 text-xl">Lastname</p>
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 bg-gray-300 rounded-md"></div>
                        <span class="text-gray-300 text-sm rounded">WR</span>
                      </div>
                    </div>
                    <div style="position: absolute; top: 60px; bottom: 0">
                      POS
                    </div>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-green-500">
                    <span
                      class="w-4 h-4 rounded-full bg-white flex items-center justify-center text-xs"
                      >+</span
                    >
                    <span class="text-sm">Show Season Range</span>
                  </div>
                  <div class="relative bg-gray-600 rounded-lg py-1 px-2">
                    <label class="text-sm text-gray-400"
                      >Filter by season</label
                    >
                    <select
                      class="w-full pb-2 pr-10 rounded bg-gray-600 appearance-none text-white"
                    >
                      <option>All Seasons</option>
                    </select>
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

          <!-- Comparison Sections -->
          <div class="space-y-4">
            <template v-for="(stats, section) in sections" :key="section">
              <div class="rounded">
                <!-- Section Header -->
                <div
                  class="flex justify-between items-center py-4 cursor-pointer bg-black"
                  @click="toggleSection(section)"
                >
                  <h3 class="text-gray-300 font-medium">
                    {{ section }}
                  </h3>
                  <span
                    class="text-gray-400 transform transition-transform"
                    :class="{ 'rotate-180': !sectionStates[section] }"
                    ><svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                        d="m5 15 7-7 7 7"
                      />
                    </svg>
                  </span>
                </div>

                <!-- Section Content -->
                <div
                  v-if="sectionStates[section]"
                  class="py-0.5"
                  style="background-color: #393939"
                >
                  <div class="space-y-2">
                    <!-- Three Column Layout with Visible Separations -->
                    <div
                      v-for="(stat, index) in stats"
                      :key="index"
                      class="grid grid-cols-3 gap-4 items-center"
                    >
                      <!-- First Column: Stat Name -->
                      <div
                        class="text-gray-400 pr-4 py-2 px-2 border border-gray-600"
                      >
                        {{ stat.title }}
                      </div>

                      <!-- Second Column: Indicator + Dots -->
                      <div
                        class="flex justify-between items-center px-2 border border-gray-600"
                      >
                        <span
                          :class="[
                            'w-4 h-4 rounded-full',
                            getIndicatorColor(stat.player1),
                          ]"
                        ></span>
                        <span class="text-gray-400 py-2">...</span>
                      </div>

                      <!-- Third Column: Indicator + Dots (Right-Aligned) -->
                      <div
                        class="flex justify-between items-center px-2 border border-gray-600"
                      >
                        <span
                          :class="[
                            'w-4 h-4 rounded-full',
                            getIndicatorColor(stat.player2),
                          ]"
                        ></span>
                        <span class="text-gray-400 py-2">...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import { ref } from "vue";

const headerBackgroundColor = ref("#282829");
const sidebarBackgroundColor = ref("#282829");

// Dummy data for player stats
const sections = ref({
  "Player Overview": [
    { title: "Performance", player1: "green", player2: "green" },
    { title: "Stats", player1: "green", player2: "green" },
    { title: "Awards", player1: "green", player2: "green" },
    { title: "Career Stats", player1: "green", player2: "green" },
    { title: "Notes", player1: "green", player2: "green" },
    { title: "Related Facts", player1: "green", player2: "green" },
    { title: "Key Quote", player1: "green", player2: "green" },
  ],
  Offense: [
    { title: "Stat Title", player1: "green", player2: "green" },
    { title: "Speed", player1: "green", player2: "yellow" },
    { title: "Stat Title", player1: "green", player2: "green" },
    { title: "Agility", player1: "green", player2: "orange" },
    { title: "Stat Title", player1: "red", player2: "green" },
    { title: "Stat Title", player1: "green", player2: "yellow" },
    { title: "Stat Title", player1: "green", player2: "green" },
  ],
  Defense: [
    { title: "Stat Title", player1: "green", player2: "green" },
    { title: "Stat Title", player1: "green", player2: "yellow" },
  ],
});

const sectionStates = ref({
  "Player Overview": true,
  Offense: true,
  Defense: true,
});

const toggleSection = (section) => {
  sectionStates.value[section] = !sectionStates.value[section];
};

const getIndicatorColor = (status) => {
  const colors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };
  return colors[status] || "bg-gray-500";
};
</script>