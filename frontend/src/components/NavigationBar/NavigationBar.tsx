// components/NavigationBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { useAuth } from "../../contexts/AuthContext";

const NavigationBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" alt="DoubtShare" />
      </Link>
      <div>
        {!isAuthenticated && <Link to="/signup">Sign Up</Link>}
        {!isAuthenticated && <Link to="/signin">Sign In</Link>}
        {isAuthenticated && <button onClick={logout}>Sign Out</button>}
        {/* Add other authenticated links if needed */}
      </div>
    </nav>
  );
};

export default NavigationBar;
