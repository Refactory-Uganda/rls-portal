import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/assets/css/sidebar.css';

const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", key: "dashboard", href: "#", iconClass: "fas fa-tachometer-alt" },
    { name: "Courses", key: "courses", href: "#", iconClass: "fas fa-book" },
    { name: "Learners", key: "learners", href: "#", iconClass: "fas fa-user-graduate" },
    { name: "Facilitators", key: "facilitators", href: "#", iconClass: "fas fa-chalkboard-teacher" },
    // { name: "Create Course", key: "createCourse", href: "#", iconClass: "fas fa-plus-circle" },
  ];

  return (
    <div
      className={`d-flex flex-column vh-100`}
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
          <a
            key={item.key}
            onClick={() => setSelectedMenu(item.key)}
            className={`d-flex align-items-center py-2 text-decoration-none text-white sidebar-btn ${selectedMenu === item.key ? "active" : ""}`}
            href={item.href}
          >
            <i className={`${item.iconClass} icon-large me-2`}></i>
            {!isCollapsed && <span>{item.name}</span>}
          </a>
        ))}
      </nav>

      <div className="p-3">
        <a
          href="#"
          className="d-flex align-items-center py-2 text-decoration-none text-white"
        >
          <i className="fas fa-sign-out-alt icon-large me-2"></i>
          {!isCollapsed && <span>Logout</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
