import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import api from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  // Fetch course data (replace with your data source)
  // useEffect(() => {
  //   // Mock data
  //   const mockCourses = [
  //     {
  //       id: 1,
  //       title: "Software Engineering with Javascript",
  //       description:
  //         "This course delivers full-stack web development training using JavaScript",
  //       imageUrl: "/src/assets/courseIcons/JS-icon.png",
  //     },
  //     {
  //       id: 2,
  //       title: "Software Engineering with Python",
  //       description:
  //         "This course delivers full-stack web development training using Python",
  //       imageUrl: "/src/assets/courseIcons/py-icon.png",
  //     },
  //     {
  //       id: 3,
  //       title: "UI/UX Design",
  //       description:
  //         "Learn how to apply interactive and visual design principles",
  //       imageUrl: "/src/assets/courseIcons/UIUX-Design icon.png",
  //     },
  //   ];

  //   // Simulate API call
  //   setTimeout(() => {
  //     setCourses(mockCourses);
  //   }, 500);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/course");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(courses);

  return (
    <div>
      {/* <h1 className="text-3xl font-semibold mb-6">Courses</h1> */}
      {/* <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
        Create Course
      </button> */}
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;
