import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Toast } from "react-bootstrap";
import "../../src/assets/css/topicsList.css";
import api from "../services/api";

const TopicsList = ({ selectedCourse, setSelectedCourse }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  // // State for modals
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [showEditLessonModal, setShowEditLessonModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // State for success messages
  const [showTopicSuccess, setShowTopicSuccess] = useState(false);
  const [showLessonSuccess, setShowLessonSuccess] = useState(false);

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  const handleEditTopic = (topic) => {
    setCurrentTopic(topic);
    setShowEditTopicModal(true);
  };

  const handleEditLesson = (lesson) => {
    setCurrentLesson(lesson);
    setShowEditLessonModal(true);
  };

  const handleCloseEditTopicModal = () => {
    setShowEditTopicModal(false);
    setCurrentTopic(null);
  };

  const handleCloseEditLessonModal = () => {
    setShowEditLessonModal(false);
    setCurrentLesson(null);
  };

  // const handleUpdateLesson = async (e) => {
  //   e.preventDefault();
  //   const updatedLesson = {
  //     id: currentLesson.id,
  //     title: e.target.title.value,
  //     text: e.target.text.value,
  //   };
  //   await onEditLesson(updatedLesson);
  //   setShowLessonSuccess(true);
  //   handleCloseEditLessonModal();
  // };

  const handleUpdateTopic = async (e) => {
    e.preventDefault();
    const updatedTopic = {
      id: currentTopic.id,
      Title: e.target.title.value,
      Description: e.target.description.value,
    };
    try {
      await api.patch(`/topic/${updatedTopic.id}`, updatedTopic);
      const updatedTopics = selectedCourse.topics.map((topic) =>
        topic.id === updatedTopic.id ? { ...topic, ...updatedTopic } : topic
      );
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      setShowTopicSuccess(true);
      handleCloseEditTopicModal();
    } catch (error) {
      console.error("Error updating topic:", error);
      alert("Failed to update the topic. Please try again.");
    }
  };

  const handleUpdateLesson = async (e) => {
    e.preventDefault();
    const updatedLesson = {
      // id: currentLesson.id,
      title: e.target.title.value,
      text: e.target.text.value,
    };
    try {
      await api.patch(`/lesson/${currentLesson.id}`, updatedLesson);
      const updatedTopics = selectedCourse.topics.map((topic) => {
        if (topic.id === currentTopic.id) {
          const updatedLessons = topic.Lesson.map((lesson) =>
            lesson.id === updatedLesson.id
              ? { ...lesson, ...updatedLesson }
              : lesson
          );
          return { ...topic, Lesson: updatedLessons };
        }
        return topic;
      });
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      setShowLessonSuccess(true);
      handleCloseEditLessonModal();
    } catch (error) {
      console.error("Error updating lesson:", error);
      alert("Failed to update the lesson. Please try again.");
    }
  };

  return (
    <div className="accordion" id="topicsAccordion">
      {selectedCourse.topics.map((topic) => (
        <div
          className="card topic-cover-card"
          key={topic.id}
          style={{ padding: 0 }}
        >
          <div className="topic-card" id={`heading${topic.id}`}>
            <h2 className="mb-0">
              <button
                className="btn btn-link topic-btn"
                type="button"
                onClick={() => toggleTopic(topic.id)}
                aria-expanded={activeTopic === topic.id}
                aria-controls={`collapse${topic.id}`}
              >
                {topic.Title}
              </button>
              <button
                className="btn btn-purple me-2"
                // onClick={() => handleEditTopic(topic)}
                title="Add Lesson"
              >
                <i className="bi bi-plus-square-fill"></i>
              </button>
              <button
                className="btn btn-purple me-2"
                onClick={() => handleEditTopic(topic)}
                title="Edit Topic"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn btn-purple me-2"
                // onClick={() => handleEditLesson(lesson)}
                title="Delete Topic"
              >
                <i className="fas fa-trash"></i>
              </button>
            </h2>
          </div>

          <div
            id={`collapse${topic.id}`}
            className={`collapse ${activeTopic === topic.id ? "show" : ""}`}
            aria-labelledby={`heading${topic.id}`}
            data-parent="#topicsAccordion"
          >
            <div className="card-body lesson-card">
              <ul className="list-group">
                {topic.Lesson.map((lesson) => (
                  <li
                    className="list-group-item lesson-list-item"
                    key={lesson.id}
                  >
                    {lesson.title}
                    <button
                      className="btn btn-green me-2"
                      onClick={() => handleEditLesson(lesson)}
                      title="Edit Lesson"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-green me-2"
                      // onClick={() => handleEditLesson(lesson)}
                      title="Delete Lesson"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* Edit Topic Modal */}
      <Modal show={showEditTopicModal} onHide={handleCloseEditTopicModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateTopic}>
            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                defaultValue={currentTopic?.Title}
                required
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                defaultValue={currentTopic?.Description}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn ">
              Update Topic
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Edit Lesson Modal */}
      <Modal show={showEditLessonModal} onHide={handleCloseEditLessonModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateLesson(e);
            }}
          >
            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                defaultValue={currentLesson?.title}
                required
              />
            </div>
            <div className="mb-3">
              <label>Text</label>
              <textarea
                className="form-control"
                name="text"
                defaultValue={currentLesson?.text}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn ">
              Update Lesson
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Toast for Topic Success Message */}
      <Toast
        onClose={() => setShowTopicSuccess(false)}
        show={showTopicSuccess}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>Topic successfully updated!</Toast.Body>
      </Toast>

      {/* Toast for Lesson Success Message */}
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

export default TopicsList;
