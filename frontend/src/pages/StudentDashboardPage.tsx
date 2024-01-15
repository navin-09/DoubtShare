// pages/LoginPage.tsx

import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import StudentDashboard from "../components/dashboard/StudentDashboard/StudentDashboard";

const StudentDashboardPage: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <h1>Student DashBoard</h1>
      <StudentDashboard />
    </div>
  );
};

export default StudentDashboardPage;
