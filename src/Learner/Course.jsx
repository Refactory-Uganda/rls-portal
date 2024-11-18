import React, { useState, useEffect } from "react";
import CourseDetails from "./LCourseDetails";
import CourseList from "./CourseView";
import api from "../services/api";
// import EditCourse from "./EditCourse";
// import CreateCourse from "./createCourse"; 
import CourseContentView from "./ContentView";

const LCourse = () => {
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

  // Handle deletion of a course
  const handleDeleteCourse = (deletedCourseId) => {
    setCourses(courses.filter((course) => course.id !== deletedCourseId));
    setSelectedCourse(null); // Optionally deselect after deletion
    setView("list");
  };

  // Handle successful editing
  const handleEditSuccess = (updatedCourse) => {
    // Update the courses list with the updated course
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
    setView("details");
  };

  // Handle successful course creation
  const handleCreateSuccess = (newCourse) => {
    setCourses([...courses, newCourse]); // Add new course to the list
    setView("list");
  };

  return (
    <div className="container mx-auto p-2">
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
          onDelete={handleDeleteCourse}
          setView={setView}
          error={error}
          setError={setError}
        />
      )}

      {view === "edit" && selectedCourse && (
        <EditCourse
          selectedCourse={selectedCourse}
          onUpdateSuccess={handleEditSuccess}
          onCancel={() => setView("details")}
        />
      )}

      {view === "createCourse" && (
        <CreateCourse
          onCreateSuccess={handleCreateSuccess} // Handle successful course creation
          onCancel={() => setView("list")}
        />
      )}
      {view === "contentView" && (
        <CourseContentView
          setView={setView}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          onCreateSuccess={handleCreateSuccess} // Handle successful course creation
          // onCancel={() => setView("list")}
        />
      )}
    </div>
  );
};

export default LCourse;
