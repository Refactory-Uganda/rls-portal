import React, { useState } from "react";
import ContentList from "./LContentList";
import api from "../services/api";
import "../assets/css/courseContentView.css";
import DisplayRichText from "../Components/Displayrichtext";
import TakeQuiz from "./TakeQuiz";

const ContentView = ({ selectedCourse, setView }) => {
  const [lessonToView, setLessonToView] = useState(null);
  const [isQuizViewOpen, setIsQuizViewOpen] = useState(false);
  const [quiz, setQuiz] = useState(null);

  const handleBackClick = () => {
    setView("details");
  };

  const handleViewLessonContent = async (lesson) => {
    try {
      const response = await api.get(`/lesson/${lesson.id}`);
      const lessonData = response.data;
      setLessonToView(lessonData);
      setIsQuizViewOpen(false);
    } catch (error) {
      console.error("Error fetching lesson data:", error);
    }
  };

  const handleTakeQuizClick = () => {
    if (lessonToView && lessonToView.quiz) {
      setIsQuizViewOpen(true);
      setQuiz(lessonToView.quiz);
    }
  };

  // If quiz view is open, render TakeQuiz component
  if (isQuizViewOpen) {
    return (
      <TakeQuiz
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
                Take Quiz
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

export default ContentView;