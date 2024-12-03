// import React from "react";
import Courses from "./Courses";
import CreateCourse from "./createCourse"; // Ensure case matches
import InitialDashboard from "./InitialDashboard";

const DashboardContent = ({ selectedMenu }) => {
  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      {(() => {
        switch (selectedMenu) {
          case "dashboard":
            return <InitialDashboard />;
          case "courses":
            return <Courses />;
          case "createCourse": // Ensure this matches your key in menuItems
            return <CreateCourse />;
          default:
            return <InitialDashboard />; // Or some default component
        }
      })()}
    </div>
  );
};

export default DashboardContent;
