// AllDoubts.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const AllDoubts = ({ filterBy }: any) => {
  const [doubtHistory, setDoubtHistory] = useState([]);

  useEffect(() => {
    // Fetch doubt history with filtering
    axios
      .get(`/api/doubt/history?filterBy=${filterBy}`)
      .then((response) => setDoubtHistory(response.data))
      .catch((error) => console.error("Error fetching doubt history: ", error));
  }, [filterBy]); // Re-fetch data when filtering options change

  return (
    <div>
      {/* Doubt History List */}
      <ul className="doubt-list">
        {doubtHistory.map((doubt: any) => (
          <li key={doubt.doubtId}>
            <span>Subject: {doubt.doubtSubject}</span>
            <span>Tutor: {doubt.tutorName}</span>
            <span>Status: {doubt.status}</span>
            <span>Date: {doubt.date}</span>
            {/* Add more doubt history details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllDoubts;
