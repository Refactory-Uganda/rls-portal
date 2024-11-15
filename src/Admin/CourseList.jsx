import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, setSelectedCourse, view, setView }) => {
  // Handle course card click to display course details
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setView("details");
  };
  console.log(courses);
  return (
    <div className="container">
      <div className="courseList-btn-container">
        <a
          href="#"
          className="btn action-btn"
          onClick={() => setView("createCourse")}
        >
          Create new course
        </a>
        <a
          href="#"
          className="btn secondary-action-btn"
          // onClick={() => setView("createCourse")}
        >
          Open drafts
        </a>
      </div>
      {/* Optional: Add a "Create Course" button here */}
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
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
