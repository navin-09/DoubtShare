// TutorDoubtRequests.tsx
import React, { useEffect, useState } from "react";

const TutorDoubtRequests = () => {
  const [doubtRequests, setDoubtRequests] = useState([]);

  useEffect(() => {
    // Implement API call to fetch relevant doubt requests for the tutor
    // Update doubtRequests state with the fetched data
  }, []);

  const handleAcceptRequest = (requestId: any) => {
    // Implement API call to accept the specific doubt request
  };

  return (
    <div>
      <h2>Doubt Requests</h2>
      {/* Display doubt requests with options to accept or reject */}
    </div>
  );
};

export default TutorDoubtRequests;
