import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    currentUser: null,
    loader: false
  },

  getters: {},

  mutations: {
    changeUsers(state, data) {
      state.users = data;
    },

    changeCurrentUser(state, data) {
      state.currentUser = data;
    },

    changeLoader(state) {
      state.loader = !state.loader;
    }
  },

  actions: {
    async getAllUsers({ commit }, data) {
      try {
        commit("changeLoader");
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            params: {
              username: data
            }
          }
        );
        commit("changeUsers", response.data);
      } catch (err) {
        console.log("Ошибка запроса");
      } finally {
        setTimeout(() => {
          commit("changeLoader");
        }, 1000);
      }
    }
  }
});
