// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home/Home";

import StudentDashboardPage from "./pages/StudentDashboardPage";
import TutorDashboardPage from "./pages/TutorDashboardPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <RegistrationPage />,
    },
    {
      path: "/signin",
      element: <LoginPage />,
    },
    {
      path: "/student-dashboard",
      element: <StudentDashboardPage />,
    },
    {
      path: "/tutor-dashboard",
      element: <TutorDashboardPage />,
    },
  ];
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
