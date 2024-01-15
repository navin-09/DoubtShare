import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllSubjects, postDoubt, getUserDetails } from "../../../../api/api";
import { useAuth } from "../../../../contexts/AuthContext";

const MyDoubts = (subject: any) => {
  const [doubtHistory, setDoubtHistory] = useState([]);
  const { isAuthenticated, login, logout } = useAuth();
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [userQuestion, setUserQuestion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { Subjects } = await getAllSubjects();
        setSubjects(Subjects);
      } catch (error) {
        console.error("Error fetching subjects: ", error);
      }
    };

    fetchData();
  }, []);

  const submitQuestion = async () => {
    // Assuming there's an API endpoint to handle question submission
    // You need to replace 'YOUR_API_ENDPOINT' with the actual endpoint
    const { userDetails } = await getUserDetails();
    const formData = {
      studentId: userDetails.user_id,
      subjectId: selectedSubject,
      question: userQuestion,
    };
    const { Subjects } = await postDoubt(formData);
  };

  return (
    <div>
      {/* Dropdown for selecting subjects */}
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option value="">Select Subject</option>
        {subjects.map((subject: any) => (
          <option key={subject.subject_id} value={subject.subject_id}>
            {subject.subject_name}
          </option>
        ))}
      </select>

      {/* Doubt History List */}
      <ul className="doubt-list">
        {doubtHistory.map((doubt: any) => (
          <li key={doubt.doubtId}>
            <span>Subject: {doubt.doubtSubject}</span>
            <span>Tutor: {doubt.tutorName}</span>
            <span>Status: {doubt.status}</span>
            <span>Date: {doubt.date}</span>
          </li>
        ))}
      </ul>

      {/* Question Box */}
      <input
        type="text"
        value={userQuestion}
        onChange={(e) => setUserQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      <button onClick={submitQuestion}>Submit Question</button>
    </div>
  );
};

export default MyDoubts;
