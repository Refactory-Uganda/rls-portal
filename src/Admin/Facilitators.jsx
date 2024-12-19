import { useState, useEffect } from "react";
import api from "../services/api";
import "../../src/assets/css/userpage.css";
import { Table } from "react-bootstrap";

const FacilitatorsPage = () => {
  const [facilitators, setFacilitators] = useState([]);
  const [facilitatorCourses, setFacilitatorCourses] = useState({});
  const [viewMode, setViewMode] = useState("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Facilitators
  useEffect(() => {
    const fetchFacilitators = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/courses/staff");
        setFacilitators(response.data);
      } catch (error) {
        console.error("Error fetching facilitators:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFacilitators();
  }, []);

  // Fetch courses for a specific facilitator only once
  const fetchFacilitatorCourses = async (facilitatorId) => {
    if (!facilitatorCourses[facilitatorId]) {
      try {
        const response = await api.get(`/courses/staff/${facilitatorId}`);
        setFacilitatorCourses((prevCourses) => ({
          ...prevCourses,
          [facilitatorId]: response.data.Course, // Storing the courses array
        }));
      } catch (error) {
        console.error(
          `Error fetching courses for facilitator ${facilitatorId}:`,
          error
        );
      }
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

      {isLoading ? (
        <p>Loading facilitators...</p>
      ) : viewMode === "table" ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Courses Assigned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFacilitators.map((facilitator) => {
              fetchFacilitatorCourses(facilitator.id); // Fetch courses once per facilitator

              return (
                <tr key={facilitator.id}>
                  <td className="user-table-item">{`${facilitator.firstName} ${facilitator.lastName}`}</td>
                  <td className="user-table-item">{facilitator.email}</td>
                  <td className="user-table-item">
                    {facilitatorCourses[facilitator.id] ? (
                      
                      <p>
                        {facilitatorCourses[facilitator.id].length +
                          " " +
                          "Courses"}
                      </p>
                    ) : (
                      "Loading courses..."
                    )}
                  </td>
                  <td className="user-table-item">
                    <i className="bi bi-eye-fill" title="View Details"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="user-grid">
          {filteredFacilitators.map((facilitator) => (
            <div key={facilitator.id} className="user-card">
              <h3>{`${facilitator.firstName} ${facilitator.lastName}`}</h3>
              <p>
                <b>Email:</b> {facilitator.email}
              </p>
              <p>
                <b>Courses:</b>{" "}
                {facilitatorCourses[facilitator.id]?.map((course) => (
                  <p key={course.Title}>{course.Title}</p>
                )) || "No courses assigned"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacilitatorsPage;
