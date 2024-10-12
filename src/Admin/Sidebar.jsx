import React, { useState } from "react";

const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    // { name: "Dashboard", key: "dashboard" },
    // { name: "Courses", key: "courses" },
    // { name: "Learners", key: "learners" },
    // { name: "Facilitators", key: "facilitators" },

    {
      name: "Dashboard",
      key: "dashboard",
      href: "#",
      iconClass: "fas fa-tachometer-alt",
    },
    { name: "Courses", key: "courses", href: "#", iconClass: "fas fa-book" },
    {
      name: "Learners",
      key: "learners",
      href: "#",
      iconClass: "fas fa-user-graduate",
    },
    {
      name: "Facilitators",
      key: "facilitators",
      href: "#",
      iconClass: "fas fa-chalkboard-teacher",
    },
    {
      name: "CreateCourse",
      key: "create course",
      href: "#",
      iconClass: "fas fa-chalkboard-teacher",
    },
  
    
    // { href: "#", iconClass: "fas fa-tachometer-alt", label: "Dashboard" },
    // { href: "#", iconClass: "fas fa-book", label: "Courses" },
    // { href: "#", iconClass: "fas fa-chalkboard-teacher", label: "Facilitators" },
    // { href: "#", iconClass: "fas fa-user-graduate", label: "Learners" },
  ];
  return (
    <div
      className={`flex flex-col h-full transition-all duration-300 text-white ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      style={{ backgroundColor: "#663367", borderRadius: "20px" }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <img
              src="../src/assets/images/rls-logo-white.png"
              alt="Logo"
              className="h-12 mb-6"
            />
          )}

          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {!isCollapsed && (
          <div className="flex items-center">
            <img
              src="../src/assets/images/profile_icon.jpeg"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-2">
              <p>Hi, Admin</p>
            </div>
          </div>
        )}
      </div>

      {/* <nav className="flex-1 p-4 space-y-2">
                <a href="#" className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black">
                    <i className="fas fa-tachometer-alt mr-2 text-black"></i>
                    {!isCollapsed && <span className="ml-6">Dashboard</span>}
                </a>
                <a href="#" className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black">
                    <i className="fas fa-book mr-2 text-black"></i>
                    {!isCollapsed && <span className="ml-6">Courses</span>}
                </a>
                <a href="#" className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black">
                    <i className="fas fa-chalkboard-teacher mr-2 text-black"></i>
                    {!isCollapsed && <span className="ml-6">Facilitators</span>}
                </a>
                <a href="#" className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black">
                    <i className="fas fa-user-graduate mr-2 text-black"></i>
                    {!isCollapsed && <span className="ml-6">Learners</span>}
                </a>
            </nav> */}

      {/* REFACTOR */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={item.key}
            onClick={() => setSelectedMenu(item.key)}
            // href={item.href}
            className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black"
          >
            <i className={`${item.iconClass} mr-2 text-black`}></i>
            {!isCollapsed && <span className="ml-6">{item.name}</span>}
          </a>
        ))}
      </nav>

      <div className="p-4">
        <a
          href="#"
          className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black"
        >
          <i className="fas fa-sign-out-alt mr-2"></i>
          {!isCollapsed && <span className="ml-4">Logout</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
