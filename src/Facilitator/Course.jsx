import { useState, useEffect } from "react";
import CourseDetails from "./FCourseDetails";
import CourseList from "./CourseList";
import api from "../services/api";
// import EditCourse from "./EditCourse";
// import CreateCourse from "./createCourse";
import CourseContentView from "../Components/CourseContentView";

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("list");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true); // Set isLoading to true at the start
      try {
        const response = await api.get("/courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses. Please try again later.");
      } finally {
        setIsLoading(false); // Set isLoading to false once the operation completes
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-2">
      {error && <p style={{ color: "red" }}>{error}</p>}

      {view === "list" && (
        <CourseList
          courses={courses}
          setSelectedCourse={setSelectedCourse}
          setView={setView}
          isLoading={isLoading}
        />
      )}

      {view === "details" && selectedCourse && (
        <CourseDetails
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          setView={setView}
          error={error}
          setError={setError}
        />
      )}

      {view === "contentView" && (
        <CourseContentView
          setView={setView}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )}
    </div>
  );
};

export default Course;
