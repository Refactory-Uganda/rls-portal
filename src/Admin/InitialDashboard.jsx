// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const InitialDashboard = () => {
  // State for counts
  const [facilitatorsCount, setFacilitatorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [coursesData, setCoursesData] = useState([]);

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

      setFacilitatorsCount(data.facilitators);
      setStudentsCount(data.students);
      setCoursesCount(data.courses.length);
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

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        {/* Facilitators Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 border border-secondary shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <span
                  className="material-icons me-2"
                  style={{ color: "rgb(56, 191, 195)" }} // Refactory Cerulean for icons
                >
                  people
                </span>
                <h3 className="card-title" style={{ color: "black" }}>
                  Facilitators
                </h3>
                <span
                  className={`badge rounded-circle ${
                    facilitatorsCount > 0 ? "bg-success" : "bg-danger"
                  }`}
                  title={facilitatorsCount > 0 ? "Active" : "Inactive"}
                  style={{ width: "24px", height: "24px" }}
                ></span>
              </div>
              <p
                className="display-3"
                style={{ color: "rgb(56, 191, 195)" }} // Refactory Cerulean for numbers
              >
                {facilitatorsCount}
              </p>
            </div>
          </div>
        </div>

        {/* Students Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 border border-secondary shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <span
                  className="material-icons me-2"
                  style={{ color: "rgb(56, 191, 195)" }} // Refactory Cerulean for icons
                >
                  school
                </span>
                <h3 className="card-title" style={{ color: "black" }}>
                  Learners
                </h3>
                <span
                  className={`badge rounded-circle ${
                    studentsCount > 0 ? "bg-success" : "bg-danger"
                  }`}
                  title={studentsCount > 0 ? "Active" : "Inactive"}
                  style={{ width: "24px", height: "24px" }}
                ></span>
              </div>
              <p
                className="display-3"
                style={{ color: "rgb(56, 191, 195)" }} // Refactory Cerulean for numbers
              >
                {studentsCount}
              </p>
            </div>
          </div>
        </div>

        {/* Courses Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 border border-secondary shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <span
                  className="material-icons me-2"
                  style={{ color: "rgb(56, 191, 195)" }} // Refactory Cerulean for icons
                >
                  book
                </span>
                <h3 className="card-title" style={{ color: "black" }}>
                  Courses
                </h3>
                <span
                  className={`badge rounded-circle ${
                    coursesCount > 0 ? "bg-success" : "bg-danger"
                  }`}
                  title={coursesCount > 0 ? "Active" : "Inactive"}
                  style={{ width: "24px", height: "24px" }}
                ></span>
              </div>
              <p
                className="display-3"
                style={{ color: "rgb(56, 191, 195)" }} // Refactory Cerulean for numbers
              >
                {coursesCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content */}
      <div className="row mb-4">
        {/* Pie chart for highly taken courses */}
        <div className="col-md-6 mb-3">
          <div
            className="card"
            style={{ backgroundColor: "white", borderRadius: "20px" }}
          >
            <div className="card-body">
              <h3 className="card-title" style={{ color: "black" }}>
                Highly Taken Courses
              </h3>
              <Pie data={pieChartData} />
            </div>
          </div>
        </div>

         {/* Google Calendar (iframe) */}
         <div className="col-md-6 mb-3">
          <div className="card h-100" style={{borderRadius: "10px" }}>
            <div className="card-body">
              <h3 className="card-title text-black">Events and Class Schedules</h3>
              <iframe
                title="Google Calendar"
                src="https://calendar.google.com/calendar/embed?src=c_6e5e2f644ae256de255c7fc9b099614815aa89efae610d18a895ba2097ed0f72%40group.calendar.google.com&ctz=Africa%2FNairobi&color=%2350bfc1"
                style={{ border: "0", width: "100%", height: "400px" }}
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
