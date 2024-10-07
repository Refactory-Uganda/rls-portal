import React, { useState, useEffect } from "react";
import Courses from "./Courses";
import CreateCourse from "./createCourse";
import InitialDashboard from "./InitialDashboard";
import CourseDetails from "./courseDetails";

const DashboardContent = ({ selectedMenu }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  // // State for counts
  // const [facilitatorsCount, setFacilitatorsCount] = useState(0);
  // const [studentsCount, setStudentsCount] = useState(0);
  // const [coursesCount, setCoursesCount] = useState(0);

  // // Simulate fetching data from an API
  // useEffect(() => {
  //   // Fetch the counts from the backend (API or database)
  //   // Replace this with your actual API call
  //   const fetchData = async () => {
  //     // Simulate an API call with dummy data
  //     const data = {
  //       facilitators: 5,
  //       students: 20,
  //       courses: 3,
  //     };

  //     setFacilitatorsCount(data.facilitators);
  //     setStudentsCount(data.students);
  //     setCoursesCount(data.courses);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      {selectedMenu === "dashboard" && <InitialDashboard />}
      {selectedMenu === "courses" &&
        (!selectedCourse ? (
          <Courses selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse}/>
        ) : (
          <CourseDetails selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
        ))}
      {selectedMenu === "create course" && <CreateCourse />}
    </div>
  );
};

export default DashboardContent;
