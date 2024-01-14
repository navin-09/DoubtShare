// api/api.ts

import axios from "axios";

const BASE_URL = "http://localhost:3001"; // Replace with your actual API base URL
// http://localhost:3001/auth/signup
export const registerUser = async (formData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, formData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (formData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, formData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
