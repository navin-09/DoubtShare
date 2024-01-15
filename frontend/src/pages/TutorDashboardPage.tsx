// pages/LoginPage.tsx

import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import TutorDashboard from "../components/dashboard/TutorDashboard/TutorDashboard";

const TutorDashboardPage: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <h1>Tutor DashBoard</h1>
      <TutorDashboard />
    </div>
  );
};

export default TutorDashboardPage;
