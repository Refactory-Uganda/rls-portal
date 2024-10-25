import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../../src/assets/css/courseDetails.css";
import TopicsList from "./TopicsList";

const CourseDetails = ({
  selectedCourse,
  setSelectedCourse,
  onDelete,
  setView,
  error,
  setError,
}) => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setTopics(selectedCourse.topics);
      } catch (error) {
        console.error("Error fetching topics", error);
        setError("Fetching Topics failed. Please try again later");
      }
    };
    fetchTopics();
  }, []);
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
  console.log(topics);
  return (
    <div className="container mx-auto my-8">
      <div className="container courseList-btn-container">
        <button
          className="btn btn-primary action-btn"
          onClick={handleBackClick}
        >
          <i className="bi bi-arrow-left"></i> Back to Courses
        </button>
      </div>

      <div className="course-and-topics-details-container row d-flex align-items-stretch">
        {/* Course Details */}
        <div className="card col-md-8 d-flex">
          <div className="card-body">
            <h6 className="card-title">Course title: {selectedCourse.Title}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Duration: {selectedCourse.Duration}
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Facilitator: Steven Kawooya
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Award: Certificate
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Course objective:
            </h6>
            <p className="card-text">
              This course equips learners with essential knowledge and practical
              skills in {selectedCourse.Title}, enabling them to apply key
              concepts in real-world situations. By the end, participants will
              confidently use their new expertise for professional or academic
              advancement.
            </p>
            <div className="continer course-details-btn-container">
              {/* <button
                className="btn btn-primary action-btn"
                onClick={handleEdit}
              >
                Edit Course
              </button>
              <button
                className="btn btn-primary secondary-action-btn"
                onClick={handleDelete}
              >
                Delete Course
              </button> */}
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
                style={{ position: "relative" }} // To allow hover effect
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "red")
                } // Change background on hover
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                } // Revert background on leave
              >
                <i className="fas fa-trash"></i> {/* Font Awesome trash icon */}
              </button>
            </div>
          </div>
        </div>

        {/* Topics Container */}
        <div className="course-topics-container card col-md-4 d-flex">
          {/* <ol className="list-group list-group-numbered">
            <h4>Topics</h4>
            {topics.map((topic) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-start topic-list-item"
                key={topic.id}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{topic.Title}</div>
                  Lessons: 04
                </div>
              </li>
            ))}
          </ol> */}
          <TopicsList topics={topics} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
