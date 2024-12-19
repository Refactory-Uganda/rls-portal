/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import api from "../services/api";

const CreateCourse = ({ setView, setCourses }) => {
  const [courseData, setCourseData] = useState({
    Title: "",
    Description: "",
    Duration: "",
    status: "DRAFT",
    courseOutline: [],
    facilitator: "",
    requirements: [],
    assessmentMode: "",
    award: "",
    courseObjective: [],
    image: null,
  });

  const [facilitators, setFacilitators] = useState([]);
  const [courseOutlineInput, setCourseOutlineInput] = useState("");
  const [requirementsInput, setRequirementsInput] = useState("");
  const [courseObjectiveInput, setCourseObjectiveInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isLoadingFacilitators, setIsLoadingFacilitators] = useState(true);

  const handleBackClick = () => {
    // setSelectedCourse(null);
    setView("list");
  };

  // Custom styles
  const styles = {
    primaryBg: "#663367",
    primaryHover: "#7a407c",
    secondaryBg: "#38BFC3",
    secondaryHover: "#2fa8ac",
  };

  // Duration options
  function generateDurationOptions(maxWeeks = 36) {
    const durationOptions = [];
    for (let i = 1; i <= maxWeeks; i++) {
      durationOptions.push(`${i} ${i === 1 ? "week" : "weeks"}`);
    }
    return durationOptions;
  }

  const durationOptions = generateDurationOptions();

  useEffect(() => {
    const fetchFacilitators = async () => {
      setIsLoadingFacilitators(true);
      try {
        const response = await api.get("/courses/staff");
        setFacilitators(response.data);
      } catch (error) {
        console.error("Error fetching facilitators:", error);
      } finally {
        setIsLoadingFacilitators(false);
      }
    };

    fetchFacilitators();
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFacilitatorInputChange = (e) => {
    setCourseData((prevData) => ({
      ...prevData,
      facilitator: e.target.value,
    }));
  };

  const handleAssesmentInputChange = (e) => {
    setCourseData((prevData) => ({
      ...prevData,
      assessmentMode: e.target.value,
    }));
  };
  const handleAwardInputChange = (e) => {
    setCourseData((prevData) => ({
      ...prevData,
      award: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("File size should be less than 5MB", "error");
        return;
      }
      setCourseData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCourseOutline = () => {
    if (courseOutlineInput.trim()) {
      setCourseData((prev) => ({
        ...prev,
        courseOutline: [...prev.courseOutline, courseOutlineInput.trim()],
      }));
      setCourseOutlineInput("");
      showToast("Course Outline added successfully", "success");
    }
  };

  const handleRemoveCourseOutline = (index) => {
    setCourseData((prev) => ({
      ...prev,
      courseOutline: prev.courseOutline.filter((_, i) => i !== index),
    }));
    showToast("Course Outline removed", "info");
  };

  const handleAddRequirements = () => {
    if (requirementsInput.trim()) {
      setCourseData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, requirementsInput.trim()],
      }));
      setRequirementsInput("");
      showToast("Requirement added successfully", "success");
    }
  };

  const handleRemoveRequirements = (index) => {
    setCourseData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
    showToast("Requirement removed", "info");
  };

  const handleAddCourseObjective = () => {
    if (courseObjectiveInput.trim()) {
      setCourseData((prev) => ({
        ...prev,
        courseObjective: [...prev.courseObjective, courseObjectiveInput.trim()],
      }));
      setCourseObjectiveInput("");
      showToast("Course Objective added successfully", "success");
    }
  };

  const handleRemoveCourseObjective = (index) => {
    setCourseData((prev) => ({
      ...prev,
      courseObjective: prev.courseObjective.filter((_, i) => i !== index),
    }));
    showToast("Course Objective removed", "info");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    showToast("Creating course... Please wait", "info");

    const formData = new FormData();
    Object.keys(courseData).forEach((key) => {
      if (["courseOutline", "requirements", "courseObjective"].includes(key)) {
        formData.append(key, JSON.stringify(courseData[key]));
      } else {
        formData.append(key, courseData[key]);
      }
    });
    // console.log(courseData); //

    try {
      const response = await api.post("/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const newCourse = response.data.courses; // Assuming the API response contains the created course object
      showToast("Course created successfully! Redirecting...", "success");

      // Update the courses list
      setCourses((prevCourses) => [...prevCourses, newCourse]);
      showToast("Course created successfully! Redirecting...", "success");
      setTimeout(() => {
        // Reset form after successful submission
        setCourseData({
          Title: "",
          Description: "",
          Duration: "",
          status: "",
          courseOutline: [],
          facilitator: "",
          requirements: [],
          assessmentMode: "",
          award: "",
          courseObjective: [],
          image: null,
        });
        setPreviewImage(null);
      }, 2000);
      setView("list");
    } catch (error) {
      showToast("Error creating course. Please try again.", "error");
      console.error("Error creating course:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-4">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1050 }}
        >
          <div
            className={`toast show align-items-center text-white border-0 ${
              toast.type === "success"
                ? "bg-success"
                : toast.type === "error"
                ? "bg-danger"
                : "bg-info"
            }`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">
                <i
                  className={`fas ${
                    toast.type === "success"
                      ? "fa-check-circle"
                      : toast.type === "error"
                      ? "fa-exclamation-circle"
                      : "fa-info-circle"
                  } me-2`}
                ></i>
                {toast.message}
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setToast({ show: false, message: "", type: "" })}
              ></button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      {isSubmitting && (
        <div
          className="position-fixed top-0 start-0 w-100"
          style={{ zIndex: 1040 }}
        >
          <div
            className="progress"
            style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "100%", backgroundColor: styles.secondaryBg }}
            ></div>
          </div>
        </div>
      )}
      <div className="course-details-btn-container" style={{ height: "3rem" }}>
        <button
          className="btn btn-primary action-btn"
          onClick={handleBackClick}
        >
          <i className="bi bi-arrow-left"></i> Back to Course
        </button>
      </div>

      <div className="card shadow-sm">
        <div
          className="card-header text-white"
          style={{ backgroundColor: styles.primaryBg }}
        >
          <h3 className="mb-0" style={{ color: "#ffffff", fontWeight: "bold" }}>
            New Course
          </h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            {/* Left Column */}
            <div className="col-md-8">
              {/* Course Title */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Course Title <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="Title"
                  className="form-control"
                  value={courseData.Title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter course title"
                />
              </div>

              {/* Course Description */}
              <div className="mb-3">
                <label className="form-label fw-bold">Course Description <span className="required">*</span></label>
                <textarea
                  name="Description"
                  className="form-control"
                  value={courseData.Description}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter course description"
                  rows="4"
                />
              </div>
              {/* Course Outline Card */}
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: styles.secondaryBg,
                    color: "white",
                  }}
                >
                  <i className="fas fa-list-ul me-2"></i>Course Outline
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add course outline item"
                      value={courseOutlineInput}
                      onChange={(e) => setCourseOutlineInput(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn text-white"
                      style={{ backgroundColor: styles.primaryBg }}
                      onClick={handleAddCourseOutline}
                    >
                      <i className="fas fa-plus me-1"></i>Add
                    </button>
                  </div>
                  <div className="outline-list">
                    {courseData.courseOutline.map((outline, index) => (
                      <div
                        key={index}
                        className="alert"
                        style={{
                          backgroundColor: `${styles.secondaryBg}20`,
                          color: styles.primaryBg,
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-check-circle me-2"></i>
                            {outline}
                          </span>
                          <button
                            type="button"
                            className="btn btn-sm"
                            style={{ color: styles.primaryBg }}
                            onClick={() => handleRemoveCourseOutline(index)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements Card */}
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: styles.secondaryBg,
                    color: "white",
                  }}
                >
                  <i className="fas fa-clipboard-list me-2"></i>Course
                  Requirements
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add course requirement"
                      value={requirementsInput}
                      onChange={(e) => setRequirementsInput(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn text-white"
                      style={{ backgroundColor: styles.primaryBg }}
                      onClick={handleAddRequirements}
                    >
                      <i className="fas fa-plus me-1"></i>Add
                    </button>
                  </div>
                  <div className="requirements-list">
                    {courseData.requirements.map((requirement, index) => (
                      <div
                        key={index}
                        className="alert"
                        style={{
                          backgroundColor: `${styles.secondaryBg}20`,
                          color: styles.primaryBg,
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-check-circle me-2"></i>
                            {requirement}
                          </span>
                          <button
                            type="button"
                            className="btn btn-sm"
                            style={{ color: styles.primaryBg }}
                            onClick={() => handleRemoveRequirements(index)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Objectives Card */}
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: styles.secondaryBg,
                    color: "white",
                  }}
                >
                  <i className="fas fa-bullseye me-2"></i>Course Objectives
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add course objective"
                      value={courseObjectiveInput}
                      onChange={(e) => setCourseObjectiveInput(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn text-white"
                      style={{ backgroundColor: styles.primaryBg }}
                      onClick={handleAddCourseObjective}
                    >
                      <i className="fas fa-plus me-1"></i>Add
                    </button>
                  </div>
                  <div className="objectives-list">
                    {courseData.courseObjective.map((objective, index) => (
                      <div
                        key={index}
                        className="alert"
                        style={{
                          backgroundColor: `${styles.secondaryBg}20`,
                          color: styles.primaryBg,
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-check-circle me-2"></i>
                            {objective}
                          </span>
                          <button
                            type="button"
                            className="btn btn-sm"
                            style={{ color: styles.primaryBg }}
                            onClick={() => handleRemoveCourseObjective(index)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-4">
              {/* Image Upload */}
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: styles.secondaryBg,
                    color: "white",
                  }}
                >
                  <i className="fas fa-image me-2"></i>Course Image
                </div>
                <div className="card-body text-center">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Course Preview"
                      className="img-fluid rounded mb-3"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center mb-3"
                      style={{
                        height: "200px",
                        border: `2px dashed ${styles.primaryBg}`,
                        color: styles.primaryBg,
                      }}
                    >
                      <i className="fas fa-cloud-upload-alt fa-3x"></i>
                    </div>
                  )}
                  <input
                    type="file"
                    className="form-control d-none"
                    id="courseImage"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="courseImage"
                    className="btn w-100 text-white"
                    style={{ backgroundColor: styles.primaryBg }}
                  >
                    <i className="fas fa-upload me-2"></i> Upload Image
                  </label>
                </div>
              </div>

              {/* Course Details Dropdowns */}
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: styles.secondaryBg,
                    color: "white",
                  }}
                >
                  <i className="fas fa-cogs me-2"></i>Course Details
                </div>
                <div className="card-body">
                  {/* Duration Dropdown */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Course Duration <span className="required">*</span>
                    </label>
                    <select
                      name="Duration"
                      className="form-select"
                      value={courseData.Duration}
                      onChange={handleInputChange}
                      // required
                      placeholder="Duration"
                    >
                      <option value="">Select Duration</option>
                      {durationOptions.map((duration) => (
                        <option key={duration} value={duration}>
                          {duration}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Facilitator Dropdown */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Facilitator</label>
                    <select
                      name="facilitator"
                      className="form-select"
                      value={courseData.facilitator}
                      onChange={handleFacilitatorInputChange}
                      disabled={isLoadingFacilitators}
                    >
                      <option value="">
                        {isLoadingFacilitators
                          ? "Loading facilitators..."
                          : "Select Facilitator"}
                      </option>
                      {facilitators.map((facilitator) => (
                        <option key={facilitator.id} value={facilitator.id}>
                          {`${facilitator.firstName} ${facilitator.lastName}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Assessment mode */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Assessment mode (optional)
                    </label>
                    <select
                      name="assessmentMode"
                      className="form-select"
                      value={courseData.assessmentMode}
                      onChange={handleAssesmentInputChange}
                    >
                      <option value="">Select Mode</option>

                      <option value={"QUIZ"}>Quiz</option>
                      <option value={"ASSIGNMENT"}>Assignment</option>
                    </select>
                  </div>
                  {/* Award */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Award (optional)</label>
                    <select
                      name="assessmentMode"
                      className="form-select"
                      value={courseData.award}
                      onChange={handleAwardInputChange}
                    >
                      <option value="">Select Award</option>

                      <option value={"Certificate"}>Certificate</option>
                      <option value={"Diploma"}>Diploma</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-end">
              <button
                type="submit"
                className="btn text-white"
                style={{
                  backgroundColor: styles.primaryBg,
                  width: "200px",
                }}
              >
                Save Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
