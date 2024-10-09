import React, { useState, useEffect } from "react";
import axios from "axios";

const EditCourse = ({ selectedCourse, onUpdateSuccess }) => {
  const [courseToEdit, setCourseToEdit] = useState({
    courseTitle: "",
    courseDescription: "",
    courseDuration: "",
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editSuccessMessage, setEditSuccessMessage] = useState("");

  useEffect(() => {
    if (selectedCourse && selectedCourse.id) {
      fetchCourseData();
    } else {
      setError("No course selected for editing.");
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourse?.id]);

  const fetchCourseData = async () => {
    try {
      setCourseToEdit(selectedCourse);
      //   const response = await axios.get(`/api/courses/${selectedCourse.id}`);
      //   setCourseToEdit({
      //     courseTitle: response.data.title || "",
      //     courseDescription: response.data.description || "",
      //     courseDuration: response.data.duration || "",}
      //   );
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch course data");
      setLoading(false);
    }
  };

  console.log(courseToEdit);
  console.log(selectedCourse);
  const handleChange = (e) => {
    setCourseToEdit({
      ...courseToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setEditSuccessMessage("");

    try {
      const response = await axios.put(
        `http://localhost:3000/course/${selectedCourse.id}`,
        courseToEdit
      );
      if (onUpdateSuccess) {
        onUpdateSuccess(response.data);
      }
      setEditSuccessMessage("Course updated successfully!");
      setSubmitting(false);
    } catch (err) {
      setError("Failed to update course");
      setSubmitting(false);
    }
  };

  if (loading) return <p>Loading course data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  console.log(courseToEdit);

  return (
    <div className="max-w-xl mx-auto p-10 bg-white shadow-md rounded-lg w-full">
      <div className="mb-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex mb-4 space-x-4">
            <div className="flex-1">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Title *
              </label>
              <input
                name="courseTitle"
                id="title"
                type="text"
                value={courseToEdit.courseTitle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="w-1/4">
              <label
                htmlFor="duration"
                className="block text-gray-700 font-bold mb-2"
              >
                Duration *
              </label>
              <select
                name="courseDuration"
                id="duration"
                value={courseToEdit.courseDuration}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value={courseToEdit.courseTitle} disabled>
                  Select duration in weeks
                </option>
                {[...Array(52).keys()].map((week) => (
                  <option key={week + 1} value={week + 1}>
                    {week + 1} week{week + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description *
            </label>
            <textarea
              name="courseDescription"
              id="description"
              value={courseToEdit.courseDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide a detailed course overview..."
              required
            ></textarea>
          </div>

          {error && <div className="text-red-500">{error}</div>}
          {editSuccessMessage && (
            <div className="text-green-500">{editSuccessMessage}</div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className={`px-4 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Updating..." : "Update Course"}
            </button>
          </div>
        </form>
        <button
          type=""
          //   disabled={submitting}
          className={`px-4 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
              }`}
        >
          Add module
        </button>
      </div>
    </div>
  );
};

export default EditCourse;
