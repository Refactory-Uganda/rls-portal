import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../src/assets/css/createCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const EditCourse = ({ selectedCourse, onUpdateSuccess }) => {
  const [courseToEdit, setCourseToEdit] = useState({
    Title: "",
    Description: "",
    Duration: "",
    topics: [],
  });
  const [newTopic, setNewTopic] = useState({ Title: "", Description: "" });
  const [showAddTopic, setShowAddTopic] = useState(true);
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
        topics: selectedCourse.topics || [],
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
    if (!newTopic.Title && !newTopic.Description) {
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

    setNewTopic({ Title: "", Description: "" });
    setShowAddTopic(false);
    setIsEditingTopic(false);
    setEditTopicIndex(null);
    setError("");
  };

  const editTopic = (index) => {
    const topicToEdit = courseToEdit.topics[index];
    setNewTopic(topicToEdit);
    setIsEditingTopic(true);
    setEditTopicIndex(index);
    setShowAddTopic(true);
  };

  const deleteTopic = async (index) => {
    const topicToDelete = courseToEdit.topics[index];

    // If the topic has an `id`, delete it from the server
    if (topicToDelete.id) {
      try {
        await axios.delete(
          // eslint-disable-next-line no-undef
          `${process.env.VITE_API_BASE_URL}/topics/${topicToDelete.id}`
        );
      } catch (error) {
        setError("Error deleting the topic.");
        return;
      }
    }

    const updatedTopics = courseToEdit.topics.filter((_, i) => i !== index);
    setCourseToEdit({
      ...courseToEdit,
      topics: updatedTopics,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!courseToEdit.Title || !courseToEdit.Description || courseToEdit.Duration === "") {
  //     setError("Please fill all the required fields.");
  //     return;
  //   }

  //   try {
  //     setSubmitting(true);

  //     // Update the course
  //     await axios.put(`http://localhost:3000/courses/${selectedCourse.id}`, {
  //       Title: courseToEdit.Title,
  //       Description: courseToEdit.Description,
  //       Duration: courseToEdit.Duration,
  //     });

  //     // Update or create topics associated with the course
  //     const topicRequests = courseToEdit.topics.map((topic) => {
  //       if (topic.id) {
  //         return axios.put(`http://localhost:3000/topic/${topic.id}`, topic);
  //       } else {
  //         return axios.post(`http://localhost:3000/topic/${courseId}`, {
  //           ...topic,
  //           courseId: selectedCourse.id,
  //         });
  //       }
  //     });

  //     await Promise.all(topicRequests);

  //     setEditSuccessMessage("Course and topics updated successfully!");
  //     setError("");

  //     if (onUpdateSuccess) onUpdateSuccess();

  //     setSubmitting(false);
  //   } catch (error) {
  //     setError("An error occurred while updating the course and topics.");
  //     setEditSuccessMessage("");
  //     setSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !courseToEdit.Title ||
      !courseToEdit.Description ||
      !courseToEdit.Duration
    ) {
      setError("All fields are required.");
      return;
    }

    setSubmitting(true);
    setError("");
    setEditSuccessMessage("");

    try {
      // First, update the course
      const courseResponse = await axios.put(
        `http://localhost:3000/courses/${selectedCourse.id}`,
        courseToEdit
      );

      // Update topics (assuming each topic has an ID)
      const topicRequests = courseToEdit.topics.map((topic) => {
        if (topic.id) {
          // Update existing topics
          return axios.put(`http://localhost:3000/topic/${topic.id}`, topic);
        } else {
          // Create new topics (if a new one doesn't have an ID)
          return axios.post(`http://localhost:3000/topic`, {
            ...topic,
            courseId: selectedCourse.id,
          });
        }
      });

      await Promise.all(topicRequests);

      // Notify parent component of success
      if (onUpdateSuccess) {
        onUpdateSuccess(courseResponse.data);
      }

      setEditSuccessMessage("Course and topics updated successfully!");
    } catch (err) {
      setError("Failed to update course or topics.");
    } finally {
      setSubmitting(false);
    }
  };

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
              <label
                htmlFor="duration"
                className="form-label text-start d-block"
              >
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
            <label
              htmlFor="description"
              className="form-label text-start d-block"
            >
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

          {showAddTopic && (
            <div className="mb-3">
              <h5>{isEditingTopic ? "Edit Topic" : "Add Topic"}</h5>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label text-start d-block">Title</label>
                  <input
                    type="text"
                    className="form-control custom-focus"
                    placeholder="Topic Title"
                    value={newTopic.Title}
                    onChange={(e) =>
                      setNewTopic({
                        ...newTopic,
                        Title: e.target.value,
                        Lesson: [
                          {
                            text: "This is the content",
                            title: "Trial lesson 0006678 007",
                          },
                        ],
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-start d-block">
                    Description
                  </label>
                  <textarea
                    className="form-control custom-focus"
                    placeholder="Provide a detailed overview..."
                    value={newTopic.Description}
                    onChange={(e) =>
                      setNewTopic({ ...newTopic, Description: e.target.value })
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
                  {isEditingTopic ? "Update Topic" : "Add Topic"}
                </button>
              </div>
            </div>
          )}

          {!showAddTopic && (
            <button
              type="button"
              className="btn btn-primary secondary-action-btn mb-3"
              onClick={() => setShowAddTopic(true)}
            >
              Add another topic
            </button>
          )}

          {courseToEdit.topics.length > 0 && (
            <div className="mb-3">
              <h5>Topics</h5>
              <ul className="list-group">
                {courseToEdit.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center mb-2 p-2"
                  >
                    <span className="small">{topic.Title}</span>
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

          <div className="mt-3 d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary primary-action-btn"
              disabled={submitting}
            >
              {submitting ? "Updating..." : "Update Course"}
            </button>
            {editSuccessMessage && (
              <span className="text-success">{editSuccessMessage}</span>
            )}
            {error && <span className="text-danger">{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
