import ViewAddFacilitatorCss from "../Admin/ViewAndAddFacilitators.module.css"
import { FaEdit, FaEllipsisV, FaTrash} from 'react-icons/fa'


function ViewAndAddFacilitors() {
  return (
    <>
    {/* <Navbar label={"FACILITATORS"}/> */}

    <div className="main grid grid-cols-1 p-3 sm2:grid-cols-2  md2:grid-cols-3  gap-3 lg:grid-cols-2 xl:grid-cols-3" >
        
      <div className="courseCard rounded-1sm p-4 flex flex-col justify-between">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-2 end-0">
                        <div className="dropdown-center">
                        <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu bg-bluegreen" style={{minWidth: '5px', backgroundColor:'#673467'}}>
                            <li><a className="dropdown-item " href="#"><FaTrash color='#58C5C8'/></a></li>
                            <hr style={{color:'#fff'}}></hr>
                            <li><a className="dropdown-item" href="#"><FaEdit color='#58C5C8'/></a></li>
                        </ul>
                        </div>
                        </div>
{/* dropdown */}
             <h5 className={ViewAddFacilitatorCss.h5}>Name: Annie Edwin</h5>
             <h2 className={ViewAddFacilitatorCss.email}>Role: Facilitator</h2>
             <h2 className={ViewAddFacilitatorCss.email}>Course: Javascript</h2>
             <h2 className={ViewAddFacilitatorCss.email}>ID: 099876....432e4</h2>
             <p className={ViewAddFacilitatorCss.email}>Email: rugoogamuedwin5@gmail.com</p>
             
             </div>
             </div>
      </div>
      <div className="courseCard rounded-1sm p-4 flex flex-col justify-between">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-2 end-0">
                        <div className="dropdown-center">
                        <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu bg-bluegreen" style={{minWidth: '5px', backgroundColor:'#673467'}}>
                            <li><a className="dropdown-item " href="#"><FaTrash color='#58C5C8'/></a></li>
                            <hr style={{color:'#fff'}}></hr>
                            <li><a className="dropdown-item" href="#"><FaEdit color='#58C5C8'/></a></li>
                        </ul>
                        </div>
                        </div>
{/* dropdown */}
             <h5 className={ViewAddFacilitatorCss.h5}>Name: Annie Edwin</h5>
             <h2 className={ViewAddFacilitatorCss.email}>Role: Facilitator</h2>
             <h2 className={ViewAddFacilitatorCss.email}>Course: Javascript</h2>
             <h2 className={ViewAddFacilitatorCss.email}>ID: 099876....432e4</h2>
             <p className={ViewAddFacilitatorCss.email}>Email: rugoogamuedwin5@gmail.com</p>
             
             </div>
             </div>
      </div>
      <div className="courseCard rounded-1sm p-4 flex flex-col justify-between">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-2 end-0">
                        <div className="dropdown-center">
                        <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu bg-bluegreen" style={{minWidth: '5px', backgroundColor:'#673467'}}>
                            <li><a className="dropdown-item " href="#"><FaTrash color='#58C5C8'/></a></li>
                            <hr style={{color:'#fff'}}></hr>
                            <li><a className="dropdown-item" href="#"><FaEdit color='#58C5C8'/></a></li>
                        </ul>
                        </div>
                        </div>
{/* dropdown */}
             <h5 className={ViewAddFacilitatorCss.h5}>Name: Annie Edwin</h5>
             <h2 className={ViewAddFacilitatorCss.email}>Role: Facilitator</h2>
             <h2 className={ViewAddFacilitatorCss.email}>Course: Javascript</h2>
             <h2 className={ViewAddFacilitatorCss.email}>ID: 099876....432e4</h2>
             <p className={ViewAddFacilitatorCss.email}>Email: rugoogamuedwin5@gmail.com</p>
             
             </div>
             </div>
      </div>
      <div className="courseCard rounded-1sm p-4 flex flex-col justify-between">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-2 end-0">
                        <div className="dropdown-center">
                        <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu bg-bluegreen" style={{minWidth: '5px', backgroundColor:'#673467'}}>
                            <li><a className="dropdown-item " href="#"><FaTrash color='#58C5C8'/></a></li>
                            <hr style={{color:'#fff'}}></hr>
                            <li><a className="dropdown-item" href="#"><FaEdit color='#58C5C8'/></a></li>
                        </ul>
                        </div>
                        </div>
{/* dropdown */}
             <h5 className={ViewAddFacilitatorCss.h5}>Name: Annie Edwin</h5>
             <h2 className={ViewAddFacilitatorCss.email}>Role: Facilitator</h2>
             <h2 className={ViewAddFacilitatorCss.email}>Course: Javascript</h2>
             <h2 className={ViewAddFacilitatorCss.email}>ID: 099876....432e4</h2>
             <p className={ViewAddFacilitatorCss.email}>Email: rugoogamuedwin5@gmail.com</p>
             
             </div>
             </div>
      </div>
     
     
 
          </div>

    </>
  );
}

export default ViewAndAddFacilitors;
