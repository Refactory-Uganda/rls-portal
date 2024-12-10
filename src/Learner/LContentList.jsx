import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Toast } from "react-bootstrap";
import "../../src/assets/css/ContentList.css";
import api from "../services/api";
// import AddQuiz from "./AddQuiz";
// import RichTextEditor from "./RichTextEditor";

const LContentList = ({
  selectedCourse,
  setSelectedCourse,
  handleViewLessonContent,
  lessonToView,
  setLessonToView,
}) => {
  const [activeTopic, setActiveTopic] = useState(null);

  // Modified Quiz Modal State
  const [quizModalState, setQuizModalState] = useState({
    isOpen: false,
    lessonId: null,
    lessonTitle: "",
  });

  // Modal States
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [showEditLessonModal, setShowEditLessonModal] = useState(false);
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);
  const [showAddAssignmentModal, setShowAddAssignmentModal] = useState(false);
  // const [isQuizModalOpen, setQuizModalOpen] = useState(false);

  // Selected Topic and Lesson for Editing
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // Success Messages
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // RichTextEditor State for Add/Edit Lesson
  const [lessonText, setLessonText] = useState("");
  // Initial state for the rich text input
  const [lessonDetails, setLessonDetails] = useState({
    text: "",
  });
  const [assignmentDetails, setAssignmentDetails] = useState({
    instructions: "",
  });

  // For adding assignment
  const [assignmentData, setAssignmentData] = useState({
    title: "",
    instructions: "",
    dueDateTime: "",
    file: null,
  });

  // Function to handle opening quiz modal for specific lesson
  const handleQuizModalOpen = (lesson, e) => {
    e.stopPropagation(); // Prevent lesson click event from triggering
    setQuizModalState({
      isOpen: true,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    });
  };
  // Function to handle closing quiz modal
  const handleQuizModalClose = () => {
    setQuizModalState({
      isOpen: false,
      lessonId: null,
      lessonTitle: "",
    });
  };

  // ADD ASSIGNMENT
  const handleAssignmentClick = () => {
    // setCurrentTopic(topic);
    setAssignmentData({
      title: "",
      instructions: "",
      dueDateTime: "",
      file: null,
    });
    setShowAddAssignmentModal(true);
  };

  const handleAssignmentInputChange = (e) => {
    const { name, value } = e.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  const handleAssignmentInstructionChange = (event) => {
    const { name, value } = event.target; // Destructure the event object
    setAssignmentData((prevDetails) => ({
      ...prevDetails,
      [name]: value, // Update the specific field in the form state
    }));
  };

  const handleAssignmentFileChange = (e) => {
    setAssignmentData({ ...assignmentData, file: e.target.files[0] });
  };

  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    if (
      !assignmentData.title ||
      !assignmentData.instructions ||
      !assignmentData.dueDateTime
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log(assignmentData);

    const submissionData = new FormData();
    submissionData.append("title", assignmentData.title);
    submissionData.append("instructions", assignmentData.instructions);
    submissionData.append("dueDateTime", assignmentData.dueDateTime);
    if (assignmentData.file) {
      submissionData.append("file", assignmentData.file);
    }
    try {
      const response = await api.post(`/assignments`, submissionData);
      const addedAssignment = response.data;
      // const updatedTopics = selectedCourse.topics.map((topic) =>
      //   topic.id === currentTopic.id
      //     ? { ...topic, Lesson: [...topic.Lesson, addedLesson] }
      //     : topic
      // );
      // setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      // setShowAddLessonModal(false);
      // showToast("Lesson added successfully");
    } catch (error) {
      console.error("Error adding assignment:", error);
      alert("Failed to add the assignment. Please try again.");
    }
  };

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  const handleEditTopic = (topic) => {
    setCurrentTopic(topic);
    setShowEditTopicModal(true);
  };

  const handleEditLesson = (lesson) => {
    setCurrentLesson(lesson || { title: "", text: "" }); // Set fallback
    setShowEditLessonModal(true);
  };

  const handleDeleteTopic = async (topicId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this topic? This action cannot be undone."
    );

    if (!confirmDelete) {
      return;
    }

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

  const handleDeleteLesson = async (lessonId, topicId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lesson? This action cannot be undone."
    );

    if (!confirmDelete) {
      // User canceled the deletion
      return;
    }

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
      alert(
        "Failed to delete the lesson. Please check your network connection or try again later."
      );
    }
  };

  const handleAddLessonClick = (topic) => {
    setCurrentTopic(topic);
    setLessonText(""); // Clear previous input
    setShowAddLessonModal(true);
  };

  const handleLessonTextChange = (event) => {
    const { name, value } = event.target; // Destructure the event object
    setLessonDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value, // Update the specific field in the form state
    }));
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    const newLesson = {
      title: e.target.title.value,
      text: lessonDetails.text, // Use lessonText here
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

  const handleEditLessonSubmit = async (e) => {
    e.preventDefault();
    if (!currentLesson) return; // Guard clause

    const updatedLesson = {
      title: e.target.title.value,
      text: currentLesson.text, // Use text from state
    };

    try {
      await api.patch(`/lesson/${currentLesson.id}`, updatedLesson);
   
      // const updatedTopics = selectedCourse.topics.map((topic) => {
      //   if (topic.id === currentTopic.id) {
      //     const updatedLessons = topic.Lesson.map((lesson) =>
      //       lesson.id === currentLesson.id
      //         ? { ...lesson, ...updatedLesson }
      //         : lesson
      //     );
      //     return { ...topic, Lesson: updatedLessons };
      //   }
      //   return topic;
      // });

      // setSelectedCourse((prev) => ({ ...prev, topics: updatedTopics }));
      // setShowEditLessonModal(false);
      // showToast("Lesson updated successfully");
      console.log(selectedCourse);
      const updatedTopics = selectedCourse.topics.map((topic) => {
        console.log("passed 2");
        console.log(currentTopic);
        if (topic.id === currentTopic.id) {
          console.log(currentLesson);

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
    <div className="accordion contentList-accordion" id="topicsAccordion">
      {selectedCourse.topics.map((topic) => {
        const numLessons = topic.Lesson.length;
        return (
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
                  {`${topic.Title} | ${
                    numLessons === 0
                      ? "No Lessons"
                      : numLessons === 1
                      ? `${numLessons} Lesson`
                      : `${numLessons} Lessons`
                  }`}
                </button>
                {/* <span>
                  <button
                    className="btn btn-green me-2"
                    onClick={() => handleAssignmentClick()}
                    title="Add Assignment"
                  >
                    <i className="fa-solid fa-list-check"></i>
                  </button>
                  <button
                    className="btn btn-green me-2"
                    onClick={() => handleAddLessonClick(topic)}
                    title="Add Lesson"
                  >
                    <i className="bi bi-plus-square-fill"></i>
                  </button>
                  <button
                    className="btn btn-green me-2"
                    onClick={() => handleEditTopic(topic)}
                    title="Edit Topic"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-green me-2"
                    onClick={() => handleDeleteTopic(topic.id)}
                    title="Delete Topic"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </span> */}
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
                      {lesson.quiz
                        ? `${lesson.title} | Includes Quiz`
                        : lesson.title}
                      {/* <span>
                        <button
                          className="btn btn-green me-2"
                          // onClick={() => handleAddLessonClick(topic)}
                          title="Add Assignment"
                        >
                          <i className="fa-solid fa-list-check"></i>
                        </button>
                        <button
                          className="btn me-2"
                          onClick={(e) => handleQuizModalOpen(lesson, e)}
                          title="Add Quiz"
                        >
                          <i className="bi bi-plus-square-fill"></i>
                        </button>
                        <AddQuiz
                          isQuizModalOpen={quizModalState.isOpen}
                          toggleQuizModal={handleQuizModalClose}
                          lessonTitle={quizModalState.lessonTitle}
                          lessonId={quizModalState.lessonId}
                        />
                        <button
                          className="btn btn-green me-2"
                          onClick={() => {
                            handleEditLesson(lesson);
                            console.log(lesson);
                          }}
                          title="Edit Lesson"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-green me-2"
                          onClick={() =>
                            handleDeleteLesson(lesson.id, topic.id)
                          }
                          title="Delete Lesson"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </span> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}

      


      
     
    </div>
  );
};

export default LContentList;
