import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
      
      {/* <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{course.Title}</h2>
        <p className="text-gray-600">{course.Description}</p>
        <p className="text-gray-600">{course.Duration}</p>
        {/* Add more course details or actions if needed */}
      </div>
    </div>
  );
}

export default CourseCard;
