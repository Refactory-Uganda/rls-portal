import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignmentsContent = () => {
  const assignments = [
    { id: 1, title: "Assignment 1", status: "assigned" },
    { id: 2, title: "Assignment 2", status: "due" },
    { id: 3, title: "Assignment 3", status: "done" },
    // Add more assignments as needed
  ];

  // Define muted theme colors for each status
  const statusColors = {
    assigned: "#542b55", // Muted purple
    due: "#38BFC3",      // Muted teal
    done: "#6c757d",     // Muted grey for 'done'
  };

  return (
    <div className="container my-4">
      <div className="row">
        {["assigned", "due", "done"].map((status, index) => (
          <div key={index} className="col-md-4 mb-3">
            <h5 
              className="text-white p-2 rounded" 
              style={{ backgroundColor: statusColors[status] }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </h5>
            <div className="list-group">
              {assignments
                .filter(assignment => assignment.status === status)
                .map(assignment => (
                  <div
                    key={assignment.id}
                    className="list-group-item list-group-item-action shadow-sm"
                    style={{ 
                      borderLeft: `4px solid ${statusColors[status]}`,
                      backgroundColor: "#f8f9fa", // Soft background for each item
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{assignment.title}</span>
                      <span 
                        className="badge text-white" 
                        style={{ backgroundColor: statusColors[status] }}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsContent;
