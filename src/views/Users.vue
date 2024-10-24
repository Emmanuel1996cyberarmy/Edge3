<template>
  <div class="min-h-screen text-white" style="background-color: #151616">
    <Header :bgColor="headerBackgroundColor" />
    <Sidebar :bgColor="sidebarBackgroundColor" />

    <div class="min-h-screen text-white p-8 py-10 background-image">
      <div class="container mx-auto p-4 pt-20">
        <div
          class="flex justify-between items-center mb-4"
          style="margin-left: 120px; margin-right: 100px"
        >
          <h1 class="text-2xl font-bold">User Management</h1>
          <button
            @click="openAddUserModal"
            class="bg-[#a4cd39] text-white px-4 py-2 rounded-md"
            :disabled="isLoading"
          >
            <span v-if="isLoading && actionType === 'add'">Loading...</span>
            <span v-else>Add User</span>
          </button>
        </div>

        <!-- Loading state for fetching users -->
        <div
          v-if="isLoading && actionType === 'fetch'"
          class="text-center py-4"
        >
          Loading users...
        </div>

        <!-- Table to display users -->
        <div
          v-else
          class="overflow-x-auto bg-gray-800 rounded-lg mx-auto p-2 my-6"
          style="margin-left: 120px; margin-right: 70px"
        >
          <div class="overflow-x-auto w-full">
            <table class="min-w-full table-auto border-collapse">
              <thead class="bg-gray-900 text-left text-sm table-row-spacing">
                <tr
                  class="text-left text-sm table-row-spacing"
                  style="
                    background-color: #1e1f1f;
                    border-bottom: 2px #4b4b4b;
                    font-size: 16px;
                  "
                >
                  <th class="py-3 px-2">ID</th>
                  <th class="py-3 px-2">First Name</th>
                  <th class="py-3 px-2">Last Name</th>
                  <th class="py-3 px-2">Email</th>
                  <th class="py-3 px-2">Created At</th>
                  <th class="py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody class="border border-gray-700">
                <tr
                  v-for="user in users"
                  :key="user.id"
                  class="bg-black border-b border-gray-800 text-sm"
                  style="border-bottom: 2px #4b4b4b; font-size: 16px"
                >
                  <td class="px-2 py-3">{{ user.id }}</td>
                  <td class="px-2 py-3">{{ user.first_name }}</td>
                  <td class="px-2 py-3">{{ user.last_name }}</td>
                  <td class="px-2 py-3">{{ user.email }}</td>
                  <td class="px-2 py-3">
                    {{ new Date(user.created_at).toLocaleDateString() }}
                  </td>
                  <td class="px-2 py-3 flex space-x-2">
                    <button
                      @click="openEditUserModal(user)"
                      class="bg-[#a4cd39] text-white px-3 py-1 rounded"
                      :disabled="isLoading && actionType === 'edit'"
                    >
                      <span v-if="isLoading && actionType === 'edit'"
                        >Loading...</span
                      >
                      <span v-else>Edit</span>
                    </button>
                    <button
                      @click="confirmDelete(user.id)"
                      class="bg-red-500 text-white px-3 py-1 rounded"
                      :disabled="isLoading && actionType === 'delete'"
                    >
                      <span v-if="isLoading && actionType === 'delete'"
                        >Loading...</span
                      >
                      <span v-else>Delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pagination Controls -->
        <div
          class="flex justify-between items-center m-6"
          style="margin-left: 100px; margin-right: 100px"
        >
          <button
            @click="changePage(meta.prev_page_url)"
            :disabled="!meta.prev_page_url || isLoading"
            class="px-4 py-2 bg-gray-600 text-white rounded-md"
          >
            Previous
          </button>
          <div class="text-sm">
            Page {{ meta.current_page }} of {{ meta.last_page }}
          </div>
          <button
            @click="changePage(meta.next_page_url)"
            :disabled="!meta.next_page_url || isLoading"
            class="px-4 py-2 bg-gray-600 text-white rounded-md"
          >
            Next
          </button>
        </div>

        <!-- Add User Modal -->
        <div
          v-if="showAddUserModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div
            class="bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto max-h-[80vh] overflow-y-auto"
          >
            <h2 class="text-base font-bold mb-3">Add New User</h2>

            <!-- First Name Field -->
            <div class="mb-3">
              <label class="block mb-1 text-sm">First Name</label>
              <input
                v-model="newUser.first_name"
                type="text"
                class="w-full px-2 py-1 rounded bg-gray-800 text-white text-sm"
              />
              <p v-if="errors.first_name.length" class="text-red-500 text-xs">
                {{ errors.first_name[0] }}
              </p>
            </div>

            <!-- Last Name Field -->
            <div class="mb-3">
              <label class="block mb-1 text-sm">Last Name</label>
              <input
                v-model="newUser.last_name"
                type="text"
                class="w-full px-2 py-1 rounded bg-gray-800 text-white text-sm"
              />
              <p v-if="errors.last_name.length" class="text-red-500 text-xs">
                {{ errors.last_name[0] }}
              </p>
            </div>

            <!-- Email Field -->
            <div class="mb-3">
              <label class="block mb-1 text-sm">Email</label>
              <input
                v-model="newUser.email"
                type="email"
                class="w-full px-2 py-1 rounded bg-gray-800 text-white text-sm"
              />
              <p v-if="errors.email.length" class="text-red-500 text-xs">
                {{ errors.email[0] }}
              </p>
            </div>

            <!-- Password Field -->
            <div class="mb-3">
              <label class="block mb-1 text-sm">Password</label>
              <input
                v-model="newUser.password"
                type="password"
                class="w-full px-2 py-1 rounded bg-gray-800 text-white text-sm"
              />
              <p v-if="errors.password.length" class="text-red-500 text-xs">
                {{ errors.password[0] }}
              </p>
            </div>

            <!-- Role Dropdown -->
            <div class="mb-3">
              <label class="block mb-1 text-sm">Role</label>
              <select
                v-model="newUser.role_id"
                class="w-full px-2 py-1 rounded bg-gray-800 text-white text-sm"
              >
                <option value="" disabled>Select a role</option>
                <option
                  v-for="role in roles"
                  :key="role.role_id"
                  :value="role.role_id"
                >
                  {{ role.role_name }}
                </option>
              </select>
            </div>

            <div class="flex justify-between">
              <button
                @click="addUser"
                class="bg-green-500 text-white px-3 py-1 rounded text-sm"
                :disabled="isLoading && actionType === 'add'"
              >
                <span v-if="isLoading && actionType === 'add'">Loading...</span>
                <span v-else>Add</span>
              </button>
              <button
                @click="closeAddUserModal"
                class="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <!-- Edit User Modal -->
        <div
          v-if="showEditUserModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div
            class="bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto max-h-[80vh] overflow-y-auto"
          >
            <h2 class="text-lg font-bold mb-4">Edit User</h2>

            <!-- First Name Field -->
            <div class="mb-4">
              <label class="block mb-2">First Name</label>
              <input
                v-model="editUser.first_name"
                type="text"
                class="w-full px-3 py-2 rounded bg-gray-800 text-white"
              />
              <p v-if="errors.first_name.length" class="text-red-500 text-sm">
                {{ errors.first_name[0] }}
              </p>
            </div>

            <!-- Last Name Field -->
            <!-- <div class="mb-4">
              <label class="block mb-2">Last Name</label>
              <input
                v-model="editUser.last_name"
                type="text"
                class="w-full px-3 py-2 rounded bg-gray-800 text-white"
              />
              <p v-if="errors.last_name.length" class="text-red-500 text-sm">
                {{ errors.last_name[0] }}
              </p>
            </div> -->

            <!-- Email Field -->
            <div class="mb-4">
              <label class="block mb-2">Email</label>
              <input
                v-model="editUser.email"
                type="email"
                class="w-full px-3 py-2 rounded bg-gray-800 text-white"
              />
              <p v-if="errors.email.length" class="text-red-500 text-sm">
                {{ errors.email[0] }}
              </p>
            </div>

            <!-- Role Dropdown -->
            <div class="mb-4">
              <label class="block mb-2">Role</label>
              <select
                v-model="editUser.role_id"
                required
                class="w-full px-3 py-2 required rounded bg-gray-800 text-white"
              >
                <option value="" disabled>Select a role</option>
                <option
                  v-for="role in roles"
                  :key="role.role_id"
                  :value="role.role_id"
                >
                  {{ role.role_name }}
                </option>
              </select>
            </div>

            <div class="flex justify-between">
              <button
                @click="updateUser"
                class="bg-blue-500 text-white px-4 py-2 rounded"
                :disabled="isLoading && actionType === 'edit'"
              >
                <span v-if="isLoading && actionType === 'edit'"
                  >Loading...</span
                >
                <span v-else>Save</span>
              </button>
              <button
                @click="closeEditUserModal"
                class="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <div
          v-if="showDeleteModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 class="text-lg font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this user?</p>
            <div class="flex justify-between mt-4">
              <button
                @click="deleteUser"
                class="bg-red-500 text-white px-4 py-2 rounded"
                :disabled="isLoading && actionType === 'delete'"
              >
                <span v-if="isLoading && actionType === 'delete'"
                  >Deleting...</span
                >
                <span v-else>Delete</span>
              </button>
              <button
                @click="closeDeleteModal"
                class="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import apiClient from "@/services/axiosInstance";

