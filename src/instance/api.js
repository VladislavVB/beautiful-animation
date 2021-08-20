
import axios from "axios";
//1|MYoPCIo1VZESfSADf5GhkQE7Hnm1BxUcywdSw8q1
const API_URL = 'http://axas.api.sector.show/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

api.interceptors.request.use(
  async (config) => {
    const token = '1|MYoPCIo1VZESfSADf5GhkQE7Hnm1BxUcywdSw8q1';
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