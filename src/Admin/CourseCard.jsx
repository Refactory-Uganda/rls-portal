import React, { useState, useEffect } from "react";
import "../assets/css/courseCard.css";
import defaultImage from "../assets/Images/course-image.jpeg";

const CourseCard = ({ course, onClick }) => {
  const [imageUrl, setImageUrl] = useState(defaultImage);

  // Function to clean Google Drive URL
  const cleanGoogleDriveUrl = (url) => {
    // Remove &export=download and any other parameters
    const baseUrlMatch = url.match(/^(https:\/\/drive\.google\.com\/uc\?id=[^&]+)/);
    return baseUrlMatch ? baseUrlMatch[1] : url;
  };

  useEffect(() => {
    const processImageUrl = () => {
      // If no image provided, use default
      if (!course.image) {
        setImageUrl(defaultImage);
        return;
      }

      // Clean the URL if it's a Google Drive link
      const cleanedUrl = cleanGoogleDriveUrl(course.image);

      // Create an Image object to test loading
      const img = new Image();
      img.onload = () => {
        setImageUrl(cleanedUrl);
      };
      img.onerror = () => {
        console.error('Image failed to load:', cleanedUrl);
        setImageUrl(defaultImage);
      };
      
      // Attempt to load the image
      img.src = cleanedUrl;
    };

    processImageUrl();
  }, [course.image]);

  const numTopics = course.topics?.length || 0;

  return (
    <div className="col" onClick={onClick}>
      <div 
        className="card text-start course-card" 
        style={{ width: "14rem", padding: "0" }}
      >
        <div style={{ width: "100%", height: "7rem", padding: "0" }}>
          <img
            src={imageUrl}
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
          style={{ display: "flex", flexDirection: "column", flex: "1" }}
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
            style={{ height: "1.5rem", overflow: "hidden" }}
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