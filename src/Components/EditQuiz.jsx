import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function EditQuiz({ isEditModalOpen, toggleQuizModal, quizData }) {
  const [quizTitle, setQuizTitle] = useState(quizData?.title || '');
  const [quizDescription, setQuizDescription] = useState(quizData?.description || '');
  const [questions, setQuestions] = useState(quizData?.questions || []);
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

  const handleSaveQuiz = async () => {
    setIsSubmitting(true);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    try {
      const updatedQuizData = { title: quizTitle, description: quizDescription, questions };
      await axios.patch(`http://localhost:3000/quizzes/${quizData.id}`, updatedQuizData);
      toggleQuizModal();
    } catch (error) {
      console.error('Error updating quiz:', error);
      setFormErrors({ general: 'An error occurred while saving the quiz.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddQuestion = () => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      {
        text: '',
        order: prevQuestions.length,
        answer: '',
        explanation: '',
        options: [{ optionText: '', iscorrect: false, order: 0 }],
      },
    ]);
  };

  const handleDeleteQuestion = (index) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
    }
  };

  const handleQuestionChange = (e, index, field) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, [field]: e.target.value } : question
      )
    );
  };

  const handleAddOption = (questionIndex) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options.push({
        optionText: '',
        iscorrect: false,
        order: updatedQuestions[questionIndex].options.length,
      });
      return updatedQuestions;
    });
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    if (window.confirm('Are you sure you want to delete this option?')) {
      setQuestions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].options = updatedQuestions[questionIndex].options.filter(
          (_, i) => i !== optionIndex
        );
        return updatedQuestions;
      });
    }
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex].optionText = e.target.value;
      return updatedQuestions;
    });
  };

  const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options = updatedQuestions[questionIndex].options.map(
        (opt, idx) => ({ ...opt, iscorrect: idx === optionIndex })
      );
      return updatedQuestions;
    });
  };

  console.log(quizData)
  console.log(questions)

  return (
    <Modal show={isEditModalOpen} onHide={toggleQuizModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Quiz: {quizData?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formErrors.general && (
          <Alert variant="danger">
            <strong>Error:</strong> {formErrors.general}
          </Alert>
        )}
        <Container>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Quiz Title</Form.Label>
              <Form.Control
                type="text"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                placeholder="Enter quiz title"
                isInvalid={!!formErrors.quizTitle}
              />
              <Form.Control.Feedback type="invalid">{formErrors.quizTitle}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quiz Description</Form.Label>
              <Form.Control
                type="text"
                value={quizDescription}
                onChange={(e) => setQuizDescription(e.target.value)}
                placeholder="Enter quiz description"
              />
            </Form.Group>
            {questions.map((question, qIndex) => (
              <Card key={qIndex} className="mb-3">
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Question {qIndex + 1}</Form.Label>
                    <Form.Control
                      type="text"
                      value={question.text}
                      onChange={(e) => handleQuestionChange(e, qIndex, 'text')}
                      placeholder="Enter question text"
                      isInvalid={!!formErrors[`question-${qIndex}`]}
                    />
                    <Form.Control.Feedback type="invalid">{formErrors[`question-${qIndex}`]}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Answer Explanation</Form.Label>
                    <Form.Control
                      type="text"
                      value={question.explanation}
                      onChange={(e) => handleQuestionChange(e, qIndex, 'explanation')}
                      placeholder="Enter explanation for the correct answer"
                    />
                  </Form.Group>
                  {question.options.map((option, oIndex) => (
                    <Row key={oIndex} className="mb-2">
                      <Col>
                        <Form.Control
                          type="text"
                          value={option.optionText}
                          onChange={(e) => handleOptionChange(e, qIndex, oIndex)}
                          placeholder={`Option ${oIndex + 1}`}
                        />
                      </Col>
                      <Col xs="auto">
                        <Form.Check
                          type="radio"
                          name={`correct-answer-${qIndex}`}
                          label="Correct"
                          checked={option.iscorrect}
                          onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                        />
                      </Col>
                      <Col xs="auto">
                        <Button variant="danger" size="sm" onClick={() => handleDeleteOption(qIndex, oIndex)}>
                          Delete Option
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  {question.options.length < 4 && (
                    <Button variant="link" onClick={() => handleAddOption(qIndex)} className="mt-2">
                      + Add Option
                    </Button>
                  )}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteQuestion(qIndex)} className="mt-3">
                    Delete Question
                  </Button>
                </Card.Body>
              </Card>
            ))}
            <Button variant="link" onClick={handleAddQuestion} className="mt-3">
              + Add Question
            </Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleQuizModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveQuiz} disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Quiz'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditQuiz;
