
import axios from "axios";

const userManagementApi = axios.create({
  baseURL: "http://localhost:5000/api/users",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPendingUsers = async () => {
  const response = await userManagementApi.get("/pending");
  return response.data;
};

export const approveUser = async (userId, role) => {
  const response = await userManagementApi.patch(
    `/${userId}/approve`,
    { role }
  );

  return response.data;
};

export const rejectUser = async (userId) => {
  const response = await userManagementApi.patch(
    `/${userId}/reject`
  );

  return response.data;
};

export default userManagementApi;
