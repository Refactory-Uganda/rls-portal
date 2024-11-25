import React, { useState, useEffect } from "react";
// import UserModal from "../Components/UserModal";
import "../../src/assets/css/userpage.css";
import api from "../services/api";

const FacilitatorsPage = () => {
  const [facilitators, setFacilitators] = useState([]);

  // Fetch Facilitators
  useEffect(() => {
    const fetchFacilitators = async () => {
      try {
        const response = await api.get("/courses/staff");
        const data = await response.data;
        setFacilitators(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFacilitators();
  }, []);

  console.log(facilitators);

  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFacilitator, setSelectedFacilitator] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (facilitator) => {
    setSelectedFacilitator(facilitator);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this facilitator?")) {
      setFacilitators(
        facilitators.filter((facilitator) => facilitator.id !== id)
      );
    }
  };

  const filteredFacilitators = facilitators.filter(
    (facilitator) =>
      facilitator.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facilitator.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-page">
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search facilitators by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-purple me-2"
          onClick={() => setViewMode(viewMode === "table" ? "grid" : "table")}
        >
          <i className={`fas fa-${viewMode === "table" ? "th" : "list"}`} />{" "}
          Switch to {viewMode === "table" ? "Grid" : "Table"} View
        </button>
      </div>
      {viewMode === "table" ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course Assigned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFacilitators.map((facilitator) => (
              <tr key={facilitator.id}>
                <td>{`${facilitator.firstName} ${facilitator.lastName}`}</td>
                <td>{facilitator.email}</td>
                <td>{facilitator.courseAssigned || `No course assigned`}</td>
                <td>
                  <button
                    className="btn btn-purple me-2"
                    onClick={() => handleEdit(facilitator)}
                    title="Edit Facilitator"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(facilitator.id)}
                    title="Delete Facilitator"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="user-grid">
          {filteredFacilitators.map((facilitator) => (
            <div key={facilitator.id} className="user-card">
              <h3>{`${facilitator.firstName} ${facilitator.lastName}`}</h3>
              <p>
                <b>Email:</b> {facilitator.email}
              </p>
              <p>
                <b>Course:</b>{" "}
                {facilitator.courseAssigned || `No course assigned`}
              </p>
              <div className="actions">
                <button
                  className="btn btn-purple me-2"
                  onClick={() => handleEdit(facilitator)}
                  title="Edit Facilitator"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(facilitator.id)}
                  title="Delete Facilitator"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <UserModal
          user={selectedFacilitator}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedFacilitator) => {
            setFacilitators(
              facilitators.map((facilitator) =>
                facilitator.id === updatedFacilitator.id
                  ? updatedFacilitator
                  : facilitator
              )
            );
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default FacilitatorsPage;
