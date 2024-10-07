import React, { useState } from "react";
import axios from "axios";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !description || duration === "") {
      setError("Please fill all the required fields.");
      return;
    }

    try {
      // Make a POST request to the NestJS backend
      const response = await axios.post("http://localhost:3000/courses", {
        title,
        description,
        duration: Number(duration), // Ensure duration is sent as a number
      });

      console.log(response.data); // Handle the response

      // Display success message
      setSuccessMessage("Course created successfully!");
      setError(""); // Clear errors
      // Optionally clear form fields
      setTitle("");
      setDescription("");
      setDuration("");
    } catch (error) {
      // Handle error response
      console.error(error);
      setError("An error occurred while creating the course.");
      setSuccessMessage(""); // Clear success message
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
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
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
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
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide a detailed course overview..."
            ></textarea>
          </div>

          {error && <div className="text-red-500">{error}</div>}
          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}

          <div className="flex justify-end">
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
