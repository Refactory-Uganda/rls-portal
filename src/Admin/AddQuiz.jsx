import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function AddQuiz({ isQuizModalOpen, toggleQuizModal, lessonTitle }) {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: [{ text: '', isCorrect: false }] }
  ]);
  const [formErrors, setFormErrors] = useState({});

  const saveQuiz = async () => {
    try {
      // Validate form data
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      // Step 1: Create the Quiz
      const quizResponse = await axios.post('http://localhost:3000/quizzes/{lesson_id}', { title: quizTitle });
      const quizId = quizResponse.data.id;

      // Step 2: Create Questions and Options
      for (const question of questions) {
        // Create the Question
        const questionResponse = await axios.post('http://localhost:3000/questions', {
          quizId,
          questionText: question.questionText,
        });
        const questionId = questionResponse.data.id;

        // Create Options for the Question
        for (const option of question.options) {
          await axios.post('http://localhost:3000/options', { 
            questionId,
            text: option.text,
            isCorrect: option.isCorrect,
          });
        }
      }

      console.log('Quiz, questions, and options saved successfully');
      toggleQuizModal(); // Close modal on success
    } catch (error) {
      console.error('Error saving quiz, questions, or options:', error);
      setFormErrors({ general: 'Error saving quiz. Please try again.' });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!quizTitle.trim()) {
      errors.quizTitle = 'Quiz title is required';
    }

    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].questionText.trim()) {
        errors[`question-${i}`] = `Question ${i + 1} is required`;
      }

      if (questions[i].options.filter((opt) => opt.isCorrect).length !== 1) {
        errors[`question-${i}`] = `Please select one correct answer for question ${i + 1}`;
      }
    }

    return errors;
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', options: [{ text: '', isCorrect: false }] }]);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push({ text: '', isCorrect: false });
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.forEach((opt, idx) => {
      opt.isCorrect = idx === optionIndex;  // Only one correct answer per question
    });
    setQuestions(updatedQuestions);
  };

  return (
    <Modal show={isQuizModalOpen} onHide={toggleQuizModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Quiz to {lessonTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.keys(formErrors).length > 0 && (
          <Alert variant="danger">
            {formErrors.general || 'Please fix the errors below.'}
          </Alert>
        )}

        <Container>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group as={Row} controlId="quizTitle">
                  <Form.Label column sm={3}>Quiz Title</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                    
                      type="text"
                      value={quizTitle}
                      onChange={(e) => setQuizTitle(e.target.value)}
                      placeholder="Enter quiz title"
                    />
                    {formErrors.quizTitle && (
                      <Form.Text className="text-danger">{formErrors.quizTitle}</Form.Text>
                    )}
                  </Col>
                </Form.Group>

                {questions.map((question, qIndex) => (
                  <Card key={qIndex} className="mb-3">
                    <Card.Body>
                      <Form.Group as={Row} controlId={`question-${qIndex}`}>
                        <Form.Label column sm={3}>Question {qIndex + 1}</Form.Label>
                        <Col sm={9}>
                          <Form.Control
                            type="text"
                            value={question.questionText}
                            onChange={(e) => handleQuestionChange(e, qIndex)}
                            placeholder="Enter question text"
                          />
                          {formErrors[`question-${qIndex}`] && (
                            <Form.Text className="text-danger">
                              {formErrors[`question-${qIndex}`]}
                            </Form.Text>
                          )}
                        </Col>
                      </Form.Group>

                      {question.options.map((option, oIndex) => (
                        <Form.Group key={oIndex} as={Row} controlId={`option-${qIndex}-${oIndex}`}>
                          <Col sm={9} className="offset-sm-3">
                            <Form.Control
                              type="text"
                              value={option.text}
                              onChange={(e) => handleOptionChange(e, qIndex, oIndex)}
                              placeholder="Enter option text"
                            />
                            <Form.Check
                              type="radio"
                              label="Correct answer"
                              checked={option.isCorrect}
                              onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                            />
                          </Col>
                        </Form.Group>
                      ))}

                      <Button variant="link" onClick={() => handleAddOption(qIndex)}>
                        + Add Option
                      </Button>
                    </Card.Body>
                  </Card>
                ))}

                <Button variant="link" onClick={handleAddQuestion}>
                  + Add Question
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleQuizModal}>
          Close
        </Button>
        <Button variant="primary" onClick={saveQuiz}>
          Save Quiz
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddQuiz;