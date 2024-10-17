import React, { useState, useEffect } from "react";
import CourseDetails from "./CourseDetails";
import CourseList from "./CourseList";
import api from "../services/api";
import EditCourse from "./EditCourse";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("list"); // 'list', 'details', 'edit'
  const [error, setError] = useState("");

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/courses"); // Ensure this endpoint matches your NestJS controller
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Handle deletion of a course
  const handleDeleteCourse = (deletedCourseId) => {
    setCourses(courses.filter((course) => course.id !== deletedCourseId));
    setSelectedCourse(null); // Optionally deselect after deletion
  };

  const handleEditSuccess = (updatedCourse) => {
    // Update the courses list with the updated course
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
    setView('details');
  };
  return (
    /*
    <div className="container mx-auto p-4">
      {selectedCourse ? (
        <CourseDetails
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          onDelete={handleDeleteCourse}
        />
      ) : (
        <CourseList courses={courses} setSelectedCourse={setSelectedCourse} />
      )}
    </div>

  */

    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {view === "list" && (
        <CourseList
          courses={courses}
          setSelectedCourse={setSelectedCourse}
          view={view}
          setView={setView}
        />
      )}
      {view === "details" && selectedCourse && (
        <CourseDetails
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          onDelete={handleDeleteCourse}
          setView={setView}
        />
      )}
      {view === "edit" && selectedCourse && (
        <EditCourse
          selectedCourse={selectedCourse}
          onUpdateSuccess={handleEditSuccess}
          onCancel={() => setView("details")}
        />
      )}
    </div>
  );
};

export default Courses;
