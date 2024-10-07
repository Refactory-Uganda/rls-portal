import React, { useState } from "react";
import axios from "axios";

const CreateCourse = () => {
  const [courseTitle, setcourseTitle] = useState("");
  const [courseDescription, setcourseDescription] = useState("");
  const [courseDuration, setcourseDuration] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!courseTitle || !courseDescription || courseDuration === "") {
      setError("Please fill all the required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/course", {
        courseTitle,
        courseDescription,
        courseDuration,
      });

      console.log(response.data); // Handle the response

      // Display success message
      setSuccessMessage("Course created successfully!");
      setError(""); // Clear errors
      // Optionally clear form fields
      setcourseTitle("");
      setcourseDescription("");
      setcourseDuration("");
    } catch (error) {
      // Handle error response
      console.error(error);
      setError("An error occurred while creating the course.");
      setSuccessMessage(""); // Clear success message
    }
  };

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
                // type="text"
                id="title"
                value={courseTitle}
                onChange={(e) => setcourseTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                value={courseDuration}
                onChange={(e) => setcourseDuration(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  weeks
                </option>
                {[...Array(52).keys()].map((week) => (
                  <option key={week + 1} value={week + 1}>
                    {week + 1} week{week > 0 ? "s" : ""}
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
              value={courseDescription}
              onChange={(e) => setcourseDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide a detailed course overview..."
            ></textarea>
          </div>

          {error && <div className="text-red-500">{error}</div>}
          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
