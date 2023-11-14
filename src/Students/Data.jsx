import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function Data() {
 const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/courses";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
       
          setData(response.data);
        
       
      }  catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
   

    return data;
}

export default Data;



