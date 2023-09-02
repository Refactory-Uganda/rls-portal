import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/coursecontent" element={<CourseContent/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
