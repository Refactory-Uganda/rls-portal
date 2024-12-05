import React, { useState, useEffect } from "react";
import CourseDetails from "./LCourseDetails";
import CourseList from "./CourseView";
import api from "../services/api";
// import EditCourse from "./EditCourse";
// import CreateCourse from "./createCourse";
import ContentView from "./ContentView";

const LCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("list");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleBackClick = () => {
    setView("learnerdashboard");
  };

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true); // Set isLoading to true at the start
      try {
        const response = await api.get("/courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses. Please try again later.");
      } finally {
        setIsLoading(false); // Set isLoading to false once the operation completes
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

      <div
        className="courseList-btn-container"
        style={{ paddingLeft: "0" }}
      >
        <button
          className="btn btn-primary action-btn"
          onClick={handleBackClick}
        >
          <i className="bi bi-arrow-left"></i> Back to Dashboard
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {view === "list" && (
        <CourseList
          courses={courses}
          setSelectedCourse={setSelectedCourse}
          setView={setView}
          isLoading={isLoading}
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


      {view === "contentView" && (
        <ContentView
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
