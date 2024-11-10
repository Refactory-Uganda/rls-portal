import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentList from "./ContentList";

import DisplayRichText from "./displayrichtext";
import RichTextEditor from "./RichTextEditor";

import EditQuiz from "./EditQuiz";
import QuizView from "./QuizView"; // New component to display the quiz

const CourseContentView = ({ selectedCourse, setView }) => {
  const [lessonToView, setLessonToView] = useState(null);
  const [isEditQuizModalOpen, setIsEditQuizModalOpen] = useState(false);
  const [isQuizViewOpen, setIsQuizViewOpen] = useState(false); // New state for quiz view
  const [quiz, setQuiz] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [error, setError] = useState(null);

  const handleBackClick = () => {
    setView("details");
  };

  const handleViewLessonContent = async (lesson) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/lesson/${lesson.id}`
      );
      const lessonData = response.data;
      console.log(lessonData);
      setLessonToView(lessonData);
      setIsQuizViewOpen(false);
    } catch (error) {
      console.error("Error fetching lesson data:", error);
    }
  };

  const toggleEditQuizModal = () =>
    setIsEditQuizModalOpen(!isEditQuizModalOpen);

  const handleTakeQuizClick = () => {
    setIsQuizViewOpen(true);
    setQuiz(lessonToView.quiz);
  };

  return (
    <div className="container mx-auto my-8">
      {!isQuizViewOpen ? (
        <>
          <div className="container courseList-btn-container">
            <button
              className="btn btn-primary action-btn"
              onClick={handleBackClick}
            >
              <i className="bi bi-arrow-left"></i> Back to Course Details
            </button>
          </div>
          <div className="course-and-topics-details-container row d-flex align-items-stretch">
            <div className="card col-md-8 d-flex">
              {lessonToView && (
                <div>
                  <DisplayRichText htmlContent={lessonToView.text} />
                </div>
              )}
            </div>
            <div className="course-topics-container card col-md-4 d-flex">
              <ContentList
                selectedCourse={selectedCourse}
                handleViewLessonContent={handleViewLessonContent}
                lessonToView={lessonToView}
                setLessonToView={setLessonToView}
              />
            </div>
          </div>
        </>
      ) : (
        <QuizView
          quiz={quiz}
          setQuiz={setQuiz}
          onBack={() => setIsQuizViewOpen(false)}
          lessonToView={lessonToView}
        />
      )}

      <div className="container quiz-btn-container">
        {lessonToView && !isQuizViewOpen && (
          <>
            <a
              href="#"
              className="btn btn-primary action-btn"
              onClick={(e) => {
                e.preventDefault();
                handleTakeQuizClick();
              }}
            >
             View Quiz
            </a>
            {/* <a
              href="#"
              className="btn btn-primary secondary-action-btn action-btn"
              onClick={(e) => {
                e.preventDefault();
                toggleEditQuizModal();
              }}
            >
              Edit Quiz
            </a> */}
          </>
        )}
      </div>

      {isEditQuizModalOpen && (
        <EditQuiz
          isEditModalOpen={isEditQuizModalOpen}
          toggleQuizModal={toggleEditQuizModal}
          quizData={lessonToView.quiz}
        />
      )}

      {loadingQuiz && <p>Loading quiz...</p>}
      {error && <p>Error fetching quiz: {error}</p>}
    </div>
  );
};

export default CourseContentView;
