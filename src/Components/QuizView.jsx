import React, { useEffect, useState } from "react";
import "../assets/css/quizView.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faSave,
  faTimes,
  faTrash,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form, Row, Col, Card } from "react-bootstrap";

import api from "../services/api";

const QuizView = ({ lessonId, onBack, quiz, setQuiz, lessonToView }) => {
  // const [quiz, setQuiz] = useState(null);

  console.log(quiz);
  console.log(lessonToView);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [editing, setEditing] = useState(false);
  const [editedQuiz, setEditedQuiz] = useState({ ...quiz });
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const [showQuizEditModal, setShowQuizEditModal] = useState(false);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [showQuestionEditModal, setShowQuestionEditModal] = useState(false);
  const [showDeleteQuizModal, setShowDeleteQuizModal] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const [newQuestions, setNewQuestions] = useState([
    {
      text: "",
      order: 0,
      answer: "",
      explanation: "",
      options: [{ optionText: "", isCorrect: false, order: 0 }],
    },
  ]);

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
  }, [lessonToView.quiz.id]);

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

  console.log(editedQuiz);
  console.log(quiz);
  const handleEditQuestionSubmit = async () => {
    const question = editedQuiz.questions[selectedQuestionIndex];
    try {
      await api.patch(`/questions/${question.id}`, question);
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
  // ===============================================================================

  const handleAddQuestion = () => {
    setNewQuestions([
      ...newQuestions,
      { text: "", options: [{ optionText: "", isCorrect: false, order: 0 }] },
    ]);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...newQuestions];
    const currentOptions = updatedQuestions[questionIndex].options;
    updatedQuestions[questionIndex].options.push({
      optionText: "",
      isCorrect: false,
      order: currentOptions.length,
    });
    setNewQuestions(updatedQuestions);
  };

  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...newQuestions];
    updatedQuestions[index].text = e.target.value;
    setNewQuestions(updatedQuestions);
  };

  const handleAnswerExplanationChange = (e, index) => {
    const updatedQuestions = [...newQuestions];
    updatedQuestions[index].explanation = e.target.value;
    setNewQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...newQuestions];
    updatedQuestions[questionIndex].options[optionIndex].optionText =
      e.target.value;
    setNewQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...newQuestions];
    updatedQuestions[questionIndex].options.forEach((opt, idx) => {
      opt.isCorrect = idx === optionIndex;
    });
    setNewQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (indexToRemove) => {
    if (newQuestions.length > 1) {
      setNewQuestions(
        newQuestions.filter((_, index) => index !== indexToRemove)
      );
    }
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    if (newQuestions[questionIndex].options.length > 1) {
      const updatedQuestions = [...newQuestions];
      updatedQuestions[questionIndex].options = updatedQuestions[
        questionIndex
      ].options.filter((_, index) => index !== optionIndex);
      setNewQuestions(updatedQuestions);
    }
  };

  const handleAnswerOptionChange = (questionId, optionId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleSubmitQuestion = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate all questions and options
      for (const question of newQuestions) {
        if (!question.text.trim()) {
          throw new Error("Each question must have text.");
        }

        if (!question.options.every((option) => option.optionText.trim())) {
          throw new Error("All options must contain text.");
        }

        if (!question.options.some((option) => option.isCorrect)) {
          throw new Error(
            "Each question must have at least one correct option."
          );
        }
      }

      // Proceed with submission if validation passes
      const quizId = quiz.id;

      for (const question of newQuestions) {
        const correctOption = question.options.find((opt) => opt.isCorrect);
        const questionData = {
          text: question.text,
          order: newQuestions.indexOf(question),
          answer: correctOption?.optionText || "",
          explanation: question.explanation || "",
          quizId,
        };

        // Post question
        const questionResponse = await api.post("/questions", questionData);
        const questionId = questionResponse.data.Question.id;

        // Post options
        for (const [index, option] of question.options.entries()) {
          const optionData = {
            optionText: option.optionText,
            isCorrect: option.isCorrect,
            order: index,
            questionId,
          };

          await api.post("/options", optionData);
        }
      }
      // const fetchUpdatedQuiz = async () => {
      //   try {
      //     const response = await api.get(`/quizzes/${lessonToView.quiz.id}`);
      //     setQuiz(response.data);
      //   } catch (err) {
      //     setError(err.message);
      //   } finally {
      //     setLoading(false);
      //   }
      // };
      // fetchUpdatedQuiz();
      setNewQuestions([
        {
          text: "",
          order: 0,
          answer: "",
          explanation: "",
          options: [{ optionText: "", isCorrect: false, order: 0 }],
        },
      ]);
      setShowAddQuestionModal(false);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "An error occurred while submitting the question."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===========================================================================

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
        isCorrect: false,
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
      option: [{ id: Date.now() + 1, optionText: "", isCorrect: false }],
    });
    setEditedQuiz(updatedQuiz);
  };

  // Handle deleting question
  const deleteQuestion = async (questionId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (isConfirmed) {
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
    }
  };

  if (loading) return <p>Loading quiz...</p>;
  if (error)
    return (
      <div>
        <button onClick={onBack} className="btn btn-secondary mb-3">
          Back to Lesson
        </button>
        <p>Error fetching quiz: {error}</p>
      </div>
    );

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
        <h3 style={{ fontWeight: "bold" }}>{`${quiz.title}`}</h3>
        <span>
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
            onClick={() => setShowAddQuestionModal(true)}
            className="btn secondary-action-btn"
            title="Add Question"
          >
            <i className="bi bi-plus-square-fill"></i>
          </Button>
        </span>
      </div>
      <div className="quiz-content-container">
        <form onSubmit={handleQuizSubmit}>
          {quiz.questions.map((question, qIndex) => (
            <div
              key={question.id}
              className="quiz-question-list-item"
              style={{ textAlign: "left" }}
            >
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
                    onChange={() =>
                      handleAnswerOptionChange(question.id, option.id)
                    }
                    checked={userAnswers[question.id] === option.id}
                  />
                  <label>{`${" " + option.optionText}`}</label>
                </div>
              ))}
            </div>
          ))}
          <div style={{ textAlign: "right" }}>
            <button type="submit" className="btn btn-primary action-btn mt-3">
              Submit Quiz
            </button>
          </div>
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
              <Form.Label>Options</Form.Label>
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
          {/* <Button
            className="secondary-action-btn"
            variant="secondary"
            onClick={() => setShowQuestionEditModal(false)}
          >
            Close
          </Button> */}
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

      {/* Add question Modal */}
      <Modal
        show={showAddQuestionModal}
        onHide={() => setShowAddQuestionModal(false)}
        size="lg"
        className="add-question-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {newQuestions.map((question, qIndex) => (
            <Card key={qIndex} className="mb-4">
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Question text</Form.Label>
                  <Form.Control
                    type="text"
                    value={question.text}
                    onChange={(e) => handleQuestionChange(e, qIndex)}
                    placeholder={`Enter text for Question ${qIndex + 1}`}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Answer Explanation (Optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={question.explanation}
                    onChange={(e) => handleAnswerExplanationChange(e, qIndex)}
                    placeholder="Explain the correct answer"
                  />
                </Form.Group>
                <div className="options-container p-3 bg-light rounded">
                  {question.options.map((option, oIndex) => (
                    <Row key={oIndex} className="mb-3 align-items-center">
                      <Col xs={1} className="text-center">
                        {String.fromCharCode(65 + oIndex)}.
                      </Col>
                      <Col xs={9}>
                        <Form.Control
                          type="text"
                          value={option.optionText}
                          onChange={(e) =>
                            handleOptionChange(e, qIndex, oIndex)
                          }
                          placeholder={`Option ${String.fromCharCode(
                            65 + oIndex
                          )}`}
                        />
                      </Col>
                      <Col xs={2} className="text-center">
                        <Form.Check
                          type="radio"
                          checked={option.isCorrect}
                          onChange={() =>
                            handleCorrectAnswerChange(qIndex, oIndex)
                          }
                          label="Correct"
                        />
                      </Col>
                      {question.options.length > 1 && (
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemoveOption(qIndex, oIndex)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      )}
                    </Row>
                  ))}
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleAddOption(qIndex)}
                  >
                    <FontAwesomeIcon icon={faPlus} /> Add Option
                  </Button>
                </div>
              </Card.Body>
              {newQuestions.length > 1 && (
                <Card.Footer className="text-center">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoveQuestion(qIndex)}
                  >
                    Remove Question
                  </Button>
                </Card.Footer>
              )}
            </Card>
          ))}
          <Button
            size="sm"
            onClick={handleAddQuestion}
            className="mb-3 secondary-action-btn"
          >
            <FontAwesomeIcon icon={faPlus} /> Add Question
          </Button>
          <Button
            size="sm"
            onClick={handleSubmitQuestion}
            className="mb-3 action-btn"
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default QuizView;
