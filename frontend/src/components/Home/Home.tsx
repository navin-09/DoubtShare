// pages/Home.tsx

import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1>Welcome to DoubtShare</h1>
        <p>
          DoubtShare is an interactive real-time doubt-solving platform designed
          to assist students with their academic queries.
        </p>
      </div>
    </div>
  );
};

export default Home;
