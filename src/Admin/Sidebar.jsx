import React, { useState } from 'react';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`flex flex-col h-full transition-all duration-300 text-white ${
                isCollapsed ? 'w-20' : 'w-64'
            }`}
            style={{ backgroundColor: '#663367', borderRadius: '20px' }}
        >
            <div className="p-6">
                <div className="flex items-center justify-between">
                    
                    {!isCollapsed && (
                        <img src="images/refactory_logo.jpg" alt="Logo" className="h-12 mb-6" />
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
                            src="images/profile_icon.jpeg"
                            alt="User Avatar"
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="ml-2">
                            <p>Hi, Admin</p>
                        </div>
                    </div>
                )}
            </div>

            
            <nav className="flex-1 p-4 space-y-2">
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
            </nav>

           
            <div className="p-4">
                <a href="#" className="flex items-center py-2 px-4 bg-white rounded hover:bg-gray-200 transition duration-200 text-black">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    {!isCollapsed && <span className="ml-4">Logout</span>}
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
