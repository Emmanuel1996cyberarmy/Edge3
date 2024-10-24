import Cookies from "js-cookie";

export default {
  namespaced: true,
  state: {
    token: Cookies.get("authToken") || null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      Cookies.set("authToken", token, { expires: 7 });
    },
    CLEAR_TOKEN(state) {
      state.token = null;
      Cookies.remove("authToken");
    },
  },
  actions: {
    login({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    logout({ commit }) {
      commit("CLEAR_TOKEN");
    },
  },
  getters: {
    token: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
  },
};
