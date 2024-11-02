import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizView = ({ lessonId, onBack }) => {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/quizzes?lessonId=${lessonId}`);
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
        <button onClick={onBack} className="btn btn-secondary mb-3">Back to Lesson</button>
        <p>No quiz available for this lesson.</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onBack} className="btn btn-secondary mb-3">Back to Lesson</button>
      <h3>{quiz.title}</h3>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <h5>{`Q${index + 1}: ${question.text}`}</h5>
          {question.options.map((option, i) => (
            <div key={i}>
              <input type="radio" name={`question-${index}`} />
              <label>{option.optionText}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizView;
