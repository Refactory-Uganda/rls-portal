// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InitialDashboard = () => {
  // State for counts
  const [facilitatorsCount, setFacilitatorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      // Simulate an API call with dummy data
      const data = {
        facilitators: 5,
        students: 20,
        courses: 3,
      };

      setFacilitatorsCount(data.facilitators);
      setStudentsCount(data.students);
      setCoursesCount(data.courses);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        {/* Facilitators Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 border border-secondary shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <span className="material-icons text-primary me-2">people</span> {/* Icon for Facilitators */}
                <h3 className="card-title">Facilitators</h3>
                <span
                  className={`badge rounded-circle ${
                    facilitatorsCount > 0 ? "bg-success" : "bg-danger"
                  }`}
                  title={facilitatorsCount > 0 ? "Active" : "Inactive"}
                  style={{ width: "24px", height: "24px" }}
                ></span>
              </div>
              <p className="display-3 text-primary">{facilitatorsCount}</p>
              {/* <p>{facilitatorsCount} Facilitators</p> */}
            </div>
          </div>
        </div>

        {/* Students Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 border border-secondary shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <span className="material-icons text-info me-2">school</span> {/* Icon for Students */}
                <h3 className="card-title">Learners</h3>
                <span
                  className={`badge rounded-circle ${
                    studentsCount > 0 ? "bg-success" : "bg-danger"
                  }`}
                  title={studentsCount > 0 ? "Active" : "Inactive"}
                  style={{ width: "24px", height: "24px" }}
                ></span>
              </div>
              <p className="display-3 text-info">{studentsCount}</p>
              {/* <p>{studentsCount} Students</p> */}
            </div>
          </div>
        </div>

        {/* Courses Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 border border-secondary shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <span className="material-icons text-success me-2">book</span> {/* Icon for Courses */}
                <h3 className="card-title">Courses</h3>
                <span
                  className={`badge rounded-circle ${
                    coursesCount > 0 ? "bg-success" : "bg-danger"
                  }`}
                  title={coursesCount > 0 ? "Active" : "Inactive"}
                  style={{ width: "24px", height: "24px" }}
                ></span>
              </div>
              <p className="display-3 text-success">{coursesCount}</p>
              {/* <p>{coursesCount} Courses</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Additional content */}
      <div className="row mb-4">
        {/* Placeholder for chart */}
        <div className="col-md-6 mb-3">
          <div className="card bg-secondary text-white h-100" style={{ borderRadius: "20px" }}>
            <div className="card-body"></div>
          </div>
        </div>

        {/* Events and Class Schedules */}
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Events and Class Schedules</h3>
              <p>Calendar goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialDashboard;
