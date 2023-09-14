import React from "react";
import SideBar from "../Components/MicroComponents/NavbarAdmin/AdminNavbar"
import Navbar from "../Components/AdminNacHeader"
import FacilitorCss from "../Admin/ViewAndAddFacilitators.module.css"
import PieChart from "../Components/MicroComponents/PieChart/PieChart"
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {FaEllipsisV} from 'react-icons/fa'

function ViewAndAddFacilitors(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
       
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12" ><SideBar/></div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12" >
           <h1 id={FacilitorCss.col}> <Navbar label="FACILITORS"/></h1>
           <button className={FacilitorCss.button}>+ ADD FACILITATOR</button>
           <hr className={FacilitorCss.hr} />
           <div className="container"> 
   <div className="row">
   
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={FacilitorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={FacilitorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={FacilitorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaEllipsisV />
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Action two</a></li>
    <li><a className="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
      
            </div>
{/* dropdown */}
             <h5 className={FacilitorCss.h5}>Edwin</h5>
             <p className={FacilitorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={FacilitorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={FacilitorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={FacilitorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaEllipsisV />
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Action two</a></li>
    <li><a className="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
      
            </div>
{/* dropdown */}
             <h5 className={FacilitorCss.h5}>Edwin</h5>
             <p className={FacilitorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={FacilitorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={FacilitorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={FacilitorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaEllipsisV />
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Action two</a></li>
    <li><a className="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
      
            </div>
{/* dropdown */}
             <h5 className={FacilitorCss.h5}>Edwin</h5>
             <p className={FacilitorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div> 
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={FacilitorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={FacilitorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={FacilitorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaEllipsisV />
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Action two</a></li>
    <li><a className="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
      
            </div>
{/* dropdown */}
             <h5 className={FacilitorCss.h5}>Edwin</h5>
             <p className={FacilitorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div>
   </div> 
</div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div><PieChart/></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAndAddFacilitors;
