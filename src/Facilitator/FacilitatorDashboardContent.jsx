import { useState } from "react";
import "../assets/css/facilitatorDashboardContent.css";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const FacilitatorDashboardContent = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleShowCalendar = () => setShowCalendarModal(true);
  const handleCloseCalendar = () => setShowCalendarModal(false);

  const lineData = {
    labels: ["Module", "Assignment", "Attendance", "Course"],
    datasets: [
      {
        label: "Progress (%)",
        data: [90, 10, 97, 50],
        borderColor: "#663367",
        backgroundColor: "rgba(102, 51, 103, 0.2)",
        pointBackgroundColor: "#663367",
        pointBorderColor: "#38BFC3",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.raw}%` } },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div className="facilitator-dashboard-content">
      <div className="overview-cards">
        <div className="dashboard-card">
          <h4>Courses</h4>
          <p>3 Active Courses</p>
        </div>
        <div className="dashboard-card">
          <h4>Learners</h4>
          <p>5 Enrolled</p>
        </div>
        <div className="dashboard-card">
          <h4>Assigments</h4>
          <p>4 Available</p>
        </div>
      </div>

      <div className="dashboard-content-wrapper">
        <div className="line-graph-section">
          <div className="progress-card">
            <div className="card-body">
              <h3 className="Heading">Progress Overview</h3>
              <Line className="data" data={lineData} options={lineOptions} />
            </div>
          </div>
        </div>
        <div className="calendar-section">
          <div className="progress-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Events and Schedules</h3>
                <button className="expand-btn" onClick={handleShowCalendar}>
                  <FontAwesomeIcon icon={faExpand} />
                </button>
              </div>
              <iframe
                title="Google Calendar"
                src="https://calendar.google.com/calendar/embed?src=daphinenambafu%40gmail.com&ctz=Africa%2FNairobi"
                className="calendar-frame"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showCalendarModal} onHide={handleCloseCalendar} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Events and Class Schedules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=daphinenambafu%40gmail.com&ctz=Africa%2FNairobi"
            className="calendar-frame"
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
