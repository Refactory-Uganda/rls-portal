/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";

import { useEffect,  } from "react";
import profile from '../../../assets/Avatar (2).png'
import style from './SinglePost.module.css'
function SinglePost() {

 


  useEffect(() => {
   
  }, []);

  return (
    <div
      className={style.singlePost}
     
    >
      {/* post top section  */}
      <span className={style.spanOne}>
        <span className={style.spanTwo}>
        
            <img
            
              src={profile}
              alt="userPic"
              className={style.imgOne}
             
            />
         
        </span>
        <span className={style.spanThree}>
          <h3
            className={style.headerOne}
         
          >
          isaacopini8@gmail.com
          </h3>

          <h3
            className={style.headerTwo}
           
          >
          Opipi
            <span className={style.spanFour}>
              {" "}
              <p className={style.pOne}> 10:00pm</p>
            
            </span>
          </h3>
        </span>
        <span className={style.spanFive}>
          <BsThreeDotsVertical
            fontSize={22}
            className={style.BsThree}
          />
        </span>
      </span>
      <span className={style.spanSix}>
     Hey its I opipi
      </span>
      {/* post image section  */}
      <span className={style.imageSection}>
       
          <img
            src='../../../../public/forum/black-coding-programming-teen-ager-girl-upscaled (1).png'
            alt="post"
            className={style.imgPosted}
          />
       
      </span>
      {/* like comment  */}

      <span className={style.comment}>
        <AiOutlineHeart fontSize={19} className={style.icon} />
        <FaRegCommentDots fontSize={19} className={style.icon} />
        <IoIosSend fontSize={19} className={style.icon} />
      </span>

      {/* comments part  */}
      <span className={style.commentPart}>
       
          <img
            src={profile}
            alt="userPic"
            className={style.commentProfile}
          />
     
        <input
          type="text"
          placeholder="Write your comment"
          className={style.inputComment}
        />
      </span>
    </div>
  );
}

export default SinglePost;
