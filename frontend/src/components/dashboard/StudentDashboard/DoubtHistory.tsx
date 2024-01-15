// DoubtHistory.tsx
import React, { useEffect, useState } from "react";

const DoubtHistory = () => {
  const [doubtHistory, setDoubtHistory] = useState([]);

  useEffect(() => {
    // Implement API call to fetch doubt history
    // Update doubtHistory state with the fetched data
  }, []);

  return (
    <div>
      <h2>Doubt History</h2>
      {/* Display doubt history with sorting and filtering options */}
    </div>
  );
};

export default DoubtHistory;
