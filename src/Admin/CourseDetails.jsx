import React from "react";
import api from "../services/api";

const CourseDetails = ({
  selectedCourse,
  setSelectedCourse,
  onDelete,
  setView,
}) => {
const handleBackClick = () => {
  setSelectedCourse(null); // Reset the selected course
  setView("list"); // Change the view to "list" to show the course list
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

  return (
    <div className="container my-4">
      <button
        className="btn btn-primary action-btn"
        onClick={handleBackClick}
      >
        Back to Courses
      </button>
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="card-title">{selectedCourse.Title}</h1>
          <p className="card-text">Duration: {selectedCourse.Duration}</p>
          <p className="card-text">{selectedCourse.Description}</p>
          <div className="mt-3 d-flex justify-content-end">
            <button
              className="btn btn-purple me-2" // Custom purple button for edit
              onClick={handleEdit}
              title="Edit Course" // Tooltip
            >
              <i className="fas fa-edit"></i> {/* Font Awesome edit icon */}
            </button>
            <button
              className="btn btn-outline-secondary" // Use outline for plain background
              onClick={handleDelete}
              title="Delete Course" // Tooltip
              style={{ position: 'relative' }} // To allow hover effect
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'red'} // Change background on hover
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Revert background on leave
            >
              <i className="fas fa-trash"></i> {/* Font Awesome trash icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
