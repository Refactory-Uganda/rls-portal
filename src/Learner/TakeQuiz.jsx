import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
// import "../assets/css/quiz.css";

const TakeQuiz = ({ lessonId }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
  const [currentQuizResult, setCurrentQuizResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Quiz Data
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`/api/lessons/${lessonId}/quiz`);
        const data = await response.json();
        setQuiz(data);
        setCurrentQuizResult({
          quizId: data.id,
          quizTitle: data.title,
          totalQuestions: data.questions.length,
          correctAnswers: 0,
          incorrectAnswers: 0,
          score: 0,
          timestamp: new Date()
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch quiz:', error);
        setIsLoading(false);
      }
    };

    fetchQuizData();
  }, [lessonId]);

  // Disable Copy-Paste
  useEffect(() => {
    const preventCopyPaste = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('copy', preventCopyPaste);
    document.addEventListener('cut', preventCopyPaste);
    document.addEventListener('paste', preventCopyPaste);
    document.addEventListener('contextmenu', preventCopyPaste);

    return () => {
      document.removeEventListener('copy', preventCopyPaste);
      document.removeEventListener('cut', preventCopyPaste);
      document.removeEventListener('paste', preventCopyPaste);
      document.removeEventListener('contextmenu', preventCopyPaste);
    };
  }, []);

  const handleAnswerSelect = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = async () => {
    if (selectedAnswer) {
      const currentQuestion = quiz.questions[currentQuestionIndex];
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      
      setIsAnswerSubmitted(true);
      
      const updatedResult = {
        ...currentQuizResult,
        correctAnswers: isCorrect 
          ? currentQuizResult.correctAnswers + 1 
          : currentQuizResult.correctAnswers,
        incorrectAnswers: !isCorrect 
          ? currentQuizResult.incorrectAnswers + 1 
          : currentQuizResult.incorrectAnswers
      };
      
      setCurrentQuizResult(updatedResult);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz completed
      const finalResult = {
        ...currentQuizResult,
        score: Math.round((currentQuizResult.correctAnswers / quiz.questions.length) * 100)
      };
      
      try {
        // Save result to backend
        await fetch('/api/quiz-results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(finalResult)
        });

        // Update local results history
        setQuizResults(prev => [...prev, finalResult]);
      } catch (error) {
        console.error('Failed to save quiz result:', error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading quiz...</div>;
  }

  if (!quiz) {
    return <div>No quiz available for this lesson.</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-question-section">
        <h3>{quiz.title}</h3>
        <div className="question-card">
          <h4>Question {currentQuestionIndex + 1} of {quiz.questions.length}</h4>
          <p>{currentQuestion.question}</p>
          
          <div className="answer-options">
            {currentQuestion.options.map((option, index) => (
              <Button 
                key={index}
                variant={
                  isAnswerSubmitted 
                    ? (option === currentQuestion.correctAnswer 
                        ? 'success' 
                        : option === selectedAnswer 
                          ? 'danger' 
                          : 'outline-secondary')
                    : (selectedAnswer === option 
                        ? 'primary' 
                        : 'outline-secondary')
                }
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswerSubmitted}
                className="answer-option"
              >
                {option}
              </Button>
            ))}
          </div>
          
          {!isAnswerSubmitted && selectedAnswer && (
            <Button 
              variant="warning" 
              onClick={handleSubmitAnswer}
              className="submit-answer-btn"
            >
              Confirm Answer
            </Button>
          )}
          
          {isAnswerSubmitted && (
            <div className={`answer-explanation ${selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
              <p>
                {selectedAnswer === currentQuestion.correctAnswer 
                  ? "Correct Answer!" 
                  : "Incorrect. The correct answer is:"}
              </p>
              <p><strong>{currentQuestion.correctAnswer}</strong></p>
              <p>{currentQuestion.explanation}</p>
              
              <Button 
                variant="primary" 
                onClick={handleNextQuestion}
                className="next-question-btn"
              >
                {currentQuestionIndex < quiz.questions.length - 1 
                  ? 'Next Question' 
                  : 'Finish Quiz'}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="quiz-results-section">
        <h3>Quiz Results History</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quiz Title</th>
              <th>Total Questions</th>
              <th>Correct Answers</th>
              <th>Score (%)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {quizResults.map((result, index) => (
              <tr key={index}>
                <td>{result.quizTitle}</td>
                <td>{result.totalQuestions}</td>
                <td>{result.correctAnswers}</td>
                <td>{result.score}%</td>
                <td>{result.timestamp.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TakeQuiz;