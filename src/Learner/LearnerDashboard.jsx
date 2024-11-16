import React from "react";
import "../assets/css/learnerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTasks,
  faChartLine,
  faTrophy,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const LearnerDashboard = () => {
  return (
    <div className="learner-dashboard">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h2>Good Morning, [Name]!</h2>
        <p>"Stay consistent! You're just one step closer to your goal."</p>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {/* Progress Overview */}
        <div className="progress-overview">
          <div className="progress-card">
            <FontAwesomeIcon icon={faBook} size="2x" />
            <span>Course Progress</span>
            <h3>75%</h3>
          </div>
          <div className="progress-card">
            <FontAwesomeIcon icon={faTasks} size="2x" />
            <span>Assignments</span>
            <h3>2 Due Soon</h3>
          </div>
          <div className="progress-card">
            <FontAwesomeIcon icon={faChartLine} size="2x" />
            <span>Learning Streak</span>
            <h3>10 Days</h3>
          </div>
          <div className="progress-card">
            <FontAwesomeIcon icon={faTrophy} size="2x" />
            <span>Badges Earned</span>
            <h3>5</h3>
          </div>
        </div>

        {/* Today's Plan */}
        <div className="todays-plan">
          <h3>Today's Plan</h3>
          <ul>
            <li>Complete Module 5: <strong>React State Management</strong></li>
            <li>Submit Assignment: <strong>JavaScript Basics</strong></li>
            <li>Attend Live Session: <strong>2:00 PM - 3:30 PM</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
