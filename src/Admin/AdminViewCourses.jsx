//import NavBar from "../Components/MicroComponents/Navbar/Navbar.jsx";
import demo from '../Components/Pages/demo.json'
import style from './AdminViewCourses.module.css'


function AdminVeiwCourses(){
    return(
        <>
         <div className="main grid grid-cols-1 p-3 sm2:grid-cols-2  md2:grid-cols-3  gap-3 lg:grid-cols-2 xl:grid-cols-3">
            {
                demo.map((data)=>(
                    <div key={data.id} className="courseCard rounded-1sm p-4 flex flex-col justify-between" id={style.course}>
                <div className="cardHead flex justify-between">
                    <img src={data.img} className='w-20' alt="img"/>
                    <p className='pt-3 font-black'>{data.name}</p>
                    <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                </div>
                <div className="cardContent">
                    <p>{data.description.substring(-1,50)+"........"}</p>
                </div>
                <div className="cardButtons">
                    {
                        data.published ? <button className='bg-bluegreen text-center p-2 rounded-0.5sm'>Published</button>:<div><button className='bg-white text-black p-2 rounded-0.5sm border-black '>Pending</button> <button className='bg-bluegreen text-black p-2 rounded-0.5sm'>Publish</button></div> 
                    }
                </div>

            </div>
                ))
            }
            
         </div>
        </>
    )
}

export default AdminVeiwCourses