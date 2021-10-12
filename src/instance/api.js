
import axios from "axios";
//1|MYoPCIo1VZESfSADf5GhkQE7Hnm1BxUcywdSw8q1
const API_URL = 'http://axas.api.sector.show/api/';
const API_TOKEN = '1|MYoPCIo1VZESfSADf5GhkQE7Hnm1BxUcywdSw8q1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
  timeout: 5000,
});

api.interceptors.request.use(
  async (config) => {
    const token = API_TOKEN;
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;