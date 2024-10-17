import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../src/assets/css/createCourse.css';

const EditCourse = ({ selectedCourse, onUpdateSuccess }) => {
  const [courseToEdit, setCourseToEdit] = useState({
    Title: "",
    Description: "",
    Duration: "",
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
  }, [selectedCourse?.id]);

  const fetchCourseData = async () => {
    try {
      setCourseToEdit(selectedCourse);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch course data");
      setLoading(false);
    }
  };

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
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-4 font-weight-bold" style={{ fontSize: "1.5rem" }}>
          Edit Course
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
                name="Title"
                value={courseToEdit.Title}
                placeholder="e.g., Introduction to Web Development"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="duration" className="form-label text-start d-block">
                Duration <span className="text-danger">*</span>
              </label>
              <select
                className="form-select custom-focus"
                id="duration"
                name="Duration"
                value={courseToEdit.Duration}
                onChange={handleChange}
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
            <label htmlFor="description" className="form-label text-start d-block">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control custom-focus"
              id="description"
              name="Description"
              value={courseToEdit.Description}
              onChange={handleChange}
              placeholder="Provide a detailed course overview..."
            ></textarea>
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}
          {editSuccessMessage && (
            <div className="text-success mb-3">{editSuccessMessage}</div>
          )}

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              disabled={submitting}
              className={`mt-4 px-4 py-2 ${submitting ? "disabled" : ""}`}
              style={{
                backgroundColor: "#663367",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(102, 51, 103, 0.5)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#663367")
              }
            >
              {submitting ? "Updating..." : "Update Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
