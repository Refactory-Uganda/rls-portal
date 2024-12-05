import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../../src/assets/css/navbar.css";

const Navbar = ({ email, role }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to extract initials from email
  const getInitialsFromEmail = (email) => {
    if (!email) return ""; // Return empty string if no email
    const namePart = email.split("@")[0]; // Get part before '@'
    const initials = namePart[0].toUpperCase() + namePart[1].toUpperCase(); // Get first 2 letters
    return initials;
  };

  const initials = getInitialsFromEmail(email);

  return (
    <nav className="navbar navbar-light bg-light shadow-sm sticky">
      <a href="#" className="navbar-brand">
        <img
          src="../src/assets/Images/login-logo.png"
          className="h-4 nav-logo"
          alt="Logo"
        />
      </a>

      <div
        className="ms-8"
        style={{ fontSize: "25px", marginRight: "600px", marginTop: "5px" }}
      >
        <p style={{ marginBottom: "2px" }}>Hi, {role}</p>
      </div>

      <div className="d-flex align-items-center">
        {/* Notification Bell with red dot */}
        <button className="btn btn-link position-relative me-4">
          <span className="material-icons text-secondary">notifications</span>
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            style={{ width: "8px", height: "8px" }} // Adjust size of dot
          />
        </button>

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
            {/* Displaying initials */}
            <div
              className="rounded-circle me-2 d-flex justify-content-center align-items-center"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#6c757d", // Customize background color
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {initials}
            </div>
            <span className="material-icons text-secondary">expand_more</span>
          </DropdownToggle>

          <DropdownMenu end>
            <DropdownItem href="#">Profile</DropdownItem>
            <DropdownItem href="#">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
