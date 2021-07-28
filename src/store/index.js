import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    submitHandler({ commit }, credentials) {
      console.log(commit);
      console.log(credentials);
    },
  },
  modules: {},
});
