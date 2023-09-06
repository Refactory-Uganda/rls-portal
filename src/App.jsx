
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";
import AddCourseContent from "./Admin/AddCourseContent";
import PieChart from "./Components/MicroComponents/PieChart/PieChart";
import Landing from "./Components/Pages/Landing"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/LANDING" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/coursecontent" element={<CourseContent/>}/>
          <Route path="/addCourseContent" element={<AddCourseContent/>}/>
          <Route path= '/addFacilitator' element={<AddFacilitator/>}/>
          <Route path= '/addCourse' element={<AddCourse/>}/>


          <Route path="/addCourse" element={<AddCourseContent/>}/>
          <Route path="/piechart" element={<PieChart/>}></Route>
          {/* <Route path= '/addFacilitator' element={< AddFacilitator/>}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
