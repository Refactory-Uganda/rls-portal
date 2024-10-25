import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TopicsList = ({ topics }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  // const topics = [
  //   {
  //     id: 1,
  //     title: "Introduction",
  //     lessons: ["Overview of the Course", "Key Concepts", "Resources"],
  //   },
  //   {
  //     id: 2,
  //     title: "Fundamentals",
  //     lessons: ["Basics of the Subject", "Core Principles"],
  //   },
  //   {
  //     id: 3,
  //     title: "Advanced Applications",
  //     lessons: ["Real-World Examples", "Best Practices"],
  //   },
  // ];

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  return (
    // <div className="container">
    <div className="accordion" id="topicsAccordion">
      {topics.map((topic) => (
        <div className="card" key={topic.id}>
          <div className="card-header" id={`heading${topic.id}`}>
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                onClick={() => toggleTopic(topic.id)}
                aria-expanded={activeTopic === topic.id}
                aria-controls={`collapse${topic.id}`}
              >
                {topic.title}
              </button>
            </h2>
          </div>

          <div
            id={`collapse${topic.id}`}
            className={`collapse ${activeTopic === topic.id ? "show" : ""}`}
            aria-labelledby={`heading${topic.id}`}
            data-parent="#topicsAccordion"
          >
            <div className="card-body">
              <ul className="list-group">
                {/* {topic.lessons.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    {lesson}
                  </li>
                ))} */}
                <li>Lesson</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default TopicsList;
