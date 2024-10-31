import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

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
      console.log('Creating quiz with lessonId:', lessonId);

      // Create quiz
      const quizData = {
        title: quizTitle,
        description: quizDescription || ' ',
        lessonId
      };
      console.log('Quiz data:', quizData);
      const quizResponse = await axios.post('http://localhost:3000/quizzes', quizData);
      console.log('Quiz response:', quizResponse.data);
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
        console.log('Question data:', questionData);
        const questionResponse = await axios.post('http://localhost:3000/questions', questionData);
        console.log('Question response:', questionResponse.data);
        const questionId = questionResponse.data.id;

        // Create options
        for (const [optIndex, option] of question.options.entries()) {
          const optionData = {
            optionText: option.optionText,
            iscorrect: option.iscorrect,
            order: optIndex,
            questionId: questionId
          };
          console.log('Option data:', optionData);
          const optionResponse = await axios.post('http://localhost:3000/options', optionData);
          console.log('Option response:', optionResponse.data);
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

  return (
    <Modal show={isQuizModalOpen} onHide={toggleQuizModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Quiz to {lessonTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formErrors.general && (
          <Alert variant="danger">
            <div><strong>Error:</strong></div>
            <div>{formErrors.general}</div>
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
              <Form.Control.Feedback type="invalid">
                {formErrors.quizTitle}
              </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      {formErrors[`question-${qIndex}`]}
                    </Form.Control.Feedback>
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
                          isInvalid={!!formErrors[`question-${qIndex}-options`]}
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
                    </Row>
                  ))}
                  {question.options.length < 4 && (
                    <Button
                      variant="link"
                      onClick={() => handleAddOption(qIndex)}
                      className="mt-2"
                    >
                      + Add Option
                    </Button>
                  )}
                  {!!formErrors[`question-${qIndex}-options`] && (
                    <div className="text-danger mt-2">
                      {formErrors[`question-${qIndex}-options`]}
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
            {questions.length < 10 && (
              <Button variant="link" onClick={handleAddQuestion}>
                + Add Question
              </Button>
            )}
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleQuizModal}>
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={saveQuiz}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Quiz'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddQuiz;
