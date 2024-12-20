/* eslint-disable react/prop-types */
import "../assets/css/fCourseCard.css";
import defaultImage from "../assets/Images/course-image.jpeg";
import { useState, useEffect } from "react";

function CourseCard({ course, onClick }) {
  // const imageUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${
  //   course.image
  // }`;

  // const numTopics = course.topics.length;

  const [imageUrl, setImageUrl] = useState(defaultImage);

  // Function to clean Google Drive URL
  const cleanGoogleDriveUrl = (url) => {
    // Remove &export=download and any other parameters
    const baseUrlMatch = url.match(
      /^(https:\/\/drive\.google\.com\/uc\?id=[^&]+)/
    );
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
        console.error("Image failed to load:", cleanedUrl);
        setImageUrl(defaultImage);
      };

      // Attempt to load the image
      img.src = cleanedUrl;
    };

    processImageUrl();
  }, [course.image]);

  const numTopics = course.topics?.length || 0;

  // return (
  //   <div
  //     className="card facilitator-course-card"
  //     style={{ width: "100%", maxWidth: "100%", padding: "0" }}
  //     onClick={onClick}
  //   >
  //     <div className="row g-0 align-items-center" style={{ padding: "0" }}>
  //       <div className="col-md-4">
  //         <img
  //           src={imageUrl}
  //           className="img-fluid rounded-start w-100"
  //           alt={course.Title || "Course Image"}
  //         />
  //       </div>
  //       <div className="col-md-8">
  //         <div className="card-body d-flex flex-column text-start">
  //           <div className="flex-grow-1">
  //             <h5 className="card-title">{course.Title}</h5>
  //             <p className="card-text">{course.Description}</p>
  //             <p className="card-text">{`${
  //               numTopics === 0
  //                 ? "No Topics"
  //                 : numTopics === 1
  //                 ? `${numTopics} Topic`
  //                 : `${numTopics} Topics`
  //             }`}</p>
  //             <p className="card-text">Facilitator: Steven</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className="card facilitator-course-card"
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: "0",
        height: "10rem", // Fixed height for the card
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <div className="row g-0 align-items-center" style={{ height: "100%" }}>
        {/* Image Section */}
        <div className="col-md-4" style={{ height: "100%" }}>
          <img
            src={imageUrl}
            className="img-fluid rounded-start w-100"
            alt={course.Title || "Course Image"}
            style={{
              height: "100%", // Ensures the image fills its container
              objectFit: "cover", // Ensures the image maintains its aspect ratio and fills the space
            }}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-8">
          <div
            className="card-body d-flex flex-column text-start"
            style={{ overflow: "hidden", height: "100%" }}
          >
            <div className="flex-grow-1">
              <h5
                className="card-title"
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {course.Title}
              </h5>
              <p
                className="card-text"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1, // Limit to 2 lines
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {course.Description}
              </p>
              <p className="card-text">
                {numTopics === 0
                  ? "No Topics"
                  : numTopics === 1
                  ? `${numTopics} Topic`
                  : `${numTopics} Topics`}
              </p>
              <p className="card-text">Facilitator: {course.facilitator
              ? `${course.facilitator.firstName} ${course.facilitator.lastName}`
              : "Unknown"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