// Variables for users, modals, loading, and pagination
const users = ref([]);
const meta = ref({}); // For pagination
const roles = ref([]);
const errors = ref({
  first_name: [],
  last_name: [],
  email: [],
  password: [],
});

const isLoading = ref(false);
const actionType = ref(""); // To identify the action type (fetch, add, edit, delete)
const showAddUserModal = ref(false);
const showEditUserModal = ref(false);
const showDeleteModal = ref(false);
const newUser = ref({ first_name: "", last_name: "", email: "", password: "" });
const editUser = ref({});
const userIdToDelete = ref(null);
const headerBackgroundColor = ref("#151616");
const sidebarBackgroundColor = ref("#000");

// Fetch users with pagination
const fetchUsers = async (pageUrl = "/users") => {
  isLoading.value = true;
  actionType.value = "fetch";
  try {
    const response = await apiClient.get(pageUrl);
    if (response.data.status === "success") {
      users.value = response.data.data.data;
      meta.value = response.data.data; // Pagination meta information
    } else {
      console.error("Failed to fetch users:", response.data.message);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoading.value = false;
  }
};

// Fetch roles for dropdown
const fetchRoles = async () => {
  try {
    const response = await apiClient.get("/roles");
    if (response.data.status === "success") {
      roles.value = response.data.data.data;
    } else {
      console.error("Failed to fetch roles:", response.data.message);
    }
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};

// Add User function
const addUser = async () => {
  isLoading.value = true;
  actionType.value = "add";
  errors.value = { first_name: [], last_name: [], email: [], password: [] };

  try {
    const response = await apiClient.post("/users", newUser.value);
    if (response.data.status === "success") {
      fetchUsers(); // Refresh table after successful addition
      closeAddUserModal(); // Close modal
    } else {
      handleApiErrors(response.data.errors);
    }
  } catch (error) {
    handleApiErrors(error.response.data.errors);
  } finally {
    isLoading.value = false;
  }
};

// Update User function
const updateUser = async () => {
  isLoading.value = true;
  actionType.value = "edit";
  try {
    const response = await apiClient.put(
      `/users/${editUser.value.id}`,
      editUser.value
    );
    if (response.data.status === "success") {
      fetchUsers(); // Refresh table after successful update
      closeEditUserModal();
    } else {
      handleApiErrors(response.data.errors);
    }
  } catch (error) {
    handleApiErrors(error.response.data.errors);
  } finally {
    isLoading.value = false;
  }
};

// Delete User function
const deleteUser = async () => {
  isLoading.value = true;
  actionType.value = "delete";
  try {
    const response = await apiClient.delete(`/users/${userIdToDelete.value}`);
    if (response.data.status === "success") {
      fetchUsers(); // Refresh table after deletion
      closeDeleteModal();
    } else {
      console.error("Failed to delete user:", response.data.message);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  } finally {
    isLoading.value = false;
  }
};

// Handle API validation errors
const handleApiErrors = (apiErrors) => {
  if (apiErrors) {
    Object.keys(apiErrors).forEach((field) => {
      errors.value[field] = apiErrors[field]; // Display specific errors for each field
    });
  }
};

// Pagination logic
const changePage = (pageUrl) => {
  if (pageUrl) fetchUsers(pageUrl);
};

// Open modals
const openAddUserModal = () => {
  if (roles.value.length > 0) {
    newUser.value.role_id = roles.value[0].role_id;
  }
  showAddUserModal.value = true;
};

const openEditUserModal = (user) => {
  editUser.value = { ...user };
  if (roles.value.length > 0) {
    editUser.value.role_id = roles.value[0].role_id;
  }
  showEditUserModal.value = true;
};

const confirmDelete = (userId) => {
  userIdToDelete.value = userId;
  showDeleteModal.value = true;
};

// Close modals
const closeAddUserModal = () => {
  showAddUserModal.value = false;
  newUser.value = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role_id: "",
  };
  errors.value = { first_name: [], last_name: [], email: [], password: [] };
};

const closeEditUserModal = () => {
  showEditUserModal.value = false;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  userIdToDelete.value = null;
};

// On component mount, fetch users and roles
onMounted(() => {
  fetchUsers();
  fetchRoles();
});
</script>

<style scoped>
.content-container {
  padding-left: 90px;
  padding-top: 70px;
}
.table-row-spacing th,
.table-row-spacing td {
  padding: 12px;
  border: 2px solid #4b4b4b;
}
</style>
