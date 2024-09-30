import React, { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [modules, setModules] = useState([]);
  const [courseMaterials, setCourseMaterials] = useState([{ file: null }]);
  const [requirements, setRequirements] = useState("");
  const [assessments, setAssessments] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || duration <= 0 || modules.length === 0) {
      setError("All fields except the last three must be filled, and duration must be positive.");
      return;
    }
    // Submit the form logic here
  };

  const addMaterial = () => {
    setCourseMaterials([...courseMaterials, { file: null }]);
  };

  const handleMaterialChange = (index, file) => {
    const updatedMaterials = [...courseMaterials];
    updatedMaterials[index].file = file;
    setCourseMaterials(updatedMaterials);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Course</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Course Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1">Duration (weeks) *</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Math.max(0, e.target.value))}
            min="1"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Modules *</label>
          <button
            type="button"
            onClick={() => setModules([...modules, ""])}
            className="bg-purple-700 text-white p-2 rounded"
          >
            Add Module
          </button>
          {modules.map((module, index) => (
            <input
              key={index}
              type="text"
              value={module}
              onChange={(e) => {
                const newModules = [...modules];
                newModules[index] = e.target.value;
                setModules(newModules);
              }}
              className="w-full p-2 border rounded mt-2"
            />
          ))}
        </div>

        <div>
          <label className="block mb-1">Course Materials</label>
          <button
            type="button"
            onClick={addMaterial}
            className="bg-purple-700 text-white p-2 rounded mb-2"
          >
            Add Course Material
          </button>
          {courseMaterials.map((material, index) => (
            <input
              key={index}
              type="file"
              onChange={(e) => handleMaterialChange(index, e.target.files[0])}
              className="w-full p-2 border rounded mt-2"
            />
          ))}
        </div>

        <div>
          <label className="block mb-1">Requirements</label>
          <input
            type="text"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Assessment Mode</label>
          <input
            type="text"
            value={assessments}
            onChange={(e) => setAssessments(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-700 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
