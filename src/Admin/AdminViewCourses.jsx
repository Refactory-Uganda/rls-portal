
//import NavBar from "../Components/MicroComponents/Navbar/Navbar.jsx";
import { Link } from 'react-router-dom';
import demo from '../Components/Pages/demo.json'
import style from './AdminViewCourses.module.css';
import {FaEllipsisV, FaTrash, FaEdit} from 'react-icons/fa'


function AdminVeiwCourses(){
    return(
        <>
       
         <div className="main grid grid-cols-1 p-3 sm2:grid-cols-2  md2:grid-cols-3  gap-3 lg:grid-cols-2 xl:grid-cols-3">
         
            {
                demo.map((data)=>(
                    <div key={data.id} className="courseCard rounded-1sm p-4 flex flex-col justify-between" id={style.course}>
                     <Link className={style.list} to="/admin/AddCourseget">
                     <div className="cardHead flex justify-between">
                        <div className='flex'>
                            <img src={data.img} className='w-12' alt="img"/>
                            <p className='pt-3 pr-4 font-black'>{data.name}</p>
                        </div>
                        <div className="pt-3">
                        <div className="dropdown-center">
                        <button className='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu bg-bluegreen" style={{minWidth: '5px', backgroundColor:'#673467'}}>
                            <li><Link className="dropdown-item " to="#"><FaTrash color='#58C5C8'/></Link></li>
                            <hr></hr>
                            <li><Link className="dropdown-item" to="/admin/AddCourseEdit"><FaEdit color='#58C5C8'/></Link></li>
                        </ul>
                        </div>
                        </div>
                
                    </div>
                   
                <div className="cardContent">
                    <p>{data.description.substring(-1,50)+"........"}</p>
                </div>
                <div className="cardButtons">
                    {
                        data.published ? <button className='bg-bluegreen text-center p-2 rounded-0.5sm'>Published</button>:<div><button className='bg-white text-black p-2 rounded-0.5sm border-black '>Pending</button> <button className='bg-bluegreen text-black p-2 rounded-0.5sm'>Publish</button></div> 
                    }
                </div>
                </Link>
            </div>
                ))
            }
            
         </div>
        </>
    )
}

export default AdminVeiwCourses