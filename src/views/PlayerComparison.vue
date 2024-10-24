<template>
  <div class="text-white">
    <!-- Header -->
    <Header :bgColor="headerBackgroundColor" />
    <Sidebar :bgColor="sidebarBackgroundColor" />
    <div class="bg-gray-900 relative">
      <div>
        <div
          class="text-center flex flex-col items-center"
          style="padding-top: 150px; margin-bottom: 65px"
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
        <!-- Comparison Section -->
        <div
          class="rounded-lg pb-1"
          style="background-color: #282829; position: relative"
        >
          <div class="mb-8 flex justify-end rounded-lg">
            <div class="relative mx-auto">
              <p
                class="text-gray-300 text-center"
                style="
                  background-color: black;
                  padding: 15px;
                  border-top: 2px solid greenyellow;
                  border-bottom: 2px solid lightslategray;
                  border-left: 2px solid lightslategray;
                  margin-top: 20px;
                "
              >
                Select players to compare
              </p>
              <div
                style="
                  background-color: #393939;
                  padding: 30px 10px 30px 100px;
                  border-radius: 10px;
                "
              >
                <div
                  class="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-start pl-10 pr-16"
                >
                  <!-- Player Add Slot 1 -->
                  <div
                    class="bg-gray-600/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-600/40 w-full max-w-xs h-40"
                    style="width: 300px; height: 170px"
                  >
                    <div
                      class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center"
                    >
                      <span class="text-2xl text-green-500">+</span>
                    </div>
                  </div>
                  <!-- Player Add Slot 2 -->
                  <div
                    class="bg-gray-600/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-600/40 w-full max-w-xs h-40"
                    style="width: 300px; height: 170px"
                  >
                    <div
                      class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center"
                    >
                      <span class="text-2xl text-green-500">+</span>
                    </div>
                  </div>
                </div>
                <div class="text-center py-3 px-2 text-gray-400">
                  Click
                  <span
                    class="py-0.5 px-2 rounded-full text-base bg-green-500/20 text-black"
                    >+</span
                  >
                  to add a player
                </div>
              </div>
              <!-- <div
                  class="tooltip"
                  style="
                    max-width: 200px;
                    position: absolute;
                    right: 4px;
                    top: -15px;
                    z-index: 2;
                    color: black;
                    font-size: small;
                  "
                >
                  You can add the same player twice to compare his stats from
                  different seasons
                </div> -->
            </div>
          </div>
        </div>
        <!-- headline for compare a player; -->
        <div
          class="rounded-lg"
          style="background-color: #282829; padding: 5px 100px 55px 100px"
        >
          <div class="mb-8 flex justify-center">
            <div
              class="relative mx-auto bg-gray-900"
              style="border-radius: 10px"
            >
              <div style="padding: 30px 2px 30px 2px; max-width: 830px">
                <h2 class="text-center mb-3" style="font: 30px">
                  Headline for compare a player section
                </h2>
                <div class="text-center pl-5 text-md">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam fugit officia molestiae odit voluptates nostrum sit
                  enim delectus cumque itaque quidem amet rerum soluta rem, id
                  officiis sed eaque deleniti exercitationem voluptatum?
                  Reiciendis explicabo delectus repellendus porro sunt tempore.
                  Harum!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="background-color: #282829">
          <div
            class=""
            style="
              border: 2px solid greenyellow;
              width: 60%;

              margin: 0 auto;
            "
          ></div>
        </div>

        <div style="background-color: #282829">
          <div
            style="
              max-width: 960px;
              margin: 0 auto;
              padding: 30px 2px;
              border-radius: 20px;
            "
            class="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-center"
          >
            <div
              class="bg-gray-600/30 flex flex-col items-center px-4 py-3 w-full lg:w-550 rounded-lg"
              style="margin-bottom: 25px"
            >
              <div class="flex items-center justify-between w-full mb-4">
                <h3 class="text-white font-semibold">Samuel Johnson #17</h3>
                <div>
                  <svg
                    class="w-4 h-4 dark:text-white text-black"
                    style="background-color: greenyellow; border-radius: 15%"
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
                      d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row items-center w-full">
                <div class="max-w-sm mb-2 lg:mb-0 mr-2.5 bg-white rounded-lg">
                  <img
                    src="../assets/images/rugbyPlayer.png"
                    alt="avatar"
                    style="height: 80px; width: 80px; border-radius: 10px"
                  />
                </div>
                <div class="flex-1">
                  <p class="text-gray-400">WR</p>
                  <p class="text-gray-400">Sophomore</p>
                  <div class="flex text-yellow-400">★★★★★</div>
                  <p>Score: 87%</p>
                </div>
                <div class="bg-white rounded-md w-6 h-6 lg:mt-0 mt-4"></div>
                <div
                  class="grid grid-cols-2 gap-1 mb-2 mt-4 lg:mt-0"
                  style="
                    background-color: #000;
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                  "
                >
                  <!-- Height and Arm Row -->
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Height</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Arm</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>

                  <!-- Weight and Leg Row -->
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Weight</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Leg</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>

                  <!-- Hand and Wing Row -->
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Hand</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Wing</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-between border border-gray-600 py-1 px-6 rounded-full cursor-pointer bg-black mt-1"
              >
                <span class="text-sm mr-3 text-white" style="font-size: 12px"
                  >View Full Attributes</span
                >
              </div>
            </div>

            <div class="px-4 flex items-center justify-center mx-auto">Vs</div>

            <div
              class="bg-gray-600/30 flex flex-col items-center justify-between px-4 py-3 rounded-lg w-full lg:w-550"
              style="margin-bottom: 25px"
            >
              <div class="flex items-center justify-between w-full mb-4">
                <h3 class="text-white font-semibold">Samuel Johnson #17</h3>
                <div>
                  <svg
                    class="w-4 h-4 dark:text-white text-black"
                    style="background-color: greenyellow; border-radius: 15%"
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
                      d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row items-center w-full">
                <div class="max-w-sm mb-2 lg:mb-0 mr-2.5 bg-white rounded-lg">
                  <img
                    src="../assets/images/rugbyPlayer.png"
                    alt="avatar"
                    style="height: 80px; width: 80px; border-radius: 10px"
                  />
                </div>
                <div class="flex-1">
                  <p class="text-gray-400">WR</p>
                  <p class="text-gray-400">Sophomore</p>
                  <div class="flex text-yellow-400">★★★★★</div>
                  <p>Score: 87%</p>
                </div>
                <div class="bg-white rounded-md w-6 h-6 lg:mt-0 mt-4"></div>
                <div
                  class="grid grid-cols-2 gap-1 mb-2 mt-4 lg:mt-0"
                  style="
                    background-color: #000;
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                  "
                >
                  <!-- Height and Arm Row -->
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Height</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Arm</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>

                  <!-- Weight and Leg Row -->
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Weight</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Leg</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>

                  <!-- Hand and Wing Row -->
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Hand</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                  <div class="flex justify-between p-1 rounded">
                    <span class="text-gray-400">Wing</span>
                    <span class="text-gray-400">--</span>
                    <span class="text-white">100</span>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-between border border-gray-600 py-1 px-6 rounded-full cursor-pointer bg-black mt-1"
              >
                <span class="text-sm mr-3 text-white" style="font-size: 12px"
                  >View Full Attributes</span
                >
              </div>
            </div>
          </div>

          <!-- stats result-->
          <div class="space-y-4 mx-auto" style="width: 60%; padding-left: 10px">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <!-- First Template Section -->
              <div class="mr-4">
                <template v-for="(stats, section) in sections" :key="section">
                  <div class="rounded">
                    <!-- Section Header -->
                    <div
                      class="flex justify-between items-center py-4 mb-5 cursor-pointer bg-black text-white my-5"
                      @click="toggleSection(section)"
                    >
                      <h3 class="text-gray-300 font-medium">
                        {{ section }}
                      </h3>
                      <span
                        class="text-gray-400 transform transition-transform"
                        :class="{ 'rotate-180': !sectionStates[section] }"
                      >
                        <svg
                          class="w-6 h-6 dark:text-white"
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
                          class="grid grid-cols-4 gap-4 items-center"
                        >
                          <!-- First Column: Stat Name -->
                          <div
                            class="text-gray-400 pr-4 py-2 px-2 border border-gray-600 my-5"
                            style="font-size: 12px"
                          >
                            {{ stat.title }}
                          </div>
                          <!-- Second Column: Indicator + Dots -->
                          <div
                            class="flex justify-between items-center px-2 border border-gray-600"
                          >
                            98
                            <span class="text-gray-400 py-2">...</span>
                            <span
                              style="height: 20px; width: 20px"
                              :class="[
                                'rounded-md',
                                getIndicatorColor(stat.player1),
                              ]"
                            ></span>
                          </div>
                          <!-- Third Column: Stat Name for Player 2 -->
                          <div
                            class="text-gray-400 pr-4 py-2 px-2 border border-gray-600 my-5"
                            style="font-size: 12px"
                          >
                            {{ stat.title }}
                          </div>
                          <!-- Fourth Column: Indicator + Dots for Player 2 -->
                          <div
                            class="flex justify-between items-center px-2 border border-gray-600"
                          >
                            98
                            <span class="text-gray-400 py-2">...</span>
                            <span
                              style="height: 20px; width: 20px"
                              :class="[
                                'rounded-md',
                                getIndicatorColor(stat.player2),
                              ]"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>

              <!-- Second Template Section -->
              <div class="pb-5">
                <template v-for="(stats, section) in sections" :key="section">
                  <div class="rounded">
                    <!-- Section Header -->
                    <div
                      class="flex justify-between items-center py-4 cursor-pointer bg-black text-white my-5"
                      @click="toggleSection(section)"
                    >
                      <h3 class="text-gray-300 font-medium">
                        {{ section }}
                      </h3>
                      <span
                        class="text-gray-400 transform transition-transform"
                        :class="{ 'rotate-180': !sectionStates[section] }"
                      >
                        <svg
                          class="w-6 h-6 dark:text-white"
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
                          class="grid grid-cols-4 gap-4 items-center"
                        >
                          <!-- First Column: Stat Name -->
                          <div
                            class="text-gray-400 pr-4 py-2 px-2 border border-gray-600 my-5"
                            style="font-size: 12px"
                          >
                            {{ stat.title }}
                          </div>
                          <!-- Second Column: Indicator + Dots -->
                          <div
                            class="flex justify-between items-center px-2 border border-gray-600"
                          >
                            98
                            <span class="text-gray-400 py-2">...</span>
                            <span
                              style="height: 20px; width: 20px"
                              :class="[
                                'rounded-md',
                                getIndicatorColor(stat.player1),
                              ]"
                            ></span>
                          </div>
                          <!-- Third Column: Stat Name for Player 2 -->
                          <div
                            class="text-gray-400 pr-4 py-2 px-2 border border-gray-600 my-5"
                            style="font-size: 12px"
                          >
                            {{ stat.title }}
                          </div>
                          <!-- Fourth Column: Indicator + Dots for Player 2 -->
                          <div
                            class="flex justify-between items-center px-2 border border-gray-600"
                          >
                            98
                            <span class="text-gray-400 py-2">...</span>
                            <span
                              style="height: 20px; width: 20px"
                              :class="[
                                'rounded-md',
                                getIndicatorColor(stat.player2),
                              ]"
                            ></span>
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

        <!-- Player Selection Sidebar -->
        <div
          class="h-screen w-full max-w-sm bg-white shadow-xl px-4 md:px-6 overflow-y-auto"
          style="
            padding-top: 10px;
            z-index: 999;
            position: absolute;
            top: 10.5%;
            right: 0;
            height: 655px;
          "
        >
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-black text-xl font-bold">Add a player</h2>
            <button
              class="text-gray-400 hover:text-gray-200 bg-green-500/20 px-2 rounded-full text-center py-0.5"
            >
              ×
            </button>
          </div>
          <!-- Search and Filters -->
          <div class="space-y-4">
            <div
              class="flex items-center justify-between text-black w-full flex-col md:flex-row"
            >
              <button
                @click="setActive('Filter')"
                class="px-3 py-1 w-full md:w-44 mb-2 md:mb-0"
                :class="[
                  'rounded flex justify-center items-center',
                  activeButton === 'Filter'
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-black',
                ]"
              >
                Filter
              </button>
              <button
                @click="setActive('Search')"
                class="px-3 py-1 w-full md:w-44"
                :class="[
                  'rounded flex justify-center items-center',
                  activeButton === 'Search'
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-black',
                ]"
              >
                Search
              </button>
            </div>

            <!-- Filter Sections -->
            <div class="space-y-4 text-black">
              <div style="border-bottom: 1px solid #282829">
                <label class="text-sm text-gray-400">Filter by season</label>
                <select class="w-full pb-5 rounded bg-white">
                  <option>All Seasons</option>
                </select>
              </div>
              <div style="border-bottom: 1px solid #282829">
                <label class="text-sm text-gray-400"
                  >Filter by Conference</label
                >
                <select class="w-full bg-white text-gray-500 pb-5 rounded">
                  <option>All Conferences</option>
                </select>
              </div>
              <div style="border-bottom: 1px solid #282829">
                <label class="text-sm text-gray-400">Filter by Team</label>
                <select class="w-full bg-white text-gray-500 pb-5 rounded">
                  <option>Wisconsin</option>
                </select>
              </div>
              <div style="border-bottom: 1px solid #282829">
                <label class="text-sm text-gray-400">Filter by position</label>
                <select class="w-full bg-white text-gray-500 pb-5 rounded">
                  <option>All Positions</option>
                </select>
              </div>
              <div style="border-bottom: 1px solid #282829">
                <label class="text-sm text-gray-400">Filter by rating</label>
                <select class="w-full bg-white text-gray-500 pb-5 rounded">
                  <option>All Very Low Risk</option>
                </select>
              </div>
            </div>

            <div
              class="flex items-center justify-center bg-black text-gray-400 rounded"
            >
              <span class="py-2 px-3"
                >No players are available for your search</span
              >
            </div>
            <div class="flex items-center justify-between text-gray-400">
              <span>Looking for more content..</span>
              <div class="bg-black" style="width: 100px; height: 5px"></div>
            </div>
            <!-- Results -->
            <!-- <div class="mt-6">
        <p class="text-gray-400 mb-4">1234 results</p>
        <div class="space-y-2">
          <div
            v-for="i in 6"
            :key="i"
            class="flex items-center justify-between p-2 hover:bg-gray-700/50 cursor-pointer"
            style="border-bottom: 1px solid #282829"
          >
            <div class="flex items-center gap-2">
              <span
                class="text-green-500 text-xl rounded-full px-2.5 py-0.5 bg-black text-center mr-2"
                >+</span
              >
              <span class="text-gray-500">Name of Player</span>
            </div>
            <span class="text-gray-500">POS</span>
          </div>
        </div>
      </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>`
    
    <script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";

const activeButton = ref("Filter");

const setActive = (button) => {
  activeButton.value = button;
  return {
    activeButton,
    setActive,
  };
};

const headerBackgroundColor = ref("#282829");
const sidebarBackgroundColor = ref("#282829");

// Dummy data for player stats
const sections = ref({
  "Game Performance": [
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
  ],
  Offense: [
    { title: "Overall Rating", player1: "green", player2: "green" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "green" },
    { title: "Overall Rating", player1: "green", player2: "orange" },
    { title: "Overall Rating", player1: "red", player2: "green" },
    { title: "Overall Rating", player1: "green", player2: "yellow" },
    { title: "Overall Rating", player1: "green", player2: "green" },
  ],
  Defense: [
    { title: "Stat Title", player1: "green", player2: "green" },
    { title: "Stat Title", player1: "green", player2: "yellow" },
  ],
});

const sectionStates = ref({
  "Game Performance": true,
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
  
  <style scoped>
/* HTML: <div class="tooltip">This is a Tooltip with a border and with a border radius. Border and background have a solid coloration</div> */
.tooltip {
  color: #000;
  font-size: 18px;
  max-width: 28ch;
  text-align: center;
}
.tooltip {
  /* triangle dimension */
  --a: 90deg; /* angle */
  --h: 1em; /* height */

  --p: 50%; /* triangle position (0%:left 100%:right) */
  --r: 8px; /* the radius */
  --b: 5px; /* border width  */

  --c2: rgb(217, 255, 0);

  padding: 1em;
  border-radius: var(--r) / var(--r)
    min(var(--r), var(--p) - var(--h) * tan(var(--a) / 2))
    min(var(--r), 100% - var(--p) - var(--h) * tan(var(--a) / 2)) var(--r);
  clip-path: polygon(
    100% 0,
    0 0,
    0 100%,
    100% 100%,
    100% min(100%, var(--p) + var(--h) * tan(var(--a) / 2)),
    calc(100% + var(--h)) var(--p),
    100% max(0%, var(--p) - var(--h) * tan(var(--a) / 2))
  );
  background: var(--c1);
  border-image: conic-gradient(var(--c1) 0 0) fill 0 /
    max(0%, var(--p) - var(--h) * tan(var(--a) / 2)) 0
    max(0%, 100% - var(--p) - var(--h) * tan(var(--a) / 2)) var(--r) / 0
    var(--h) 0 0;
  position: relative;
}
.tooltip:before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  padding: var(--b);
  border-radius: inherit;
  clip-path: polygon(
    100% 0,
    0 0,
    0 100%,
    100% 100%,
    calc(100% - var(--b))
      min(
        100% - var(--b),
        var(--p) + var(--h) * tan(var(--a) / 2) - var(--b) *
          tan(45deg - var(--a) / 4)
      ),
    calc(100% + var(--h) - var(--b) / sin(var(--a) / 2)) var(--p),
    calc(100% - var(--b))
      max(
        var(--b),
        var(--p) - var(--h) * tan(var(--a) / 2) + var(--b) *
          tan(45deg - var(--a) / 4)
      )
  );
  background: var(--c2) content-box;
  border-image: conic-gradient(var(--c2) 0 0) fill 0 /
    max(var(--b), var(--p) - var(--h) * tan(var(--a) / 2)) 0
    max(var(--b), 100% - var(--p) - var(--h) * tan(var(--a) / 2)) var(--r) / 0
    var(--h) 0 0;
}

@media (max-width: 768px) {
  /* Adjustments for tablet */
  .flex-row {
    flex-direction: column; /* Stack items vertically */
  }

  /* Other specific adjustments */
}
</style>