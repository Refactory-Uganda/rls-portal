import React, { useState } from "react";
import { MDBCol } from "mdbreact";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({setResults}) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:5000/courses")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.course_name &&
            user.course_name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      {/* <FaSearch id="search-icon" /> */}
      <input
        placeholder="Type to Search... "
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
