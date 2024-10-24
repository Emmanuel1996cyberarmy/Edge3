<!-- App.vue -->
<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen text-white"
    style="background-color: #1b1c1b"
  >
    <!-- Header -->
    <Header :bgColor="headerBackgroundColor" />
    <Sidebar :bgColor="sidebarBackgroundColor" />

    <!-- Main Layout -->
    <div class="pt-16 flex">
      <!-- Main Content -->
      <main>
        <div
          class="p-6 m-6"
          style="background-color: #000000; padding-left: 70px"
        >
          <div
            class="p-6 border border-gray-700 rounded-md flex justify-center mb-10"
            style="background-color: #000000"
          >
            <div class="flex items-center text-lg">
              <div>Welcome, {{ userName }}!</div>
              <span class="ml-10 text-sm"
                >welcome to the Edge3 dashboard! Here is where you can see your
                stats, activities and many more
              </span>
            </div>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
          >
            <div class="items-center">
              <!-- General Manager Section -->
              <div
                class="border border-gray-700 rounded-lg mb-3"
                style="background-color: #292929"
              >
                <div class="flex items-center p-4">
                  <div class="max-w-sm">
                    <img
                      src="../assets/images/avatar.jpg"
                      alt="avatar"
                      style="height: 144px; width: 144px; border-radius: 10px"
                    />
                  </div>
                  <div class="flex flex-col text-xl ml-4">
                    <!-- Added margin left for spacing -->
                    <span class="mb-2" style="font-size: 24px">{{
                      firstName
                    }}</span>
                    <br /><span class="ml-1 mb-4" style="font-size: 40px">{{
                      lastName
                    }}</span>
                    <span
                      style="background-color: #545454; font-size: 13px"
                      class="p-1 rounded-md flex items-center justify-center"
                      >General Manager</span
                    >
                  </div>
                </div>
              </div>

              <!-- School Section -->
              <div
                class="border border-gray-700 rounded-lg"
                style="background-color: #1e1f1f"
              >
                <div class="flex items-center justify-between p-4">
                  <!-- Added padding for consistency -->
                  <div class="max-w-xs flex items-center">
                    <img
                      src="../assets/images/avatar.jpg"
                      alt="avatar"
                      style="height: 64px; width: 64px; border-radius: 50%"
                    />
                    <span class="ml-2" style="font-size: 16px"
                      >Name of School</span
                    >
                    <!-- Added margin left for spacing -->
                  </div>
                  <div class="flex flex-col">
                    <span style="font-size: 36px">4-1-0</span>
                    <span style="font-size: 14px">1st in Conference</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Current Schedule Table -->
            <div
              class="rounded-lg border border-gray-700"
              style="background-color: #292929"
            >
              <div
                class="flex justify-between items-center bg-black px-2 py-3 rounded-t-lg"
              >
                <h2
                  class="text-lg font-semibold"
                  style="font-size: 20px; font-weight: 200"
                >
                  Current Schedule
                </h2>
                <div
                  class="flex items-center justify-between border border-gray-600 py-2 px-6 rounded-full cursor-pointer bg-white"
                >
                  <span
                    class="text-sm mr-3 text-gray-700"
                    style="font-size: 12px"
                    >View Full Schedule</span
                  >
                  <div class="w-4 h-4 bg-gray-700 rounded mt-1"></div>
                </div>
              </div>

              <!-- Table Structure -->
              <table class="w-full text-white">
                <thead>
                  <tr
                    class="border border-gray-600"
                    style="background-color: #292929; font-size: 12px"
                  >
                    <th class="p-2 text-left">Date</th>
                    <th class="p-2 text-left">Opponent</th>
                    <th class="p-2 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="game in schedule"
                    :key="game.date"
                    class="hover:bg-gray-700 border border-gray-600"
                    style="background-color: #1e1f1f; font-size: 14px"
                  >
                    <!-- Game Date -->
                    <td class="px-2 py-1">{{ game.date }}</td>
                    <!-- Opponent -->

                    <td class="px-2 py-3">
                      <div class="flex items-center">
                        <div>vs</div>
                        <img
                          src="../assets/images/avatar.jpg"
                          alt="avatar"
                          style="
                            height: 32px;
                            width: 32px;
                            border-radius: 50%;
                            margin: 0 10px;
                          "
                        />

                        <span>{{ game.opponent }}</span>
                      </div>
                    </td>
                    <!-- Game Time (Placeholder for Result) -->
                    <td class="p-2">{{ game.time }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Coaching Staff Table (Updated) -->
            <div
              class="rounded-lg px-0 border border-gray-700"
              style="background-color: #292929"
            >
              <div
                class="flex justify-between items-center bg-black px-2 py-3 rounded-t-lg"
              >
                <h2
                  class="text-lg font-semibold"
                  style="font-size: 20px; font-weight: 200"
                >
                  Coaching Staff
                </h2>
                <div
                  class="flex items-center justify-between border border-gray-700 py-2 px-6 rounded-full cursor-pointer bg-black"
                >
                  <span
                    class="text-sm mr-3 text-gray-300"
                    style="font-size: 12px"
                    >View Full Schedule</span
                  >
                  <div class="w-4 h-4 bg-gray-700 rounded mt-1"></div>
                </div>
              </div>

              <!-- Table Structure -->
              <table class="w-full text-white">
                <thead>
                  <tr
                    class="border border-gray-600"
                    style="background-color: #292929; font-size: 12px"
                  >
                    <th class="p-2 text-left">Position</th>
                    <th class="p-2 text-left">Name</th>
                    <th class="p-2 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="coach in staff"
                    :key="coach.id"
                    class="hover:bg-gray-700 border border-gray-600"
                    style="background-color: #1e1f1f; font-size: 14px"
                  >
                    <!-- Coach Position -->
                    <td class="px-2 py-1">{{ coach.position }}</td>
                    <!-- Coach Name -->
                    <td class="px-2 py-3">
                      <div class="flex items-center">
                        <div>vs</div>
                        <img
                          src="../assets/images/avatar.jpg"
                          alt="avatar"
                          style="
                            height: 32px;
                            width: 32px;
                            border-radius: 15%;
                            margin: 0 10px;
                          "
                        />

                        <span>{{ coach.name }}</span>
                      </div>
                    </td>
                    <!-- Coach Year -->
                    <td class="p-2 text-sm text-gray-400">
                      Year {{ coach.year }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="p-6" style="padding-left: 100px">
          <!-- Filters -->
          <div
            class="flex items-center justify-between mb-6 border border-gray-700 p-2 rounded-lg"
            style="background-color: #000"
          >
            <!-- Left side: Filter Options and Reset Filters -->
            <div class="flex items-center w-1/2 space-x-4">
              <div
                class="relative bg-gray-800 rounded-lg px-2 py-1 border border-gray-700 rounded-md w-40"
                style="background-color: #000000"
              >
                <label
                  for="season-select"
                  class="block text-xs font-medium text-gray-300"
                  style="font-size: 10px"
                >
                  Filter by Season
                </label>
                <select
                  id="season-select"
                  v-model="selectedSeason"
                  class="w-full rounded-lg py-1 text-xs"
                  style="background-color: #000000; font-size: 16px"
                >
                  <option value="2024/25">2024/25</option>
                  <option value="2023/24">2023/24</option>
                </select>
              </div>

              <!-- Filter by Position -->
              <div
                class="relative bg-gray-800 rounded-lg px-2 py-1 border border-gray-700 rounded-md w-40"
                style="background-color: #000"
              >
                <label
                  for="position-select"
                  class="block text-xs font-medium text-gray-300"
                  style="font-size: 10px"
                >
                  Filter by Position
                </label>
                <select
                  id="position-select"
                  v-model="selectedPosition"
                  class="w-full rounded-lg py-1 text-xs"
                  style="background-color: #000; font-size: 16px"
                >
                  <option value="All">All</option>
                  <option value="HB">HB</option>
                </select>
              </div>

              <!-- Filter by Rating -->
              <div
                class="relative bg-gray-800 rounded-lg px-2 py-1 border border-gray-700 rounded-md w-40"
                style="background-color: #000"
              >
                <label
                  for="rating-select"
                  class="block text-xs font-medium text-gray-300"
                  style="font-size: 10px"
                >
                  Filter by Rating
                </label>
                <select
                  id="rating-select"
                  v-model="selectedRating"
                  class="w-full rounded-lg py-1 text-xs"
                  style="background-color: #000; font-size: 16px"
                >
                  <option value="Green Risk">Green Risk</option>
                  <option value="Yellow Risk">Yellow Risk</option>
                  <option value="Red Risk">Red Risk</option>
                </select>
              </div>

              <!-- Vertical Line -->
              <div class="w-1 h-10 bg-gray-700 rounded mx-3"></div>

              <!-- Reset Filters -->
              <div class="flex items-center">
                <div class="w-6 h-6 bg-white rounded-md mr-2"></div>
                <span
                  class="uppercase text-xs text-white"
                  style="font-size: 11px"
                  >Reset Filters</span
                >
              </div>
            </div>

            <!-- Right side: Search Input -->
            <div class="flex items-center w-1/2 justify-end">
              <div
                class="flex items-center border border-gray-600 rounded-full overflow-hidden w-full max-w-md"
                style="background-color: #151516"
              >
                <input
                  type="text"
                  v-model="searchTerm"
                  placeholder="Search Team or Players"
                  class="w-full py-2 px-4 rounded-full outline-none text-sm"
                  style="background-color: #151516; font-size: 14px"
                />
                <button
                  @click="fetchPlayerData"
                  class="relative p-2 rounded-full ml-2 m-1 bg-gray-700 w-10 h-10 flex items-center justify-center"
                >
                  <div class="bg-gray-500 w-6 h-6 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>

          <div
            class="flex items-center max-w-sm justify-betweeen mb-3"
            style="font-size: 16px"
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
            class="flex items-center justify-between mb-4"
            style="font-size: 12px !important"
          >
            <div
              class="bg-white rounded-full px-2 py-1 text-sm text-gray-700 text-xs flex items-center"
              style="height: 32px"
            >
              Week 4 Ratings
            </div>
            <div
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
              style="background-color: #3b3c3c; height: 32px"
            >
              Week 3 Ratings
            </div>
            <div
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
              style="background-color: #3b3c3c; height: 32px"
            >
              Week 2 Ratings
            </div>
            <div
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
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
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
              style="background-color: #3b3c3c; height: 32px"
            >
              Week 4 Ratings
            </div>
            <div
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
              style="background-color: #3b3c3c; height: 32px"
            >
              Week 3 Ratings
            </div>
            <div
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
              style="background-color: #3b3c3c; height: 32px"
            >
              Week 2 Ratings
            </div>
            <div
              class="bg-gray-800 rounded-full px-2 py-1 text-sm text-gray-300 text-xs flex items-center"
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
          </div>
          <!-- Risk Players Tables -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              class="rounded-lg border border-gray-600"
              style="background-color: #292929"
            >
              <div class="border-t-4 border-green-500 rounded-lg">
                <h2
                  class="text-lg font-semibold text-white bg-black p-2"
                  style="font-size: 20px; font-weight: 200"
                >
                  Top Green Risk Players
                </h2>
                <template v-if="greenRiskPlayers.length > 0">
                  <table class="w-full text-white">
                    <thead>
                      <tr
                        class="border border-gray-600"
                        style="font-size: 14px"
                      >
                        <th class="p-2 text-left">Player</th>
                        <th class="p-2">Position</th>
                        <th class="p-2">JER</th>
                        <th class="p-2">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="player in greenRiskPlayers.slice(0, 4)"
                        :key="player.athlete_id"
                        class="hover:bg-gray-700 border border-gray-600"
                        style="font-size: 16px"
                      >
                        <td class="p-2 flex items-center space-x-3">
                          <div
                            class="bg-white rounded"
                            style="height: 48px; width: 48px"
                          ></div>
                          <span
                            >{{ player.first_name }}
                            {{ player.last_name }}</span
                          >
                        </td>
                        <td class="p-2 text-center">
                          {{ player.position_code }}
                        </td>
                        <td class="p-2 text-center"># - -</td>
                        <td class="p-2 text-center">
                          {{ player.star_rating }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="p-2 flex justify-center py-6 w-full rounded-b-lg">
                    <div
                      class="flex items-center justify-between py-2 px-6 rounded-full cursor-pointer border border-gray-600"
                      style="background-color: #292929; font-size: 14px"
                    >
                      <router-link to="/ratings" class="text-sm mr-3">
                        View All Green Risk Players
                      </router-link>

                      <div class="w-4 h-4 bg-gray-700 rounded mt-1"></div>
                    </div>
                  </div>
                </template>
                <p v-else class="p-4 text-center text-gray-400">
                  No Data Found
                </p>
              </div>
            </div>

            <!-- Yellow Risk -->
            <div
              class="rounded-lg border border-gray-600"
              style="background-color: #292929"
            >
              <div class="border-t-4 border-yellow-500 rounded-lg">
                <h2
                  class="text-lg font-semibold text-white bg-black p-2"
                  style="font-size: 20px; font-weight: 200"
                >
                  Top Yellow Risk Players
                </h2>
                <template v-if="yellowRiskPlayers.length > 0">
                  <table class="w-full text-white">
                    <thead>
                      <tr
                        class="border border-gray-600"
                        style="font-size: 14px"
                      >
                        <th class="p-2 text-left">Player</th>
                        <th class="p-2">Position</th>
                        <th class="p-2">JER</th>
                        <th class="p-2">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="player in yellowRiskPlayers.slice(0, 4)"
                        :key="player.athlete_id"
                        class="hover:bg-gray-700 border border-gray-600"
                        style="font-size: 16px"
                      >
                        <td class="p-2 flex items-center space-x-3">
                          <div
                            class="bg-white rounded"
                            style="height: 48px; width: 48px"
                          ></div>
                          <span
                            >{{ player.first_name }}
                            {{ player.last_name }}</span
                          >
                        </td>
                        <td class="p-2 text-center">
                          {{ player.position_code }}
                        </td>
                        <td class="p-2 text-center"># - -</td>
                        <td class="p-2 text-center">
                          {{ player.star_rating }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="p-2 flex justify-center py-6 w-full rounded-b-lg">
                    <div
                      class="flex items-center justify-between py-2 px-6 rounded-full cursor-pointer border border-gray-600"
                      style="background-color: #292929; font-size: 14px"
                    >
                      <router-link to="/ratings" class="text-sm mr-3">
                        View All Yellow Risk Players
                      </router-link>

                      <div class="w-4 h-4 bg-gray-700 rounded mt-1"></div>
                    </div>
                  </div>
                </template>
                <p v-else class="p-4 text-center text-gray-400">
                  No Data Found
                </p>
              </div>
            </div>

            <!-- Red Risk -->
            <div
              class="rounded-lg border border-gray-600"
              style="background-color: #292929"
            >
              <div class="border-t-4 border-red-500 rounded-lg">
                <h2
                  class="text-lg font-semibold text-white bg-black p-2"
                  style="font-size: 20px; font-weight: 200"
                >
                  Top Red Risk Players
                </h2>
                <template v-if="redRiskPlayers.length > 0">
                  <table class="w-full text-white">
                    <thead>
                      <tr
                        class="border border-gray-600"
                        style="font-size: 14px"
                      >
                        <th class="p-2 text-left">Player</th>
                        <th class="p-2">Position</th>
                        <th class="p-2">JER</th>
                        <th class="p-2">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="player in redRiskPlayers.slice(0, 4)"
                        :key="player.athlete_id"
                        class="hover:bg-gray-700 border border-gray-600"
                        style="font-size: 16px"
                      >
                        <td class="p-2 flex items-center space-x-3">
                          <div
                            class="bg-white rounded"
                            style="height: 48px; width: 48px"
                          ></div>
                          <span
                            >{{ player.first_name }}
                            {{ player.last_name }}</span
                          >
                        </td>
                        <td class="p-2 text-center">
                          {{ player.position_code }}
                        </td>
                        <td class="p-2 text-center"># - -</td>
                        <td class="p-2 text-center">
                          {{ player.star_rating }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="p-2 flex justify-center py-6 w-full rounded-b-lg">
                    <div
                      class="flex items-center justify-between py-2 px-6 rounded-full cursor-pointer border border-gray-600"
                      style="background-color: #292929; font-size: 14px"
                    >
                      <router-link to="/ratings" class="text-sm mr-3">
                        View All Red Risk Players
                      </router-link>

                      <div class="w-4 h-4 bg-gray-700 rounded mt-1"></div>
                    </div>
                  </div>
                </template>
                <p v-else class="p-4 text-center text-gray-400">
                  No Data Found
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border border-gray-600"
              style="background-color: #292929"
            >
              <div class="border-t-4 border-green-500 rounded-lg">
                <h2
                  class="text-lg font-semibold text-white bg-black p-2"
                  style="font-size: 20px"
                >
                  Player Comparison
                </h2>
                <div
                  class="w-full text-white flex items-center justify-between h-16 p-2"
                  style="font-size: 16px"
                >
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-2"
                      style="height: 48px; width: 48px"
                    ></div>
                    <span>Name of Player</span>
                  </div>
                  <span>Vs</span>
                  <div class="flex items-center">
                    <div
                      class="bg-white rounded mr-2"
                      style="height: 48px; width: 48px"
                    ></div>
                    <span>Name of Player</span>
                  </div>
                </div>
                <div
                  class="border border-gray-600 p-2 py-6 w-full rounded-b-lg"
                >
                  <div
                    class="p-1 flex flex-col justify-center text-sm"
                    style="text-align: center"
                  >
                    <h2
                      class="text-lg mb-2"
                      style="font-size: 24px; font-weight: 200"
                    >
                      Headline for compare a player section
                    </h2>
                    <span class="w-sm mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis tempore totam error repudiandae iure cupiditate
                      fugiat, mollitia expedita at consequatur.
                    </span>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="flex items-center justify-between border border-gray-600 py-2 px-6 rounded-full cursor-pointer"
                      style="background-color: #292929"
                    >
                      <span class="text-sm mr-3"
                        >View All Red Risk Players</span
                      >
                      <div class="w-4 h-4 bg-gray-700 rounded mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import apiClient from "@/services/axiosInstance";
// import axios from "axios";

// Simulated dummy data
const dummyData = {
  user: {
    avatar: "src/assets/images/avatar.jpg",
    name: "John Doe",
    role: "Team Manager",
  },
  schoolName: "E3 Academy",
  record: "10 Wins, 2 Losses",
  conferencePosition: "2nd Place",
  schedule: [
    { date: "2024-10-20", opponent: "Team A", time: "3:00 PM" },
    { date: "2024-10-27", opponent: "Team B", time: "4:00 PM" },
    { date: "2024-11-03", opponent: "Team C", time: "5:00 PM" },
  ],
  staff: [
    { id: 1, position: "Head Coach", name: "Alice Smith", year: "5th" },
    { id: 2, position: "Assistant Coach", name: "Bob Johnson", year: "3rd" },
    { id: 3, position: "Strength Coach", name: "Charlie Brown", year: "2nd" },
  ],
  players: {
    greenRisk: [
      { id: 1, name: "Player 1", position: "Forward", rating: 85 },
      { id: 2, name: "Player 2", position: "Defender", rating: 90 },
    ],
    yellowRisk: [
      { id: 3, name: "Player 3", position: "Midfielder", rating: 75 },
      { id: 4, name: "Player 4", position: "Goalkeeper", rating: 70 },
    ],
    redRisk: [
      { id: 5, name: "Player 5", position: "Forward", rating: 60 },
      { id: 6, name: "Player 6", position: "Defender", rating: 50 },
    ],
  },
};
const searchTerm = ref("");
const payload = ref({
  player_name: null,
  player_position: null,
  min_height: null,
  max_height: null,
  min_weight: null,
  max_weight: null,
  page: 1,
  perPage: 10,
  player_rank: null,
  school_year: null,
  star_rating: null,
});

// Reactive properties
const navItems = ref([]);
const userAvatar = ref("");
const userName = ref("");
const firstName = ref("");
const lastName = ref("");
const userRole = ref("");
const schoolName = ref("");
const record = ref("");
const conferencePosition = ref("");
const schedule = ref([]);
const staff = ref([]);
const greenRiskPlayers = ref([]);
const yellowRiskPlayers = ref([]);
const redRiskPlayers = ref([]);
const selectedSeason = ref("2024/25");
const selectedPosition = ref("All");
const selectedRating = ref("Green Risk");

const isSidebarOpen = ref(false);

const fetchPlayerData = async () => {
  try {
    payload.value.player_name = searchTerm.value || null;

    const response = await apiClient.post("/athlete/search", payload.value);
    const { data } = response.data;

    // Filter based on risk_tier and take first 4 of each
    greenRiskPlayers.value = data.data
      .filter((player) => player.risk_tier === "Green")
      .slice(0, 4);
    yellowRiskPlayers.value = data.data
      .filter((player) => player.risk_tier === "Yellow")
      .slice(0, 4);
    redRiskPlayers.value = data.data
      .filter((player) => player.risk_tier === "Red")
      .slice(0, 4);
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
};

// Function to fetch data
const fetchData = async () => {
  try {
    navItems.value = dummyData.navItems;
    schoolName.value = dummyData.schoolName;
    record.value = dummyData.record;
    conferencePosition.value = dummyData.conferencePosition;
    schedule.value = dummyData.schedule;
    staff.value = dummyData.staff;
    greenRiskPlayers.value = dummyData.players.greenRisk;
    yellowRiskPlayers.value = dummyData.players.yellowRisk;
    redRiskPlayers.value = dummyData.players.redRisk;

    // const response = await axios.get('api-endpoint');
    // const data = response.data;
    // Update your state variables based on the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  const storedUser = localStorage.getItem("eaUser");

  if (storedUser) {
    const userData = JSON.parse(storedUser);
    userName.value = `${userData.first_name} ${userData.last_name}`;
    firstName.value = userData.first_name;
    lastName.value = userData.last_name;
    userAvatar.value = "../assets/images/avatar.jpg";
    userRole.value = userData.organization || "User Role";
  }
  fetchPlayerData();
  fetchData();
});
watch(searchTerm, (newTerm) => {
  fetchPlayerData();
});
const headerBackgroundColor = ref("#151616");
const sidebarBackgroundColor = ref("#282829");
</script>
