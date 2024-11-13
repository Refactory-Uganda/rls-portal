import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="path-to-image.jpg" // Replace with actual image path or variable
            className="img-fluid rounded-start"
            alt="Course image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{course.Title}</h5>
            <p className="card-text">{course.Description}</p>
            <p className="card-text">Topics: 5</p>
            <p className="card-text">Facilitator: Steven</p>
            <button onClick={onClick} className="btn btn-primary action-btn">
              View course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
