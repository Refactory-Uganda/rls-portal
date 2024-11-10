import React, { useEffect, useState } from "react";
import "../assets/css/quizView.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../services/api";

const QuizView = ({ lessonId, onBack, quiz, setQuiz, lessonToView }) => {
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
      setScore(score);

      alert(`Quiz submitted successfully! Your score: ${score}`);
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
        <Button
          onClick={() => setShowQuizEditModal(true)}
          className="btn btn-primary action-btn"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button
          title="Delete Quiz"
          onClick={() => setShowDeleteQuizModal(true)}
          className="ms-2 secondary-action-btn"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button
          onClick={addQuestion}
          className="btn btn-success mb-3 secondary-action-btn"
          title="Add Question"
        >
          <i className="bi bi-plus-square-fill"></i>
        </Button>
      </div>
      <div className="quiz-content-container">
        <form onSubmit={handleQuizSubmit}>
          {quiz.questions.map((question, qIndex) => (
            <div key={question.id} className="quiz-question-list-item">
              <h5>
                {`Q${qIndex + 1}: ${question.text}`}
                <Button
                  className="btn btn-purple me-2"
                  onClick={() => {
                    setSelectedQuestionIndex(qIndex);
                    setShowQuestionEditModal(true);
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                  title="Delete Question"
                  variant="danger"
                  onClick={() => deleteQuestion(question.id)}
                  className="ms-2 secondary-action-btn"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
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
          <button type="submit" className="btn btn-primary action-btn mt-3">
            Submit Quiz
          </button>
        </form>
      </div>
      {score !== null && <p>Your Score: {score}</p>}

      {/* Modal to Edit Quiz Details */}
      <Modal
        show={showQuizEditModal}
        onHide={() => setShowQuizEditModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Quiz Title</Form.Label>
              <Form.Control
                type="text"
                value={editedQuiz.title}
                onChange={(e) =>
                  setEditedQuiz({ ...editedQuiz, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quiz Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editedQuiz.description}
                onChange={(e) =>
                  setEditedQuiz({ ...editedQuiz, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="secondary-action-btn"
            variant="secondary"
            onClick={() => setShowQuizEditModal(false)}
          >
            Close
          </Button>
          <Button
            className="action-btn"
            variant="primary"
            onClick={handleEditQuizSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal to Edit Selected Question */}
      <Modal
        show={showQuestionEditModal}
        onHide={() => setShowQuestionEditModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedQuestionIndex !== null && (
            <Form>
              <Form.Group>
                <Form.Label>Question Text</Form.Label>
                <Form.Control
                  type="text"
                  value={editedQuiz.questions[selectedQuestionIndex].text}
                  onChange={(e) => {
                    const updatedQuiz = { ...editedQuiz };
                    updatedQuiz.questions[selectedQuestionIndex].text =
                      e.target.value;
                    setEditedQuiz(updatedQuiz);
                  }}
                />
              </Form.Group>
              {editedQuiz.questions[selectedQuestionIndex].option.map(
                (option, oIndex) => (
                  <div
                    key={option.id}
                    className="d-flex align-items-center option-edit-list-item"
                  >
                    <Form.Control
                      type="text"
                      value={option.optionText}
                      onChange={(e) => {
                        const updatedQuiz = { ...editedQuiz };
                        updatedQuiz.questions[selectedQuestionIndex].option[
                          oIndex
                        ].optionText = e.target.value;
                        setEditedQuiz(updatedQuiz);
                      }}
                    />
                    <Button
                      variant="danger"
                      onClick={() =>
                        deleteOption(selectedQuestionIndex, oIndex)
                      }
                      className="ms-2 secondary-action-btn"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                )
              )}
              <Button
                // variant="success"
                onClick={() => addOption(selectedQuestionIndex)}
                className="mt-3 secondary-action-btn"
                disabled={
                  editedQuiz.questions[selectedQuestionIndex].option.length >= 4
                }
              >
                Add Option
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="secondary-action-btn"
            variant="secondary"
            onClick={() => setShowQuestionEditModal(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleEditQuestionSubmit}
            className="action-btn"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal to Confirm Delete Quiz */}
      <Modal
        show={showDeleteQuizModal}
        onHide={() => setShowDeleteQuizModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this quiz? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="action-btn"
            onClick={() => setShowDeleteQuizModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteQuiz}
            className="secondary-action-btn"
          >
            Delete Quiz
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuizView;
