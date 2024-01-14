// pages/LoginPage.tsx

import React from "react";
import Home from "../components/Home/Home";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const LoginPage: React.FC = () => {
  const handleLogin = (formData: any) => {
    // Add logic to send login data to the server
    console.log("Login form data:", formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <NavigationBar />
      <Home />
    </div>
  );
};

export default LoginPage;
