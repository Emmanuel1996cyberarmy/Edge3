<template>
  <div class="text-white">
    <Header :bgColor="headerBackgroundColor" />

    <Sidebar :bgColor="sidebarBackgroundColor" />

    <div
      class="min-h-screen text-white p-8 background-image"
      style="background-color: #151616"
    >
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
            Jonathan Stevens Edge3 Athlete Intelligence Player Ratings - Week 4
            Ratings
          </div>
        </div>
        <nav class="flex items-center mb-8" style="font-size: 16px">
          <div class="flex items-center space-x-4">
            <a href="#" class="text-gray-400">Home</a>
            <div class="w-6 h-6 bg-white rounded-md mr-2"></div>
            <span>Johnathon Stevenson</span>
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

      <div class="grid grid-cols-4 gap-8" style="margin-left: 100px">
        <!-- Left Column - Player Info -->
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
                  99
                </div>
                <div class="ml-1" style="font-size: 12px">OVR</div>
              </div>
            </div>

            <!-- Reduce spacing between Johnathon and Stevenson -->
            <div>
              <span class="mb-1" style="font-size: 14px">Week 4 Ratings</span>
              <h2 class="mb-0" style="font-size: 18px">Johnathon</h2>
              <h1 class="mt-0" style="font-size: 22px; line-height: 1.2">
                Stevenson
              </h1>
            </div>

            <!-- Flex container for HB and Logos -->
            <div class="flex justify-start space-x-2 mt-2 mb-5">
              <div
                class="px-1 py-2 flex items-center rounded-lg rounded"
                style="background-color: #363737"
              >
                HB
              </div>
              <div
                class="px-1 py-2 flex items-center rounded-lg rounded"
                style="background-color: #363737"
              >
                Logo
              </div>
              <div
                class="px-1 py-2 flex items-centerpy-1 items-centerrounded-lg rounded"
                style="background-color: #363737"
              >
                Logo
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
                  >HB</span
                >
                <span>Halfback</span>
              </div>
            </div>

            <div>
              <div class="text-gray-400 text-sm">Team</div>
              <div>Name of Team</div>
            </div>

            <div>
              <div class="text-gray-400 text-sm">Height</div>
              <div>--'--"--cm</div>
            </div>

            <div>
              <div class="text-gray-400 text-sm">Weight</div>
              <div>--lb/--kg</div>
            </div>

            <div>
              <div class="text-gray-400 text-sm">Archetype</div>
              <div>Type of Player - Position</div>
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
            <h2 class="mb-1" style="font-size: 16px">Weeek 4 Ratings</h2>
            <h2 class="mb-0" style="font-size: 24px">Johnathon</h2>
            <h1 class="mt-0" style="font-size: 48px; line-height: 1">
              Stevenson
            </h1>
          </div>
          <div
            class="rounded-lg p-6"
            style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
          >
            <!-- Stats Grid -->
            <div class="grid grid-cols-4 gap-x-6">
              <!-- First Column (All Green, 90% width) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 1</h3>
                <div
                  v-for="index in 9"
                  :key="'col1-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- Green line with 90% width -->
                    <div
                      class="absolute top-0 left-0 h-0.5 bg-green-500"
                      style="width: 90%"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Second Column (Mostly Green, but 3rd Line is Yellow at 50%) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 2</h3>
                <div
                  v-for="index in 9"
                  :key="'col2-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- Yellow for 3rd line, Green for others -->
                    <div
                      :class="{
                        'bg-yellow-500': index === 3,
                        'bg-green-500': index !== 3,
                      }"
                      :style="{ width: index === 3 ? '50%' : '90%' }"
                      class="absolute top-0 left-0 h-0.5"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Third Column (Red, but 2nd Line is Orange) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 3</h3>
                <div
                  v-for="index in 9"
                  :key="'col3-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- Orange for 2nd line, Red for others -->
                    <div
                      :class="{
                        'bg-orange-500': index === 2,
                        'bg-red-500': index !== 2,
                      }"
                      :style="{ width: index === 2 ? '70%' : '90%' }"
                      class="absolute top-0 left-0 h-0.5"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Fourth Column (Red, but 1st Line is Yellow) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 4</h3>
                <div
                  v-for="index in 9"
                  :key="'col4-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- Yellow for 1st line, Red for others -->
                    <div
                      :class="{
                        'bg-yellow-500': index === 1,
                        'bg-red-500': index !== 1,
                      }"
                      :style="{ width: index === 1 ? '80%' : '90%' }"
                      class="absolute top-0 left-0 h-0.5"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Second Row: 3 Columns -->
            <div class="grid grid-cols-3 gap-x-6 mt-8">
              <!-- Fifth Column (All Red, 11 stats) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 5</h3>
                <div
                  v-for="index in 11"
                  :key="'col5-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- All Red lines -->
                    <div
                      class="absolute top-0 left-0 h-0.5 bg-red-500"
                      style="width: 90%"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Sixth Column (Green, 7th Line is Yellow) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 6</h3>
                <div
                  v-for="index in 9"
                  :key="'col6-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- Yellow for 7th line, Green for others -->
                    <div
                      :class="{
                        'bg-yellow-500': index === 7,
                        'bg-green-500': index !== 7,
                      }"
                      :style="{ width: index === 7 ? '70%' : '90%' }"
                      class="absolute top-0 left-0 h-0.5"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Seventh Column (First Yellow, Second Red, Third Green) -->
              <div class="space-y-4">
                <h3 class="font-bold mb-4 text-white">Stat Category 7</h3>
                <div
                  v-for="index in 3"
                  :key="'col7-' + index"
                  class="space-y-1"
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-300">Stat Title</span>
                    <span class="text-sm text-gray-300">--</span>
                  </div>
                  <div class="relative w-full h-0.5 bg-gray-600">
                    <!-- First Yellow, Second Red, Third Green -->
                    <div
                      :class="{
                        'bg-yellow-500': index === 1,
                        'bg-red-500': index === 2,
                        'bg-green-500': index === 3,
                      }"
                      :style="{
                        width:
                          index === 1 ? '70%' : index === 2 ? '80%' : '90%',
                      }"
                      class="absolute top-0 left-0 h-0.5"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Player Traits -->
          <div class="grid grid-cols-3 gap-6 mt-6">
            <div
              v-for="trait in playerTraits"
              :key="trait.title"
              class="rounded-lg p-6 text-gray-300"
              style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
            >
              <div class="flex items-start space-x-3 mb-4">
                <input type="checkbox" class="mt-1 p-2" />
                <div>
                  <h3 class="font-bold mb-2">{{ trait.title }}</h3>
                  <p class="text-sm">{{ trait.description }}</p>
                </div>
              </div>
              <!-- Other content -->
              <div
                class="w-full rounded bg-white mx-auto"
                style="text-align: center; width: 35%; padding: 10px 10px"
              ></div>
            </div>
          </div>

          <!-- Player Summary -->
          <div class="grid grid-cols-4 gap-6 mt-6">
            <div
              class="col-span-3 rounded-lg p-6"
              style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
            >
              <p class="text-lg mb-4">
                Johnathon Stevenson's overall rating in Edge3 Athlete
                Intelligence is 99
              </p>
              <p class="text-gray-300 text-sm max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              class="rounded-lg p-6"
              style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
            >
              <div class="grid grid-cols-2 gap-6 text-gray-300">
                <div class="text-xs">
                  <div>College</div>
                  <div>School Name</div>
                </div>
                <div>
                  <div class="text-sm">Age</div>
                  <div>--</div>
                </div>
                <div>
                  <div class="text-sm">Years Pro</div>
                  <div>--</div>
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
          <div class="flex justify-between max-w-1000px mx-auto p-4 space-x-4">
            <div
              class="flex-1 p-4 bg-background rounded-lg"
              style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
            >
              <div class="flex items-center mb-3">
                <div
                  class="px-1 py-2 flex items-center rounded-lg rounded mr-3"
                  style="background-color: #363737"
                >
                  HB
                </div>
                <h2 class="text-lg font-bold text-primary">HB Position</h2>
              </div>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-3"
                      style="width: 40px; height: 40px"
                    ></div>
                    <span class="mr-6">Name of Player</span>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground">OVR</div>
                    <div class="flex items-center justify-end">
                      <span class="text-green-500">↑1</span>
                      <span class="ml-1">96</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-3"
                      style="width: 40px; height: 40px"
                    ></div>
                    <span class="mr-6">Name of Player</span>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground">OVR</div>
                    <div class="flex items-center justify-end">
                      <span class="text-green-500">↑1</span>
                      <span class="ml-1">96</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-3"
                      style="width: 40px; height: 40px"
                    ></div>
                    <span class="mr-6">Name of Player</span>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground">OVR</div>
                    <div class="flex items-center justify-end">
                      <span class="text-green-500">↑1</span>
                      <span class="ml-1">96</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end mt-4">
                <button
                  class="p-2 rounded-full"
                  style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
                >
                  View All Halfbacks
                </button>
              </div>
            </div>

            <div
              class="flex-1 p-4 bg-background rounded-lg"
              style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
            >
              <div class="flex items-center mb-2">
                <div
                  class="px-1 py-2 flex items-center rounded-lg rounded mr-3"
                  style="background-color: #363737"
                >
                  Logo
                </div>
                <h2 class="text-lg font-bold text-primary">HB Position</h2>
              </div>

              <div class="flex flex-col space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-3"
                      style="width: 40px; height: 40px"
                    ></div>
                    <span class="mr-6">Name of Player</span>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground">OVR</div>
                    <div class="flex items-center justify-end">
                      <span class="text-green-500">↑1</span>
                      <span class="ml-1">96</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-3"
                      style="width: 40px; height: 40px"
                    ></div>
                    <span class="mr-6">Name of Player</span>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground">OVR</div>
                    <div class="flex items-center justify-end">
                      <span class="text-green-500">↑1</span>
                      <span class="ml-1">96</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-3"
                      style="width: 40px; height: 40px"
                    ></div>
                    <span class="mr-6">Name of Player</span>
                  </div>
                  <div class="text-right">
                    <div class="text-muted-foreground">OVR</div>
                    <div class="flex items-center justify-end">
                      <span class="text-green-500">↑1</span>
                      <span class="ml-1">96</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end mt-4">
                <button
                  class="p-2 rounded-full"
                  style="background-color: #1e1f1f; border: 2px solid #4b4b4b"
                >
                  View All Halfbacks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

const headerBackgroundColor = ref("#151616");
const sidebarBackgroundColor = ref("#282829");
const playerTraits = [
  {
    title: "Juke Master",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Backfield Master",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Evasive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Leap Frog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Playmaker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];
</script>
<style scoped>
.background-image {
  background-image: url(../assets/images/mask.png);
  background-repeat: no-repeat;
}
</style>
