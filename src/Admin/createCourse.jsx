import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faMinus,
  faChevronDown,
  faChevronUp,
  faBook,
  faList,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import AddQuiz from './AddQuiz';


const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    Title: "",
    Description: "",
    Duration: "",
  });

  // function Lesson({ lesson }) {
    const [isQuizModalOpen, setQuizModalOpen] = useState(false);
  
    const toggleQuizModal = () => {
      setQuizModalOpen(!isQuizModalOpen);
    };

  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({
    Title: "",
    Description: "",
    Lessons: [],
  });

  const [newLesson, setNewLesson] = useState({
    title: "",
    text: "",
  });

  const [showAddTopic, setShowAddTopic] = useState(false);
  const [showAddLessonIndex, setShowAddLessonIndex] = useState(null);

  const [editingStates, setEditingStates] = useState({
    topicIndex: null,
    lessonIndex: null,
    isEditingTopic: false,
    isEditingLesson: false,
  });

  const [feedback, setFeedback] = useState({
    error: "",
    success: "",
  });

  // Event Handlers
  const handleLessonInputChange = (e) => {
    const { name, value } = e.target;
    setNewLesson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCourseInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
    setFeedback({ error: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Title, Description, Duration } = courseData;

    if (!Title || !Description || !Duration) {
      setFeedback({ error: "Please fill all required fields.", success: "" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/courses",
        courseData
      );
      const courseId = response.data.id;

      for (const topic of topics) {
        const topicResponse = await axios.post(
          `http://localhost:3000/topic/${courseId}`,
          {
            Title: topic.Title,
            Description: topic.Description,
          }
        );

        const topicId = topicResponse.data.id;

        await Promise.all(
          topic.Lessons.map((lesson) =>
            axios.post(`http://localhost:3000/lesson/${topicId}`, {
              title: lesson.title,
              text: lesson.text,
              topicId: topicId,
            })
          )
        );
      }

      setCourseData({ Title: "", Description: "", Duration: "" });
      setTopics([]);
      setFeedback({ error: "", success: "Course created successfully!" });
    } catch (error) {
      setFeedback({
        error: "Failed to create course. Please try again.",
        success: "",
      });
      console.error("Error creating course:", error);
    }
  };

  const handleTopicAction = (action, topicIndex = null) => {
    switch (action) {
      case "add":
        if (!newTopic.Title) {
          setFeedback({ error: "Topic title is required", success: "" });
          return;
        }
        setTopics((prev) => [...prev, { ...newTopic, Lessons: [] }]);
        setNewTopic({ Title: "", Description: "", Lessons: [] });
        setShowAddTopic(false);
        break;

      case "update":
        if (!newTopic.Title) {
          setFeedback({ error: "Topic title is required", success: "" });
          return;
        }
        setTopics((prev) =>
          prev.map((topic, idx) =>
            idx === editingStates.topicIndex ? newTopic : topic
          )
        );
        setEditingStates((prev) => ({
          ...prev,
          isEditingTopic: false,
          topicIndex: null,
        }));
        setNewTopic({ Title: "", Description: "", Lessons: [] });
        setShowAddTopic(false);
        break;

      case "edit":
        setNewTopic(topics[topicIndex]);
        setEditingStates((prev) => ({
          ...prev,
          isEditingTopic: true,
          topicIndex,
        }));
        setShowAddTopic(true);
        break;

      case "delete":
        setTopics((prev) => prev.filter((_, idx) => idx !== topicIndex));
        break;
    }
    setFeedback({ error: "", success: "" });
  };

  const handleLessonAction = (action, topicIndex, lessonIndex = null) => {
    const updatedTopics = [...topics];

    switch (action) {
      case "add":
        if (!newLesson.title) {
          setFeedback({ error: "Lesson title is required", success: "" });
          return;
        }
        updatedTopics[topicIndex].Lessons.push(newLesson);
        setNewLesson({ title: "", text: "" });
        break;

      case "update":
        if (!newLesson.title) {
          setFeedback({ error: "Lesson title is required", success: "" });
          return;
        }
        updatedTopics[topicIndex].Lessons[editingStates.lessonIndex] =
          newLesson;
        setEditingStates((prev) => ({
          ...prev,
          isEditingLesson: false,
          lessonIndex: null,
        }));
        setNewLesson({ title: "", text: "" });
        setShowAddLessonIndex(null);
        break;

      case "edit":
        const lessonToEdit = topics[topicIndex].Lessons[lessonIndex];
        setNewLesson({
          title: lessonToEdit.title,
          text: lessonToEdit.text,
        });
        setEditingStates((prev) => ({
          ...prev,
          isEditingLesson: true,
          lessonIndex,
        }));
        setShowAddLessonIndex(topicIndex);
        break;

      case "delete":
        updatedTopics[topicIndex].Lessons = updatedTopics[
          topicIndex
        ].Lessons.filter((_, idx) => idx !== lessonIndex);
        break;
    }

    setTopics(updatedTopics);
    setFeedback({ error: "", success: "" });
  };

  const renderProgressBar = () => {
    const totalSteps = 3;
    const completedSteps = [
      !!courseData.Title && !!courseData.Description && !!courseData.Duration,
      topics.length > 0,
      topics.every((topic) => topic.Lessons.length > 0),
    ].filter(Boolean).length;
  };

  return (
    <div className="container py-1 pe-7">
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0">
            <div
              className="card-header  text-white py-3"
              style={{ backgroundColor: "#663367", color: "white" }}
            >
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="me-3"
                  size="2x"
                  style={{ color: "#38BFC3" }}
                />

                <div>
                  <h3 className="mb-0">Create New Course</h3>
                  <small>Fill in the details below to create your course</small>
                </div>
              </div>
            </div>

            <div className="card-body p-4">
              {renderProgressBar()}

              <form onSubmit={handleSubmit}>
                <div className=" mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faBook}
                        className="me-2"
                        style={{ color: "#38BFC3" }}
                      />
                      Course Details
                    </h5>

                    <div className="row g-3">
                      <div className="col-md-8">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="Title"
                            className="form-control custom-focus"
                            id="courseTitle"
                            value={courseData.Title}
                            onChange={handleCourseInputChange}
                            placeholder="Enter course title"
                          />
                          <label htmlFor="courseTitle">Course Title</label>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-floating">
                          <select
                            name="Duration"
                            className="form-select custom-focus"
                            id="courseDuration"
                            value={courseData.Duration}
                            onChange={handleCourseInputChange}
                          >
                            <option value="">Select duration</option>
                            {[...Array(52)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} week{i !== 0 ? "s" : ""}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="courseDuration">Duration</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            name="Description"
                            className="form-control custom-focus"
                            id="courseDescription"
                            value={courseData.Description}
                            onChange={handleCourseInputChange}
                            style={{ height: "100px" }}
                            placeholder="Enter course description"
                          />
                          <label htmlFor="courseDescription">Description</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="topics-section mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faList}
                        className="me-2"
                        style={{ color: "#38BFC3" }}
                      />
                      Course Topics
                    </h5>
                    <button
                      type="button"
                      className="btn btn-primary secondary-action-btn"
                      onClick={() => setShowAddTopic(!showAddTopic)}
                    >
                      <FontAwesomeIcon
                        icon={showAddTopic ? faMinus : faPlus}
                        className="me-2"
                      />
                      {showAddTopic ? "Cancel" : "Add Topic"}
                    </button>
                  </div>

                  {showAddTopic && (
                    <div className="card mb-3 border-primary border-opacity-25">
                      <div className="card-body">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control custom-focus"
                            id="topicTitle"
                            value={newTopic.Title}
                            onChange={(e) =>
                              setNewTopic({
                                ...newTopic,
                                Title: e.target.value,
                              })
                            }
                            placeholder="Topic Title"
                          />
                          <label htmlFor="topicTitle">Topic Title</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control custom-focus"
                            id="topicDescription"
                            value={newTopic.Description}
                            onChange={(e) =>
                              setNewTopic({
                                ...newTopic,
                                Description: e.target.value,
                              })
                            }
                            placeholder="Topic Description"
                            style={{ height: "100px" }}
                          />
                          <label htmlFor="topicDescription">
                            Topic Description
                          </label>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary secondary-action-btn"
                          onClick={() =>
                            handleTopicAction(
                              editingStates.isEditingTopic ? "update" : "add"
                            )
                          }
                        >
                          <FontAwesomeIcon
                            icon={
                              editingStates.isEditingTopic ? faEdit : faPlus
                            }
                            className="me-2"
                          />
                          {editingStates.isEditingTopic
                            ? "Update Topic"
                            : "Add Topic"}
                        </button>
                      </div>
                    </div>
                  )}

                  {topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="card mb-3 border-0 shadow-sm"
                    >
                      <div className="card-header bg-light py-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">{topic.Title}</h5>
                          <div className="btn-group">
                          <button
                              type="button"
                              className="btn btn-primary secondary-action-btn"
                              onClick={() => {
                                if (showAddLessonIndex === topicIndex) {
                                  setShowAddLessonIndex(null);
                                  setNewLesson({ title: "", text: "" });
                                  setEditingStates((prev) => ({
                                    ...prev,
                                    isEditingLesson: false,
                                    lessonIndex: null,
                                  }));
                                } else {
                                  setShowAddLessonIndex(topicIndex);
                                }
                              }}
                            >
                              <FontAwesomeIcon
                                icon={
                                  showAddLessonIndex === topicIndex
                                    ? faMinus
                                    : faPlus
                                }
                                className="me-1"
                              />
                              {showAddLessonIndex === topicIndex
                                ? editingStates.isEditingLesson
                                  ? "Cancel Editing"
                                  : "Cancel"
                                : "Add Lesson"}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm"
                              onClick={() =>
                                handleTopicAction("edit", topicIndex)
                              }
                            >
                              <FontAwesomeIcon icon={faEdit} className="me-1" />
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() =>
                                handleTopicAction("delete", topicIndex)
                              }
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="me-1"
                              />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* <p className="text-muted mb-4">{topic.Description}</p> */}

                        <div className="lessons-section">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="mb-0">
                              Lessons 
                              {/* ({topic.Lessons.length}) */}
                            </h6>
                            
                          </div>

                          {showAddLessonIndex === topicIndex && (
                            <div className="card mb-3 border-primary border-opacity-25">
                              <div className="card-body">
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control custom-focus"
                                    id="lessonTitle"
                                    value={newLesson.title || ""}
                                    onChange={(e) =>
                                      setNewLesson({
                                        ...newLesson,
                                        title: e.target.value,
                                      })
                                    }
                                    placeholder="Lesson Title"
                                  />
                                  <label htmlFor="lessontitle">
                                    Lesson Title
                                  </label>
                                </div>
                                <div className="form-floating mb-3">
                                  <textarea
                                    className="form-control custom-focus"
                                    id="lessontext"
                                    value={newLesson.text || ""}
                                    onChange={(e) =>
                                      setNewLesson({
                                        ...newLesson,
                                        text: e.target.value,
                                      })
                                    }
                                    placeholder="Lesson Content"
                                    style={{ height: "100px" }}
                                  />
                                  <label htmlFor="lessontext">
                                    Lesson Content
                                  </label>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-primary secondary-action-btn"
                                  onClick={() =>
                                    handleLessonAction(
                                      editingStates.isEditingLesson
                                        ? "update"
                                        : "add",
                                      topicIndex
                                    )
                                  }
                                >
                                  <FontAwesomeIcon
                                    icon={
                                      editingStates.isEditingLesson
                                        ? faEdit
                                        : faPlus
                                    }
                                    className="me-2"
                                  />
                                  {editingStates.isEditingLesson
                                    ? "Update Lesson"
                                    : "Add Lesson"}
                                </button>
                              </div>
                            </div>
                          )}

                          <div className="lesson-list">
                            {topic.Lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="card mb-2 border-0 bg-light"
                              >
                                <div className="card-body">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="mb-0">
                                      {/* <span className="text-muted me-2">
                                        #{lessonIndex + 1}
                                      </span> */}
                                      {lesson.title}
                                    </h6>
                                    <div className="btn-group">
                                    <Button style={{ backgroundColor: "#663367" }} onClick={toggleQuizModal}>
        Add Quiz
      </Button>

      <AddQuiz 
        isQuizModalOpen={isQuizModalOpen} 
        toggleQuizModal={toggleQuizModal} 
        lessonTitle={lesson.title} 
      />
                                      <button
                                        className="btn btn-purple me-2"
                                        onClick={() =>
                                          handleLessonAction(
                                            "edit",
                                            topicIndex,
                                            lessonIndex
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon
                                          icon={faEdit}
                                          className="btn btn-purple me-2"
                                        />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() =>
                                          handleLessonAction(
                                            "delete",
                                            topicIndex,
                                            lessonIndex
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon
                                          icon={faTrash}
                                          className="me-1"
                                        />
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                  {/* <p className="text-muted mb-0 small">
                                    {lesson.text}
                                  </p> */}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    style={{
                      backgroundColor: "#663367",
                      color: "#fff",
                      borderColor: "#663367",
                    }}
                    disabled={
                      !courseData.Title ||
                      !courseData.Description ||
                      !courseData.Duration ||
                      topics.length === 0
                    }
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                    Create Course
                  </button>
                </div>
              </form>

              {(feedback.error || feedback.success) && (
                <div
                  className={`alert ${
                    feedback.error ? "alert-danger" : "alert-success"
                  } mt-3`}
                  role="alert"
                >
                  {feedback.error || feedback.success}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
