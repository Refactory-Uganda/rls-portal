import React, { useState } from "react";
import CourseCard from "./CourseCard";
import LoadingCard from "./LoadingCard";

const CourseList = ({
  courses,
  setSelectedCourse,
  view,
  setView,
  isLoading,
}) => {
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  // Calculate total number of pages
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Get current courses for the page
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setView("details");
  };

  // Handle pagination button click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next and previous button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const placeholders = Array.from({ length: 8 }, (_, index) => index + 1);

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
        <a href="#" className="btn secondary-action-btn">
          Open drafts
        </a>
      </div>
      {isLoading ? (
      
        <div className="row row-cols-4 row-cols-lg-4 g-2 g-lg-3">
          {placeholders.map((item, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      ) : (
        <div className="row row-cols-4 row-cols-lg-4 g-2 g-lg-3">
          {currentCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course)}
            />
          ))}
        </div>
      )}
      {/* Pagination controls */}
      <div className="pagination">
        <button
          className="btn pagination-btn"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btn pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn pagination-btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseList;
