import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Navbar = ({ selectedMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 shadow-sm">
      <a href="#" className="navbar-brand">
        <img src="../src/assets/Images/login-logo.png" className="h-12" alt="Logo" />
      </a>
      
      <div className="d-flex align-items-center">
        <button className="btn btn-link position-relative me-4">
          <span className="material-icons text-secondary">notifications</span>
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
        </button>

        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="d-inline-block">
          <DropdownToggle
            tag="button"
            className="btn btn-link d-flex align-items-center p-0"
            data-toggle="dropdown"
          >
            <img
              src="../src/assets/images/rls-logo-white.png"
              alt="User Avatar"
              className="rounded-circle me-2"
              style={{ width: '32px', height: '32px' }}
            />
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
