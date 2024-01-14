// LoginForm.tsx

import React, { useState } from "react";
import "./RegistrationForm.css";
interface LoginFormProps {
  onSubmit: (formData: LoginFormValues) => void;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
