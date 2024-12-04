import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckCircle, faExclamationCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import "../assets/css/assignments.css";

const AssignmentCard = ({ title, dueDate, status, onClick }) => {
  let statusIcon;
  let statusColor;

  switch (status) {
    case 'completed':
      statusIcon = faCheckCircle;
      statusColor = 'green';
      break;
    case 'overdue':
      statusIcon = faExclamationCircle;
      statusColor = 'red';
      break;
    case 'pending':
    default:
      statusIcon = faClock;
      statusColor = 'orange';
  }

  return (
    <div className="assignment-card">
      <div className="assignment-header">
        <FontAwesomeIcon icon={faClipboardList} size="2x" />
        <h4>{title}</h4>
      </div>
      <div className="assignment-details">
        <span><strong>Due Date:</strong> {dueDate}</span>
        <div className="status" style={{ color: statusColor }}>
          <FontAwesomeIcon icon={statusIcon} /> {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <Button onClick={onClick} variant="primary btn-purple">View Assignment</Button>
    </div>
  );
};

const LearnerAssignments = () => {
  // Initial assignments data
  const [assignments] = useState([
    { id: 1, title: 'Assignment 1: React Basics', dueDate: 'Nov 20, 2024', status: 'pending' },
    { id: 2, title: 'Assignment 2: JavaScript Advanced', dueDate: 'Nov 18, 2024', status: 'completed' },
    { id: 3, title: 'Assignment 3: CSS Grid', dueDate: 'Nov 22, 2024', status: 'overdue' },
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // IMPORTANT: Endpoint Configuration
  // Replace this with your actual backend API endpoint for fetching assignment details
  const ASSIGNMENT_DETAILS_ENDPOINT = '/api/assignments/'; // Example endpoint

  // Function to fetch assignment details
  const fetchAssignmentDetails = async (assignmentId) => {
    setIsLoading(true);
    try {
      // Example fetch call - customize based on your backend structure
      const response = await fetch(`${ASSIGNMENT_DETAILS_ENDPOINT}${assignmentId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any authentication headers if required
          // 'Authorization': `Bearer ${yourAuthToken}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch assignment details');
      }

      const data = await response.json();
      
      // Example of how you might structure the returned data
      // Adjust according to your actual API response structure
      const assignmentDetails = {
        id: data.id,
        title: data.title,
        dueDate: data.dueDate,
        description: data.description,
        resources: data.resources || [],
        submissionInstructions: data.submissionInstructions || ''
      };

      setSelectedAssignment(assignmentDetails);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching assignment details:', error);
      // Optionally show an error message to the user
      alert('Could not load assignment details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Filter logic
  const filteredAssignments = assignments.filter((assignment) => {
    const matchesFilter = filter === 'all' || assignment.status === filter;
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase());
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
      <div className="assignments-filter">
        <input
          type="text"
          placeholder="Search assignments..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <br />
        <div className="filters">
          {['all', 'pending', 'completed', 'overdue'].map((status) => (
            <button
              key={status}
              className={`filter-btn secondary-action-btn ${filter === status ? 'active' : ''}`}
              onClick={() => handleFilterChange(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="assignments-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              title={assignment.title}
              dueDate={assignment.dueDate}
              status={assignment.status}
              onClick={() => fetchAssignmentDetails(assignment.id)}
            />
          ))
        ) : (
          <p>No assignments found for the selected filter or search term.</p>
        )}
      </div>

      {/* Assignment Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assignment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <p>Loading assignment details...</p>
          ) : selectedAssignment ? (
            <div>
              <h5>{selectedAssignment.title}</h5>
              <p><strong>Due Date:</strong> {selectedAssignment.dueDate}</p>
              <p>{selectedAssignment.description}</p>
              
              {/* Optional: Display additional assignment details */}
              {selectedAssignment.resources && selectedAssignment.resources.length > 0 && (
                <div>
                  <h6>Resources:</h6>
                  <ul>
                    {selectedAssignment.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedAssignment.submissionInstructions && (
                <div>
                  <h6>Submission Instructions:</h6>
                  <p>{selectedAssignment.submissionInstructions}</p>
                </div>
              )}
            </div>
          ) : (
            <p>No assignment details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LearnerAssignments;