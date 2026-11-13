
import axios from "axios";

const dashboardApi = axios.create({
  baseURL: "http://localhost:5000/api/dashboard",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSuperAdminDashboard = async () => {
  const response = await dashboardApi.get("/super-admin");
  return response.data;
};

export const getAdminDashboard = async () => {
  const response = await dashboardApi.get("/admin");
  return response.data;
};

export default dashboardApi;
