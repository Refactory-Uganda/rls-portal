import React from "react";
import "./SearchResult.css";
import { Link, NavLink } from "react-router-dom";

function SearchResult({ result }) {
  return (
    <>
    <a href={`/student/course/${result._id}`} id="Link">
      <div className="search-result">{result.course_name}</div>{" "}
    </a>
    </>
  );
}

export default SearchResult;
