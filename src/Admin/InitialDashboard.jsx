import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import "../../src/assets/css/initialdashboard.css";
import api from "../services/api";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const InitialDashboard = () => {
  // State for counts
  const [facilitatorsCount, setFacilitatorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [coursesData, setCoursesData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true); // Set isLoading to true at the start
      try {
        const response = await api.get("/courses");
        setCoursesCount(response.data.courses.length);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses. Please try again later.");
      } finally {
        setIsLoading(false); // Set isLoading to false once the operation completes
      }
    };

    fetchCourses();
  }, []);

  // Fetch Facilitators
  useEffect(() => {
    const fetchFacilitators = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/courses/staff");
        setFacilitatorsCount(response.data.length);
      } catch (error) {
        console.error("Error fetching facilitators:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFacilitators();
  }, []);

 // Fetch Students
 useEffect(() => {
  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/learner");
      setStudentsCount(response.data.length);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchStudents();
}, []);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      // Simulate an API call with dummy data
      const data = {
        facilitators: 5,
        students: 20,
        courses: [
          { name: "Software Engineering", students: 10 },
          { name: "Product Management", students: 5 },
          { name: "Data Science", students: 3 },
          { name: "UI/UX Design", students: 2 },
        ],
      };

      // setFacilitatorsCount(data.facilitators);
      // setStudentsCount(data.students);
      // setCoursesCount(data.courses.length);
      setCoursesData(data.courses);
    };

    fetchData();
  }, []);

  // Data for Pie Chart
  const pieChartData = {
    labels: coursesData.map((course) => course.name),
    datasets: [
      {
        data: coursesData.map((course) => course.students),
        backgroundColor: [
          "rgb(102, 51, 103)", // Refactory Purple (most taken course)
          "rgb(56, 191, 195)", // Refactory Cerulean
          "rgb(102, 51, 103, 0.7)", // Lighter purple for less taken courses
          "rgb(56, 191, 195, 0.7)", // Lighter cerulean for less taken courses
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-4">
  <div className="row mb-3">
    {/* Facilitators Card */}
    <div className="col-md-4 dash-cards">
      <div className="card h-100" style={{ border: "none", borderRadius: "8px" }}>
        <div className="card-body">
          <h3 className="card-title" style={{ color: "black" }}>
            <span className="material-icons me-2" style={{ color: "rgb(56, 191, 195)" }}>
              people
            </span>
            Facilitators
          </h3>
          <p className="display-3 card-numbers" style={{ color: "rgb(56, 191, 195)" }}>
            {facilitatorsCount}
          </p>
        </div>
      </div>
    </div>

    {/* Students Card */}
    <div className="col-md-4 dash-cards">
      <div className="card h-100" style={{ border: "none", borderRadius: "8px" }}>
        <div className="card-body">
          <h3 className="card-title" style={{ color: "black" }}>
            <span className="material-icons me-2" style={{ color: "rgb(56, 191, 195)" }}>
              school
            </span>
            Learners
          </h3>
          <p className="display-3 card-numbers" style={{ color: "rgb(56, 191, 195)" }}>
            {studentsCount}
          </p>
        </div>
      </div>
    </div>

    {/* Courses Card */}
    <div className="col-md-4 dash-cards">
      <div className="card h-100" style={{ border: "none", borderRadius: "8px" }}>
        <div className="card-body">
          <h3 className="card-title" style={{ color: "black" }}>
            <span className="material-icons me-2" style={{ color: "rgb(56, 191, 195)" }}>
              book
            </span>
            Courses
          </h3>
          <p className="display-3 card-numbers" style={{ color: "rgb(56, 191, 195)" }}>
            {coursesCount}
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Additional content */}
  <div className="row mb-4">
    <div className="col-md-6 mb-3">
      <div className="card" style={{ backgroundColor: "white", borderRadius: "20px", border: "none",  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div className="card-body">
          <h3 className="card-title" style={{ color: "black" }}>
            Highly Taken Courses
          </h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>

    {/* Google Calendar (iframe) with modal functionality */}
    <div className="col-md-6 mb-3">
      <div className="card h-100" style={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="card-title text-black">
              Events and Class Schedules
            </h3>
            <button className="btn btn-link" onClick={handleShowModal}>
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

  {/* Modal for Expanded Google Calendar */}
  <div
    className={`modal fade ${showModal ? "show" : ""}`}
    style={{ display: showModal ? "block" : "none" }}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="calendarModalLabel"
    aria-hidden={!showModal}
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="calendarModalLabel">Expanded Calendar</h5>
          <button
            type="button"
            className="close ms-auto"
            onClick={handleCloseModal}
            aria-label="Close"
            style={{ border: "none", background: "#38bfc3", fontSize: "1.5rem" }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <iframe
            title="Expanded Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=daphinenambafu%40gmail.com&ctz=Africa%2FNairobi"
            style={{ border: "0", width: "100%", height: "600px" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default InitialDashboard;
