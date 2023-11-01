import FacilitatorRemedial from "../Components/MicroComponents/StudentFacilitatorRemedial/FacilitatorRemedial"
import FacilitatorStudentSelectButton from "../Components/MicroComponents/StudentFacilitatorRemedial/FcilitatorStudentSelectButton"
;

function RemedialTime(){
    return(
        <>
        <div className="main flex flex-row h-screen ">
        
         <div className=" hidden border-e-2 border-slate border-solid md:block w-[20%]">
            <div className="link border-b-2 border-slate border-solid">
            <div className="px-3 py-2 flex flex-row gap-2 hover:bg-menuwhite">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> 
            <p>Home</p>
            </div>
            <div className="px-3 py-2  flex flex-row gap-2  hover:bg-menuwhite">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
            <p>Notifications</p>
            </div>
            <div className="px-3 py-2  flex flex-row gap-2  hover:bg-menuwhite">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
            <p>Library</p>
            </div>
            </div>
            <FacilitatorStudentSelectButton text='CI/CD'/>
         </div>
         <div className="content w-[100%] md:w-[80%]">
            <FacilitatorRemedial/>
         </div>
        </div>
         
        </>
    )
}
export default RemedialTime