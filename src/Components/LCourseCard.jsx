import React from "react";
import "../assets/css/fCourseCard.css";

function CourseCard({ course, onClick }) {
  const imageUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${
    course.image
  }`;

  const numTopics = course.topics.length;
  return (
    <div
      className="card facilitator-course-card"
      style={{ width: "100%", maxWidth: "100%", padding: "0" }}
      onClick={onClick}
    >
      <div className="row g-0 align-items-center" style={{ padding: "0" }}>
        <div className="col-md-4">
          <img
            src={imageUrl}
            className="img-fluid rounded-start w-100"
            alt={course.Title || "Course Image"}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column text-start">
            <div className="flex-grow-1">
              <h5 className="card-title">{course.Title}</h5>
              <p className="card-text">{course.Description}</p>
              <p className="card-text">{`${
                numTopics === 0
                  ? "No Topics"
                  : numTopics === 1
                  ? `${numTopics} Topic`
                  : `${numTopics} Topics`
              }`}</p>
              <p className="card-text">Facilitator: Steven</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
