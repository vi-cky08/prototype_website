import axios from "axios";

const adminApi = axios.create({
  baseURL: "http://localhost:5000/api/admins",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createAdmin = async (data) => {
  const response = await adminApi.post("/", data);
  return response.data;
};

export const getAdmins = async () => {
  const response = await adminApi.get("/");
  return response.data;
};

export const deactivateAdmin = async (id) => {
  const response = await adminApi.patch(
    `/${id}/deactivate`
  );

  return response.data;
};

export default adminApi;