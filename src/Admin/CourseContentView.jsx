import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../../src/assets/css/courseDetails.css";
import TopicsList from "./TopicsList";
import ContentList from "./ContentList";

const CourseContentView = ({
  selectedCourse,
  setSelectedCourse,
  onDelete,
  setView,
  error,
  setError,
}) => {
  const [lessonToview, setLessonToView] = useState(null);

  const handleBackClick = () => {
    // setSelectedCourse(null); // Reset the selected course
    setView("details"); // Change the view to "list" to show the course list
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      console.log("Deleting course with ID:", selectedCourse.id);
      await api.delete(`/courses/${selectedCourse.id}`); // Ensure this endpoint matches your NestJS controller
      onDelete(selectedCourse.id); // Update UI after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete the course. Please try again.");
    }
  };

  const handleEdit = () => {
    setView("edit");
  };
  const handleViewLessonContent = (lesson) => {
    setLessonToView(lesson);
  };
  console.log(selectedCourse);
  return (
    <div className="container mx-auto my-8">
      <div className="container courseList-btn-container">
        <button
          className="btn btn-primary action-btn"
          onClick={handleBackClick}
        >
          <i className="bi bi-arrow-left"></i> Back to Courses Details
        </button>
      </div>

      <div className="course-and-topics-details-container row d-flex align-items-stretch">
        {/* Content view window */}
        <div className="card col-md-8 d-flex">
          {lessonToview ? (
            <>
              <h3>{lessonToview.title}</h3>
              <p>{lessonToview.text}</p>
            </>
          ) : (
            ""
          )}
        </div>

        {/* Topics Container */}
        <div className="course-topics-container card col-md-4 d-flex">
          <ContentList
            selectedCourse={selectedCourse}
            handleViewLessonContent={handleViewLessonContent}
            lessonToview={lessonToview}
            setLessonToView={setLessonToView}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContentView;
