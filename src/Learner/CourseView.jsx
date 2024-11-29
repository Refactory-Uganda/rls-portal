import React from "react";
import CourseCard from "../Components/LCourseCard";
import LongLoadingCourseCard from "../Facilitator/LongLoadingCard";


const CourseView = ({ courses, setSelectedCourse, view, setView, isLoading }) => {
  // Handle course card click to display course details
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setView("details");
  };
  console.log(courses);
  const placeholders = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <div className="container">
     
      {isLoading ? (<div className="row row-cols-4 row-cols-lg-4 g-2 g-lg-3">
          {placeholders.map((item, index) => (
            <LongLoadingCourseCard key={index} />
          ))}
        </div> ) : (
        <div className="row row-cols-3 row-cols-lg-3 g-1 g-lg-3">
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

export default CourseView;
