/* eslint-disable react/prop-types */
import defaultImage from "../assets/Images/course-image.jpeg"; // Make sure the path is correct

const CourseCard = ({ course, onClick }) => {
  const imageUrl = course.image
    ? `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${course.image}`
    : defaultImage;

  const numTopics = course.topics?.length || 0;

  return (
    <div
      className="card facilitator-course-card"
      style={{ width: "100%", maxWidth: "100%", padding: "0" }}
      onClick={onClick}
    >
      <div className="row g-0 align-items-center" style={{ padding: "0" }}>
        {/* Image Section */}
        <div className="col-md-4">
          <img
            src={imageUrl}
            onError={(e) => {
              console.log("Image load error, using default image"); // Debug log
              e.target.src = defaultImage; // Fallback for invalid URLs
            }}
            className="card-img-top"
            alt={course.Title || "Course Image"}
          />
        </div>

        {/* Course Content Section */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column text-start">
            <div className="flex-grow-1">
              <h5 className="card-title">{course.Title}</h5>
              <p className="card-text">{course.Description}</p>
              <p className="card-text">
                {numTopics === 0
                  ? "No Topics"
                  : numTopics === 1
                  ? `${numTopics} Topic`
                  : `${numTopics} Topics`}
              </p>
              <p className="card-text">
                Facilitator: {course.facilitator || "Unknown"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
