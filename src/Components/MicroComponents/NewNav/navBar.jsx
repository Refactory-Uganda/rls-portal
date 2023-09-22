
import style from './navbar.module.css'; 
import { MdDashboard } from 'react-icons/md';
import { BsLink, BsPerson, BsPeople } from 'react-icons/bs';
import { FaBars, FaBook, FaCog, FaDoorOpen, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import {Link} from 'react-router-dom'
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
          <Link to="/admin/profile" className="list-group-item list-group-item-action d-flex align-items-center">
            <BsLink className="mr-2" /> Account
          </Link>
          <Link to="" className="list-group-item list-group-item-action d-flex align-items-center">
            <BsPerson className="mr-2" /> Student
          </Link>
          <Link to="/admin/facilitator" className="list-group-item list-group-item-action d-flex align-items-center">
          <BsPeople className="mr-2" />  Facilitator
          </Link>
          <Link to="/admin/" className="list-group-item list-group-item-action d-flex align-items-center">
          <FaBook className="mr-2" /> Course
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
