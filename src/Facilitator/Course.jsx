import React, { useState, useEffect } from "react";
import CourseDetails from "../Components/CourseDetails";
import CourseList from "./CourseList";
import api from "../services/api";
// import EditCourse from "./EditCourse";
// import CreateCourse from "./createCourse"; 
import CourseContentView from "../Components/CourseContentView";

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("list"); 
  const [error, setError] = useState("");

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/courses"); 
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchCourses();
  }, []);


  return (
    <div className="container mx-auto p-4">
      {error && <p style={{ color: "red" }}>{error}</p>}

      {view === "list" && (
        <CourseList
          courses={courses}
          setSelectedCourse={setSelectedCourse}
          setView={setView}
        />
      )}

      {view === "details" && selectedCourse && (
        <CourseDetails
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          setView={setView}
          error={error}
          setError={setError}
        />
      )}

      {view === "contentView" && (
        <CourseContentView
          setView={setView}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )}
    </div>
  );
};

export default Course;
