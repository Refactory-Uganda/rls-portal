import React, { useState, useEffect } from "react";

import ContentList from "./ContentList";
import api from "../services/api";
import "../assets/css/courseContentView.css";

import DisplayRichText from "./Displayrichtext";
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
      const response = await api.get(`/lesson/${lesson.id}`);
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

  if (isQuizViewOpen) {
    return (
      <QuizView
        quiz={quiz}
        setQuiz={setQuiz}
        onBack={() => setIsQuizViewOpen(false)}
        lessonToView={lessonToView}
      />
    );
  }

  return (
    <div>
      <div className="content-view-container">
        {/* Main Content Section */}
        <div className="main-content scrollable-container">
          <div className="video-view">
            {lessonToView ? (
              <div className="lesson-content-window">
                <DisplayRichText htmlContent={lessonToView.text} />
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/FOD408a0EzU"
                frameBorder="0"
                allowFullScreen
                title="Video View"
              ></iframe>
            )}
          </div>

          {/* Action Buttons */}
          {lessonToView && lessonToView.quiz && (
            <div className="quiz-btn-container">
              <button
                className="btn btn-primary action-btn"
                onClick={handleTakeQuizClick}
              >
                View Quiz
              </button>
            </div>
          )}

          {/* Comments Section */}
          <div className="comments-section">
            <textarea
              placeholder="Add a comment..."
              className="content-view-text-area"
            />
          </div>
        </div>

        {/* Scrollable Video Rows */}
        <div className="content-list-container scrollable-container">
          <div
            className="courseList-btn-container"
            style={{ paddingLeft: "0" }}
          >
            <button
              className="btn btn-primary action-btn floating-btn"
              onClick={handleBackClick}
            >
              <i className="bi bi-arrow-left"></i> Back to Details
            </button>
          </div>
          <ContentList
            selectedCourse={selectedCourse}
            handleViewLessonContent={handleViewLessonContent}
            lessonToView={lessonToView}
            setLessonToView={setLessonToView}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContentView;
