import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckCircle, faExclamationCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
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

  // State for selected filter
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleViewAssignment = (assignmentId) => {
    console.log(`Viewing assignment ${assignmentId}`);
    // Navigate to the assignment details page
  };

  return (
    <div className="assignments-page">
      <div className="assignments-filter">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search assignments..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <br />

        {/* Filter Buttons */}
        <div className="filters">
          <button
            className={`filter-btn secondary-action-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={`filter-btn secondary-action-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => handleFilterChange('pending')}
          >
            Pending
          </button>
          <button
            className={`filter-btn secondary-action-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </button>
          <button
            className={`filter-btn secondary-action-btn ${filter === 'overdue' ? 'active' : ''}`}
            onClick={() => handleFilterChange('overdue')}
          >
            Overdue
          </button>
        </div>
      </div>

      {/* Assignment Cards */}
      <div className="assignments-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              title={assignment.title}
              dueDate={assignment.dueDate}
              status={assignment.status}
              onClick={() => handleViewAssignment(assignment.id)}
            />
          ))
        ) : (
          <p>No assignments found for the selected filter or search term.</p>
        )}
      </div>
    </div>
  );
};

export default LearnerAssignments;
