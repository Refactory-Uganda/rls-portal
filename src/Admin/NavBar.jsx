import React, { useState } from "react";

const Navbar = ({ selectedMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <img src="../src/assets/Images/login-logo.png" className="h-12" />
      <div className="flex items-center">
        <button className="relative mr-4">
          <span className="material-icons text-gray-500">notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2"
          >
            <img
              src="../src/assets/images/rls-logo-white.png"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="material-icons text-gray-500">expand_more</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
