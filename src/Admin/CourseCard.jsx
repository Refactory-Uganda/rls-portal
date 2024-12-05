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
    ? `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${
        course.image
      }`
    : defaultImage;

  const numTopics = course.topics?.length || 0;
  const truncatedDescription = truncateText(course.Description, 10); // Limiting to 20 words

  return (
    <div className="col" onClick={onClick}>
      <div
        className="card text-start course-card"
        style={{ width: "14rem", padding: "0" }}
      >
        <div style={{ width: "100%", height: "7rem", padding: "0" }}>
          <img
            src={imageUrl}
            onError={(e) => (e.target.src = defaultImage)} // Fallback for invalid URLs
            className="card-img-top"
            alt={course.Title || "Course Image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures image covers the container
              objectPosition: "center", // Centers the image style={{
            }}
          />
        </div>
        <div
          className="card-body"
          style={{ display: "flex", flexDirection: "column", flex: "1" }}
        >
          <h5
            className="card-title"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              height: "3rem", // Fixed height for title
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
            {course.Title}
          </h5>
          {/* <p className="card-text">{truncatedDescription}</p> */}
          <p
            className="card-text"
            style={{ height: "1.5rem", overflow: "hidden" }}
          >{`${
            numTopics === 0
              ? "No Topics"
              : numTopics === 1
              ? `${numTopics} Topic`
              : `${numTopics} Topics`
          }`}</p>
          <p
            className="card-text"
            style={{
              height: "1.5rem", // Fixed height for facilitator
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Facilitator:{" "}
            {course.facilitator
              ? `${course.facilitator.firstName} ${course.facilitator.lastName}`
              : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
