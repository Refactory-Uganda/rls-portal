import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../../src/assets/css/navbar.css";
import ProfileModal from "./ProfileModal"; // Import the new ProfileModal component
import LogoutModal from "./LogoutModal"

const Navbar = ({ email, role }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State for profile modal visibility
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State for logout modal visibility
  const [user, setUser] = useState({
    name: "John Doe", // Default name, will be updated later
    initials: email.split("@")[0].slice(0, 2).toUpperCase(), // Default initials based on email
    image: null, // Placeholder for profile image
  });

  // Toggle dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle profile image save
  const handleProfileSave = (updatedProfile) => {
    setUser(updatedProfile); // Update user state with new image or name
  };

  // Handle logout confirmation
  const handleLogout = () => {
    // Perform logout logic here, like redirecting or clearing session data
    window.location.href = "/"; // Redirect to index page
  };

  // Handle closing the modal
  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <nav className="navbar navbar-light bg-light shadow-sm sticky">
      <a href="#" className="navbar-brand">
        <img
          src="/login-logo.png"
          className="h-4 nav-logo"
          alt="Logo"
        />
      </a>

      <div
        className="ms-8"
        style={{ fontSize: "25px", marginRight: "600px", marginTop: "5px" }}
      >
        <p style={{ marginBottom: "2px", color: "#38BFC3", fontWeight: "5px" }}>Hi, {role}</p>
      </div>

      <div className="d-flex align-items-center">
        {/* Notification Bell with red dot */}
        {/* <button className="btn btn-link position-relative me-4">
          <span className="material-icons text-secondary">notifications</span>
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            style={{ width: "8px", height: "8px" }} // Adjust size of dot
          />
        </button> */}

        {/* Dropdown for user profile */}
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
          className="d-inline-block"
        >
          <DropdownToggle
            tag="button"
            className="btn d-flex align-items-center p-0"
            data-toggle="dropdown"
          >
            {/* Displaying profile image or initials */}
            <div
              className="rounded-circle me-2 d-flex justify-content-center align-items-center"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#6c757d", // Customize background color
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer", // Makes it clear the initials/image is clickable
              }}
            >
              {user.image ? (
                <img
                  src={user.image}
                  alt="Profile"
                  style={{
                    width: "32px",
                    height: "32px",
                    objectFit: "cover", // Crop image to fit within the circle
                    borderRadius: "50%"
                  }}
                />
              ) : (
                user.initials
              )}
            </div>
            <span className="material-icons text-secondary">expand_more</span>
          </DropdownToggle>

          <DropdownMenu end className="dropdown">
            {/* Profile option that opens the profile modal */}
            <DropdownItem onClick={() => setIsProfileModalOpen(true)}>Profile</DropdownItem>
            <DropdownItem onClick={() => setIsLogoutModalOpen(true)}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Render the Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        user={{
          ...user,
          email: email,    // Add email explicitly
          role: role       // Add role explicitly
        }}
        onSave={handleProfileSave}
      />

      {/* Render the Logout Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={closeLogoutModal}
        onConfirm={handleLogout} // Logout logic here
      />
    </nav>
  );
};

export default Navbar;
