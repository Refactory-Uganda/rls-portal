
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";
import AddCourseContent from "./Admin/AddCourseContent";
import Landing from "./Components/Pages/Landing"
import Admin from "./Admin/AdminLandingPage"
import AddFacilitator from "./Admin/AddFacilitator"
// import "./index.css"
import AddCourse from "./Admin/AddCourse";
import AssignCourseFacilitator from "./Admin/AssignCourseFacilitator.jsx";
import PieChart from "./Components/MicroComponents/PieChart/PieChart";
import ViewAndAddFacilitors from "./Admin/ViewAndAddFacilitors";
import FacilitatorModules from "./Admin/facilitatorModules";
import AddCourseContentDraft from "./Admin/AddCourseContentDraft";




function App() {
  return (
    <div>
      <Router>
        <Routes>
         
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/piechart" element={<PieChart/>}></Route>
          <Route path="/admin" element={<Admin/>}>
              <Route path="/admin/coursecontent" element={<CourseContent/>}/>
              <Route path="/admin/addcoursecontent" element={<AddCourseContent/>}/>
              <Route path= '/admin/addFacilitator' element={<AddFacilitator/>}/>
              <Route path="/admin/view/add/facilitator" element={<ViewAndAddFacilitors/>}></Route>
              <Route path= '/admin/assignCourseFacilitator' element={<AssignCourseFacilitator/>}/>
              <Route path= '/admin/addCourseContentDraft' element={<AddCourseContentDraft/>}/>
              <Route path="/admin/facilitatorModules" element={<FacilitatorModules/>} />
              <Route path="/admin/addCourseContentAdded" element={<AddCourseContent/>}/>
          </Route>
          {/* <Route path= '/addFacilitator' element={< AddFacilitator/>}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
