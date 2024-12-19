/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal} from "react-bootstrap";
import "../../src/assets/css/topicsList.css";

const TopicsList = ({ selectedCourse, onEditTopic, onEditLesson }) => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [showEditLessonModal, setShowEditLessonModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  const handleEditTopic = (topic) => {
    setCurrentTopic(topic);
    setShowEditTopicModal(true);
  };

  const handleEditLesson = (lesson, topicId) => {
    setCurrentLesson({ ...lesson, topicId });
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

  const handleUpdateTopic = async (e) => {
    e.preventDefault();
    const updatedTopic = {
      id: currentTopic.id,
      Title: e.target.title.value,
      Description: e.target.description.value,
    };
    await onEditTopic(updatedTopic);
    handleCloseEditTopicModal();
  };

  const handleUpdateLesson = async (e) => {
    e.preventDefault();
    const updatedLesson = {
      id: currentLesson.id,
      title: e.target.title.value,
      text: e.target.text.value,
      topicId: currentLesson.topicId,
    };
    await onEditLesson(updatedLesson);
    handleCloseEditLessonModal();
  };

  return (
    <div className="accordion" id="topicsAccordion">
      {selectedCourse.topics.map((topic) => (
        <div className="accordion-item" key={topic.id}>
          <h2 className="accordion-header" id={`heading-${topic.id}`}>
            <button
              className="accordion-button"
              type="button"
              onClick={() => toggleTopic(topic.id)}
              aria-expanded={activeTopic === topic.id}
            >
              {topic.Title}
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${activeTopic === topic.id ? "show" : ""}`}
            aria-labelledby={`heading-${topic.id}`}
          >
            <div className="accordion-body">
              <p>{topic.Description}</p>
              <button className="btn btn-primary me-2" onClick={() => handleEditTopic(topic)}>
                Edit Topic
              </button>
              {topic.Lesson?.map((lesson) => (
                <div key={lesson.id}>
                  <h6>{lesson.title}</h6>
                  <p>{lesson.text}</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEditLesson(lesson, topic.id)}
                  >
                    Edit Lesson
                  </button>
                </div>
              ))}
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
              <input type="text" name="title" defaultValue={currentTopic?.Title} className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea name="description" defaultValue={currentTopic?.Description} className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Edit Lesson Modal */}
      <Modal show={showEditLessonModal} onHide={handleCloseEditLessonModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateLesson}>
            <div className="mb-3">
              <label>Title</label>
              <input type="text" name="title" defaultValue={currentLesson?.title} className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Text</label>
              <textarea name="text" defaultValue={currentLesson?.text} className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TopicsList;
