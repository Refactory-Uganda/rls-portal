// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Sidebar from "./Admin/Sidebar";
import DashboardContent from "./Admin/DashboardContent";
import NavBar from "./Admin/NavBar";
import Login from "./Login/Login";
import useAuth from "./Hooks/useAuth";

// Logins
import LoginWelcome from "./Auth/users/LoginWelcome";
import AdminLogin from "./Auth/users/AdminLogin";
import FacilitatorLogin from "./Auth/users/FacilitatorLogin";
import LearnerLogin from "./Auth/users/LearnerLogin";

const App = () => {
  const { isAuthenticated } = useAuth();
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginWelcome />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/facilitator/login" element={<FacilitatorLogin />} />
        <Route path="/learner/login" element={<LearnerLogin />} />
        {/* Protected Admin routes */}
        <Route
          path="/admin"
          element={
            <div className="d-flex flex-column h-100">
              <NavBar selectedMenu={selectedMenu} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <DashboardContent selectedMenu={selectedMenu} />
                </div>
              </div>
            </div>
            // Uncomment this line to enable authentication check
            // isAuthenticated ? (
            // ) : (
            //   <Navigate to="/login" />
            // )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
