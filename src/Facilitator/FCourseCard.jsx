import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="card mb-4" style={{ width: "100%", maxWidth: "100%",padding: "0" }}>
      <div className="row g-0 align-items-center" style={{ padding: "0" }}>
        <div className="col-md-2">
          <img
            src="../../src/assets/Images/SideImage.png"
            className="img-fluid rounded-start w-100"
            alt="Course image"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body d-flex flex-column text-start">
            <div className="flex-grow-1">
              <h5 className="card-title">{course.Title}</h5>
              <p className="card-text">{course.Description}</p>
              <p className="card-text">Topics: 5</p>
              <p className="card-text">Facilitator: Steven</p>
            </div>
            <div className="d-flex justify-content-end">
              <button onClick={onClick} className="btn btn-primary action-btn">
                View course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
