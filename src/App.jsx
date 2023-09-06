
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";
import AddCourseContent from "./Admin/AddCourseContent";
import Landing from "./Components/Pages/Landing"
import Admin from "./Admin/AdminLandingPage"
import AddFacilitator from "./Admin/AddFacilitator"
import "./index.css"
import AddCourse from "./Admin/AddCourse";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin/>}></Route>
          <Route path="/LANDING" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/coursecontent" element={<CourseContent/>}/>
          <Route path="/addCourseContent" element={<AddCourseContent/>}/>
          <Route path= '/addFacilitator' element={<AddFacilitator/>}/>
          <Route path= '/addCourse' element={<AddCourse/>}/>


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
