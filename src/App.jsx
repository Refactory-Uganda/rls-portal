import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Admin/Sidebar";
import DashboardContent from "./Admin/DashboardContent";
import NavBar from "./Admin/NavBar";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="flex-1 flex flex-col bg-gray-100">
        <NavBar />
        <div className="p-4 flex-1">
          {/* <DashboardContent /> */}
          <DashboardContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default App;
