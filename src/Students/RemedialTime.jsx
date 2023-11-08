import FacilitatorRemedial from "../Components/MicroComponents/StudentFacilitatorRemedial/FacilitatorRemedial"
import Sidebar from "../Components/MicroComponents/StudentFacilitatorRemedial/studentDashboardNavBar"
import { useState } from "react"

function RemedialTime(){
    const[alerte,setAlert]=useState(false)
    const alerter=()=>{
        if(alerte){
            setAlert(false)
            alert("setfalse")
        }else{
            setAlert(true)
            alert("settoTRUE")
        }
    }
    return(
        <>
        <div className="main flex flex-row h-screen ">
        <Sidebar onClick={alerter}/>
         <div className="content w-[100%] md:w-[80%]">
            <FacilitatorRemedial/>
         </div>
        </div>
         
        </>
    )
}
export default RemedialTime