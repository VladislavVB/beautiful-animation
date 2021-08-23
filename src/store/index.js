// import axios from "axios";
import { createStore } from "vuex";
import api from "../instance/api";
import {SENDCONTACTFORM_URL} from "../api/apiSend";

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
    sendRequest(context, payload) {
      api
        .post(`${SENDCONTACTFORM_URL}`, {
          ...payload,
        })
        .then(() => {
          console.log("NIce");
        })
        .catch((err) => {
          console.log(err);
        });
      context;
    },
  },
  getters: {
    // CASESLIST(state) {
    //   return state.casesList;
    // }
  },
});
