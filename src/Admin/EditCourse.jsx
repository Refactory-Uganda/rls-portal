import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../src/assets/css/createCourse.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const EditCourse = ({ selectedCourse, onUpdateSuccess }) => {
  const [courseToEdit, setCourseToEdit] = useState({
    Title: "",
    Description: "",
    Duration: "",
    topics: [], // Add topics here
  });
  const [newTopic, setNewTopic] = useState({ title: "", description: "" });
  const [showAddTopic, setShowAddTopic] = useState(false);
  const [isEditingTopic, setIsEditingTopic] = useState(false);
  const [editTopicIndex, setEditTopicIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editSuccessMessage, setEditSuccessMessage] = useState("");

  useEffect(() => {
    if (selectedCourse && selectedCourse.id) {
      setCourseToEdit({
        Title: selectedCourse.Title || "",
        Description: selectedCourse.Description || "",
        Duration: selectedCourse.Duration || "",
        topics: selectedCourse.topics || [], // Load existing topics
      });
      setLoading(false);
    } else {
      setError("No course selected for editing.");
      setLoading(false);
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    setCourseToEdit({
      ...courseToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const addTopic = () => {
    if (!newTopic.title && !newTopic.description) {
      setError("Please fill in at least one of the topic fields.");
      return;
    }

    const updatedTopics = isEditingTopic
      ? courseToEdit.topics.map((topic, index) =>
          index === editTopicIndex ? newTopic : topic
        )
      : [...courseToEdit.topics, newTopic];

    setCourseToEdit({
      ...courseToEdit,
      topics: updatedTopics,
    });

    setNewTopic({ title: "", description: "" });
    setShowAddTopic(false);
    setIsEditingTopic(false);
    setEditTopicIndex(null);
  };

  const editTopic = (index) => {
    setNewTopic(courseToEdit.topics[index]);
    setIsEditingTopic(true);
    setEditTopicIndex(index);
    setShowAddTopic(true);
  };

  const deleteTopic = (index) => {
    const updatedTopics = courseToEdit.topics.filter((_, i) => i !== index);
    setCourseToEdit({
      ...courseToEdit,
      topics: updatedTopics,
    });
    setIsEditingTopic(false);
    setNewTopic({ title: "", description: "" });
    setShowAddTopic(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!courseToEdit.Title || !courseToEdit.Description || !courseToEdit.Duration) {
      setError("All fields are required.");
      return;
    }

    setSubmitting(true);
    setError("");
    setEditSuccessMessage("");

    try {
      // Update the course
      const response = await axios.put(
        `http://localhost:3000/courses/${selectedCourse.id}`,
        courseToEdit
      );

      //Update topics
      const topicRequests = courseToEdit.topics.map((topic) =>
        axios.put(`/topic/${selectedCourse.id}`, topic)
      );
      await Promise.all(topicRequests);

      if (onUpdateSuccess) {
        onUpdateSuccess(response.data);
      }
      setEditSuccessMessage("Course and topics updated successfully!");
    } catch (err) {
      setError("Failed to update course.");
    } finally {
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

          {/* Add/Edit Topic Section */}
          {showAddTopic ? (
            <div className="mb-3">
              <h5>{isEditingTopic ? "Edit Topic" : "Add Topic"}</h5>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="topicTitle" className="form-label text-start d-block">
                    Title
                  </label>
                  <textarea
                    className="form-control custom-focus"
                    id="topicTitle"
                    placeholder="Topic Title"
                    value={newTopic.title}
                    onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="topicDescription" className="form-label text-start d-block">
                    Description
                  </label>
                  <textarea
                    className="form-control custom-focus"
                    id="topicDescription"
                    placeholder="Provide a detailed overview..."
                    value={newTopic.description}
                    onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary secondary-action-btn"
                  onClick={addTopic}
                >
                  {isEditingTopic ? "Update Topic" : "Add Topic"}
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-primary secondary-action-btn mb-3"
              onClick={() => setShowAddTopic(true)}
            >
              {isEditingTopic ? "Edit Topic" : "Add another topic"}
            </button>
          )}

          {/* Display Topics */}
          {courseToEdit.topics.length > 0 && (
            <div className="mb-3">
              <h5>Topics</h5>
              <ul className="list-group">
                {courseToEdit.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center mb-2 p-2"
                  >
                    <span className="small">{topic.title}</span>
                    <div className="d-flex">
                      <button
                        type="button"
                        className="btn btn-link btn-purple me-2"
                        onClick={() => editTopic(index)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link text-danger"
                        onClick={() => deleteTopic(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Error and Success Messages */}
          {error && <p className="text-danger">{error}</p>}
          {editSuccessMessage && <p className="text-success">{editSuccessMessage}</p>}

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary action-btn"
              disabled={submitting}
            >
              {submitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
