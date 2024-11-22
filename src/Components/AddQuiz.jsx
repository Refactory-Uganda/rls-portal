import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faSave, 
  faTimes, 
  faTrash, 
  faCheckCircle, 
  faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "../../src/assets/css/addquiz.css";

function AddQuiz({ isQuizModalOpen, toggleQuizModal, lessonTitle, lessonId }) {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [questions, setQuestions] = useState([
    { text: '', order: 0, answer: '', explanation: '', options: [{ optionText: '', iscorrect: false, order: 0 }] }
  ]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!quizTitle.trim()) {
      errors.quizTitle = 'Quiz title is required';
    }
    questions.forEach((question, i) => {
      if (!question.text.trim()) {
        errors[`question-${i}`] = `Question ${i + 1} text is required`;
      }
      const correctAnswers = question.options.filter(opt => opt.iscorrect).length;
      if (correctAnswers !== 1) {
        errors[`question-${i}-options`] = `Question ${i + 1} must have exactly one correct answer`;
      }
      const emptyOptions = question.options.some(opt => !opt.optionText.trim());
      if (emptyOptions) {
        errors[`question-${i}-options`] = `All options for question ${i + 1} must have text`;
      }
    });
    return errors;
  };

  const saveQuiz = async () => {
    try {
      setIsSubmitting(true);
      setFormErrors({});
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        setIsSubmitting(false);
        return;
      }

      // Create quiz
      const quizData = {
        title: quizTitle,
        description: quizDescription || ' ',
        lessonId
      };
      const quizResponse = await axios.post('http://localhost:3000/quizzes', quizData);
      const quizId = quizResponse.data.id;

      // Create questions and options
      for (const [index, question] of questions.entries()) {
        const correctOption = question.options.find(opt => opt.iscorrect);
        const questionData = {
          text: question.text,
          order: index,
          answer: correctOption?.optionText || '',
          explanation: question.explanation || ' ',
          quizId: quizId
        };
        const questionResponse = await axios.post('http://localhost:3000/questions', questionData);
        const questionId = questionResponse.data.Question.id;

        // Create options
        for (const [optIndex, option] of question.options.entries()) {
          const optionData = {
            optionText: option.optionText,
            iscorrect: option.iscorrect,
            order: optIndex,
            questionId: questionId
          };
          await axios.post('http://localhost:3000/options', optionData);
        }
      }
      toggleQuizModal();
    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        error: error
      });
      setFormErrors({
        general: error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          'An error occurred while saving the quiz'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { text: '', order: questions.length, answer: '', explanation: '', options: [{ optionText: '', iscorrect: false, order: 0 }] }
    ]);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    const currentOptions = updatedQuestions[questionIndex].options;
    updatedQuestions[questionIndex].options.push({
      optionText: '',
      iscorrect: false,
      order: currentOptions.length
    });
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (e, index, field) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].optionText = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.forEach((opt, idx) => {
      opt.iscorrect = idx === optionIndex;
    });
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (indexToRemove) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, index) => index !== indexToRemove));
    }
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    if (questions[questionIndex].options.length > 1) {
      const updatedQuestions = [...questions];
      updatedQuestions[questionIndex].options = updatedQuestions[questionIndex].options
        .filter((_, index) => index !== optionIndex);
      setQuestions(updatedQuestions);
    }
  };

  return (
    <Modal show={isQuizModalOpen} onHide={toggleQuizModal} size="lg" className="quiz-modal">
      <Modal.Header closeButton className="text-white" style={{ backgroundColor: '#663367' }}>
        <Modal.Title>
          Add Quiz to {lessonTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        {formErrors.general && (
          <Alert variant="danger" className="d-flex align-items-center">
            <div>
              <strong>Error:</strong>
              <div>{formErrors.general}</div>
            </div>
          </Alert>
        )}
        <Container>
          <Form className="py-3">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="fw">
                    Quiz Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                    placeholder="Enter quiz title"
                    isInvalid={!!formErrors.quizTitle}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.quizTitle}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw">
                    Quiz Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={quizDescription}
                    onChange={(e) => setQuizDescription(e.target.value)}
                    placeholder="Enter quiz description"
                    className="form-control-lg"
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {questions.map((question, qIndex) => (
              <Card key={qIndex} className="shadow-sm mb-4 question-card">
                <Card.Header className="text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#38BFC3' }}>
                  <h5 className="mb-0">Question {qIndex + 1}</h5>
                  {questions.length > 1 && (
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => handleRemoveQuestion(qIndex)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  )}
                </Card.Header>
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      value={question.text}
                      onChange={(e) => handleQuestionChange(e, qIndex, 'text')}
                      placeholder="Enter question text"
                      isInvalid={!!formErrors[`question-${qIndex}`]}
                      className="form-control-lg mb-2"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors[`question-${qIndex}`]}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="text-muted">
                      Answer Explanation
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={question.explanation}
                      onChange={(e) => handleQuestionChange(e, qIndex, 'explanation')}
                      placeholder="Enter explanation for the correct answer"
                    />
                  </Form.Group>

                  <div className="options-container p-3 bg-light rounded">
                    <h6 className="mb-3">Answer Options</h6>
                    {question.options.map((option, oIndex) => (
                      <Row key={oIndex} className="mb-3 align-items-center">
                        <Col xs={1} className="text-center">
                          {String.fromCharCode(65 + oIndex)}.
                        </Col>
                        <Col xs={9}>
                          <Form.Control
                            type="text"
                            value={option.optionText}
                            onChange={(e) => handleOptionChange(e, qIndex, oIndex)}
                            placeholder="Enter option text"
                            className="form-control-lg"
                          />
                        </Col>
                        <Col xs={2} className="text-center">
                          <Form.Check
                            type="radio"
                            checked={option.iscorrect}
                            onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                            label="Correct"
                          />
                        </Col>
                        {question.options.length > 1 && (
                          <Button
                            variant="outline btn-delete "
                            size="sm"
                            onClick={() => handleRemoveOption(qIndex, oIndex)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        )}
                      </Row>
                    ))}
                    <Button
                      variant="outline secondary-action-btn"
                      size="sm"
                      onClick={() => handleAddOption(qIndex)}
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add Option
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}

            <Button
              variant="outline secondary-action-btn"
              size="sm"
              onClick={handleAddQuestion}
              className="mb-3"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Question
            </Button>

            <div className="d-flex justify-content-end">
              <Button
                variant="primary btn-purple"
                onClick={saveQuiz}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Quiz'}
                <FontAwesomeIcon icon={faSave} className="ms-2" />
              </Button>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddQuiz;
