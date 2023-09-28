import style from './Navbar.module.css';
import { FaUserAlt } from 'react-icons/fa';

import Notification from '../notification/Notification';




const Navbar = () => {
  return (
    <div className={style.container}>
            <div className={style.label}>
                <h1></h1>
            </div>
            <div className={style.text}>
                <Notification />
                <button className={style.btn}>Account <FaUserAlt className='pl-2 pt-2'/></button>
            </div>
    </div>
  )
}

export default Navbar