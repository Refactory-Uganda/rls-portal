import { Outlet } from "react-router-dom"
import LandingPageNavBar from "../Components/Pages/Student/LandingPageNavBar"
function StudentTemplate(){
    return(
    <>
    <LandingPageNavBar/>
    <div className="relative top-[60px]">
    <Outlet></Outlet>
    </div>
   
    </>
    )
}
export default StudentTemplate