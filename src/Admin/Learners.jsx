import React, { useState } from "react";
// import UserModal from "../Components/UserModal";
import "../../src/assets/css/userpage.css";

const LearnersPage = () => {
  const [learners, setLearners] = useState([
    { id: 1, name: "Daphine Nambafu", email: "dnambafu@student.refactory.academy", courseAssigned: "Project Management" },
    { id: 2, name: "Isaac Kalumba", email: "ikalumba@student.refactory.academy", courseAssigned: "CSE with JavaScript" },
    { id: 3, name: "Jovita Kanza", email: "jkanza@student.refactory.academy", courseAssigned: "Foundations in Software Engineering" },
    { id: 4, name: "Alia Jonathan", email: "ajonathan@student.refactory.academy", courseAssigned: "CSE with Python" },
    { id: 5, name: "Immaculate Nayiga", email: "inayiga@student.refactory.academy", courseAssigned: "Data Science and Machine Learning" },
  ]);

  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (learner) => {
    setSelectedLearner(learner);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this learner?")) {
      setLearners(learners.filter((learner) => learner.id !== id));
    }
  };

  const filteredLearners = learners.filter((learner) =>
    learner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-page">
      {/* <h1>Learners</h1> */}
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search learners by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-purple me-2"
          onClick={() => setViewMode(viewMode === "table" ? "grid" : "table")}
        >
          <i className={`fas fa-${viewMode === "table" ? "th" : "list"}`} /> Switch to{" "}
          {viewMode === "table" ? "Grid" : "Table"} View
        </button>
      </div>
      {viewMode === "table" ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course Assigned</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredLearners.map((learner) => (
              <tr key={learner.id}>
                <td>{learner.name}</td>
                <td>{learner.email}</td>
                <td>{learner.courseAssigned}</td>
                {/* <td>
                  <button
                    className="btn btn-purple me-2"
                    onClick={() => handleEdit(learner)}
                    title="Edit Learner"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(learner.id)}
                    title="Delete Learner"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="user-grid">
          {filteredLearners.map((learner) => (
            <div key={learner.id} className="user-card">
              <h3>{learner.name}</h3>
              <p><b>Email:</b> {learner.email}</p>
              <p><b>Course:</b> {learner.courseAssigned}</p>
              {/* <div className="actions">
                <button
                  className="btn btn-purple me-2"
                  onClick={() => handleEdit(learner)}
                  title="Edit Learner"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(learner.id)}
                  title="Delete Learner"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div> */}
            </div>
          ))}
        </div>
      )}
      {/* {isModalOpen && (
        <UserModal
          user={selectedLearner}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedLearner) => {
            setLearners(
              learners.map((learner) =>
                learner.id === updatedLearner.id ? updatedLearner : learner
              )
            );
            setIsModalOpen(false);
          }}
        />
      )} */}
    </div>
  );
};

export default LearnersPage;
