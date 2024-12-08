import React, { useState } from "react";
import "../assets/css/learnerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTasks, faChartLine, faTrophy, faExpand } from "@fortawesome/free-solid-svg-icons";
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

const LearnerDashboard = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleShowCalendar = () => setShowCalendarModal(true);
  const handleCloseCalendar = () => setShowCalendarModal(false);

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Course Progress (%)",
        data: [65, 70, 75, 80],
        borderColor: "#38BFC3",
        backgroundColor: "rgba(56, 191, 195, 0.2)",
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
    <div className="learner-dashboard">
      {/* Welcome Banner */}
      {/* <div className="welcome-banner">
        <h2>Good Morning, [Name]!</h2>
        <p>"Stay consistent! You're just one step closer to your goal."</p>
      </div> */}

      {/* Dashboard Overview */}
      <div className="overview-cards">
        <div className="dashboard-card">
          <FontAwesomeIcon icon={faBook} size="2x" />
          <h4>Course Progress</h4>
          <p>75%</p>
        </div>
        <div className="dashboard-card">
          <FontAwesomeIcon icon={faTasks} size="2x" />
          <h4>Assignments</h4>
          <p>2 Due Soon</p>
        </div>
        <div className="dashboard-card">
          <FontAwesomeIcon icon={faChartLine} size="2x" />
          <h4>Learning Streak</h4>
          <p>10 Days</p>
        </div>
        {/* <div className="dashboard-card">
          <FontAwesomeIcon icon={faTrophy} size="2x" />
          <h4>Badges Earned</h4>
          <p>5</p>
        </div> */}
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content-wrapper">
  {/* Line Graph Section */}
  <div className="line-graph-section">
    <div className="progress-card">
      <div className="card-body">
        <h3>Progress Overview</h3>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  </div>

  {/* Calendar Section */}
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



      {/* Calendar Modal */}
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

export default LearnerDashboard;
