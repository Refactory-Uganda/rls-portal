import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for internal navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/assets/css/sidebar.css';
import LogoutModal from "./LogoutModal";
import api from "../services/api";
api

const Sidebar = ({ selectedMenu, setSelectedMenu, menuItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768); // Default to collapsed on smaller screens
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigate = useNavigate();
  const handleLogoutConfirm = () => {

   
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("lastEmail"); // Optional: If you saved email for autofill
  
      // Navigate to login page
      navigate("/", { replace: true }); 
    // }
  };

  const handleLogoutClose = () => {
    setIsModalOpen(false); // Close the modal if the user clicks "No"
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
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on click
          className="d-flex align-items-center py-2 text-decoration-none text-white"
        >
          <i className="fas fa-sign-out-alt icon-large me-2"></i>
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={isModalOpen}
        onClose={handleLogoutClose} // Close modal on "No"
        onConfirm={handleLogoutConfirm} // Perform logout on "Yes"
      />
    </div>
  );
};

export default Sidebar;
