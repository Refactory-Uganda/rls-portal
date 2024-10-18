import React, { useState } from "react";
import axios from "axios";
import "../../src/assets/css/createCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const CreateCourse = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Duration, setDuration] = useState("");
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({ title: "", description: "" });
  const [showAddTopic, setShowAddTopic] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
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
      // Create the course first
      const response = await axios.post("http://localhost:3000/courses", {
        Title,
        Description,
        Duration,
      });

      const courseId = response.data.id;

      // Create topics associated with the course
      const topicRequests = topics.map((topic) =>
        axios.post(`http://localhost:3000/topics/${courseId}`, {
          ...topic,
          courseId,
        })
      );

      await Promise.all(topicRequests);

      setSuccessMessage("Course and topics created successfully!");
      setError("");

      // Clear form fields
      setTitle("");
      setDescription("");
      setDuration("");
      setTopics([]);
    } catch (error) {
      console.error(error);
      setError("An error occurred while creating the course and topics.");
      setSuccessMessage("");
    }
  };

  const addTopic = () => {
    // Allow adding topic if at least one field is filled
    if (!newTopic.title && !newTopic.description) {
      setError("Please fill in at least one of the topic fields.");
      return;
    }

    if (isEditing) {
      // Update the existing topic
      const updatedTopics = topics.map((topic, index) =>
        index === editIndex ? newTopic : topic
      );
      setTopics(updatedTopics);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new topic to the topics list
      setTopics((prevTopics) => [...prevTopics, newTopic]);
    }

    setNewTopic({ title: "", description: "" });
    setShowAddTopic(false); // Hide the add topic fields
    setError(""); // Reset error
  };

  const editTopic = (index) => {
    setNewTopic(topics[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowAddTopic(true); // Show fields for editing
  };

  const deleteTopic = (index) => {
    const filteredTopics = topics.filter((_, i) => i !== index);
    setTopics(filteredTopics);
    if (filteredTopics.length === 0) {
      // Reset to show the add topic section if all topics are deleted
      setShowAddTopic(true);
      setNewTopic({ title: "", description: "" });
      setIsEditing(false);
      setEditIndex(null);
    } else if (isEditing && index === editIndex) {
      // Reset editing state if the edited topic is deleted
      setIsEditing(false);
      setEditIndex(null);
      setNewTopic({ title: "", description: "" });
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

          {/* Add Topic Section */}
          {showAddTopic ? (
            <div className="mb-3">
              <h5>{isEditing ? "Edit Topic" : "Add Topic"}</h5>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label
                    htmlFor="description"
                    className="form-label text-start d-block"
                  >
                    Title
                  </label>
                  <textarea
                    className="form-control custom-focus"
                    placeholder="Topic Title"
                    value={newTopic.title}
                    onChange={(e) =>
                      setNewTopic({ ...newTopic, title: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="description"
                    className="form-label text-start d-block"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control custom-focus"
                    placeholder="Provide a detailed  overview..."
                    value={newTopic.description}
                    onChange={(e) =>
                      setNewTopic({ ...newTopic, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary secondary-action-btn"
                  onClick={addTopic}
                >
                  {isEditing ? "Update Topic" : "Add Topic"}
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-primary secondary-action-btn mb-3"
              onClick={() => setShowAddTopic(true)}
            >
              Add another topic
            </button>
          )}

          {/* Display Added Topics */}
          {topics.length > 0 && (
            <div className="mb-3">
              <h5>Topics</h5>
              <ul className="list-group">
                {topics.map((topic, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center mb-2 p-2" // Adjust padding here (e.g., p-2)
                  >
                    <span className="small">{topic.title}</span>{" "}
                    {/* Optionally reduce font size */}
                    <div className="d-flex">
                      <button
                        type="button"
                        className="btn btn-link btn-purple me-2"
                        onClick={() => editTopic(index)}
                      >
                        <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
                      </button>
                      <button
                        type="button"
                        className="btn btn-link text-danger"
                        onClick={() => deleteTopic(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> {/* Delete Icon */}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

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
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
