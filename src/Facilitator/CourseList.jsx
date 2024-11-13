import React from "react";
import CourseCard from "./FCourseCard";

const CourseList = ({ courses = [], setSelectedCourse, view, setView }) => {
  // Handle course card click to display course details
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setView("details");
  };

  console.log(courses);

  return (
    <div className="container">
      <div className="container courseList-btn-container">
        {/* <a
          href="#"
          className="btn btn-primary action-btn"
          onClick={() => setView("createCourse")}
        >
          Create new course
        </a>
        <a
          href="#"
          className="btn btn-primary secondary-action-btn"
          // onClick={() => setView("createCourse")}
        >
          Open drafts
        </a> */}
      </div>

      {/* Check if courses is available and is an array */}
      {Array.isArray(courses) && courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
          {Array.isArray(courses) &&
            courses.map((course) => (
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
