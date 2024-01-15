// components/RegistrationForm.tsx

import React, { useState } from "react";
import "./RegistrationForm.css";

interface RegistrationFormProps {
  onSubmit: (formData: RegistrationFormData) => Promise<void>; // Now onSubmit returns a Promise
}

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  role: string;
  class_grade?: string;
  language: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    password: "",
    role: "",
    class_grade: "",
    language: "",
  });

  const [error, setError] = useState<string | null>(null); // State to store error messages

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state before making the API call

    try {
      // Call the onSubmit function passed from the parent component
      await onSubmit(formData);
    } catch (error: any) {
      // Handle the error by updating the error state
      if (error.response) {
        setError(`API Error: ${error.response.data.error}`);
      } else {
        setError("Network Error: Unable to connect to the server.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      {error && (
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      )}

      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Role
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Tutor">Tutor</option>
        </select>
      </label>

      <label>
        Class Grade
        <input
          type="text"
          name="class_grade"
          value={formData.class_grade}
          onChange={handleChange}
        />
      </label>

      <label>
        Language
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
