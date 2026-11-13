import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signupUser = async (userData) => {
  const response = await authApi.post("/signup", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await authApi.post("/login", credentials);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await authApi.get("/me");
  return response.data;
};

export const logoutUser = async () => {
  const response = await authApi.post("/logout");
  return response.data;
};

export default authApi;