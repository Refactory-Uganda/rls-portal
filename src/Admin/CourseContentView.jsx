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


  // const handleViewLessonContent = (lesson) => {
  //   setLessonToView(lesson);
  //   setIsQuizViewOpen(false); // Reset quiz view when switching lessons
  //   fetchQuizForLesson(lesson.id); // Fetch quiz for the selected lesson
  // };

  const handleViewLessonContent = async (lesson) => {
    try {
      // Fetch the lesson details from the API using the lessonId
      const response = await axios.get(
        `http://localhost:3000/lesson/${lesson.id}`
      );
      const lessonData = response.data;
      console.log(lessonData);
      // Set the fetched lesson data to view
      setLessonToView(lessonData);
      setIsQuizViewOpen(false); // Reset quiz view when switching lessons
    } catch (error) {
      console.error("Error fetching lesson data:", error);
      // You might want to handle errors, e.g., show a message to the user
    }
  };

  const toggleEditQuizModal = () =>
    setIsEditQuizModalOpen(!isEditQuizModalOpen);

  const handleTakeQuizClick = () => {
    setIsQuizViewOpen(true); // Open quiz view
    setQuiz(lessonToView.quiz);
  };

  // Function to fetch the quiz for the selected lesson
  // const fetchQuizForLesson = async (lessonId) => {
  //   setLoadingQuiz(true);
  //   setError(null);
  //   try {
  //     const response = await axios.get(`http://localhost:3000/quizzes?lessonId=${lessonId}`);
  //     setQuiz(response.data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoadingQuiz(false);
  //   }
  // };
  // console.log(lessonToView);

  // setQuiz(lessonToView.quiz);
  // console.log(quiz);


  return (
    <div className="container mx-auto my-8">
      {!isQuizViewOpen ? ( // Show course content if quiz view is not open
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
                <>
                  <h3>{lessonToView.title}</h3>
                  <p>{lessonToView.text}</p>
                </>
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
        // Render quiz view when "Take Lesson Quiz" is clicked
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
              Take Lesson Quiz
            </a>
            <a
              href="#"
              className="btn btn-primary action-btn"
              onClick={(e) => {
                e.preventDefault();
                toggleEditQuizModal();
              }}
            >
              Edit Quiz
            </a>
          </>
        )}
      </div>


      <div className="course-and-topics-details-container row d-flex align-items-stretch">
        {/* Content view window */}
        <div className="card col-md-8 d-flex">
          {lessonToview ? (
            <div>
              <DisplayRichText htmlContent={lessonToview.text} />
            </div>
          ) : (
            ""
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
