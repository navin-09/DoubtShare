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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          dolor eu sapien cursus, vel commodo quam facilisis. Duis sit amet
          justo non tortor varius vulputate. Integer sed metus et lectus
          hendrerit fringilla. Nullam interdum est eget felis convallis, id
          dictum odio feugiat.
        </p>
        <p>
          Fusce vel tristique odio. Vivamus eu ante eu elit bibendum fermentum
          vel ut dolor. Sed congue velit vel turpis auctor, sit amet feugiat
          nulla tristique. Duis vel ligula vel metus tincidunt tincidunt ut vel
          purus.
        </p>
      </div>
    </div>
  );
};

export default Home;
