// import axios from "axios";
import { createStore } from "vuex";
import api from "../instance/api";
import router from "../router";
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
    //     commit('SET_CASESLIST_TO_STAthis.$router.push("/");E', casesList.data)
    //     return casesList;
    //   })
    //   .catch((error ) => {
    //     console.log(error);
    //     return error;
    //   })
    // }
    sendRequest(context, payload) {
      const formData = new FormData();
      console.log(...payload);
      console.log(...payload.selectedFile);
      formData.append("file", ...payload.selectedFile);
      api
        .post(`${SENDCONTACTFORM_URL}`, {
          ...payload,
        })
        .then((res) => {
          console.log(res);
          this.commit('setApi', res.data);
          router.push("/thanks");
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
