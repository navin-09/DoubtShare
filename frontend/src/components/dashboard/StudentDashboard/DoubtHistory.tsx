// DoubtHistory.tsx
import React, { useState } from "react";
import AllDoubts from "./doubts/AllDoubts";
import MyDoubts from "./doubts/MyDoubts";
import "./DoubtHistory.css";

const DoubtHistory = () => {
  const [filterBy, setFilterBy] = useState("all"); // Default filter to show all doubts
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // "all" or "myDoubts"

  const handleFilterChange = (newFilterBy: any) => {
    setFilterBy(newFilterBy);
  };

  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
  };

  const handleGradeChange = (event: any) => {
    setGrade(event.target.value);
  };

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <h3>Doubt History</h3>

      {/* Tabs for "All Doubts" and "My Doubts" */}
      <div className="tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => handleTabChange("all")}
        >
          All Doubts
        </button>
        <button
          className={activeTab === "myDoubts" ? "active" : ""}
          onClick={() => handleTabChange("myDoubts")}
        >
          My Doubts
        </button>
      </div>

      {/* Display filtering options */}
      <div className="filter-options">
        <label>Filter By:</label>
        <select
          onChange={(e) => handleFilterChange(e.target.value)}
          value={filterBy}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Display components based on the active tab */}
      <div className="tabs-content">
        <div className={`tab-content ${activeTab === "all" ? "active" : ""}`}>
          <AllDoubts filterBy={filterBy} />
        </div>
        <div
          className={`tab-content ${activeTab === "myDoubts" ? "active" : ""}`}
        >
          <MyDoubts subject={subject} grade={grade} />
        </div>
      </div>
    </section>
  );
};

export default DoubtHistory;
