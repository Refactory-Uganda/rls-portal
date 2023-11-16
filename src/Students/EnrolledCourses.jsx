import demo from '../Components/Pages/demo.json'
import style from './EnrolledCourses.module.css';
import Sidebar from "../Components/Pages/Student/sideBar"
import { Link } from "react-router-dom";
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';
import {FaEllipsisV, FaTrash, FaEdit} from 'react-icons/fa'


function EnrolledCourses(){
    return(
        <>
           <Sidebar />
      <LandingPageNavBar />
         <div className="main grid grid-cols-1 p-3 sm2:grid-cols-2  md2:grid-cols-3  gap-3 lg:grid-cols-2 xl:grid-cols-3" style={{marginLeft: '200px', marginTop: '70px'}}>
         
            {
                demo.map((data)=>(
                    <div key={data.id} className="courseCard rounded-1sm p-4 flex flex-col justify-between" id={style.course}>
                     <div>
                        <div className={style.logo} >
                            <img src={data.img} className='w-14' alt="img" />
                        </div> 
                    </div>
                <div className="cardContent">
                    <p>{data.description.substring(-1,200)+"........"}</p>
                </div>
                <Link to="/student/ViewMaterial" className={style.button} >View Content</Link>
            </div>
                ))
            }
         </div>
        </>
    )
}

export default EnrolledCourses