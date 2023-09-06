
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";
import AddCourseContent from "./Admin/AddCourseContent";
import PieChart from "./Components/MicroComponents/PieChart/PieChart";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/coursecontent" element={<CourseContent/>}/>
          <Route path="/addCourse" element={<AddCourseContent/>}/>
          <Route path="/piechart" element={<PieChart/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
