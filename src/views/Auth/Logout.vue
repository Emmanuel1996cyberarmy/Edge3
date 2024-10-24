<template>
  <div>
    <p>Logging out...</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

export default {
  setup() {
    const router = useRouter();

    const logout = () => {
      Cookies.remove("authToken");
      localStorage.removeItem("authToken");

      router.push("/login");
    };

    logout();

    return {};
  },
};
</script>

<style scoped>
/* Add some simple styles to show a logout message */
p {
  font-size: 18px;
  text-align: center;
  color: #333;
}
</style>
