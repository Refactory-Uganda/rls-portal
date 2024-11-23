import React, { useState } from 'react';
import { Modal, Button, Form, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faSave, 
  faTimes, 
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import api from "../services/api";

// Create a function to generate a fresh option
const createNewOption = () => ({
  optionText: '',
  isCorrect: false
});

// Create a function to generate a fresh question object
const createNewQuestion = () => ({
  text: '',
  explanation: '',
  options: [
    createNewOption(),
    createNewOption()
  ]
});

function AddQuiz({ isQuizModalOpen, toggleQuizModal, lessonTitle, lessonId }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    questions: [createNewQuestion()],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Quiz title is required';
    }

    formData.questions.forEach((question, qIndex) => {
      if (!question.text.trim()) {
        newErrors[`question-${qIndex}`] = 'Question text is required';
      }

      const hasEmptyOption = question.options.some(opt => !opt.optionText.trim());
      if (hasEmptyOption) {
        newErrors[`question-${qIndex}-options`] = 'All options must have text';
      }

      const correctCount = question.options.filter(opt => opt.isCorrect).length;
      if (correctCount !== 1) {
        newErrors[`question-${qIndex}-correct`] = 'Each question must have exactly one correct answer';
      }
    });

    return newErrors;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const quizData = {
        title: formData.title,
        description: formData.description || ' ',
        lessonId
      };
      const quizResponse = await api.post('/quizzes', quizData);
      const quizId = quizResponse.data.id;

      for (const [index, question] of formData.questions.entries()) {
        const correctOption = question.options.find(opt => opt.isCorrect);
        const questionData = {
          text: question.text,
          order: index,
          answer: correctOption?.optionText || '',
          explanation: question.explanation || ' ',
          quizId: quizId
        };
        const questionResponse = await api.post('/questions', questionData);
        const questionId = questionResponse.data.Question.id;

        for (const [optIndex, option] of question.options.entries()) {
          const optionData = {
            optionText: option.optionText,
            isCorrect: option.isCorrect,
            order: optIndex,
            questionId: questionId
          };
          await api.post('/options', optionData);
        }
      }
      toggleQuizModal();
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || 
          error.response?.data?.error || 
          error.message || 
          'Failed to save quiz'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(updates).forEach(key => {
        delete newErrors[key];
      });
      return newErrors;
    });
  };

  const handleQuestionChange = (qIndex, field, value) => {
    const newQuestions = [...formData.questions];
    newQuestions[qIndex] = { ...newQuestions[qIndex], [field]: value };
    updateFormData({ questions: newQuestions });
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...formData.questions];
    newQuestions[qIndex].options[oIndex] = {
      ...newQuestions[qIndex].options[oIndex],
      optionText: value,
    };
    updateFormData({ questions: newQuestions });
  };

  const handleCorrectAnswerChange = (qIndex, oIndex) => {
    const newQuestions = [...formData.questions];
    newQuestions[qIndex].options = newQuestions[qIndex].options.map((opt, index) => ({
      ...opt,
      isCorrect: index === oIndex,
    }));
    updateFormData({ questions: newQuestions });
  };

  const addQuestion = () => {
    updateFormData({
      questions: [...formData.questions, createNewQuestion()],
    });
  };

  const removeQuestion = (index) => {
    if (formData.questions.length > 1) {
      const newQuestions = formData.questions.filter((_, i) => i !== index);
      updateFormData({ questions: newQuestions });
    }
  };

  const addOption = (qIndex) => {
    const newQuestions = [...formData.questions];
    newQuestions[qIndex].options.push(createNewOption());
    updateFormData({ questions: newQuestions });
  };

  const removeOption = (qIndex, oIndex) => {
    if (formData.questions[qIndex].options.length > 2) {
      const newQuestions = [...formData.questions];
      newQuestions[qIndex].options = newQuestions[qIndex].options.filter((_, i) => i !== oIndex);
      updateFormData({ questions: newQuestions });
    }
  };

  return (
    <Modal show={isQuizModalOpen} onHide={toggleQuizModal} size="lg">
      <Modal.Header closeButton className="text-white" style={{ backgroundColor: '#663367' }}>
        <Modal.Title>Add Quiz to {lessonTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <Container>
          {errors.submit && (
            <Alert variant="danger" className="mb-4">
              <strong>Error:</strong> {errors.submit}
            </Alert>
          )}

          <Form className="py-3">
            <Card className="mb-4">
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Quiz Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData({ title: e.target.value })}
                    placeholder="Enter quiz title"
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quiz Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => updateFormData({ description: e.target.value })}
                    placeholder="Enter quiz description (optional)"
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {formData.questions.map((question, qIndex) => (
              <Card key={qIndex} className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center" 
                  style={{ backgroundColor: '#38BFC3', color: 'white' }}>
                  <h5 className="mb-0">Question {qIndex + 1}</h5>
                  {formData.questions.length > 1 && (
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => removeQuestion(qIndex)}
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
                      onChange={(e) => handleQuestionChange(qIndex, 'text', e.target.value)}
                      placeholder="Enter question text"
                      isInvalid={!!errors[`question-${qIndex}`]}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[`question-${qIndex}`]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Answer Explanation (Optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={question.explanation}
                      onChange={(e) => handleQuestionChange(qIndex, 'explanation', e.target.value)}
                      placeholder="Explain the correct answer"
                    />
                  </Form.Group>

                  <div className="options-container p-3 bg-light rounded border">
                    <h6 className="mb-3">Answer Options</h6>
                    {errors[`question-${qIndex}-options`] && (
                      <Alert variant="danger" className="mb-3">
                        {errors[`question-${qIndex}-options`]}
                      </Alert>
                    )}
                    {errors[`question-${qIndex}-correct`] && (
                      <Alert variant="danger" className="mb-3">
                        {errors[`question-${qIndex}-correct`]}
                      </Alert>
                    )}
                    
                    {question.options.map((option, oIndex) => (
                      <Row key={oIndex} className="mb-3 align-items-center">
                        <Col xs={1} className="text-center">
                          {String.fromCharCode(65 + oIndex)}.
                        </Col>
                        <Col xs={8}>
                          <Form.Control
                            type="text"
                            value={option.optionText}
                            onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                            placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                          />
                        </Col>
                        <Col xs={2}>
                          <Form.Check
                            type="radio"
                            name={`correct-${qIndex}`}
                            checked={option.isCorrect}
                            onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                            label="Correct"
                          />
                        </Col>
                        <Col xs={1}>
                          {question.options.length > 2 && (
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeOption(qIndex, oIndex)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          )}
                        </Col>
                      </Row>
                    ))}
                    
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => addOption(qIndex)}
                    >
                      <FontAwesomeIcon icon={faPlus} className="me-2" />
                      Add Option
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}

            <Button
              variant="outline-secondary"
              className="mb-4 w-100"
              onClick={addQuestion}
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add Question
            </Button>

            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{ backgroundColor: '#663367', borderColor: '#663367' }}
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