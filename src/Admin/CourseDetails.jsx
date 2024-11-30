import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../assets/css/courseDetails.css";
import TopicsList from "../Components/TopicsList";
import { Modal, Toast } from "react-bootstrap";
import ContentList from "../Components/ContentList"
// import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const CourseDetails = ({
  selectedCourse,
  setSelectedCourse,
  onDelete,
  setView,
}) => {
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // State for success messages
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTopicSuccess, setShowTopicSuccess] = useState(false);
  const [showLessonSuccess, setShowLessonSuccess] = useState(false);

  // State for course details
  const [duration, setDuration] = useState(selectedCourse.Duration);
  const [courseTitle, setCourseTitle] = useState(selectedCourse.Title);
  const [courseDescription, setCourseDescription] = useState(
    selectedCourse.Description
  );

  // State for adding topics
  const [showAddTopicModal, setShowAddTopicModal] = useState(false);
  const [topicTitle, setTopicTitle] = useState("");
  const [topicDescription, setTopicDescription] = useState("");

  // Set courseId from selectedCourse
  const courseId = selectedCourse.id;

  useEffect(() => {
    // Reset topic fields when modal closes
    if (!showAddTopicModal) {
      setTopicTitle("");
      setTopicDescription("");
    }
  }, [showAddTopicModal]);

  const handleBackClick = () => {
    setSelectedCourse(null);
    setView("list");
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      await api.delete(`/courses/${selectedCourse.id}`);
      onDelete(selectedCourse.id);
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete the course. Please try again.");
    }
  };

  const handleEditCourse = () => {
    setShowCourseModal(true);
  };

  const handleCloseCourseModal = () => {
    setShowCourseModal(false);
  };

  const handleUpdateCourse = async () => {
    const updatedCourse = {
      Title: courseTitle,
      Duration: duration,
      Description: courseDescription,
    };

    try {
      await api.patch(`/courses/${selectedCourse.id}`, updatedCourse);
      setShowSuccess(true);
      setSelectedCourse((prev) => ({
        ...prev,
        Title: courseTitle,
        Duration: duration,
        Description: courseDescription,
      }));
      handleCloseCourseModal();
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update the course. Please try again.");
    }
  };

  const handleAddTopic = async () => {
    const newTopic = {
      Title: topicTitle,
      Description: topicDescription,
      courseId: selectedCourse.id,
    };

    try {
      // Send the new topic to the server
      const response = await api.post(`/topic/${courseId}`, newTopic);

      // Assuming the API response returns the added topic, you can use it here
      const addedTopic = response.data;

      // Update selectedCourse with the new topic
      setSelectedCourse((prevCourse) => ({
        ...prevCourse,
        topics: [...(prevCourse.topics || []), addedTopic],
      }));

      // Show success message and close the modal
      setShowTopicSuccess(true);
      setShowAddTopicModal(false);
    } catch (error) {
      console.error("Error adding topic:", error);
      alert("Failed to add the topic. Please try again.");
    }
  };

  const handleCloseAddTopicModal = () => {
    setShowAddTopicModal(false);
  };

  return (
    <div className=" mx-auto my-8 course-details-main-container">
      <div className="course-details-btn-container" style={{ height: "3rem" }}>
        <button
          className="btn btn-primary action-btn"
          onClick={handleBackClick}
        >
          <i className="bi bi-arrow-left"></i> Back to Course
        </button>
      </div>

      <div className="course-and-topics-details-container row d-flex align-items-stretch">
        {/* Course Details */}
        <div className="card col-md-12 d-flex">
          <div className="card-body">
            <h2 className="card-title">
              <strong>{selectedCourse.Title}</strong>
            </h2>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Duration: {selectedCourse.Duration} weeks
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Facilitator: {`${selectedCourse.facilitator.firstName} ${selectedCourse.facilitator.lastName}`}
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Award: {selectedCourse.award}
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Assessment Mode: {selectedCourse.assessmentMode}
            </h6>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">
              Course objective:
            </h6> */}
            <p className="card-text">{selectedCourse.Description}</p>
            {selectedCourse.courseOutline.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            {/* {selectedCourse.courseOutline
              .flatMap((item) => {
                try {
                  // Attempt to parse if the string is valid JSON
                  if (item.startsWith("[") || item.startsWith("{")) {
                    return JSON.parse(item);
                  } else {
                    // Return as-is if it's a plain string
                    return item;
                  }
                } catch (error) {
                  console.error(
                    "Error parsing course outline item:",
                    item,
                    error
                  );
                  return []; // Return an empty array if parsing fails
                }
              })
              .map((parsedItem, index) => (
                <p key={index}>{parsedItem}</p>
              ))} */}
            <div className="course-details-btn-container">
              <button
                className="btn btn-purple me-2"
                onClick={handleEditCourse}
                title="Edit Course"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn secondary-action-btn"
                onClick={handleDelete}
                title="Delete Course"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "red")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <i className="fas fa-trash"></i>
              </button>
              <button
                className="btn btn-primary secondary-action-btn"
                onClick={() => setShowAddTopicModal(true)}
              >
                Add Topics
              </button>
              <button
                className="btn btn-primary action-btn"
                onClick={() => setView("contentView")}
              >
                View Topics
              </button>
            </div>
          </div>
        </div>

        {/* Topics Container */}
        <div className="course-topics-container card col-md-12 d-flex">
          <ContentList
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
          {/* <TopicsList
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          /> */}
        </div>
      </div>

      {/* Course Edit Modal */}
      <Modal show={showCourseModal} onHide={handleCloseCourseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateCourse();
            }}
          >
            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Duration (Weeks)</label>
              <select
                className="form-control"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                {[...Array(52)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} week{i !== 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn">
              Update Course
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Add Topic Modal */}
      <Modal show={showAddTopicModal} onHide={handleCloseAddTopicModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTopic();
            }}
          >
            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                value={topicDescription}
                onChange={(e) => setTopicDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn">
              Add Topic
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Success Toasts */}
      <Toast
        onClose={() => setShowSuccess(false)}
        show={showSuccess}
        delay={3000}
        autohide
      >
        <Toast.Body>Course updated successfully!</Toast.Body>
      </Toast>
      <Toast
        onClose={() => setShowTopicSuccess(false)}
        show={showTopicSuccess}
        delay={3000}
        autohide
      >
        <Toast.Body>Topic added successfully!</Toast.Body>
      </Toast>
    </div>
  );
};

export default CourseDetails;
