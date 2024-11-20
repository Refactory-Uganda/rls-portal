import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Toast } from "react-bootstrap";
import "../../src/assets/css/topicsList.css";
import api from "../services/api";
import RichTextEditor from "./RichTextEditor";

const TopicsList = ({ selectedCourse, setSelectedCourse }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  // Modal States
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [showEditLessonModal, setShowEditLessonModal] = useState(false);
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);

  // Selected Topic and Lesson for Editing
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // Success Messages
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // RichTextEditor State for Add/Edit Lesson
  const [lessonText, setLessonText] = useState("");

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  const handleEditTopic = (topic) => {
    setCurrentTopic(topic);
    setShowEditTopicModal(true);
  };

  const handleEditLesson = (lesson) => {
    setCurrentLesson(lesson);
    setLessonText(lesson.text); // Populate editor with lesson content for editing
    setShowEditLessonModal(true);
  };

  const handleDeleteTopic = async (topicId) => {
    try {
      await api.delete(`/topic/${topicId}`);
      const updatedTopics = selectedCourse.topics.filter(
        (topic) => topic.id !== topicId
      );
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      showToast("Topic deleted successfully");
    } catch (error) {
      console.error("Error deleting topic:", error);
      showToast("Failed to delete the topic. Please try again.");
    }
  };

  const handleDeleteLesson = async (lessonId, topicId) => {
    try {
      await api.delete(`/lesson/${lessonId}`);
      const updatedTopics = selectedCourse.topics.map((topic) => {
        if (topic.id === topicId) {
          const updatedLessons = topic.Lesson.filter(
            (lesson) => lesson.id !== lessonId
          );
          return { ...topic, Lesson: updatedLessons };
        }
        return topic;
      });
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      showToast("Lesson deleted successfully");
    } catch (error) {
      console.error("Error deleting lesson:", error);
      showToast("Failed to delete the lesson. Please try again.");
    }
  };

  const handleAddLessonClick = (topic) => {
    setCurrentTopic(topic);
    setLessonText(""); // Clear the editor for new lesson
    setShowAddLessonModal(true);
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    const newLesson = {
      title: e.target.title.value,
      text: lessonText,
      topicId: currentTopic.id,
    };
    try {
      const response = await api.post(`/lesson/${currentTopic.id}`, newLesson);
      const addedLesson = response.data;
      const updatedTopics = selectedCourse.topics.map((topic) =>
        topic.id === currentTopic.id
          ? { ...topic, Lesson: [...topic.Lesson, addedLesson] }
          : topic
      );
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      setShowAddLessonModal(false);
      showToast("Lesson added successfully");
    } catch (error) {
      console.error("Error adding lesson:", error);
      showToast("Failed to add the lesson. Please try again.");
    }
  };

  const handleEditTopicSubmit = async (e) => {
    e.preventDefault();
    const updatedTopic = {
      Title: e.target.title.value,
      Description: e.target.description.value,
    };
    try {
      await api.patch(`/topic/${currentTopic.id}`, updatedTopic);
      const updatedTopics = selectedCourse.topics.map((topic) =>
        topic.id === currentTopic.id ? { ...topic, ...updatedTopic } : topic
      );
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      setShowEditTopicModal(false);
      showToast("Topic updated successfully");
    } catch (error) {
      console.error("Error updating topic:", error);
      showToast("Failed to update the topic. Please try again.");
    }
  };

  const handleEditLessonSubmit = async (e) => {
    e.preventDefault();
    const updatedLesson = {
      title: e.target.title.value,
      text: lessonText,
    };
    try {
      await api.patch(`/lesson/${currentLesson.id}`, updatedLesson);
      const updatedTopics = selectedCourse.topics.map((topic) => {
        if (topic.id === currentTopic.id) {
          const updatedLessons = topic.Lesson.map((lesson) =>
            lesson.id === currentLesson.id
              ? { ...lesson, ...updatedLesson }
              : lesson
          );
          return { ...topic, Lesson: updatedLessons };
        }
        return topic;
      });
      setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      setShowEditLessonModal(false);
      showToast("Lesson updated successfully");
    } catch (error) {
      console.error("Error updating lesson:", error);
      showToast("Failed to update the lesson. Please try again.");
    }
  };

  const showToast = (message) => {
    setSuccessMessage(message);
    setShowSuccessToast(true);
  };

  const handleLessonTextChange = (content) => {
    setLessonText(content);
  };

  return (
    <div className="accordion" id="topicsAccordion">
      {selectedCourse.topics.map((topic) => {
        const numLessons = topic.Lesson.length;
        return (
          <div
            className="card topic-cover-card"
            key={topic.id}
            style={{ padding: "0" }}
          >
            {/* Topic Header */}
            <div className="topic-card">
              <h2 className="mb-0 topic-list-item">
                <button
                  className="btn btn-link topic-btn"
                  type="button"
                  onClick={() => toggleTopic(topic.id)}
                  aria-expanded={activeTopic === topic.id}
                  aria-controls={`collapse${topic.id}`}
                >
                  {`${topic.Title} | ${
                    numLessons === 0
                      ? "No Lessons"
                      : numLessons === 1
                      ? `${numLessons} Lesson`
                      : `${numLessons} Lessons`
                  }`}
                </button>

                {/* Action Buttons */}
                <span className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-green me-2"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent accordion toggle
                      handleAddLessonClick(topic);
                    }}
                    title="Add Lesson"
                  >
                    <i className="bi bi-plus-square-fill"></i>
                  </button>
                  <button
                    className="btn btn-green me-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditTopic(topic);
                    }}
                    title="Edit Topic"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-green me-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTopic(topic.id);
                    }}
                    title="Delete Topic"
                  >
                    <i className="fas fa-trash"></i>
                  </button>

                  {/* Arrow Icon */}
                  <i
                    className={`arrow-indicator ${
                      activeTopic === topic.id ? "arrow-up" : "arrow-down"
                    }`}
                  ></i>
                </span>
              </h2>
            </div>

            {/* Topic Content */}
            <div
              id={`collapse${topic.id}`}
              className={`collapse ${activeTopic === topic.id ? "show" : ""}`}
            >
              <div className="card-body lesson-card">
                <ul className="list-group">
                  {topic.Lesson.map((lesson) => (
                    <li
                      className="list-group-item lesson-list-item"
                      key={lesson.id}
                    >
                      {lesson.title}
                      <span>
                        <button
                          className="btn btn-green me-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditLesson(lesson);
                          }}
                          title="Edit Lesson"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-green me-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteLesson(lesson.id, lesson.topicId);
                          }}
                          title="Delete Lesson"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}

      {/* Add Lesson Modal */}
      <Modal
        show={showAddLessonModal}
        onHide={() => setShowAddLessonModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddLesson}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Lesson Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lessonText" className="form-label">
                Lesson Content
              </label>
              <RichTextEditor
                value={lessonText}
                onChange={handleLessonTextChange}
                name="lessonText"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Lesson
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Success Toast */}
      <Toast
        onClose={() => setShowSuccessToast(false)}
        show={showSuccessToast}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>{successMessage}</Toast.Body>
      </Toast>
    </div>
  );
};

export default TopicsList;
