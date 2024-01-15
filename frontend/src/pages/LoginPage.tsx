// pages/LoginPage.tsx

import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (formData: any) => {
    // Add logic to send login data to the server
    try {
      const { user } = await loginUser(formData);
      const token = user.activeToken;
      // console.log(user, user.activeToken);
      // useAuth;
      login(token);
      // localStorage.setItem("token", token);

      user.role === "Student"
        ? navigate("/student-dashboard")
        : navigate("/tutor-dashboard");
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
