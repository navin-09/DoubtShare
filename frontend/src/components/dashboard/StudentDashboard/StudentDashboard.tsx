// StudentDashboard.tsx
import React, { useState } from "react";
import OngoingSessions from "./OngoingSessions";
import DoubtHistory from "./DoubtHistory";
import "./StudentDashboard.css"; // Import the CSS file

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, Student!</h2>

      <div className="tab-buttons">
        <button
          className={activeTab === "ongoing" ? "active" : ""}
          onClick={() => handleTabChange("ongoing")}
        >
          Ongoing Sessions
        </button>
        <button
          className={activeTab === "history" ? "active" : ""}
          onClick={() => handleTabChange("history")}
        >
          Doubt History
        </button>
      </div>

      {activeTab === "ongoing" && <OngoingSessions />}
      {activeTab === "history" && <DoubtHistory />}
    </div>
  );
};

export default StudentDashboard;
