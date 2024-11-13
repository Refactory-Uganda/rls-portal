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
import Sidebar from "./Components/Sidebar";
import DashboardContent from "./Admin/DashboardContent";
import Navbar from "./Components/Navbar";
import Login from "./Login/Login";
import useAuth from "./Hooks/useAuth";


// Logins
import LoginWelcome from "./Auth/users/LoginWelcome";
import AdminLogin from "./Auth/users/AdminLogin";
import FacilitatorLogin from "./Auth/users/FacilitatorLogin";
import LearnerLogin from "./Auth/users/LearnerLogin";

//Import Admin Components
import Courses from "./Admin/Courses";

// Import Facilitator Components
// import FacilitatorNavbar from "./Facilitator/FacilitatorNavbar";
// import FacilitatorSidebar from "./Facilitator/FacilitatorSidebar";
import FacilitatorDashboardContent from "./Facilitator/FacilitatorDashboardContent";
import AssignmentsContent from "./Facilitator/AssignmentsContent";
import CourseList from "./Facilitator/CourseList";
import Course from "./Facilitator/Course";


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
              <Navbar email={"jkanza@refactory.academy"} role={"Admin"} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    { name: "Dashboard", key: "dashboard", to: "/admin", iconClass: "fas fa-tachometer-alt" },
                    { name: "Courses", key: "courses", to: "/admin/courses", iconClass: "fas fa-book" },
                    { name: "Learners", key: "learners", to: "/admin/learners", iconClass: "fas fa-user-graduate" },
                    { name: "Facilitators", key: "facilitators", to: "/admin/facilitators", iconClass: "fas fa-chalkboard-teacher" },
                  ]}
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
          path="/admin/courses"
          element={
            <div className="d-flex flex-column h-100">
              <Navbar email={"jkanza@refactory.academy"} role={"Admin"} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    { name: "Dashboard", key: "dashboard", to: "/admin", iconClass: "fas fa-tachometer-alt" },
                    { name: "Courses", key: "courses", to: "/admin/courses", iconClass: "fas fa-book" },
                    { name: "Learners", key: "learners", to: "/admin/learners", iconClass: "fas fa-user-graduate" },
                    { name: "Facilitators", key: "facilitators", to: "/admin/facilitators", iconClass: "fas fa-chalkboard-teacher" },
                  ]}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <Courses
                  />
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
              <Navbar email={"dnambafu@refactory.academy"} role={"Facilitator"} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    { name: "Dashboard", key: "dashboard", to: "/facilitator", iconClass: "fas fa-tachometer-alt" },
                    { name: "Courses", key: "courses", to: "/facilitator/courses", iconClass: "fas fa-book" },
                    { name: "Learners", key: "learners", to: "/facilitator/learners", iconClass: "fas fa-user-graduate" },
                    { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-chalkboard-teacher" },
                    { name: "Assignments", key: "assignments", to: "/facilitator/assignments", iconClass: "fas fa-book" },
                  ]}
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
              <Navbar email={"dnambafu@refactory.academy"} role={"Facilitator"} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    { name: "Dashboard", key: "dashboard", to: "/facilitator", iconClass: "fas fa-tachometer-alt" },
                    { name: "Courses", key: "courses", to: "/facilitator/courses", iconClass: "fas fa-book" },
                    { name: "Learners", key: "learners", to: "/facilitator/learners", iconClass: "fas fa-user-graduate" },
                    { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-chalkboard-teacher" },
                    { name: "Assignments", key: "assignments", to: "/facilitator/assignments", iconClass: "fas fa-book" },
                  ]}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <AssignmentsContent />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/facilitator/course"
          element={
            <div className="d-flex flex-column h-100">
              <Navbar email={"dnambafu@refactory.academy"} role={"Facilitator"} />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    { name: "Dashboard", key: "dashboard", to: "/facilitator", iconClass: "fas fa-tachometer-alt" },
                    { name: "Course", key: "courses", to: "/facilitator/course", iconClass: "fas fa-book" },
                    { name: "Learners", key: "learners", to: "/facilitator/learners", iconClass: "fas fa-user-graduate" },
                    { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-chalkboard-teacher" },
                    { name: "Assignments", key: "assignments", to: "/facilitator/assignments", iconClass: "fas fa-book" },
                  ]}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <Course />
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
