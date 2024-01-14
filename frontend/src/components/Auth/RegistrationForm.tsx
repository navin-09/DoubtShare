// components/RegistrationForm.tsx

import React, { useState } from "react";
import "./RegistrationForm.css";

interface RegistrationFormProps {
  onSubmit: (formData: RegistrationFormData) => void;
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
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
