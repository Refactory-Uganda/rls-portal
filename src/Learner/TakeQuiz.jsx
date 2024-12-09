import React, { useEffect, useState } from "react";
import "../assets/css/quizView.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../services/api";

const TakeQuiz = ({ lessonId, onBack, quiz, setQuiz, lessonToView }) => {
  // const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editing, setEditing] = useState(false);
  const [editedQuiz, setEditedQuiz] = useState({ ...quiz });
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const [showQuizEditModal, setShowQuizEditModal] = useState(false);
  const [showQuestionEditModal, setShowQuestionEditModal] = useState(false);
  const [showDeleteQuizModal, setShowDeleteQuizModal] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await api.get(`/quizzes/${lessonToView.quiz.id}`);
        setQuiz(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [lessonId]);

  const handleEditQuizSubmit = async () => {
    try {
      await api.patch(`/quizzes/${quiz.id}`, {
        title: editedQuiz.title,
        description: editedQuiz.description,
      });
      setQuiz(editedQuiz);
      setShowQuizEditModal(false);
    } catch (error) {
      console.error("Failed to update quiz:", error);
    }
  };

  const handleEditQuestionSubmit = async () => {
    const question = editedQuiz.questions[selectedQuestionIndex];
    try {
      await api.patch(`/quizzes/${question.id}`, question);
      setQuiz(editedQuiz);
      setShowQuestionEditModal(false);
    } catch (error) {
      console.error("Failed to update question:", error);
    }
  };

  const handleDeleteQuiz = async () => {
    try {
      await api.delete(`/quizzes/${quiz.id}`);
      setShowDeleteQuizModal(false);
      onBack(); // Go back to the previous screen after deleting
    } catch (error) {
      console.error("Failed to delete quiz:", error);
    }
  };

  const handleOptionChange = (questionId, optionId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();

    try {
      //Create a new assessment entry and get the attemptId
      const assessmentResponse = await api.post("/quizzes/start", {
        quizId: quiz.id, // Assuming `quiz.id` uniquely identifies the quiz
      });
      const attemptId = assessmentResponse.data.id;

      const answers = [];

      // Build the answers array without calculating the score
      quiz.questions.forEach((question) => {
        const userAnswer = userAnswers[question.id];

        answers.push({
          attemptId: attemptId,
          questionId: question.id,
          optionId: userAnswer,
          isCorrect: true,
        });
      });

      //Submit the quiz with answers to the backend
      const submissionResponse = await api.post(
        `/quizzes/${attemptId}/submitQuiz`,
        {
          quizId: quiz.id,
          answers: answers,
        }
      );

      // Display the score returned by the backend
      console.log(submissionResponse);
      const score = submissionResponse.data.data.score;
      const maxScore = submissionResponse.data.data.maxScore;
      setScore(score);

      alert(
        `Quiz submitted successfully! Your score: ${score} out of ${maxScore}`
      );
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("There was an error submitting your quiz. Please try again.");
    }
  };

  const addOption = (questionIndex) => {
    const updatedQuiz = { ...editedQuiz };
    if (updatedQuiz.questions[questionIndex].option.length < 4) {
      updatedQuiz.questions[questionIndex].option.push({
        id: Date.now(),
        optionText: "",
        iscorrect: false,
      });
      setEditedQuiz(updatedQuiz);
    }
  };

  const deleteOption = (questionIndex, optionIndex) => {
    const updatedQuiz = { ...editedQuiz };
    updatedQuiz.questions[questionIndex].option.splice(optionIndex, 1);
    setEditedQuiz(updatedQuiz);
  };

  const addQuestion = () => {
    const updatedQuiz = { ...editedQuiz };
    updatedQuiz.questions.push({
      id: Date.now(),
      text: "",
      option: [{ id: Date.now() + 1, optionText: "", iscorrect: false }],
    });
    setEditedQuiz(updatedQuiz);
  };

  const deleteQuestion = async (questionId) => {
    try {
      await api.delete(`/questions/${questionId}`);
      const updatedQuiz = { ...editedQuiz };
      updatedQuiz.questions = updatedQuiz.questions.filter(
        (q) => q.id !== questionId
      );
      setEditedQuiz(updatedQuiz);
      setQuiz(updatedQuiz);
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p>Error fetching quiz: {error}</p>;

  if (!quiz || !quiz.questions) {
    return (
      <div>
        <button onClick={onBack} className="btn btn-secondary mb-3">
          Back to Lesson
        </button>
        <p>No quiz available for this lesson.</p>
      </div>
    );
  }

  console.log(quiz);



  return (
    <div>
      <div className="btn-container">
        <button onClick={onBack} className="btn action-btn mb-3">
          Back to Lesson
        </button>
        <h3>{`${quiz.title}`}</h3>
      </div>
      <div className="quiz-content-container">
        <form onSubmit={handleQuizSubmit}>
          {quiz.questions.map((question, qIndex) => (
            <div key={question.id} className="quiz-question-list-item">
              <h5>
                {`Q${qIndex + 1}: ${question.text}`}
              </h5>
              {question.option.map((option) => (
                <div key={option.id} className="option-container">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked={userAnswers[question.id] === option.id}
                  />
                  <label>{` ${option.optionText}`}</label>
                </div>
              ))}
            </div>
          ))}
          <div className="submit-btn-container">
          <button type="submit" className="btn btn-primary action-btn mt-3">
            Submit Quiz
          </button>
          </div>
        </form>
      </div>
      {score !== null && <p>Your Score: {score}</p>}
       
    </div>
  );
};

export default TakeQuiz;
