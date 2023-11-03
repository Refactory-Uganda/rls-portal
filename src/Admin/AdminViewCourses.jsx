
//import NavBar from "../Components/MicroComponents/Navbar/Navbar.jsx";
import { Link } from 'react-router-dom';

import style from './AdminViewCourses.module.css';
import {FaEllipsisV, FaTrash, FaEdit} from 'react-icons/fa'
import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from '../Components/Loading';
import NoData from '../Components/NoData';

function AdminVeiwCourses(){
    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        const apiUrl = "http://localhost:5000/courses";
        const fetchData = async () => {
          try {
            const response = await axios.get(apiUrl);
            setData(response.data);
            setTimeout(() => {
              setLoading(false); // Set loading to false after 1 second
            }, 1000);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
       
       
        fetchData();
      }, []);

      

      const deleteData = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/courses/${id}`);
          setData(data.filter((course) => course._id !== id));
          alert("Data deleted successfully");
        } catch (error) {
          console.error("Error deleting data:", error);
          alert(error)
        }
      };

    
      

    return(
        <>
          {loading ? (
            <div><Loading /></div>
          ) : data.length === 0 ? (
            <div><NoData/></div>
          ) : (
            <div className="main grid grid-cols-1 p-3 sm2:grid-cols-2  md2:grid-cols-3  gap-3 lg:grid-cols-2 xl:grid-cols-3">
                
            {
                data.map((data)=>(
                    <div key={data.id} className="courseCard rounded-1sm p-4 flex flex-col justify-between" id={style.course}>
                      <Link className={style.list} to="/admin/AddCourseget">
                      <div className="cardHead flex justify-between">
                        <div className='flex'>
                            <img src={data.image} className='w-12' alt="img"/>
                            <p className='pt-3 pr-4 font-black'>{data.course_name}</p>
                        </div>
                        <div className="pt-3">
                        <div className="dropdown-center">
                        <button className='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu bg-bluegreen" style={{minWidth: '5px', backgroundColor:'#673467'}}>
                            <li><Link className="dropdown-item " to="#"><FaTrash color='#58C5C8' onClick={()=>deleteData(data._id)}/></Link></li>
                            <hr></hr>
                            <li><Link className="dropdown-item" to="/admin/AddCourseEdit"><FaEdit color='#58C5C8'/></Link></li>
                        </ul>
                        </div>
                        </div>
                
                    </div>
                    
                <div className="cardContent">
                    <p>{data.course_description.substring(-1,50)+"........"}</p>
                    <p>{data.course_duration}</p>
                </div>
                <div className="cardButtons">
                    {
                        data.status==="Publish" ? <button className='bg-bluegreen text-center p-2 rounded-0.5sm'>Published</button>:<div><button className='bg-white text-black p-2 rounded-0.5sm border-black '>Pending</button> <button className='bg-bluegreen text-black p-2 rounded-0.5sm'>Publish</button></div> 
                    }
                </div>
                </Link>
            </div>
                ))
            }
            
          </div>
          ) }
       
         
        </>
    )
}

export default AdminVeiwCourses