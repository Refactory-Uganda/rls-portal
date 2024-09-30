import React, { useState, useEffect } from "react";
import Courses from "./Courses";
import CreateCourse from "./createCourse";

const DashboardContent = ({ selectedMenu }) => {
  // State for counts
  const [facilitatorsCount, setFacilitatorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);

  // Simulate fetching data from an API
  useEffect(() => {
    // Fetch the counts from the backend (API or database)
    // Replace this with your actual API call
    const fetchData = async () => {
      // Simulate an API call with dummy data
      const data = {
        facilitators: 5,
        students: 20,
        courses: 3,
      };

      setFacilitatorsCount(data.facilitators);
      setStudentsCount(data.students);
      setCoursesCount(data.courses);
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      {selectedMenu === "dashboard" && (
        <div>
          {/* <h1 className="text-3xl font-semibold mb-4">Dashboard</h1> */}
          {/* Dashboard content goes here */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div
                className="relative bg-white p-8 shadow-lg rounded-xl border border-gray-300"
                style={{ minHeight: "200px" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Facilitators
                  </h3>
                  <span
                    className={`w-6 h-6 rounded-full ${
                      facilitatorsCount > 0 ? "bg-green-500" : "bg-red-500"
                    } inline-block`}
                    title={facilitatorsCount > 0 ? "Active" : "Inactive"}
                  ></span>
                </div>
                <p className="text-5xl font-extrabold text-purple-800 mb-4">
                  {facilitatorsCount}
                </p>
                <p className="text-lg text-gray-600">
                  {facilitatorsCount} Facilitators
                </p>
              </div>

              <div
                className="relative bg-white p-8 shadow-lg rounded-xl border border-gray-300"
                style={{ minHeight: "200px" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Students</h3>
                  <span
                    className={`w-6 h-6 rounded-full ${
                      studentsCount > 0 ? "bg-green-500" : "bg-red-500"
                    } inline-block`}
                    title={studentsCount > 0 ? "Active" : "Inactive"}
                  ></span>
                </div>
                <p className="text-5xl font-extrabold text-blue-800 mb-4">
                  {studentsCount}
                </p>
                <p className="text-lg text-gray-600">
                  {studentsCount} Students
                </p>
              </div>

              <div
                className="relative bg-white p-8 shadow-lg rounded-xl border border-gray-300"
                style={{ minHeight: "200px" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Courses</h3>
                  <span
                    className={`w-6 h-6 rounded-full ${
                      coursesCount > 0 ? "bg-green-500" : "bg-red-500"
                    } inline-block`}
                    title={coursesCount > 0 ? "Active" : "Inactive"}
                  ></span>
                </div>
                <p className="text-5xl font-extrabold text-green-800 mb-4">
                  {coursesCount}
                </p>
                <p className="text-lg text-gray-600">{coursesCount} Courses</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="bg-purple-700 h-64 rounded"
                style={{ backgroundColor: "#663367", borderRadius: "20px" }}
              ></div>
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">
                  Events and Class Schedules
                </h3>
                <div>
                  {/* Insert calendar or schedule component here */}
                  <p>Calendar goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedMenu === "courses" && <Courses />}
      {selectedMenu === "create course" && <CreateCourse />}
      {/* Add more conditions for other menu items */}
    </div>
  );
};

export default DashboardContent;
