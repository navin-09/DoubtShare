// api/api.ts

import axios from "axios";

const BASE_URL = "http://localhost:3001"; // Replace with your actual API base URL

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

export const getAllSubjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getAllSubjects`);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const postDoubt = async (doubtData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/postDoubt`, doubtData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");

    // Check if the token is available
    if (!token) {
      throw new Error("Token not found in local storage");
    }
    // Set the token in the headers
    const headers = {
      Authorization: token,
    };
    // Make the request with headers
    const response = await axios.post(
      `${BASE_URL}/auth/getUserDetails`,
      {},
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error getting user details:", error);
    throw error;
  }
};
