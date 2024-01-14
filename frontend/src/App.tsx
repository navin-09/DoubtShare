// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home/Home";

function App() {
  const routes = [
    {
      path: "/",
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
  ];
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
