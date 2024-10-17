import React, { useState } from "react";
import axios from "axios";
import "../../src/assets/css/createCourse.css";

const CreateCourse = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!Title || !Description || Duration === "") {
      setError("Please fill all the required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/courses", {
        Title,
        Description,
        Duration,
      });

      console.log(response.data);

      setSuccessMessage("Course created successfully!");
      setError("");
      // Clear form fields
      setTitle("");
      setDescription("");
      setDuration("");
    } catch (error) {
      console.error(error);
      setError("An error occurred while creating the course.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-4 font-weight-bold" style={{ fontSize: "1.5rem" }}>
          Create Course
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-8">
              <label htmlFor="title" className="form-label text-start d-block">
                Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control custom-focus"
                id="title"
                value={Title}
                placeholder="e.g., Introduction to Web Development"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label
                htmlFor="duration"
                className="form-label text-start d-block"
              >
                Duration <span className="text-danger">*</span>
              </label>
              <select
                className="form-select custom-focus"
                id="duration"
                value={Duration}
                onChange={(e) => setDuration(e.target.value)}
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

          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label text-start d-block"
            >
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control custom-focus"
              id="description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide a detailed course overview..."
            ></textarea>
          </div>

          {/* Error and Success Messages */}
          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="mt-4 px-4 py-2"
              style={{
                backgroundColor: "#663367", // Button color
                color: "white", // Text color
                border: "none",
                borderRadius: "0.375rem", // Equivalent to Bootstrap's rounded-md
                transition: "background-color 0.3s", // Smooth transition for hover
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(102, 51, 103, 0.5)") // 50% opacity on hover
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#663367") // Reset to original color
              }
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