import React, { useEffect, useState } from "react";
import "../assets/css/quizView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import api from "../services/api";

const QuizView = ({ lessonId, onBack, quiz, setQuiz, lessonToView }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedQuiz, setEditedQuiz] = useState({ ...quiz });
  const [userAnswers, setUserAnswers] = useState({}); // Track user answers
  const [score, setScore] = useState(null); // Track user score after submission

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await api.get(`/quizzes/${lessonToView.quiz.id}`);
        setQuiz(response.data);
        setEditedQuiz(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [lessonId]);

  const handleEditChange = (e, questionIndex, optionIndex) => {
    const { name, value } = e.target;
    const updatedQuiz = { ...editedQuiz };

    if (name === "questionText") {
      updatedQuiz.questions[questionIndex].text = value;
    } else if (name === "optionText") {
      updatedQuiz.questions[questionIndex].Option[optionIndex].optionText =
        value;
    }

    setEditedQuiz(updatedQuiz);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Submit editedQuiz to the backend if needed
    setQuiz(editedQuiz);
    setEditing(false); // Close editing mode
  };

  const handleDeleteQuestion = (questionIndex) => {
    const updatedQuiz = { ...editedQuiz };
    updatedQuiz.questions.splice(questionIndex, 1);
    setEditedQuiz(updatedQuiz);
  };

  const handleOptionChange = (questionId, optionId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let calculatedScore = 0;

    quiz.questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      const correctOption = question.Option.find(
        (opt) => opt.iscorrect === true
      );

      if (userAnswer === correctOption.id) {
        calculatedScore += question.points || 1; // Add points or default to 1
      }
    });

    setScore(calculatedScore);
    console.log(calculatedScore);
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

  return (
    <div>
      <div className="btn-container">
        <button onClick={onBack} className="btn action-btn mb-3">
          Back to Lesson
        </button>
        <h3>{quiz.title}</h3>
        <button
          onClick={() => setEditing(!editing)}
          className="btn btn-primary secondary-action-btn mb-3"
        >
          <FontAwesomeIcon icon={faEdit} /> Edit Quiz
        </button>
      </div>
      <div className="quiz-content-container">
        {editing ? (
          <form onSubmit={handleEditSubmit}>
            {editedQuiz.questions.map((question, qIndex) => (
              <div key={question.id} className="quiz-question-list-item">
                <h5>{`Q${qIndex + 1}:`}</h5>
                <input
                  type="text"
                  name="questionText"
                  value={question.text}
                  onChange={(e) => handleEditChange(e, qIndex)}
                  className="question-input"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(qIndex)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
                {question.Option.map((option, oIndex) => (
                  <div key={option.id} className="option-container">
                    <input
                      type="text"
                      name="optionText"
                      value={option.optionText}
                      onChange={(e) => handleEditChange(e, qIndex, oIndex)}
                      className="option-input"
                    />
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </form>
        ) : (
          <form onSubmit={handleQuizSubmit}>
            {quiz.questions.map((question, index) => (
              <div key={question.id} className="quiz-question-list-item">
                <h5>{`Q${index + 1}: ${question.text}`}</h5>
                {question.Option.map((option) => (
                  <div key={option.id} className="option-container">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      onChange={() =>
                        handleOptionChange(question.id, option.id)
                      }
                      checked={userAnswers[question.id] === option.id}
                    />
                    <label>{` ${option.optionText}`}</label>
                  </div>
                ))}
              </div>
            ))}
            <div>
              <button type="submit" className="btn btn-primary action-btn mt-3">
                Submit Quiz
              </button>
            </div>
          </form>
        )}
      </div>
      {score !== null && (
        <div className="score-display">
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizView;
