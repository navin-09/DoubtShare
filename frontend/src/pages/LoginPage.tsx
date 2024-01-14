// pages/LoginPage.tsx

import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const LoginPage: React.FC = () => {
  const handleLogin = (formData: any) => {
    // Add logic to send login data to the server
    console.log("Login form data:", formData);
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
