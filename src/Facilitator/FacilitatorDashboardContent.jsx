import React, { useState } from 'react';
import "../assets/css/facilitatorDashboardContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTasks, faUserCheck, faChartLine, faCalendarAlt, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

const FacilitatorDashboardContent = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleShowCalendar = () => setShowCalendarModal(true);
  const handleCloseCalendar = () => setShowCalendarModal(false);

  return (
    <div className="facilitator-dashboard-content">
      {/* Main Overview Section */}
      <div className="overview-section">
        <div className="overview-banner">
          <p>Facilitator Overview Banner or Image</p>
        </div>
      </div>

      {/* Wrapper Section for Progress and Calendar */}
      <div className="dashboard-content-wrapper">
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

        {/* Google Calendar (iframe) with modal functionality */}
        <div className="calendar-section">
          <div className="card h-100" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="card-title text-black">Events and Class Schedules</h3>
                <button className="btn btn-link" onClick={handleShowCalendar}>
                  <FontAwesomeIcon icon={faExpand} />
                </button>
              </div>
              <iframe
                title="Google Calendar"
                src="https://calendar.google.com/calendar/embed?src=daphinenambafu%40gmail.com&ctz=Africa%2FNairobi"
                style={{ border: "0", width: "100%", height: "400px" }}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      <Modal show={showCalendarModal} onHide={handleCloseCalendar} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Events and Class Schedules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=daphinenambafu%40gmail.com&ctz=Africa%2FNairobi"
            style={{ border: "0", width: "100%", height: "500px" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCalendar}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FacilitatorDashboardContent;
