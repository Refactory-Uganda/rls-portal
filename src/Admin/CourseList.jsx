
import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, setSelectedCourse }) => {
  // Handle course card click to display course details
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div>
      {/* Optional: Add a "Create Course" button here */}
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;