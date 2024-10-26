import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/css/topicsList.css";

const TopicsList = ({ selectedCourse }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  return (
    // <div className="container">
    <div className="accordion" id="topicsAccordion">
      {selectedCourse.topics.map((topic) => (
        <div className="card topic-cover-card" key={topic.id}>
          <div className="topic-card" id={`heading${topic.id}`}>
            <h2 className="mb-0">
              <button
                className="btn btn-link topic-btn"
                type="button"
                onClick={() => toggleTopic(topic.id)}
                aria-expanded={activeTopic === topic.id}
                aria-controls={`collapse${topic.id}`}
              >
                {topic.Title}
              </button>
            </h2>
          </div>

          <div
            id={`collapse${topic.id}`}
            className={`collapse ${activeTopic === topic.id ? "show" : ""} `}
            aria-labelledby={`heading${topic.id}`}
            data-parent="#topicsAccordion"
          >
            <div className="card-body lesson-card">
              <ul className="list-group">
                {topic.Lesson.map((lesson) => (
                  <li className="list-group-item lesson-list-item" key={lesson.id}>
                    {lesson.title}
                  </li>
                ))}
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
