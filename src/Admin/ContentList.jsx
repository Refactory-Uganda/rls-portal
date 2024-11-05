import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Toast } from "react-bootstrap";
import "../../src/assets/css/ContentList.css";
import api from "../services/api";
import AddQuiz from "./AddQuiz";

const ContentList = ({
  selectedCourse,
  setSelectedCourse,
  handleViewLessonContent,
  lessonToView,
  setLessonToView,
}) => {
  const [activeTopic, setActiveTopic] = useState(null);

  // Modal States
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [showEditLessonModal, setShowEditLessonModal] = useState(false);
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);
  const [isQuizModalOpen, setQuizModalOpen] = useState(false);

  const toggleQuizModal = () => {
    setQuizModalOpen(!isQuizModalOpen);
  };

  // Selected Topic and Lesson for Editing
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // Success Messages
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
      alert("Failed to delete the topic. Please try again.");
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
      alert("Failed to delete the lesson. Please try again.");
    }
  };

  const handleAddLessonClick = (topic) => {
    setCurrentTopic(topic);
    setShowAddLessonModal(true);
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    const newLesson = {
      title: e.target.title.value,
      text: e.target.text.value,
    };
    try {
      const response = await api.post(`/lesson/${currentTopic.id}`, newLesson);
      const addedLesson = response.data; // Assuming response contains new lesson data
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
      alert("Failed to add the lesson. Please try again.");
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
      alert("Failed to update the topic. Please try again.");
    }
  };

  const handleEditLessonSubmit = async (e) => {
    e.preventDefault();
    const updatedLesson = {
      title: e.target.title.value,
      text: e.target.text.value,
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
      alert("Failed to update the lesson. Please try again.");
    }
  };

  const showToast = (message) => {
    setSuccessMessage(message);
    setShowSuccessToast(true);
  };

  return (
    <div className="accordion" id="topicsAccordion">
      {selectedCourse.topics.map((topic) => (
        <div
          className="card topic-cover-card"
          key={topic.id}
          style={{ padding: "0" }}
        >
          <div className="topic-card">
            <h2 className="mb-0 topic-list-tem">
              <button
                className="btn btn-link topic-btn"
                type="button"
                onClick={() => toggleTopic(topic.id)}
                aria-expanded={activeTopic === topic.id}
                aria-controls={`collapse${topic.id}`}
              >
                {topic.Title}
              </button>
              <span>
                <button
                  className="btn btn-purple me-2"
                  onClick={() => handleAddLessonClick(topic)}
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
                  onClick={() => handleDeleteTopic(topic.id)}
                  title="Delete Topic"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </span>
            </h2>
          </div>

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
                    onClick={() => handleViewLessonContent(lesson)}
                  >
                    {lesson.title}
                    <span>
                      <button
                        className="btn me-2"
                        // onClick={() => handleAddLessonClick(topic)}
                        onClick={toggleQuizModal}
                        title="Add Quiz"
                      >
                        <i className="bi bi-plus-square-fill"></i>
                      </button>
                      <AddQuiz
                        isQuizModalOpen={isQuizModalOpen}
                        toggleQuizModal={toggleQuizModal}
                        lessonTitle={lesson.title}
                        lessonId={lesson.id}
                      />
                      <button
                        className="btn btn-green me-2"
                        onClick={() => handleEditLesson(lesson)}
                        title="Edit Lesson"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-green me-2"
                        onClick={() => handleDeleteLesson(lesson.id, topic.id)}
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
      ))}

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
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                required
              />
            </div>
            <div className="mb-3">
              <label>Text</label>
              <textarea
                className="form-control"
                name="text"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn">
              Add Lesson
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Edit Topic Modal */}
      <Modal
        show={showEditTopicModal}
        onHide={() => setShowEditTopicModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditTopicSubmit}>
            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                defaultValue={currentTopic?.Title || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                defaultValue={currentTopic?.Description || ""}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn">
              Save Changes
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Edit Lesson Modal */}
      <Modal
        show={showEditLessonModal}
        onHide={() => setShowEditLessonModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditLessonSubmit}>
            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                defaultValue={currentLesson?.title || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label>Text</label>
              <textarea
                className="form-control"
                name="text"
                defaultValue={currentLesson?.text || ""}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn action-btn">
              Save Changes
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
      >
        <Toast.Body>{successMessage}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ContentList;
