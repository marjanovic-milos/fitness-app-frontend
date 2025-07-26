// axiosInstance.js
import axios from "axios";

// Create Axios instance
const http = axios.create({
  baseURL: "https://localhost:3001/api/v1/", // update with your actual API
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
http.interceptors.request.use(
  (config) => {
    // If config.skipAuth is true, do not attach token
    if (config.skipAuth) {
      return config;
    }

    // Otherwise, attach the token
    const token = localStorage.getItem("access_token"); // or wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
