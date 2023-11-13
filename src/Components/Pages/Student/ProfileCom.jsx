import { useNavigate } from "react-router-dom";
import profile from '../../../assets/Avatar (2).png'
import style from './ProfileCom.module.css'
function ProfileCom(props) {
  const navigate = useNavigate();
  const { id } = props;

  return (
    <div className={style.Profile}>
      <img
        src={profile}
        alt="userPic"
        className={style.img}
      />

{/*   

      <span className={style.spanOne}>
        <span className={style.spanTwo}>
          <h1 className={style.nameHeader}>
            Opini Isaac
          </h1>
          <h2 className={style.emailHeader}>
            opipi@gmail.com
          </h2>
        </span>
      </span> */}

      <span
        className={style.description}
      >
        ✨Hello, im Front-end Developer. Open to the new Project. ✨
      </span>

      <button
    className={style.button}
      
      >
        My Profile
      </button>
    </div>
  );
}

export default ProfileCom;
