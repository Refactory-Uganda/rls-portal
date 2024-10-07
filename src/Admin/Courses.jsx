import React, { useState, useEffect } from "react";
import CourseDetails from "./CourseDetails";
import CourseList from "./CourseList";
import api from "../services/api";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/course"); // Ensure this endpoint matches your NestJS controller
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

  return (
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
  );
};

export default Courses;
