/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/css/ContentList.css";
import api from "../services/api";


const LContentList = ({
  selectedCourse,
  setSelectedCourse,
  handleViewLessonContent,
 
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

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
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
                
              </h2>
            </div>

            <div
              id={`collapse${topic.id}`}
              className={`collapse ${activeTopic === topic.id ? "show" : ""}`}
            >
              <div className="lesson-card">
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
