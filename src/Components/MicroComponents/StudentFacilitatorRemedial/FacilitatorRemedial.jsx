
import FacilitatorStudentFormCard from "./FacilitatorStudentFormCard"
function FacilitatorRemedial(){
    return(
        <>
        <div className="main flex flex-col gap-3 h-screen w-[90%] lg:w-[70%] m-auto pt-10 lg:pt-5">
         <div className="nav ">
            <h4 className="font-medium">Request for Remedial time</h4>
         </div>
         <div className="content">
            <FacilitatorStudentFormCard/>
         </div>
        </div>
         
        </>
    )
}
export default FacilitatorRemedial