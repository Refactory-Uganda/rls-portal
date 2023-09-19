
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import CourseContent from "./Admin/CourseContent";
import AddCourseContent from "./Admin/AddCourseContent";
import Landing from "./Components/Pages/Landing"
import Admin from "./Admin/AdminLandingPage"
import AddFacilitator from "./Admin/AddFacilitator"
import AddCourse from "./Admin/AddCourse";
import AssignCourseFacilitator from "./Admin/AssignCourseFacilitator.jsx";
import PieChart from "./Components/MicroComponents/PieChart/PieChart";
import ViewAndAddFacilitors from "./Admin/ViewAndAddFacilitors";
import FacilitatorModules from "./Admin/facilitatorModules";
import AddCourseContentDraft from "./Admin/AddCourseContentDraft";
import AddCourseMaterial from "./Admin/AddCourseMaterial";
import AddCourseMaterialField from "./Admin/AddCourseMaterialField";
import AddCouserMaterialDaft from "./Admin/AddCouserMaterialDaft";
// import Profile from "./Admin/AdminProfile.Jsx";

// import Profile from "./Admin/AdminProfile"




function App() {
  return (
    <div>
      <Router>
        <Routes>
         
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/piechart" element={<PieChart/>}></Route>
          <Route path="/admin" element={<Admin/>}>
              <Route path="/admin/addcourse" element={<AddCourse/>}></Route>
              <Route path="/admin/coursecontent" element={<CourseContent/>}/>
              {/* <Route path= '/admin/nav' element={<NavBar/>}/> */}
              <Route path="/admin/addcoursecontent" element={<AddCourseContent/>}/>
              <Route path="/admin/addcoursematerial" element={<AddCourseMaterial/>}/>
              <Route path= '/admin/addFacilitator' element={<AddFacilitator/>}/>
              <Route path="/admin/add/facilitator" element={<ViewAndAddFacilitors/>}></Route>
              <Route path= '/admin/assignCourseFacilitator' element={<AssignCourseFacilitator/>}/>
              <Route path= '/admin/addCourseContentDraft' element={<AddCourseContentDraft/>}/>
              <Route path="/admin/facilitatorModules" element={<FacilitatorModules/>} />
              <Route path="/admin/addCourseContentAdded" element={<AddCourseContent/>}/>
              <Route path="/admin/AddCourseMaterialField" element={<AddCourseMaterialField />}/>
              <Route path="/admin/AddCourseMaterialDaft" element={<AddCouserMaterialDaft />}/>
          </Route>
          {/* <Route path= '/addFacilitator' element={< AddFacilitator/>}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
