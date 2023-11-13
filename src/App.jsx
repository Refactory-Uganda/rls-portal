
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Landing from "./Components/Pages/Landing"
import Admin from "./Admin/AdminLandingPage"
import AddFacilitator from "./Admin/AddFacilitator"
import AddCourse from "./Admin/AddCourse";
import AssignCourseFacilitator from "./Admin/AssignCourseFacilitator.jsx";
import PieChart from "./Components/MicroComponents/PieChart/PieChart";
import ViewAndAddFacilitors from "./Admin/ViewAndAddFacilitors";
import FacilitatorModules from "./Admin/facilitatorModules";
import AdminVeiwCourses from "./Admin/AdminViewCourses";
import AdminFacitatorContentAdded from "./Admin/AdminFacilitatorContentAdded";
import Profile from "./Admin/AdminProfile";
import EnrolledCourses from "./Students/EnrolledCourses"
import Student from "./Components/Pages/Student/LandingPageNavBar";
import Chat from "./Admin/Chatgptdash";
import Setting from "./Admin/Setting";
import AccountSetting from "./Admin/AccountSetting";
import Card from "./Admin/card";
import Facilitator from "./Facilitator/FacilitatorLanding";
import AddCourseEdit from "./Admin/AddcourseEdit";
import AddcourseGet from "./Admin/AddcourseGet";
import LandingPage from "./Students/LandingPage";
import RemedialTime from "./Students/RemedialTime"
import ViewMaterial from "./Students/ViewMaterial";
import ViewAssignments from "./Students/ViewAssignments";
import FacilitatorDetails from "./Admin/FacilitatorDetails";
import Topic from "./Components/Pages/Course/Topic";
import Assignment from "./Components/Pages/Course/Assignment";
import Content from "./Components/Pages/Course/content";
import Material from "./Components/Pages/Course/Material";
import Project from "./Components/Pages/Course/Project";
// import ViewCourseContent from "./Components/Pages/Student/ViewCourseContent";




function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/chat" element={<Chat/>}/>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/piechart" element={<PieChart/>}></Route>
          <Route path="/admin" element={<Admin/>}>
              <Route path="/admin/profile" element={<Profile/>}></Route>
              <Route path="/admin/AddCourseEdit" element={<AddCourseEdit />}></Route>
              <Route path="/admin/AddCourseget" element={<AddcourseGet />}></Route>
              <Route path="/admin/card" element={<Card/>}></Route>
              <Route path="/admin/accountsetting" element={<AccountSetting/>}></Route>
              <Route path="/admin/setting" element={<Setting/>}></Route>
              <Route path="/admin/addcourse" element={<AddCourse/>}></Route>
              <Route path="/admin/facilitatorcontentadded" element={<AdminFacitatorContentAdded/>}></Route>
              <Route path= '/admin/' element={<AdminVeiwCourses/>}/>
              <Route path= '/admin/piechart' element={<PieChart/>}/>
              <Route path= '/admin/addFacilitator' element={<AddFacilitator/>}/>
              <Route path="/admin/facilitator" element={<ViewAndAddFacilitors/>}></Route>
              <Route path= '/admin/assignCourseFacilitator' element={<AssignCourseFacilitator/>}/>
              <Route path="/admin/facilitatorModules" element={<FacilitatorModules/>} />
          </Route>
          <Route path="/admin/facilitator-details/:id" element={ <FacilitatorDetails/>} />
          <Route path ="/student/Navbar" element={<Student/>}>
             
          </Route>
          <Route path="/student/enrolledcourses" element={<EnrolledCourses/>}></Route>
          <Route path="/facilitator" element={<Facilitator/>}/>
          <Route path="student/landingPage" element={<LandingPage/>}/>   
          {/* <Route path="student/viewcoursecontent" element={<ViewCourseContent/>}/>  */}
          <Route path="/student/landingPage" element={<LandingPage/>}/>  
          <Route path="/student/remedialTime" element={< RemedialTime />}/> 
          {/* <Route path= '/addFacilitator' element={< AddFacilitator/>}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
