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
    lessons: [],
  });
  const [newTopic, setNewTopic] = useState({ Title: "", Description: "" });
  const [newLesson, setNewLesson] = useState({ Title: "", Description: "" });
  const [showAddTopic, setShowAddTopic] = useState(true);
  const [showAddLesson, setShowAddLesson] = useState(true);
  const [isEditingTopic, setIsEditingTopic] = useState(false);
  const [isEditingLesson, setIsEditingLesson] = useState(false);
  const [editTopicIndex, setEditTopicIndex] = useState(null);
  const [editLessonIndex, setEditLessonIndex] = useState(null);
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
        lessons: selectedCourse.lessons || [],
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

    if (topicToDelete.id) {
      try {
        await axios.delete(`http://localhost:3000/topics/${topicToDelete.id}`);
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

  const addLesson = () => {
    if (!newLesson.Title && !newLesson.Description) {
      setError("Please fill in at least one of the lesson fields.");
      return;
    }

    const updatedLessons = isEditingLesson
      ? courseToEdit.lessons.map((lesson, index) =>
          index === editLessonIndex ? newLesson : lesson
        )
      : [...courseToEdit.lessons, newLesson];

    setCourseToEdit({
      ...courseToEdit,
      lessons: updatedLessons,
    });

    setNewLesson({ Title: "", Description: "" });
    setShowAddLesson(false);
    setIsEditingLesson(false);
    setEditLessonIndex(null);
    setError("");
  };

  const editLesson = (index) => {
    const lessonToEdit = courseToEdit.lessons[index];
    setNewLesson(lessonToEdit);
    setIsEditingLesson(true);
    setEditLessonIndex(index);
    setShowAddLesson(true);
  };

  const deleteLesson = async (index) => {
    const lessonToDelete = courseToEdit.lessons[index];

    if (lessonToDelete.id) {
      try {
        await axios.delete(`http://localhost:3000/lesson/${lessonToDelete.id}`);
      } catch (error) {
        setError("Error deleting the lesson.");
        return;
      }
    }

    const updatedLessons = courseToEdit.lessons.filter((_, i) => i !== index);
    setCourseToEdit({
      ...courseToEdit,
      lessons: updatedLessons,
    });
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
      const courseResponse = await axios.put(
        `http://localhost:3000/courses/${selectedCourse.id}`,
        courseToEdit
      );

      const topicRequests = courseToEdit.topics.map((topic) => {
        if (topic.id) {
          return axios.put(`http://localhost:3000/topic/${topic.id}`, topic);
        } else {
          return axios.post(`http://localhost:3000/topic`, {
            ...topic,
            courseId: selectedCourse.id,
          });
        }
      });

      const lessonRequests = topicToEdit.lessons.map((lesson) => {
        if (lesson.id) {
          return axios.put(`http://localhost:3000/lesson/${lesson.id}`, lesson);
        } else {
          return axios.post(`http://localhost:3000/lesson`, {
            ...lesson,
            topicId: topicToEdit.id,
          });
        }
      });

      await Promise.all([...topicRequests, ...lessonRequests]);

      if (onUpdateSuccess) {
        onUpdateSuccess(courseResponse.data);
      }

      setEditSuccessMessage("Course, topics, and lessons updated successfully!");
    } catch (err) {
      setError("Failed to update course, topics, or lessons.");
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

          {/* Topics Section */}
          {showAddTopic && (
            <div className="mb-3">
              <h5>{isEditingTopic ? "Edit Topic" : "Add Topic"}</h5>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label text-start d-block">Title</label>
                  <input
                    type="text"
                    className="form-control custom-focus"
                    name="Title"
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
                  <input
                    type="text"
                    className="form-control custom-focus"
                    name="Description"
                    value={newTopic.Description}
                    onChange={(e) =>
                      setNewTopic({ ...newTopic, Description: e.target.value })
                    }
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={addTopic}
              >
                {isEditingTopic ? "Update Topic" : "Add Topic"}
              </button>
            </div>
          )}

          {/* Lesson Section */}
          {showAddLesson && (
            <div className="mb-3">
              <h5>{isEditingLesson ? "Edit Lesson" : "Add Lesson"}</h5>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label text-start d-block">Title</label>
                  <input
                    type="text"
                    className="form-control custom-focus"
                    name="Title"
                    value={newLesson.Title}
                    onChange={(e) =>
                      setNewLesson({ ...newLesson, Title: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label text-start d-block">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control custom-focus"
                    name="Description"
                    value={newLesson.Description}
                    onChange={(e) =>
                      setNewLesson({
                        ...newLesson,
                        Description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={addLesson}
              >
                {isEditingLesson ? "Update Lesson" : "Add Lesson"}
              </button>
            </div>
          )}

          {/* Display Topics */}
          <h5 className="mt-4">Topics</h5>
          <ul className="list-group mb-3">
            {courseToEdit.topics.map((topic, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                <span>
                  <strong>{topic.Title}</strong> - {topic.Description}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-primary me-3 cursor-pointer"
                    onClick={() => editTopic(index)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteTopic(index)}
                  />
                </span>
              </li>
            ))}
          </ul>

          {/* Display Lessons */}
          <h5 className="mt-4">Lessons</h5>
          <ul className="list-group mb-3">
            {courseToEdit.lessons.map((lesson, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                <span>
                  <strong>{lesson.Title}</strong> - {lesson.Description}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-primary me-3 cursor-pointer"
                    onClick={() => editLesson(index)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteLesson(index)}
                  />
                </span>
              </li>
            ))}
          </ul>

          {editSuccessMessage && (
            <div className="alert alert-success">{editSuccessMessage}</div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="text-end">
            <button
              type="submit"
              className="btn btn-success"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Update Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
