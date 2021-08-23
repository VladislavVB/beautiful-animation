// import axios from "axios";
import { createStore } from "vuex";
import api from "../instance/api";
import { SENDCONTACTFORM_URL } from "../api/apiSend";

export default createStore({
  state: {
    successWindow: false,
  },
  mutations: {
    showSuccess(state) {
      state.successWindow = true;
    },
    closeSuccess(state) {
      state.successWindow = false;
    },
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
          this.state.App.showSuccess = true;
          setTimeout(() => {
            this.state.App.showSuccess = false;
          }, 2000);
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
