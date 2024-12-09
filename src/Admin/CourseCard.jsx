import React, { useState } from "react";
import "../assets/css/courseCard.css";
import defaultImage from "../assets/Images/course-image.jpeg";

// Function to truncate the text to a specific word limit
const truncateText = (text, wordLimit) => {
  const words = text?.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const CourseCard = ({ course, onClick }) => {
  const [imageError, setImageError] = useState(false);

  // More robust image URL handling
  const getImageUrl = () => {
    // If no image or image error, use default
    if (!course.image || imageError) return defaultImage;

    // If it's a Google Drive URL, use direct link method
    const driveRegex = /^(https:\/\/drive\.google\.com\/uc\?id=[^&]+)/;
    const driveMatch = course.image.match(driveRegex);
    if (driveMatch) return driveMatch[1];

    // If it's a relative path, prepend API URL
    if (course.image.startsWith('/')) {
      return `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${course.image}`;
    }

    // If it's an absolute URL, use as-is
    return course.image;
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
  };

  const imageUrl = getImageUrl();
  const numTopics = course.topics?.length || 0;
  const truncatedDescription = truncateText(course.Description, 10);

  return (
    <div className="col" onClick={onClick}>
      <div 
        className="card text-start course-card" 
        style={{ width: "14rem", padding: "0" }}
      >
        <div style={{ width: "100%", height: "7rem", padding: "0" }}>
          <img
            src={imageUrl}
            onError={handleImageError}
            className="card-img-top"
            alt={course.Title || "Course Image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div
          className="card-body"
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            flex: "1" 
          }}
        >
          <h5
            className="card-title"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              height: "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
            {course.Title}
          </h5>
          <p
            className="card-text"
            style={{ 
              height: "1.5rem", 
              overflow: "hidden" 
            }}
          >
            {`${
              numTopics === 0
                ? "No Topics"
                : numTopics === 1
                ? `${numTopics} Topic`
                : `${numTopics} Topics`
            }`}
          </p>
          <p
            className="card-text"
            style={{
              height: "1.5rem",
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