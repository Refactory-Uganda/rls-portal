import React, { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [modules, setModules] = useState([]);
  const [courseMaterials, setCourseMaterials] = useState([{ file: null }]);
  const [requirements, setRequirements] = useState("");
  const [assessments, setAssessments] = useState([]);
  const [error, setError] = useState("");

  // collapsing sections
  const [isModulesOpen, setIsModulesOpen] = useState(true);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(true);

  const facilitators = [
    { id: 1, name: "Facilitator 1" },
    { id: 2, name: "Facilitator 2" },
    { id: 3, name: "Facilitator 3" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || duration <= 0 || modules.length === 0 || assessments.length === 0) {
      setError("Please fill all the required fields.");
      return;
    }
    // form submission here
    console.log({
      title,
      description,
      duration,
      modules,
      courseMaterials,
      requirements,
      assessments,
    });
    setError(""); // Clear the error after successful submission
  };

  const addModule = () => {
    setModules([
      ...modules,
      {
        moduleTitle: "",
        facilitator: "",
        moduleMaterials: [{ file: null }],
        moduleRequirements: "",
        moduleDuration: 0,
      },
    ]);
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...modules];
    updatedModules[index][field] = value;
    setModules(updatedModules);
  };

  const addAssessment = () => {
    setAssessments([
      ...assessments,
      { title: "", type: "", description: "", deadline: "", weight: 0 },
    ]);
  };

  const handleAssessmentChange = (index, field, value) => {
    const updatedAssessments = [...assessments];
    updatedAssessments[index][field] = value;
    setAssessments(updatedAssessments);
  };

  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="card p-4 shadow-sm">
        {/* <h2 className="card-title mb-4">Create Course</h2> */}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-9">
            <label htmlFor="title" className="form-label">Course Title *</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="duration" className="form-label">Duration (weeks) *</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(Math.max(0, e.target.value))}
              min="1"
              required
              className="form-control"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="description" className="form-label">Description *</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control"
            ></textarea>
          </div>

          {/* Modules Section */}
          <div className="mb-3">
            <label htmlFor="modules" className="form-label">Modules *</label>
            <button
              type="button"
              onClick={() => setIsModulesOpen(!isModulesOpen)}
              className={`btn btn-${isModulesOpen ? "danger" : "success"} btn-sm mb-2`}
            >
              {isModulesOpen ? "Collapse Modules" : "Expand Modules"}
            </button>

            {isModulesOpen && (
              <>
                <button
                  type="button"
                  onClick={addModule}
                  className="btn btn-purple btn-sm mb-2"
                >
                  Add Module
                </button>
                {modules.length === 0 && (
                  <div className="alert alert-info">No modules added yet.</div>
                )}
                {modules.map((module, index) => (
                  <div key={index} className="module-section mb-3">
                    <input
                      type="text"
                      placeholder="Module Title"
                      value={module.moduleTitle}
                      onChange={(e) => handleModuleChange(index, "moduleTitle", e.target.value)}
                      className="form-control mb-2"
                      required
                    />

                    <select
                      value={module.facilitator}
                      onChange={(e) => handleModuleChange(index, "facilitator", e.target.value)}
                      className="form-control mb-2"
                      required
                    >
                      <option value="">Select Facilitator</option>
                      {facilitators.map((facilitator) => (
                        <option key={facilitator.id} value={facilitator.name}>
                          {facilitator.name}
                        </option>
                      ))}
                    </select>

                    <label htmlFor={`moduleDuration${index}`} className="form-label">Module Duration (weeks)</label>
                    <input
                      type="number"
                      id={`moduleDuration${index}`}
                      value={module.moduleDuration}
                      onChange={(e) => handleModuleChange(index, "moduleDuration", e.target.value)}
                      min="1"
                      className="form-control mb-2"
                      required
                    />

                    <label htmlFor={`moduleRequirements${index}`} className="form-label">Module Requirements</label>
                    <input
                      type="text"
                      id={`moduleRequirements${index}`}
                      value={module.moduleRequirements}
                      onChange={(e) => handleModuleChange(index, "moduleRequirements", e.target.value)}
                      className="form-control mb-2"
                    />

                    <label htmlFor={`moduleMaterials${index}`} className="form-label">Module Materials (Upload)</label>
                    <input
                      type="file"
                      id={`moduleMaterials${index}`}
                      onChange={(e) => {
                        const updatedModules = [...modules];
                        updatedModules[index].moduleMaterials[0].file = e.target.files[0];
                        setModules(updatedModules);
                      }}
                      className="form-control mb-2"
                    />
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Assessments Section */}
          <div className="mb-3">
            <label htmlFor="assessments" className="form-label">Assessments *</label>
            <button
              type="button"
              onClick={() => setIsAssessmentsOpen(!isAssessmentsOpen)}
              className={`btn btn-${isAssessmentsOpen ? "danger" : "success"} btn-sm mb-2`}
            >
              {isAssessmentsOpen ? "Collapse Assessments" : "Expand Assessments"}
            </button>

            {isAssessmentsOpen && (
              <>
                <button
                  type="button"
                  onClick={addAssessment}
                  className="btn btn-purple btn-sm mb-2"
                >
                  Add Assessment
                </button>
                {assessments.length === 0 && (
                  <div className="alert alert-info">No assessments added yet.</div>
                )}
                {assessments.map((assessment, index) => (
                  <div key={index} className="assessment-section mb-3">
                    <input
                      type="text"
                      placeholder="Assessment Title"
                      value={assessment.title}
                      onChange={(e) => handleAssessmentChange(index, "title", e.target.value)}
                      className="form-control mb-2"
                      required
                    />

                    <select
                      value={assessment.type}
                      onChange={(e) => handleAssessmentChange(index, "type", e.target.value)}
                      className="form-control mb-2"
                      required
                    >
                      <option value="">Select Assessment Type</option>
                      <option value="quiz">Quiz</option>
                      <option value="assignment">Assignment</option>
                      <option value="project">Project</option>
                    </select>

                    <textarea
                      placeholder="Assessment Description"
                      value={assessment.description}
                      onChange={(e) => handleAssessmentChange(index, "description", e.target.value)}
                      className="form-control mb-2"
                      required
                    />

                    <input
                      type="date"
                      placeholder="Deadline"
                      value={assessment.deadline}
                      onChange={(e) => handleAssessmentChange(index, "deadline", e.target.value)}
                      className="form-control mb-2"
                      required
                    />

                    <input
                      type="number"
                      placeholder="Weight (%)"
                      value={assessment.weight}
                      onChange={(e) => handleAssessmentChange(index, "weight", e.target.value)}
                      min="0"
                      max="100"
                      className="form-control mb-2"
                      required
                    />
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="col-md-12">
            <label htmlFor="requirements" className="form-label">Course Requirements</label>
            <textarea
              id="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="form-control"
            ></textarea>
          </div>

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Create Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
