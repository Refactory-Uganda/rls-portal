/* eslint-disable react/prop-types */
import Courses from "./Courses";
import CreateCourse from "./createCourse";
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
          case "createCourse":
            return <CreateCourse />;
          default:
            return <InitialDashboard />;
        }
      })()}
    </div>
  );
};

export default DashboardContent;
