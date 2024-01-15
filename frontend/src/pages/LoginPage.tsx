// pages/LoginPage.tsx

import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = async (formData: any) => {
    // Add logic to send login data to the server
    try {
      const registrationResponse = await loginUser(formData);
      console.log(registrationResponse);
      navigate("/dashboard");
    } catch (error) {}
  };

  return (
    <div>
      <NavigationBar />
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
