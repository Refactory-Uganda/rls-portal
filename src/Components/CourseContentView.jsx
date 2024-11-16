import React, { useState, useEffect } from "react";

import ContentList from "./ContentList";
import api from "../services/api";
import "../assets/css/courseContentView.css";

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

  return (
    // <div className="container mx-auto my-8">
    //   {!isQuizViewOpen ? (
    //     <>
    //       <div className="courseList-btn-container">
    //         <button
    //           className="btn btn-primary action-btn"
    //           onClick={handleBackClick}
    //         >
    //           <i className="bi bi-arrow-left"></i> Back to Course Details
    //         </button>
    //       </div>
    //       <div className="course-and-topics-details-container row d-flex align-items-stretch">
    //         <div className="card col-md-8 d-flex">
    //           {lessonToView && (
    //             <div>
    //               <DisplayRichText htmlContent={lessonToView.text} />
    //             </div>
    //           )}
    //         </div>
    //         <div className="course-topics-container card col-md-4 d-flex">
    //           <ContentList
    //             selectedCourse={selectedCourse}
    //             handleViewLessonContent={handleViewLessonContent}
    //             lessonToView={lessonToView}
    //             setLessonToView={setLessonToView}
    //           />
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     <QuizView
    //       quiz={quiz}
    //       setQuiz={setQuiz}
    //       onBack={() => setIsQuizViewOpen(false)}
    //       lessonToView={lessonToView}
    //     />
    //   )}

    //   <div className="container quiz-btn-container">
    //     {lessonToView && !isQuizViewOpen && (
    //       <>
    //         <a
    //           href="#"
    //           className="btn btn-primary action-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             handleTakeQuizClick();
    //           }}
    //         >
    //          View Quiz
    //         </a>
    //         {/* <a
    //           href="#"
    //           className="btn btn-primary secondary-action-btn action-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             toggleEditQuizModal();
    //           }}
    //         >
    //           Edit Quiz
    //         </a> */}
    //       </>
    //     )}
    //   </div>

    //   {isEditQuizModalOpen && (
    //     <EditQuiz
    //       isEditModalOpen={isEditQuizModalOpen}
    //       toggleQuizModal={toggleEditQuizModal}
    //       quizData={lessonToView.quiz}
    //     />
    //   )}

    //   {loadingQuiz && <p>Loading quiz...</p>}
    //   {error && <p>Error fetching quiz: {error}</p>}
    // </div>
    <div>
      <div className="content-view-container">
        <div className="main-content">
          {/* Video View Window */}
          <div className="video-view">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allowFullScreen
              title="Video View"
            ></iframe>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            {/* <h3>Comments</h3>
            <div className="comment">
              <p>
                <strong>User1:</strong> Great video!
              </p>
            </div>
            <div className="comment">
              <p>
                <strong>User2:</strong> Very informative, thanks!
              </p>
            </div> */}
            <textarea
              placeholder="Add a comment..."
              className="content-view-text-area"
            />
            {/* <button>Post</button> */}
          </div>
        </div>

        {/* Scrollable Video Rows */}
        <div className="content-list-container">
          {/* <h3>Up Next</h3>
        {[1, 2, 3].map((video) => (
          <div className="video-item" key={video}>
            <img
              src={`https://via.placeholder.com/120x90`}
              alt={`Video Thumbnail ${video}`}
            />
            <div className="video-info">
              <p className="title">{`Video Title ${video}`}</p>
              <p className="channel">Channel Name</p>
            </div>
          </div>
        ))} */}
          <div className="courseList-btn-container">
            <button
              className="btn btn-primary action-btn"
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
