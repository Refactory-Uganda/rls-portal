import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/assets/css/sidebar.css';

const Sidebar = ({ selectedMenu, setSelectedMenu, menuItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768); // Default to collapsed on smaller screens

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768); // Collapse if the width is smaller than 768px
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener
  }, []);

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
            <i className="fas fa-arrows-alt-h"></i>
          </button>
        </div>
      </div>

      <nav className="flex-grow-1 p-3 sidebar-nav" id="nav-items">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            to={item.to} // Use 'to' for internal routing
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
          to="/logout" // Adjust as needed for logout route
          className="d-flex align-items-center py-2 text-decoration-none text-white"
        >
          <i className="fas fa-sign-out-alt icon-large me-2"></i>
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
