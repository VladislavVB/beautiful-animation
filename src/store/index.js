// import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    // casesList: []
  },
  mutations: {
    // SET_CASESLIST_TO_STATE: (state, casesList) => {
    //   state.casesList = casesList;
    // }
  },
  actions: {
    // GET_CASESLIST_FROM_API({commit}) {
    //   return axios('http://axas.api.sector.show/api/get-cases', {
    //     method: "GET"
    //   })
    //   .then((casesList) => {
    //     commit('SET_CASESLIST_TO_STATE', casesList.data)
    //     return casesList;
    //   })
    //   .catch((error ) => {
    //     console.log(error);
    //     return error;
    //   })
    // }
  },
  getters: {
    // CASESLIST(state) {
    //   return state.casesList;
    // }
  },
});
