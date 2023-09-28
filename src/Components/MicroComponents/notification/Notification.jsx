import style from './Notification.module.css';
import { FaBell, FaBullhorn, FaTrashAlt} from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const popoverContent = (
    <Popover id="popover-basic">
      <Popover.Header style={{color: "white", backgroundColor: "#673467", fontWeight: "bold"}} >Notification</Popover.Header>
      <Popover.Body>
        <div className={style.notification}>
          <FaBullhorn className={style.icon} /> <h6>Hi, Joanitah the attempt to send information to the database was successful</h6> <FaTrashAlt className={style.icon} />
        </div>
        <hr></hr>
        <div className={style.notification}>
          <FaBullhorn className={style.icon} /> <h6>Hi, Joanitah the attempt to send information to the database was successful</h6> <FaTrashAlt className={style.icon} />
        </div>
      </Popover.Body>
    </Popover>
  );
const Notification = () => {
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverContent}>
    <h3 className={`position-relative ${style.txt}`} ><FaBell fontSize={"1.3rem"}className={style.bell} /> <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle custom-class ">
      2
    </Badge></h3>
    </OverlayTrigger>
  )
}

export default Notification