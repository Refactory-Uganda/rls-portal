import React from "react";
import "../assets/css/courseCard.css";
import defaultImage from "../assets/Images/course-image.jpeg";

// Function to truncate the text to a specific word limit
const truncateText = (text, wordLimit) => {
  const words = text?.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "..."; // Adds ellipsis after truncating
  }
  return text;
};

const CourseCard = ({ course, onClick }) => {
  const imageUrl = course.image
    ? `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${course.image}`
    : defaultImage;

  const numTopics = course.topics?.length || 0;
  const truncatedDescription = truncateText(course.Description, 20); // Limiting to 20 words

  return (
    <div className="col" onClick={onClick}>
      <div
        className="card text-start course-card"
        style={{ width: "14rem", padding: "0" }}
      >
        <img
          src={imageUrl}
          onError={(e) => (e.target.src = defaultImage)} // Fallback for invalid URLs
          className="card-img-top"
          alt={course.Title || "Course Image"}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {course.Title}
          </h5>
          <p className="card-text">{truncatedDescription}</p> {/* Display truncated description */}
          <p className="card-text">{`${
            numTopics === 0
              ? "No Topics"
              : numTopics === 1
              ? `${numTopics} Topic`
              : `${numTopics} Topics`
          }`}</p>
          <p className="card-text">
            Facilitator: {course.facilitator || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
