// pages/RegistrationPage.tsx

import React from "react";
import RegistrationForm from "../components/Auth/RegistrationForm";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { registerUser } from "../api/api"; // Import the registerUser function

const RegistrationPage: React.FC = () => {
  const handleRegistration = async (formData: any) => {
    try {
      // Add logic to send registration data to the server
      const registrationResponse = await registerUser(formData);
      console.log("Registration form data:", formData);
    } catch (error: any) {
      throw error; // Re-throw the error to propagate it to the calling code
    }
  };

  return (
    <div>
      <NavigationBar />
      <h1>Registration</h1>
      <RegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};

export default RegistrationPage;
