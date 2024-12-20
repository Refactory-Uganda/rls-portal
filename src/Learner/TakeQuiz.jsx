/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/css/takequiz.css";
import api from "../services/api";

const TakeQuiz = ({ lessonId, onBack, quiz, setQuiz, lessonToView }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuizResult = async () => {
      try {
        // Check if quiz result already exists
        const resultResponse = await api.get(`/quizzes/${lessonToView.quiz.id}/result`);
        if (resultResponse.data) {
          setQuizResult(resultResponse.data);
          setIsQuizSubmitted(true);
          setLoading(false);
          return;
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        // No existing result is fine, continue to fetch quiz
        console.log("No existing result found");
      }

      try {
        // Fetch quiz details
        const response = await api.get(`/quizzes/${lessonToView.quiz.id}`);
        setQuiz(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizResult();
  }, [lessonId, setQuiz, lessonToView.quiz.id]);

  const handleOptionChange = (questionId, optionId) => {
    // Only allow option change if quiz is not submitted
    if (!isQuizSubmitted) {
      setUserAnswers({
        ...userAnswers,
        [questionId]: optionId,
      });
    }
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all questions are answered
    const unansweredQuestions = quiz.questions.filter(
      question => !userAnswers[question.id]
    );
    
    if (unansweredQuestions.length > 0) {
      alert("Please answer all questions before submitting.");
      return;
    }

    try {
      // Start quiz attempt
      const assessmentResponse = await api.post("/quizzes/start", {
        quizId: quiz.id,
      });
      const attemptId = assessmentResponse.data.id;

      // Prepare answers
      const answers = quiz.questions.map((question) => ({
        attemptId,
        questionId: question.id,
        optionId: userAnswers[question.id],
        isCorrect: true, // Server-side validation
      }));

      // Submit quiz
      const submissionResponse = await api.post(
        `/quizzes/${attemptId}/submitQuiz`,
        { quizId: quiz.id, answers }
      );

      // Set quiz result
      const result = submissionResponse.data.data;
      setQuizResult(result);
      setIsQuizSubmitted(true);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("There was an error submitting your quiz. Please try again.");
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

  // Quiz result view
  if (isQuizSubmitted && quizResult) {
    return (
      <div className="quiz-result-container">
        <div className="btn-container">
          <button onClick={onBack} className="btn action-btn mb-3">
          <i className="bi bi-arrow-left"></i>
          </button>
          <h3>{quiz.title} - Results</h3>
        </div>
        <div className="result-details">
          <div className="score-summary">
            <h4>Your Score</h4>
            <p className="score">
              {quizResult.score} / {quizResult.maxScore}
            </p>
            <p className="percentage">
              {((quizResult.score / quizResult.maxScore) * 100).toFixed(2)}%
            </p>
          </div>
          
          <div className="detailed-results">
            <h4>Detailed Breakdown</h4>
            {quiz.questions.map((question, qIndex) => {
              const userOptionId = userAnswers[question.id];
             
              
              return (
                <div key={question.id} className="question-result">
                  <h5>{`Q${qIndex + 1}: ${question.text}`}</h5>
                  <div className="options">
                    {question.option.map((option) => (
                      <div 
                        key={option.id} 
                        className={`option ${
                          option.id === userOptionId 
                            ? (option.iscorrect ? 'correct' : 'incorrect')
                            : (option.iscorrect ? 'correct-answer' : '')
                        }`}
                      >
                        <input
                          type="radio"
                          checked={userOptionId === option.id}
                          readOnly
                        />
                        <label>{option.optionText}</label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Quiz taking view
  return (
    <div>
      <div className="btn-container">
        <button onClick={onBack} className="btn action-btn mb-3">
          Back to Lesson
        </button>
        <h3>{quiz.title}</h3>
      </div>
      <div className="quiz-content-container">
        <form onSubmit={handleQuizSubmit}>
          {quiz.questions.map((question, qIndex) => (
            <div key={question.id} className="quiz-question-list-item">
              <h5>{`Q${qIndex + 1}: ${question.text}`}</h5>
              {question.option.map((option) => (
                <div key={option.id} className="option-container">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked={userAnswers[question.id] === option.id}
                  />
                  <label>{option.optionText}</label>
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
    </div>
  );
};

export default TakeQuiz;