import style from './Navbar.module.css';
import { FaCog, FaDoorOpen, FaUserAlt } from 'react-icons/fa';
import Notification from '../notification/Notification';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const popoverContent = (
  <Popover id="popover-basic" style={{backgroundColor:'#673467'}}>
    <Popover.Body>
      <div className={style.notification}>
        <Link to="/admin/profile" className={style.notification}> <FaUserAlt className={style.icon} /> Profile</Link>
      </div>
      <hr style={{color:'#fff'}}></hr>
      <div className={style.notification}>
      <Link to="/admin/accountsetting" className={style.notification}> <FaCog className={style.icon} /> Account Setting</Link>
      </div>
      <hr style={{color:'#fff'}}></hr>
      <div className={style.notification}>
      <Link to="/login" className={style.notification}><FaDoorOpen className={style.icon} /> Signout</Link>
      </div>
      
    </Popover.Body>
  </Popover>
);


const Navbar = () => {
  return (
    <div className={style.container}>
            <div className={style.label}>
                <h1></h1>
            </div>
            <div className={style.text}>
                <Notification />
                <OverlayTrigger trigger="click" placement="bottom" overlay={popoverContent}>
                <button className={style.btn}>Account <FaUserAlt className='pl-2 pt-2'/></button>
                </OverlayTrigger>
            </div>
    </div>
  )
}

export default Navbar