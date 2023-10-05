import demo from '../Components/Pages/demofacilitator.json'
import style from './AdminFacilitatorContentAdded.module.css'
function AdminFacitatorContentAdded(){
    return(
        <>
        <div className="main px-3 py-3 ">
            {
                demo.map((data)=>(
                    <div key={data.facilitatorID} className="wrapper ">
                         <div className="name py-2 mb-3" id={style.name}>
                            <h4 className='text-center text-purple'>{data.name}</h4>
                         </div>
                         <div className="details border-solid border-bluegreen border-2 rounded-1sm p-1">
                         <div className="profile" id={style.profile}>
                            <div className="detailsprofile">
                                <img src={data.img} className='w-20 rounded-5sm p-2  m-auto mt-3 mb-1' alt={data.name.substring(-1,1)} />
                                <p className='text-purple text-center m-0'>{data.email}</p>
                            </div>
                            <div className="svg p-1">
                            <svg className='m-auto mt-3 fill-purple' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                            </div>
                         </div>
                        <div className="content grid p-5 sm2:grid-cols-2 gap-3  md:grid-cols-3 lg:grid-cols-3 ">{
                            data.couresassignments.map((assigned)=>(
                                <div key={assigned.id} className="assignment border-purple border-solid border-1 rounded-1sm">
                                <div className="course bg-bluegreen p-2 " id={style.assigned}>
                                    <h6 className='text-center  '>{assigned.course}</h6>
                                </div>
                                <div className="to-do bg-white p-2  " id={style.toDo}>
                                    <h6 className='text-center '>{assigned.assigment}</h6>
                                </div>
                            </div>
                            ))
                        }
                            
                        </div>
                         </div>
                     
                    </div>
                   
                ))
            }
           
        </div>
        </>
    )
}
export default AdminFacitatorContentAdded