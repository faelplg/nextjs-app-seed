import axios from "axios";
import { getToken } from "../services/authentication.service";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
});

api.interceptors.request.use(async config => {
  if (getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});

export default api;