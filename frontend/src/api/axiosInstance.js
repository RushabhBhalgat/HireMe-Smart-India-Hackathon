// client/src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3600", // Base URL for your backend
  withCredentials: true, // Allow cookies to be sent with requests for session-based auth
});

export default axiosInstance;
