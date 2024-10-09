import React, { useState, useEffect } from "react";
import Courses from "./Courses";
import CreateCourse from "./CreateCourse";
import InitialDashboard from "./InitialDashboard";


const DashboardContent = ({ selectedMenu }) => {

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      {selectedMenu === "dashboard" && <InitialDashboard />}
      {selectedMenu === "courses" &&
        <Courses/>}
      {selectedMenu === "create course" && <CreateCourse />}
    </div>
  );
};

export default DashboardContent;
