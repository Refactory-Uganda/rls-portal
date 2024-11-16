// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faCheckCircle, faClock, faListAlt } from '@fortawesome/free-solid-svg-icons';
// import "../assets/css/topics.css";

// const TopicCard = ({ title, description, status, onClick }) => {
//   let statusIcon;
//   let statusColor;

//   switch (status) {
//     case 'completed':
//       statusIcon = faCheckCircle;
//       statusColor = 'green';
//       break;
//     case 'in-progress':
//       statusIcon = faClock;
//       statusColor = 'orange';
//       break;
//     case 'not-started':
//     default:
//       statusIcon = faListAlt;
//       statusColor = 'gray';
//   }

//   return (
//     <div className="topic-card">
//       <div className="topic-header">
//         <FontAwesomeIcon icon={faBook} size="2x" />
//         <h4>{title}</h4>
//       </div>
//       <p>{description}</p>
//       <div className="status" style={{ color: statusColor }}>
//         <FontAwesomeIcon icon={statusIcon} /> {status.charAt(0).toUpperCase() + status.slice(1)}
//       </div>
//       <Button onClick={onClick} variant="primary">Start Topic</Button>
//     </div>
//   );
// };

// const Topics = ({ courseTitle, courseDescription, topics }) => {
//   const [filteredStatus, setFilteredStatus] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleViewTopic = (topicId) => {
//     console.log(`Viewing topic ${topicId}`);
//     // Navigate to the topic details page
//   };

//   const handleFilter = (status) => {
//     setFilteredStatus(status);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredTopics = topics.filter((topic) => {
//     const matchesStatus = filteredStatus === "all" || topic.status === filteredStatus;
//     const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   return (
//     <div className="course-topics-page">
//       <h1>{courseTitle}</h1>
//       <p>{courseDescription}</p>

//       {/* Search and Filter Section */}
//       <div className="topics-filter">
//         <input
//           type="text"
//           placeholder="Search topics..."
//           className="search-bar"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <div className="filters">
//           <button 
//             className="filter-btn" 
//             onClick={() => handleFilter("all")}>
//             All
//           </button>
//           <button 
//             className="filter-btn" 
//             onClick={() => handleFilter("completed")}>
//             Completed
//           </button>
//           <button 
//             className="filter-btn" 
//             onClick={() => handleFilter("in-progress")}>
//             In Progress
//           </button>
//           <button 
//             className="filter-btn" 
//             onClick={() => handleFilter("not-started")}>
//             Not Started
//           </button>
//         </div>
//       </div>

//       {/* Topics List */}
//       <div className="topics-list">
//         {filteredTopics.length > 0 ? (
//           filteredTopics.map((topic) => (
//             <TopicCard
//               key={topic.id}
//               title={topic.title}
//               description={topic.description}
//               status={topic.status}
//               onClick={() => handleViewTopic(topic.id)}
//             />
//           ))
//         ) : (
//           <p>No topics match your filter criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Topics;
