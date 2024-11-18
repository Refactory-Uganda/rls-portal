import React from "react";
import "../assets/css/courseCard.css";
import api from "../services/api";

// function CourseCard({ course, onClick }) {
//   // const imageUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${course.image}`;
//   return (
//     <div className="col">
//       {/* <div className="card p-4 text-start course-card">
//         <div className="card-body">
//           <h5 className="card-title">{course.Title}</h5>
//           <p className="card-text">{course.Description}</p>
//           <p className="card-text">Topics: 5</p>
//           <p className="card-text">Facilitator: Steven</p>
//           <button onClick={onClick} className="btn btn-primary action-btn">
//             View course
//           </button>
//         </div>
//       </div> */}

//       <div
//         className="card p-4 text-start course-card"
//         style={{ width: "18rem" }}
//       >
//         <img
//           src={"../assets/Images/alumni.png"}
//           // src={imageUrl || '../assets/Images/alumni.png'}
//           className="card-img-top"
//           alt={course.Title || "Course Image"}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{course.Title}</h5>
//           <p className="card-text">{course.Description}</p>
//           <p className="card-text">
//             Facilitator: {course.facilitator || "Unknown"}
//           </p>
//           <button onClick={onClick} className="btn btn-primary action-btn">
//             View course
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseCard;

const CourseCard = ({ course, onClick }) => {
  // Construct the full image URL using Vite environment variable
  const imageUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000"}${
    course.image
  }`;

  const numTopics = course.topics.length;

  return (
    <div className="col" onClick={onClick}>
      <div
        className="card text-start course-card"
        style={{ width: "14rem", padding: "0" }}
      >
        <img
          src={imageUrl}
          // onError={(e) => {
          //   console.error(`Failed to load image at ${imageUrl}`);
          //   e.target.src = '../assets/Images/alumni.png';
          // }}
          className="card-img-top"
          alt={course.Title || "Course Image"}
        />
        <div className="card-body">
          <h5 className="card-title" style={{fontWeight:"bold"}}>{course.Title}</h5>
          <p className="card-text">{course.Description}</p>
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
          {/* <button onClick={onClick} className="btn btn-primary action-btn">
            View course
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
