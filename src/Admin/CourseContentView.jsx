import React, { useState } from "react";
import ContentList from "./ContentList";
import EditQuiz from "./EditQuiz";

const CourseContentView = ({ selectedCourse, setView }) => {
  const [lessonToview, setLessonToView] = useState(null);
  const [isEditQuizModalOpen, setIsEditQuizModalOpen] = useState(false);

  const handleBackClick = () => {
    setView("details");
  };

  const handleViewLessonContent = (lesson) => {
    setLessonToView(lesson);
  };

  const toggleEditQuizModal = () => setIsEditQuizModalOpen(!isEditQuizModalOpen);

  return (
    <div className="container mx-auto my-8">
      <div className="container courseList-btn-container">
        <button className="btn btn-primary action-btn" onClick={handleBackClick}>
          <i className="bi bi-arrow-left"></i> Back to Courses Details
        </button>
      </div>

      <div className="course-and-topics-details-container row d-flex align-items-stretch">
        <div className="card col-md-8 d-flex">
          {lessonToview && (
            <>
              <h3>{lessonToview.title}</h3>
              <p>{lessonToview.text}</p>
            </>
          )}
        </div>
        <div className="course-topics-container card col-md-4 d-flex">
          <ContentList
            selectedCourse={selectedCourse}
            handleViewLessonContent={handleViewLessonContent}
            lessonToview={lessonToview}
            setLessonToView={setLessonToView}
          />
        </div>
      </div>

      <div className="container quiz-btn-container">
        {lessonToview && (
          <>
            <a
              href="#"
              className="btn btn-primary action-btn"
            // onClick={() => setView("createCourse")}
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

      {isEditQuizModalOpen && (
        <EditQuiz
          isEditModalOpen={isEditQuizModalOpen}
          toggleQuizModal={toggleEditQuizModal}
          quizData={lessonToview.quiz}
        />
      )}
    </div>
  );
};

export default CourseContentView;
