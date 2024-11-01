import axios from "axios";
import { BASE_URL } from "../config";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong",
    );
  },
);

export default axiosInstance;
