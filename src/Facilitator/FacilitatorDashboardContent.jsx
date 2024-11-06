import React from 'react';
import "../assets/css/facilitatorDashboardContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTasks, faUserCheck, faChartLine, faCode, faDatabase, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const FacilitatorDashboardContent = () => {
  return (
    <div className="facilitator-dashboard-content">
      {/* Main Overview Section */}
      <div className="overview-section">
        <div className="overview-banner">
          <p>Facilitator Overview Banner or Image</p>
        </div>
      </div>

      {/* Modules Section */}
      <div className="modules-section">
        <div className="module-card">
          <FontAwesomeIcon icon={faCode} size="1x" />
          Foundations in Software Development
        </div>
        <div className="module-card">
          <FontAwesomeIcon icon={faDatabase} size="1x" />
          Databasing
        </div>
        <div className="module-card">
          <FontAwesomeIcon icon={faPaintBrush} size="1x" />
          UI/UX Design
        </div>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-card">
          <FontAwesomeIcon icon={faBook} size="2x" />
          <span>Module Progress:</span> <span>90%</span>
        </div>
        <div className="progress-card">
          <FontAwesomeIcon icon={faTasks} size="2x" />
          <span>Assignment Progress:</span> <span>10%</span>
        </div>
        <div className="progress-card">
          <FontAwesomeIcon icon={faUserCheck} size="2x" />
          <span>Attendance Progress:</span> <span>97%</span>
        </div>
        <div className="progress-card">
          <FontAwesomeIcon icon={faChartLine} size="2x" />
          <span>Course Progress:</span> <span>50%</span>
        </div>
      </div>
    </div>
  );
};

export default FacilitatorDashboardContent;
