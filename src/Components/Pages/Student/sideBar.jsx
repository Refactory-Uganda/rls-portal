import style from './sideBar.module.css';
import { MdDashboard } from 'react-icons/md';
import { BsLink, BsPeople } from 'react-icons/bs';
import { FaBars, FaBook, FaCog, FaDoorOpen, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
const Sidebar = () => {
        const [sidebarVisible, setSidebarVisible] = useState(false);
        const toggleSidebar = () => {
          setSidebarVisible(!sidebarVisible);
        };
    return (
    <div className={`d-flex ${style.sidebar} ${sidebarVisible ? style['sidebar-active'] : ''}`} id={`wrapper ${style.viewport} viewport`} >
      {/* Sidebar */}
      <div id={style.sidebar}>
        <div className={`list-group list-group-flush ${style.nav}`} >
           
          <Link to='/admin/' className={`list-group-item list-group-item-action d-flex align-items-center `}>
            <MdDashboard className="mr-2" /> Home
          </Link>
          <Link to="/admin/piechart" className="list-group-item list-group-item-action d-flex align-items-center">
            <BsLink className="mr-2" /> Notifications
          </Link>
          <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
          <Dropdown className={style.dropdown}>
            <Dropdown.Toggle variant="none" id="dropdown-basic" className={`d-flex align-items-center ${style.dropdownToggle}`} style={{color: 'black',}}>
            <BsPeople className="mr-2" />  Enrolled 
            </Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:'white'}}>
              <Dropdown.Item href="#/action-3" className='align-items-center '  ><Link to="/admin/facilitator" className={style.item} style={{color: 'black',}}> Javascript</Link></Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='align-items-center '><Link to="/admin/addFacilitator" className={style.item}  style={{color: 'black',}}>Python</Link></Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2"><Link to="/admin/facilitatorcontentadded" className={style.item}>FacilitatorModule</Link></Dropdown.Item> */}
              
            </Dropdown.Menu>
          </Dropdown>
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

export default Sidebar;
