import React, { useState } from "react";
import api from "../services/api";
import "../../src/assets/css/courseDetails.css";
import TopicsList from "./TopicsList";
import { Modal, Toast } from "react-bootstrap";

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

  const [duration, setDuration] = useState(selectedCourse.Duration);
  const [courseTitle, setCourseTitle] = useState(selectedCourse.Title);
  const [courseDescription, setCourseDescription] = useState(selectedCourse.Description);

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

  const handleEditTopic = (topic) => {
    setCurrentTopic(topic);
    setShowTopicModal(true);
  };

  const handleEditLesson = (lesson) => {
    setCurrentLesson(lesson);
    setShowLessonModal(true);
  };

  const handleCloseCourseModal = () => {
    setShowCourseModal(false);
  };

  const handleCloseTopicModal = () => {
    setShowTopicModal(false);
    setCurrentTopic(null);
  };

  const handleCloseLessonModal = () => {
    setShowLessonModal(false);
    setCurrentLesson(null);
  };

  const handleUpdateCourse = async () => {
    const updatedCourse = { Title: courseTitle, Duration: duration, Description: courseDescription };

    try {
      await api.patch(`/courses/${selectedCourse.id}`, updatedCourse);
      setShowSuccess(true);
      setSelectedCourse(prev => ({
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

  // const handleUpdateTopic = async () => {
  //   const updatedTopic = currentTopic;
  //   try {
  //     await api.patch(`/topic/${updatedTopic.id}`, updatedTopic);
  //     const updatedTopics = selectedCourse.topics.map(topic =>
  //       topic.id === updatedTopic.id ? { ...topic, ...updatedTopic } : topic
  //     );
  //     setSelectedCourse(prev => ({ ...prev, topics: updatedTopics }));
  //     setShowTopicSuccess(true);
  //     handleCloseTopicModal();
  //   } catch (error) {
  //     console.error("Error updating topic:", error);
  //     alert("Failed to update the topic. Please try again.");
  //   }
  // };

  const handleUpdateTopic = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
  
    // Make sure updatedTopic has the latest form values
    const updatedTopic = {
      ...currentTopic,
      Title: e.target.title.value,
      Description: e.target.description.value,
    };
  
    try {
      // Check updated data being sent
      console.log("Sending updated topic:", updatedTopic);
  
      const response = await api.patch(`/topic/${updatedTopic.id}`, updatedTopic);
      
      // Verify API response
      if (response.status === 200) {
        console.log("API responded with updated topic:", response.data);
        
        const updatedTopics = selectedCourse.topics.map((topic) =>
          topic.id === updatedTopic.id ? response.data : topic
        );
        
        // Update state
        setSelectedCourse((prev) => ({
          ...prev,
          topics: updatedTopics,
        }));
        
        setShowTopicSuccess(true);
        handleCloseTopicModal();
      } else {
        console.error("API responded with status:", response.status);
        alert("Failed to update the topic. Please try again.");
      }
    } catch (error) {
      console.error("Error updating topic:", error);
      alert("Failed to update the topic. Please try again.");
    }
  };
  

  const handleUpdateLesson = async (updatedLesson) => {
    try {
      await api.patch(`/lesson/${updatedLesson.id}`, updatedLesson);
      const updatedTopics = selectedCourse.topics.map(topic => {
        if (topic.id === currentTopic.id) {
          const updatedLessons = topic.Lesson.map(lesson =>
            lesson.id === updatedLesson.id ? { ...lesson, ...updatedLesson } : lesson
          );
          return { ...topic, Lesson: updatedLessons };
        }
        return topic;
      });
      setSelectedCourse(prev => ({ ...prev, topics: updatedTopics }));
      setShowLessonSuccess(true);
      handleCloseLessonModal();
    } catch (error) {
      console.error("Error updating lesson:", error);
      alert("Failed to update the lesson. Please try again.");
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="container courseList-btn-container">
        <button className="btn btn-primary action-btn" onClick={handleBackClick}>
          <i className="bi bi-arrow-left"></i> Back to Courses
        </button>
      </div>

      <div className="course-and-topics-details-container row d-flex align-items-stretch">
        {/* Course Details */}
        <div className="card col-md-12 d-flex">
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
              This course equips learners with essential knowledge and practical skills in {selectedCourse.Title}, enabling them to apply key concepts in real-world situations.
            </p>
            <div className="container course-details-btn-container">
              <button
                className="btn btn-purple me-2"
                onClick={handleEditCourse}
                title="Edit Course"
                style={{ height: '3rem' }}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn secondary-action-btn"
                onClick={handleDelete}
                title="Delete Course"
                style={{ height: '3rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "red")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Topics Container */}
        <div className="course-topics-container card col-md-12 d-flex">
          <TopicsList
            selectedCourse={selectedCourse}
            onEditTopic={handleEditTopic}
            onEditLesson={handleEditLesson}
            onUpdateTopic={handleUpdateTopic}
            onUpdateLesson={handleUpdateLesson}
          />
        </div>
      </div>

      {/* Course Edit Modal */}
      <Modal show={showCourseModal} onHide={handleCloseCourseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateCourse();
          }}>
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
              <select className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)}>
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
            <button type="submit" className="btn action-btn">Update Course</button>

          </form>
        </Modal.Body>
      </Modal>

      {/* Toast for Success Messages */}
      <Toast
        onClose={() => setShowSuccess(false)}
        show={showSuccess}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>Course successfully updated!</Toast.Body>
      </Toast>
      <Toast
        onClose={() => setShowTopicSuccess(false)}
        show={showTopicSuccess}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>Topic successfully updated!</Toast.Body>
      </Toast>
      <Toast
        onClose={() => setShowLessonSuccess(false)}
        show={showLessonSuccess}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>Lesson successfully updated!</Toast.Body>
      </Toast>
    </div>
  );
};

export default CourseDetails;
