import axios from "axios";
import { BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = {
    api_key: process.env.REACT_APP_API_KEY,
    ...config.params,
  };

  return config;
});

export default api;
