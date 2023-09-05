
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";
import AddCourseContent from "./Admin/AddCourseContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/coursecontent" element={<CourseContent/>}/>
          <Route path="/addCourse" element={<AddCourseContent/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
