// DoubtCreationForm.tsx
import React, { useState } from "react";

const DoubtCreationForm = () => {
  const [doubtSubject, setDoubtSubject] = useState("");

  const handleDoubtCreation = () => {
    // Implement API call to create doubt request
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Doubt Subject"
        value={doubtSubject}
        onChange={(e) => setDoubtSubject(e.target.value)}
      />
      <button onClick={handleDoubtCreation}>Create Doubt</button>
    </div>
  );
};

export default DoubtCreationForm;
