// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Admin/Sidebar";
import DashboardContent from "./Admin/DashboardContent";
import NavBar from "./Admin/NavBar";
import Login from "./Login/Login";
import useAuth from "./Hooks/useAuth";
// import LoginWelcome from "./Login/LoginWelcome";

//Logins
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
        <Route path="/" element={<LoginWelcome />} /> {/* Home page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/facilitator/login" element={<FacilitatorLogin />} />
        <Route path="/learner/login" element={<LearnerLogin />} />
        {/* Protected Admin routes */}
        <Route
          path="/admin"
          element={
            // isAuthenticated ?
            <div>
              <NavBar selectedMenu={selectedMenu} />
              <div className="flex h-screen">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
                <div className="flex-1 flex flex-col bg-gray-100">
                  <div className="p-4 flex-1">
                    <DashboardContent selectedMenu={selectedMenu} />
                  </div>
                </div>
              </div>
            </div>
            // : (
            //   <Navigate to="/login" />
            // )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
