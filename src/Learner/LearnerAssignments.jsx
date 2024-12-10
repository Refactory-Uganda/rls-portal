// import React, { useState, useEffect } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import "../assets/css/assignments.css";
// import api from "../services/api";
// import AssignmentCard from "./AssignmentCard.jsx"; // Import the AssignmentCard component

// const LearnerAssignments = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedAssignment, setSelectedAssignment] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [attachment, setAttachment] = useState(null);
//   const [isDone, setIsDone] = useState(false);

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       setIsLoading(true);
//       try {
//         const response = await api.get("/assignments");
//         setAssignments(response.data.AllAssignments);
//       } catch (error) {
//         console.error("Error fetching Assignments:", error);
//         alert("Failed to fetch assignments. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAssignments();
//   }, []);

//   // Populating the assignment details modal when an assignment is clicked
//   const fetchAssignmentDetails = async (assignmentId) => {
//     const assignment = assignments.find(
//       (assignment) => assignment.id === assignmentId
//     );
//     if (assignment) {
//       const assignmentDetails = {
//         id: assignment.id,
//         title: assignment.title,
//         dueDate: new Date(assignment.dueDate).toLocaleString(),
//         instructions: assignment.instructions,
//         uploadQuestion: assignment.uploadQuestion,
//         points: assignment.points,
//         status: assignment.status,
//       };

//       setSelectedAssignment(assignmentDetails);
//       setShowModal(true);
//       setIsDone(assignment.status === "completed");
//       setAttachment(null);
//     }
//   };

//   // Handle file attachment change
//   const handleFileChange = (event) => {
//     setAttachment(event.target.files[0]);
//   };

//   // Handle marking as done
//   const handleMarkAsDone = () => {
//     setIsDone(true);
//   };

//   // Handle form submission for assignment response
//   const handleSubmitResponse = async (event) => {
//     event.preventDefault();

//     if (!attachment && !isDone) {
//       alert("Please attach a file or mark the assignment as done.");
//       return;
//     }

//     // Update the assignment status (mark as completed) if done
//     const updatedAssignment = {
//       ...selectedAssignment,
//       status: isDone || attachment ? "completed" : selectedAssignment.status,
//       attachment: attachment,
//     };

//     try {
//       // Here, you would typically make a POST request to update the assignment status or upload the attachment
//       // For now, let's update the state locally
//       const updatedAssignments = assignments.map((assignment) =>
//         assignment.id === selectedAssignment.id ? updatedAssignment : assignment
//       );
//       setAssignments(updatedAssignments);
//       setShowModal(false);
//     } catch (error) {
//       console.error("Error submitting assignment response:", error);
//       alert("Failed to submit response. Please try again.");
//     }
//   };

//   const filteredAssignments = assignments.filter((assignment) => {
//     const matchesFilter = filter === "all" || assignment.status === filter;
//     const matchesSearch = assignment.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedAssignment(null);
//   };

//   return (
//     <div className="assignments-page">
//       <div className="assignments-filter">
//         <input
//           type="text"
//           placeholder="Search assignments..."
//           className="search-bar"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <br />
//         <div className="filters">
//           {["all", "pending", "completed", "overdue"].map((status) => (
//             <button
//               key={status}
//               className={`filter-btn secondary-action-btn ${
//                 filter === status ? "active" : ""
//               }`}
//               onClick={() => handleFilterChange(status)}
//             >
//               {status.charAt(0).toUpperCase() + status.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="assignments-list">
//         {filteredAssignments.length > 0 ? (
//           filteredAssignments.map((assignment) => (
//             <AssignmentCard
//               key={assignment.id}
//               title={assignment.title}
//               dueDate={new Date(assignment.dueDate).toLocaleString()} // Format due date
//               status={assignment.status}
//               onClick={() => fetchAssignmentDetails(assignment.id)}
//             />
//           ))
//         ) : (
//           <p>No assignments found for the selected filter or search term.</p>
//         )}
//       </div>

//       {/* Assignment Details Modal */}
//       <Modal
//         show={showModal}
//         onHide={handleCloseModal}
//         centered
//         size="lg"
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Assignment Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {isLoading ? (
//             <p>Loading assignment details...</p>
//           ) : selectedAssignment ? (
//             <div>
//               <h5>{selectedAssignment.title}</h5>
//               <p>
//                 <strong>Due Date:</strong> {selectedAssignment.dueDate}
//               </p>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: selectedAssignment.instructions,
//                 }}
//               />
//               <p>
//                 <strong>Points:</strong> {selectedAssignment.points}
//               </p>
//               {selectedAssignment.uploadQuestion && (
//                 <div>
//                   <h6>Download Assignment Question</h6>
//                   <a href={selectedAssignment.uploadQuestion} download>
//                     {selectedAssignment.uploadQuestion ? "Download file" : ""}
//                   </a>
//                 </div>
//               )}

//               <Form onSubmit={handleSubmitResponse}>
//                 <Form.Group controlId="formFile">
//                   <Form.Label>Attach Response</Form.Label>
//                   <Form.Control type="file" onChange={handleFileChange} />
//                 </Form.Group>

//                 <Form.Check
//                   type="checkbox"
//                   label="Mark as Done (No attachment)"
//                   checked={isDone}
//                   onChange={handleMarkAsDone}
//                 />
//                 <div className="assign-btn-container">
//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="action-btn"
//                   >
//                     Submit Response
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           ) : (
//             <p>No assignment details available.</p>
//           )}
//         </Modal.Body>
//         {/* <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer> */}
//       </Modal>
//     </div>
//   );
// };

// export default LearnerAssignments;

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../assets/css/assignments.css";
import api from "../services/api";
import AssignmentCard from "./AssignmentCard.jsx"; // Import the AssignmentCard component

const LearnerAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
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
      setShowModal(true);
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
        setShowModal(false);
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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="assignments-page">
      {/* <div className="assignments-filter">
        <input
          type="text"
          placeholder="Search assignments..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <br />
        <div className="filters">
          {["all", "pending", "completed", "overdue"].map((status) => (
            <button
              key={status}
              className={`filter-btn secondary-action-btn ${
                filter === status ? "active" : ""
              }`}
              onClick={() => handleFilterChange(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div> */}

      <div className="assignments-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              title={assignment.title}
              dueDate={new Date(assignment.dueDate).toLocaleString()} // Format due date
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
        show={showModal}
        onHide={handleCloseModal}
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
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedAssignment.instructions,
                }}
              />
              <p>
                <strong>Points:</strong> {selectedAssignment.points}
              </p>
              {selectedAssignment.uploadQuestion && (
                <div>
                  <h6>Download Assignment Question</h6>
                  <a href={selectedAssignment.uploadQuestion} download>
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

