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

// Import Facilitator Components
import FacilitatorNavbar from "./Facilitator/FacilitatorNavbar";
import FacilitatorSidebar from "./Facilitator/FacilitatorSidebar";
import FacilitatorDashboardContent from "./Facilitator/FacilitatorDashboardContent";
import AssignmentsContent from "./Facilitator/AssignmentsContent"; 


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
          }
        />
        
        {/* Admin-specific route for Assignments page */}
        <Route
          path="/admin/assignments"
          element={
            <div className="d-flex flex-column h-100">
              <NavBar selectedMenu={selectedMenu} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <AssignmentsContent /> {/* Renders the Assignments page */}
                </div>
              </div>
            </div>
          }
        />

        {/* Protected Facilitator routes */}
        <Route
          path="/facilitator"
          element={
            <div className="d-flex flex-column h-100">
              <FacilitatorNavbar selectedMenu={selectedMenu} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <FacilitatorSidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <FacilitatorDashboardContent selectedMenu={selectedMenu} />
                </div>
              </div>
            </div>
          }
        />

        {/* Facilitator-specific route for Assignments page (optional) */}
        <Route
          path="/facilitator/assignments"
          element={
            <div className="d-flex flex-column h-100">
              <FacilitatorNavbar selectedMenu={selectedMenu} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <FacilitatorSidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <AssignmentsContent /> {/* Renders the Assignments page */}
                </div>
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
