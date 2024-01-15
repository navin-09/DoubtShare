// pages/LoginPage.tsx

import React from "react";
import Home from "../components/Home/Home";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <NavigationBar />
      <Home />
    </div>
  );
};

export default LoginPage;
