import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignmentsContent = () => {
  const assignments = [
    { id: 1, title: "Assignment 1", status: "assigned" },
    { id: 2, title: "Assignment 2", status: "due" },
    { id: 3, title: "Assignment 3", status: "done" },
    // Add more assignments as needed
  ];

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <h5>Assigned</h5>
          <div className="list-group">
            {assignments
              .filter(assignment => assignment.status === "assigned")
              .map(assignment => (
                <div key={assignment.id} className="list-group-item">
                  {assignment.title}
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-4">
          <h5>Due</h5>
          <div className="list-group">
            {assignments
              .filter(assignment => assignment.status === "due")
              .map(assignment => (
                <div key={assignment.id} className="list-group-item">
                  {assignment.title}
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-4">
          <h5>Done</h5>
          <div className="list-group">
            {assignments
              .filter(assignment => assignment.status === "done")
              .map(assignment => (
                <div key={assignment.id} className="list-group-item">
                  {assignment.title}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsContent;
