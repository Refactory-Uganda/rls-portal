import React, { useState } from 'react';

// const courses = [
//   { id: 1, title: "React for Beginners", description: "Learn the basics of React, including components, state, and props.", duration: "3 hours", instructor: "Jane Doe" },
//   { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript concepts like closures, async/await, and more.", duration: "5 hours", instructor: "John Smith" },
//   { id: 3, title: "Full-stack Development", description: "Build a full-stack application using React, Node.js, and MongoDB.", duration: "8 hours", instructor: "Alice Johnson" },
// ];

// const CourseList = ({ onCourseClick }) => {
//   return (
//     <div className="container mx-auto my-8">
//       <h1 className="text-2xl font-bold mb-4">Courses</h1>
//       <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {courses.map((course) => (
//           <li
//             key={course.id}
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:bg-blue-50"
//             onClick={() => onCourseClick(course)}
//           >
//             <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
//             <p className="text-gray-600">{course.duration}</p>
//             <p className="text-gray-500 mt-2">{course.instructor}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// Handle back button click to go back to course list


const CourseDetails = ({ selectedCourse, setSelectedCourse }) => {
    const handleBackClick = () => {
        setSelectedCourse(null);
      };
  return (
    <div className="container mx-auto my-8">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600"
        onClick={handleBackClick}
      >
        Back to Courses
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800">{selectedCourse.courseTitle}</h1>
        {/* <p className="text-gray-600 text-lg mt-2">Instructor: {course.instructor}</p> */}
        <p className="text-gray-600 text-lg mt-2">Duration: {selectedCourse.courseDuration}</p>
        <p className="text-gray-700 mt-4">{selectedCourse.courseDescription}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
