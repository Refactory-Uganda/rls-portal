import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/quizView.css";

const QuizView = ({ lessonId, onBack, quiz, setQuiz, lessonToView }) => {
  // const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/quizzes/${lessonToView.quiz.id}`
        );
        console.log(response.data);
        setQuiz(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [lessonId]);

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
        <h3>{quiz.title}</h3>
      </div>
      <div className="quiz-content-container">
        {quiz.questions.map((question, index) => (
          <div key={question.id} className="quiz-question-list-item">
            <h5>{`Q${index + 1}: ${question.text}`}</h5>
            {question.Option.map((option, i) => (
              <div key={option.id}>
                <input type="radio" name={`question-${index}`} />
                <label>{option.optionText}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizView;
