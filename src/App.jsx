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
import Navbar from "./Components/Navbar";
import useAuth from "./Hooks/useAuth";

// Logins
import Login from "./Login/Login";
import LoginWelcome from "./Auth/users/LoginWelcome";
import AdminLogin from "./Auth/users/AdminLogin";
import FacilitatorLogin from "./Auth/users/FacilitatorLogin";
import LearnerLogin from "./Auth/users/LearnerLogin";

//Import Admin Components
import Courses from "./Admin/Courses";
import DashboardContent from "./Admin/DashboardContent";
import Facilitators from "./Admin/Facilitators";
import Learners from "./Admin/Learners";

// Import Facilitator Components
import FacilitatorDashboardContent from "./Facilitator/FacilitatorDashboardContent";
import AssignmentsPage from "./Facilitator/Assignments";
import CourseList from "./Facilitator/CourseList";
import Course from "./Facilitator/Course";
// import Resources from "./Facilitator/Resources";
import CourseLearners from "./Facilitator/CourseLearners";

//Import Learner Components
import LearnerDashboard from "./Learner/LearnerDashboard";
import Calendar from "./Learner/Calendar";
import LearnerAssignments from "./Learner/LearnerAssignments";
import LCourse from "./Learner/Course";
import ProtectedRoute from "./Auth/users/context/ProtectedRoute";

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
            // <ProtectedRoute allowedRoles={["Administrator"]}>
              <div className="d-flex flex-column h-100">
                <Navbar email={"Jalia@refactory.academy"} role={"Admin"} />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/admin",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Courses",
                        key: "courses",
                        to: "/admin/courses",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/admin/learners",
                        iconClass: "fas fa-users",
                      },
                      {
                        name: "Facilitators",
                        key: "facilitators",
                        to: "/admin/facilitators",
                        iconClass: "fas fa-chalkboard-teacher",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <DashboardContent selectedMenu={selectedMenu} />
                  </div>
                </div>
              </div>
            // </ProtectedRoute>
          }
        />

        {/* Admin-specific route for Assignments page */}
        <Route
          path="/admin/courses"
          element={
            // <ProtectedRoute allowedRoles={["Administrator"]}>
              <div className="d-flex flex-column h-100">
                <Navbar email={"Jalia@refactory.academy"} role={"Admin"} />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/admin",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Courses",
                        key: "courses",
                        to: "/admin/courses",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/admin/learners",
                        iconClass: "fas fa-users",
                      },
                      {
                        name: "Facilitators",
                        key: "facilitators",
                        to: "/admin/facilitators",
                        iconClass: "fas fa-chalkboard-teacher",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <Courses />
                  </div>
                </div>
              </div>
            // </ProtectedRoute>
          }
        />

        {/* Admin-specific route for Facilitators page */}
        <Route
          path="/admin/facilitators"
          element={
            // <ProtectedRoute allowedRoles={["Administrator"]}>
              <div className="d-flex flex-column h-100">
                <Navbar email={"Jalia@refactory.academy"} role={"Admin"} />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/admin",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Courses",
                        key: "courses",
                        to: "/admin/courses",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/admin/learners",
                        iconClass: "fas fa-users",
                      },
                      {
                        name: "Facilitators",
                        key: "facilitators",
                        to: "/admin/facilitators",
                        iconClass: "fas fa-chalkboard-teacher",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <Facilitators />
                  </div>
                </div>
              </div>
            // </ProtectedRoute>
          }
        />

        {/* Admin-specific route for Learners page */}
        <Route
          path="/admin/learners"
          element={
            // <ProtectedRoute allowedRoles={["Administrator"]}>
              <div className="d-flex flex-column h-100">
                <Navbar email={"Jalia@refactory.academy"} role={"Admin"} />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/admin",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Courses",
                        key: "courses",
                        to: "/admin/courses",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/admin/learners",
                        iconClass: "fas fa-users",
                      },
                      {
                        name: "Facilitators",
                        key: "facilitators",
                        to: "/admin/facilitators",
                        iconClass: "fas fa-chalkboard-teacher",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <Learners />
                  </div>
                </div>
              </div>
            // </ProtectedRoute>
          }
        />

        {/* Protected Facilitator routes */}
        <Route
          path="/facilitator"
          element={
            <ProtectedRoute allowedRoles={["Staff"]}>
              <div className="d-flex flex-column h-100">
                <Navbar
                  email={"ikalumba@refactory.academy"}
                  role={"Facilitator"}
                />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/facilitator",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Course",
                        key: "course",
                        to: "/facilitator/course",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/facilitator/learners",
                        iconClass: "fas fa-users",
                      },
                      // { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-folder-open" },
                      {
                        name: "Assignments",
                        key: "assignments",
                        to: "/facilitator/assignments",
                        iconClass: "fas fa-tasks",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <FacilitatorDashboardContent selectedMenu={selectedMenu} />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Facilitator-specific route for Assignments page (optional) */}
        <Route
          path="/facilitator/assignments"
          element={
            <ProtectedRoute allowedRoles={["Staff"]}>
              <div className="d-flex flex-column h-100">
                <Navbar
                  email={"ikalumba@refactory.academy"}
                  role={"Facilitator"}
                />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/facilitator",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Course",
                        key: "course",
                        to: "/facilitator/course",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/facilitator/learners",
                        iconClass: "fas fa-users",
                      },
                      // { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-folder-open" },
                      {
                        name: "Assignments",
                        key: "assignments",
                        to: "/facilitator/assignments",
                        iconClass: "fas fa-tasks",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <AssignmentsPage />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/facilitator/course"
          element={
            <ProtectedRoute allowedRoles={["Staff"]}>
              <div className="d-flex flex-column h-100">
                <Navbar
                  email={"ikalumba@refactory.academy"}
                  role={"Facilitator"}
                />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/facilitator",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Course",
                        key: "course",
                        to: "/facilitator/course",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/facilitator/learners",
                        iconClass: "fas fa-users",
                      },
                      // { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-folder-open" },
                      {
                        name: "Assignments",
                        key: "assignments",
                        to: "/facilitator/assignments",
                        iconClass: "fas fa-tasks",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <Course />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/facilitator/learners"
          element={
            <ProtectedRoute allowedRoles={["Staff"]}>
              <div className="d-flex flex-column h-100">
                <Navbar
                  email={"ikalumba@refactory.academy"}
                  role={"Facilitator"}
                />
                <div className="d-flex flex-grow-1 main-sidebar-content">
                  <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={[
                      {
                        name: "Dashboard",
                        key: "dashboard",
                        to: "/facilitator",
                        iconClass: "fas fa-tachometer-alt",
                      },
                      {
                        name: "Course",
                        key: "course",
                        to: "/facilitator/course",
                        iconClass: "fas fa-book",
                      },
                      {
                        name: "Learners",
                        key: "learners",
                        to: "/facilitator/learners",
                        iconClass: "fas fa-users",
                      },
                      // { name: "Resources", key: "resources", to: "/facilitator/resources", iconClass: "fas fa-folder-open" },
                      {
                        name: "Assignments",
                        key: "assignments",
                        to: "/facilitator/assignments",
                        iconClass: "fas fa-tasks",
                      },
                    ]}
                  />
                  <div className="flex-grow-1 bg-light dash-content">
                    <CourseLearners />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Protected Learner routes */}
        <Route
          path="/learner"
          element={
            <div className="d-flex flex-column h-100">
              <Navbar
                email={"dnambafu.student@refactory.academy"}
                role={"Learner"}
              />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    {
                      name: "Dashboard",
                      key: "dashboard",
                      to: "/learner",
                      iconClass: "fas fa-tachometer-alt",
                    },
                    {
                      name: "Course",
                      key: "course",
                      to: "/learner/course",
                      iconClass: "fas fa-book",
                    },
                    {
                      name: "Assignments",
                      key: "assignments",
                      to: "/learner/assignments",
                      iconClass: "fas fa-tasks",
                    },
                    {
                      name: "Calendar",
                      key: "calendar",
                      to: "/learner/calendar",
                      iconClass: "fas fa-calendar-alt",
                    },
                  ]}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <LearnerDashboard selectedMenu={selectedMenu} />
                </div>
              </div>
            </div>
          }
        />

        {/* Learner-specific route for Calendar */}
        <Route
          path="/learner/calendar"
          element={
            <div className="d-flex flex-column h-100">
              <Navbar
                email={"dnambafu.student@refactory.academy"}
                role={"Learner"}
              />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    {
                      name: "Dashboard",
                      key: "dashboard",
                      to: "/learner",
                      iconClass: "fas fa-tachometer-alt",
                    },
                    {
                      name: "Course",
                      key: "course",
                      to: "/learner/course",
                      iconClass: "fas fa-book",
                    },
                    {
                      name: "Assignments",
                      key: "assignments",
                      to: "/learner/assignments",
                      iconClass: "fas fa-tasks",
                    },
                    {
                      name: "Calendar",
                      key: "calendar",
                      to: "/learner/calendar",
                      iconClass: "fas fa-calendar-alt",
                    },
                  ]}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <Calendar />
                </div>
              </div>
            </div>
          }
        />

        {/* Learner-specific route for Assignments */}
        <Route
          path="/learner/assignments"
          element={
            <div className="d-flex flex-column h-100">
              <Navbar
                email={"dnambafu.student@refactory.academy"}
                role={"Learner"}
              />
              <div className="d-flex flex-grow-1 main-sidebar-content">
                <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    {
                      name: "Dashboard",
                      key: "dashboard",
                      to: "/learner",
                      iconClass: "fas fa-tachometer-alt",
                    },
                    {
                      name: "Course",
                      key: "course",
                      to: "/learner/course",
                      iconClass: "fas fa-book",
                    },
                    {
                      name: "Assignments",
                      key: "assignments",
                      to: "/learner/assignments",
                      iconClass: "fas fa-tasks",
                    },
                    {
                      name: "Calendar",
                      key: "calendar",
                      to: "/learner/calendar",
                      iconClass: "fas fa-calendar-alt",
                    },
                  ]}
                />
                <div className="flex-grow-1 bg-light dash-content">
                  <LearnerAssignments />
                </div>
              </div>
            </div>
          }
        />

        {/* Learner-specific route for course */}
        <Route
          path="/learner/course"
          element={
            <div className="d-flex flex-column h-100">
              <Navbar
                email={"dnambafu.student@refactory.academy"}
                role={"Learner"}
              />
              {/* <div className="d-flex flex-grow-1 main-sidebar-content"> */}
              {/* <Sidebar
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  menuItems={[
                    { name: "Dashboard", key: "dashboard", to: "/learner", iconClass: "fas fa-tachometer-alt" },
                    { name: "Course", key: "course", to: "/learner/course", iconClass: "fas fa-book" },
                    { name: "Assignments", key: "assignments", to: "/learner/assignments", iconClass: "fas fa-tasks" },
                    { name: "Calendar", key: "calendar", to: "/calendar", iconClass: "fas fa-calendar-alt" },

                  ]}
                /> */}
              <div
                className="flex-grow-1 bg-light"
                style={{ paddingTop: "5rem" }}
              >
                <LCourse />
              </div>
              {/* </div> */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
