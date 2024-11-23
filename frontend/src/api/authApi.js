import axiosInstance from "./axiosInstance";

const authApi = {
  login: (data) => axiosInstance.post("/auth/login", data),
  register: (data) => axiosInstance.post("/auth/register", data),
  logout: () => axiosInstance.get("/auth/logout"),
  fetchProfile: () => axiosInstance.get("/auth/profile"), // Example protected route
};

export default authApi;
