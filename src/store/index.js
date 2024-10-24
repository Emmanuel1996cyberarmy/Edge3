import { createStore } from "vuex";
import players from "./modules/players";
import schedule from "./modules/schedule";
import staff from "./modules/staff";
import filters from "./modules/filters";
import auth from "./modules/auth";

export default createStore({
  modules: {
    players,
    schedule,
    staff,
    filters,
    auth,
  },
});
