import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="col">
      <div className="card p-4 text-start course-card">
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
  );
}

export default CourseCard;
