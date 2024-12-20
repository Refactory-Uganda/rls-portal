/* eslint-disable react/prop-types */
import "../assets/css/learnerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faListAlt, faClipboardList, faQuoteLeft, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// Expanded array of quotes
const quotes = [
  "The secret to getting ahead is getting started. - Mark Twain",
  "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "The future depends on what we do in the present. - Mahatma Gandhi",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "It is never too late to be what you might have been. - George Eliot",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Action is the foundational key to all success. - Pablo Picasso",
  "Don't limit your challenges. Challenge your limits. - Anonymous",
  "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino"
];

// Expanded array of learning tips
const learningTips = [
  "Consistency is key to mastery. Set small, achievable goals each day, and you'll be amazed at the progress you make over time!",
  "The more you practice, the better you get. Practice makes perfect!",
  "Don't be afraid to make mistakes. They are the stepping stones to success.",
  "Break down large tasks into smaller, manageable chunks. Tackle one thing at a time.",
  "Stay curious! Never stop asking questions and seeking new knowledge.",
  "Use active recall to reinforce learning. Test yourself regularly!",
  "Don't rush. Take the time to understand the concepts thoroughly.",
  "Stay organized and plan your study sessions ahead of time.",
  "Teaching others is a great way to solidify your knowledge and understanding.",
  "Stay positive and motivated! Your effort will pay off."
];

const LearnerDashboard = ({ user = { firstName: "Daphine" }, courseName = "Course Name", topicsCount = 5, lessonsCount = 20 }) => {
  const navigate = useNavigate();

  const handleNavigateToCourse = () => {
    navigate("/learner/course");
  };

  // Get the current date to select a quote and a learning tip
  const currentDate = new Date();
  const quoteIndex = currentDate.getDate() % quotes.length; // Ensures a different quote each day
  const dailyQuote = quotes[quoteIndex];

  const learningTipIndex = currentDate.getDate() % learningTips.length; // Ensures a different learning tip each day
  const dailyLearningTip = learningTips[learningTipIndex];

  return (
    <div className="learner-dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome, {user.firstName}!</h2>
        <p className="para">Your learning journey awaits. Explore and achieve your goals!</p>
      </div>

      {/* Cards Section */}
      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={handleNavigateToCourse}>
          <FontAwesomeIcon icon={faBook} size="3x" color=" #38BFC3"/>
          <h4>{courseName}</h4>
          <p>Your Assigned Course</p>
        </div>
        <div className="dashboard-card" onClick={handleNavigateToCourse}>
          <FontAwesomeIcon icon={faListAlt} size="3x" color=" #38BFC3"/>
          <h4>{topicsCount} Topics</h4>
          <p>Total Topics in the Course</p>
        </div>
        <div className="dashboard-card" onClick={handleNavigateToCourse}>
          <FontAwesomeIcon icon={faClipboardList} size="3x" color=" #38BFC3"/>
          <h4>{lessonsCount} Lessons</h4>
          <p>Total Lessons in the Course</p>
        </div>
      </div>

      {/* Motivation and Learning Tip Section */}
      <div className="motivation-tip-section-container">
        {/* Learning Tip Section */}
        <div className="learning-tip-section">
          <h3>
            <FontAwesomeIcon icon={faLightbulb} /> Learning Tip of the Day
            </h3>
          <p>{dailyLearningTip}</p>
        </div>

        {/* Motivation Section */}
        <div className="motivation-section">
          <h3>
            <FontAwesomeIcon icon={faQuoteLeft} /> Daily Motivation
          </h3>
          <p>{dailyQuote}</p>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
