import React from "react";
import api from "../services/api";

const CourseDetails = ({
  selectedCourse,
  setSelectedCourse,
  onDelete,
  setView,
}) => {
  const handleBackClick = () => {
    setSelectedCourse(null);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      console.log("Deleting course with ID:", selectedCourse.id);
      await api.delete(`/course/${selectedCourse.id}`); // Ensure this endpoint matches your NestJS controller
      onDelete(selectedCourse.id); // Update UI after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete the course. Please try again.");
    }
  };
  const handleEdit = function () {
    setView("edit");
  };

  return (
    <div className="container mx-auto my-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600"
        onClick={handleBackClick}
      >
        Back to Courses
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {selectedCourse.Title}
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Duration: {selectedCourse.Duration}
        </p>
        <p className="text-gray-700 mt-4">{selectedCourse.Description}</p>
        <div className="mt-4 flex space-x-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleEdit}
          >
            Edit Course
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
