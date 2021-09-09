import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = {
    // page: 1,
    api_key: API_KEY,
    ...config.params,
  };
  return config;
});

export default api;
