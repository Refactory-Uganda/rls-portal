import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../assets/css/assignments.css";
import api from "../services/api";
import AssignmentCard from "./AssignmentCard.jsx";
import DisplayRichText from "../Components/Displayrichtext.jsx";

const LearnerAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const fetchAssignments = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/assignments");
        setAssignments(response.data.AllAssignments);
      } catch (error) {
        console.error("Error fetching Assignments:", error);
        alert("Failed to fetch assignments. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  // Populating the assignment details modal when an assignment is clicked
  const fetchAssignmentDetails = async (assignmentId) => {
    const assignment = assignments.find(
      (assignment) => assignment.id === assignmentId
    );
    if (assignment) {
      const assignmentDetails = {
        id: assignment.id,
        title: assignment.title,
        dueDate: new Date(assignment.dueDate).toLocaleString(),
        instructions: assignment.instructions,
        uploadQuestion: assignment.uploadQuestion,
        points: assignment.points,
        status: assignment.status,
      };

      setSelectedAssignment(assignmentDetails);
      setShowAssignmentModal(true);
      setIsDone(assignment.status === "completed");
      setAttachment(null);
    }
  };

  // Handle file attachment change
  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  // Handle marking as done
  const handleMarkAsDone = () => {
    setIsDone(true);
  };

  // Handle form submission for assignment response
  const handleSubmitResponse = async (event) => {
    event.preventDefault();

    // if (!attachment && !isDone) {
    if (!attachment) {
      alert("Please attach a file or mark the assignment as done.");
      return;
    }

    // Create a FormData object to send both file and other data
    const formData = new FormData();
    formData.append("assignmentId", selectedAssignment.id);
    // formData.append("isDone", isDone);

    if (attachment) {
      formData.append("answerUpload", attachment);
    }

    try {
      // setIsLoading(true); // Show loading state while the request is in progress

      // Send POST request to submit the response
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for file upload
        },
      });

      // Handle successful response
      // if (response.status === 200) {
      alert("Response submitted successfully!");

      // Update assignment status after successful submission
      // const updatedAssignment = {
      //   ...selectedAssignment,
      //   // status: "completed",
      //   attachment: attachment,
      // };

      // // Update the assignments list locally
      // const updatedAssignments = assignments.map((assignment) =>
      //   assignment.id === selectedAssignment.id ? updatedAssignment : assignment
      // );
      // setAssignments(updatedAssignments);

      // Close the modal
      setShowAssignmentModal(false);
      // } else {
      //   alert("Failed to submit response. Please try again.");
      // }
    } catch (error) {
      console.error("Error submitting assignment response:", error);
      alert("Failed to submit response. Please try again.");
    } finally {
      // setIsLoading(false); // Hide loading state after request completion
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesFilter = filter === "all" || assignment.status === filter;
    const matchesSearch = assignment.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // eslint-disable-next-line no-unused-vars
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClosAssignmenteModal = () => {
    setShowAssignmentModal(false);
    setSelectedAssignment(null);
  };
  const handleDownload = (data) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
    const fileUrl = `${baseUrl}${data.uploadQuestion}`;
    const fileName = fileUrl.split("/").pop();

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="assignments-page">
    
      <div className="assignments-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              title={assignment.title}
              dueDate={assignment.dueDate.toLocaleString()} // Format due date
              status={assignment.status}
              onClick={() => fetchAssignmentDetails(assignment.id)}
            />
          ))
        ) : (
          <p>No assignments found for the selected filter or search term.</p>
        )}
      </div>

      {/* Assignment Details Modal */}
      <Modal
        show={showAssignmentModal}
        onHide={handleClosAssignmenteModal}
        centered
        size="lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Assignment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <p>Loading assignment details...</p>
          ) : selectedAssignment ? (
            <div>
              <h5>{selectedAssignment.title}</h5>
              <p>
                <strong>Due Date:</strong> {selectedAssignment.dueDate}
              </p>
              <div>
                <DisplayRichText
                  htmlContent={selectedAssignment.instructions}
                />
              </div>
             
              <p>
                <strong>Points:</strong> {selectedAssignment.points}
              </p>
              {selectedAssignment.uploadQuestion && (
                <div>
                  <h6>Download Assignment Question</h6>
                  <a
                    href={selectedAssignment.uploadQuestion}
                    onClick={handleDownload(selectedAssignment)}
                  >
                    {selectedAssignment.uploadQuestion ? "Download file" : ""}
                  </a>
                </div>
              )}

              <Form onSubmit={handleSubmitResponse}>
                <Form.Group controlId="formFile">
                  <Form.Label>Attach Response</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>

                <Form.Check
                  type="checkbox"
                  label="Mark as Done (No attachment)"
                  checked={isDone}
                  onChange={handleMarkAsDone}
                />
                <div className="assign-btn-container">
                  <Button
                    variant="primary"
                    type="submit"
                    className="action-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Response"}
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            <p>No assignment details available.</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LearnerAssignments;
