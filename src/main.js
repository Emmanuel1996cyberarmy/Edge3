import "./assets/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import apiClient from "./services/axiosInstance";

const app = createApp(App);

app.config.globalProperties.$http = apiClient;

app.use(router);

app.mount("#app");
