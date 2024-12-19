import { useState, useEffect } from "react";
// import UserModal from "../Components/UserModal";
import "../../src/assets/css/userpage.css";
import Table from "react-bootstrap/Table";
import api from "../services/api";

const LearnersPage = () => {
  const [learners, setLearners] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedLearner, setSelectedLearner] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch Students
  useEffect(() => {
    const fetchLearners = async () => {
      try {
        // setIsLoading(true);
        const response = await api.get("/learner");
        setLearners(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLearners();
  }, []);

  console.log(learners);
  const filteredLearners = learners.filter((learner) =>
    learner.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-page">
      {/* <h1>Learners</h1> */}
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search learners by first name"
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Residence</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLearners.map((learner) => (
              <tr key={learner.id}>
                <td>{learner.firstName + " " + learner.lastName}</td>
                <td>{learner.email.email}</td>
                <td>{learner.residence}</td>
                <td>
                  <i
                    className="bi bi-person-plus-fill"
                    title="Enroll student"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="user-grid">
          {filteredLearners.map((learner) => (
            <div key={learner.id} className="user-card">
              <h3>{learner.firstName + " " + learner.lastName}</h3>
              <p>
                <b>Email:</b> {learner.email.email}
              </p>
              <p>
                <b>Residence:</b> {learner.residence}
              </p>
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
