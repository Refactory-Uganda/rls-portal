
import style from './navbar.module.css'; 
import { MdDashboard } from 'react-icons/md';
import { BsLink, BsPerson, BsPeople } from 'react-icons/bs';
import { FaBars, FaBook, FaCog, FaDoorOpen, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
const NavBar = () => {
    
        const [sidebarVisible, setSidebarVisible] = useState(false);
      
        const toggleSidebar = () => {
          setSidebarVisible(!sidebarVisible);
        };


    return (
    <div className={`d-flex ${style.sidebar} ${sidebarVisible ? style['sidebar-active'] : ''}`} id={`wrapper ${style.viewport} viewport`} >
      {/* Sidebar */}
      <div id={style.sidebar}>
            <header>
              <Link to='/admin/'>
                <img src="/img/refactoryLogoColored.png" alt="logo" className={style.img}/>
              </Link>
            </header>
        <div className={`list-group list-group-flush ${style.nav}`} >
           
          <Link to='/admin/' className={`list-group-item list-group-item-action d-flex align-items-center `}>
            <MdDashboard className="mr-2" /> Dashboard
          </Link>
          <Link to="/admin/piechart" className="list-group-item list-group-item-action d-flex align-items-center">
            <BsLink className="mr-2" /> Chart
          </Link>
          <Link to="" className="list-group-item list-group-item-action d-flex align-items-center">
            <BsPerson className="mr-2" /> Student
          </Link>
          <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
          <Dropdown className={style.dropdown}>
            <Dropdown.Toggle variant="none" id="dropdown-basic" className={`d-flex align-items-center ${style.dropdownToggle}`}>
            <BsPeople className="mr-2" />  Facilitator
            </Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:'#693769'}}>
              <Dropdown.Item href="#/action-3" className='align-items-center '><Link to="/admin/facilitator" className={style.item}> Facilitator</Link></Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='align-items-center '><Link to="/admin/addFacilitator" className={style.item}>Add Facilitator</Link></Dropdown.Item>
              <Dropdown.Item href="#/action-2"><Link to="/admin/facilitatorcontentadded" className={style.item}>FacilitatorModule</Link></Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          </Link>
          <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center " >
          <Dropdown className={style.dropdown}>
            <Dropdown.Toggle variant="none" id="dropdown-basic" className={`d-flex align-items-center ${style.dropdownToggle}`}>
            <FaBook className="mr-2" /> Course
            </Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:'#693769'}}>
              <Dropdown.Item href="#/action-3" className='align-items-center '><Link to="/admin/addcourse" className={style.item}>Add Course</Link></Dropdown.Item>
              <Dropdown.Item href="#/action-2"><Link to="/admin/coursecontent" className={style.item}>AddContent</Link></Dropdown.Item>
              <Dropdown.Item href="#/action-2"><Link to="/admin/addcoursecontent" className={style.item}>Course Content</Link></Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          </Link>
          <Link to="" className="list-group-item list-group-item-action d-flex align-items-center">
          <FaCog className="mr-2" /> Setting
          </Link>
          <Link to="" className="list-group-item list-group-item-action d-flex align-items-center ">
            <FaDoorOpen className="mr-2" /> SignOut
          </Link>
        </div>
      </div>
      <div className={style.topSection}>
      <div className={style.imageContainer}>
          {/* Add your image here */}
          <img src="/img/refactoryWhite.png" className={style.img1} alt="Your Image" />
        </div>
        <div className={`${style.toggleIcon} ${style.icon}`} onClick={toggleSidebar}>
          {/* Use FaBars icon */}
         { sidebarVisible ? <FaTimes /> : <FaBars />}
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
