import ViewAddFacilitatorCss from "../Admin/ViewAndAddFacilitators.module.css"
import {FaEllipsisV} from 'react-icons/fa'
import Navbar from "../Components/MicroComponents/Navbar/Navbar";

function ViewAndAddFacilitors() {
  return (
    <>
    {/* <Navbar label={"FACILITATORS"}/> */}
      <div className="container-fluid">
        <div className="row">
       
          {/* <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12" > them</div> */}
          <div className="col" id={ViewAddFacilitatorCss.main}>
           {/* <h1 id={ViewAddFacilitatorCss.col}> <Navbar label="FACILITORS"/></h1> */}
           <button className={ViewAddFacilitatorCss.button}>+ ADD FACILITATOR</button>
           <hr className={ViewAddFacilitatorCss.hr} />
           <div className="container"> 
   <div className="row">
   
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
             <h5 className={ViewAddFacilitatorCss.h5}>Edwin</h5>
             <p className={ViewAddFacilitatorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
             <h5 className={ViewAddFacilitatorCss.h5}>Edwin</h5>
             <p className={ViewAddFacilitatorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
             <h5 className={ViewAddFacilitatorCss.h5}>Edwin</h5>
             <p className={ViewAddFacilitatorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div> 
      <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="position-relative">
      <div id={ViewAddFacilitatorCss.box}>
             <img src="/images/IMG-20220711-WA0056 (2).jpg" alt=""  className={ViewAddFacilitatorCss.image}/>
 {/* dropdown */}
            <div className="position-absolute top-0 end-0">
            <div className="dropdown-center">
  <button className={ViewAddFacilitatorCss.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
             <h5 className={ViewAddFacilitatorCss.h5}>Edwin</h5>
             <p className={ViewAddFacilitatorCss.email}>rugoogamuedwin5@gmail.com</p>
             </div>
             </div>
      </div>
   </div> 
</div>
          </div>
          {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div>
              
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ViewAndAddFacilitors;
