/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckCircle, faExclamationCircle, faClock, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const AssignmentCard = ({ title, dueDate, status, onClick }) => {
  // Convert dueDate to a JavaScript Date object
  const dueDateObj = new Date(dueDate);
  const currentDate = new Date();

  // Calculate the difference in time
  const timeDiff = dueDateObj - currentDate; // in milliseconds
  
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert to days

  // Determine the status of the assignment
  let dynamicStatus = status || 'pending'; // default to 'pending'
  let statusIcon;
  let statusColor;

  if (timeDiff < 0) {
    // Past due date
    dynamicStatus = 'overdue';
    statusIcon = faExclamationCircle;
    statusColor = 'red';
  } else if (daysLeft <= 1) {
    // Due in less than or equal to 1 day
    dynamicStatus = 'due soon';
    statusIcon = faExclamationTriangle;
    statusColor = 'orange';
  } else if (dynamicStatus === 'completed') {
    // Completed status
    statusIcon = faCheckCircle;
    statusColor = 'green';
  } else {
    // Default to 'pending'
    dynamicStatus = 'pending';
    statusIcon = faClock;
    statusColor = 'gray';
  }

  return (
    <div className="assignment-card" onClick={onClick}>
      <div className="assignment-header">
        <FontAwesomeIcon icon={faClipboardList} size="2x" />
        <h4>{title}</h4>
      </div>
      <div className="assignment-details">
        <span><strong>Due Date:</strong> {dueDateObj.toLocaleDateString()}</span>
        <div className="status" style={{ color: statusColor }}>
          <FontAwesomeIcon icon={statusIcon} /> {dynamicStatus.charAt(0).toUpperCase() + dynamicStatus.slice(1)}
        </div>
        <div className="days-left">
          {dynamicStatus !== 'completed' && (
            <span>
              {dynamicStatus === 'overdue' 
                ? ''
                : `${Math.abs(daysLeft)} day${Math.abs(daysLeft) !== 1 ? 's' : ''} left`}
            </span>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default AssignmentCard;
