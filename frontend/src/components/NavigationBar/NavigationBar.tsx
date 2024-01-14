// components/NavigationBar.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" alt="DoubtShare" />
      </Link>
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
