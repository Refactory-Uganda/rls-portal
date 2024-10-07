import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import api from "../services/api";

function Courses({ selectedCourse, setSelectedCourse }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/course");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

 
  // Handle course card click to display course details
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  console.log(selectedCourse);
  return (
    <div>
      {/* <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
        Create Course
      </button> */}
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => handleCourseClick(course)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
