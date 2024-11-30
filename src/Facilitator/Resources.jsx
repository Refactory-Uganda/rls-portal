import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../assets/css/resources.css";

// Sample resources data
const resources = [
  { id: 1, title: 'Course Material 1', description: 'Complete guide to module 1', category: 'Course Materials', link: '/material/1' },
  { id: 2, title: 'Student Feedback Report', description: 'Download feedback from students', category: 'Student Feedback', link: '/feedback/1' },
  { id: 3, title: 'Assignment Guidelines', description: 'Guidelines for grading assignments', category: 'Assignments', link: '/assignments/1' },
  { id: 4, title: 'Module 2 Presentation', description: 'Presentation slides for module 2', category: 'Course Materials', link: '/material/2' },
  // Add more resources as needed
];

const ResourceCard = ({ title, description, link }) => (
  <div className="resource-card">
    <h4>{title}</h4>
    <p>{description}</p>
    <Button variant="primary action-btn" href={link}>View Resource</Button>
  </div>
);

const Resources = () => {
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = filteredCategory === "all" || resource.category === filteredCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="facilitator-resources-page">
      {/* Search and Filter Section */}
      <div className="resources-filter">
        <input
          type="text"
          placeholder="Search resources..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="filters">
          <button
            className={`filter-btn secondary-action-btn ${filteredCategory === "all" ? "active" : ""}`}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn secondary-action-btn ${filteredCategory === "Course Materials" ? "active" : ""}`}
            onClick={() => handleFilter("Course Materials")}
          >
            Course Materials
          </button>
          <button
            className={`filter-btn secondary-action-btn ${filteredCategory === "Assignments" ? "active" : ""}`}
            onClick={() => handleFilter("Assignments")}
          >
            Assignments
          </button>
          <button
            className={`filter-btn secondary-action-btn ${filteredCategory === "Student Feedback" ? "active" : ""}`}
            onClick={() => handleFilter("Student Feedback")}
          >
            Student Feedback
          </button>
        </div>
      </div>

      {/* Resource Cards List */}
      <div className="resource-cards-list">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          ))
        ) : (
          <p>No resources match your filter or search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
