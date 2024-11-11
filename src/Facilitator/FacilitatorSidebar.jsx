import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/assets/css/sidebar.css';

const FacilitatorSidebar = ({ selectedMenu, setSelectedMenu }) => { 
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", key: "dashboard", path: "/facilitator", iconClass: "fas fa-tachometer-alt" },
    { name: "Courses", key: "courses", path: "/facilitator/courses", iconClass: "fas fa-book",},
    { name: "Learners", key: "learners", path: "/facilitator/learners", iconClass: "fas fa-user-graduate" },
    { name: "Resources", key: "resources", path: "/facilitator/resources", iconClass: "fas fa-chalkboard-teacher" },
    { name: "Assignments", key: "assignments", path: "/facilitator/assignments", iconClass: "fas fa-book" },
  ];

  return (
    <div
      className={`d-flex flex-column sidebar`}
      style={{
        backgroundColor: 'rgba(102, 51, 103)',
        color: 'white',
        width: isCollapsed ? "80px" : "250px",
        transition: "width 0.3s"
      }}
    >
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
          <button onClick={toggleSidebar} className="btn btn-outline-light">
            <i className="bi bi-arrow-left-right"></i>
          </button>
        </div>
      </div>

      <nav className="flex-grow-1 p-3 sidebar-nav" id="nav-items">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            to={item.path} // Use to attribute for navigation
            onClick={() => setSelectedMenu(item.key)}
            className={`d-flex align-items-center py-2 text-decoration-none text-white sidebar-btn ${selectedMenu === item.key ? "active" : ""}`}
          >
            <i className={`${item.iconClass} icon-large me-2`}></i>
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-3">
        <Link
          to="/logout" // Assuming you have a logout route
          className="d-flex align-items-center py-2 text-decoration-none text-white"
        >
          <i className="fas fa-sign-out-alt icon-large me-2"></i>
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default FacilitatorSidebar;
