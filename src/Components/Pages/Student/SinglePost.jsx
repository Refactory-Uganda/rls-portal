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
      <span className="w-full object-cover px-5 my-4">
       
          <img
            src=''
            alt="post"
            className="w-full h-1/2 object-cover rounded-2xl"
          />
       
      </span>
      {/* like comment  */}

      <span className="w-full flex items-center justify-start text-white px-5 my-1 border-b border-gray-700 py-3">
        <AiOutlineHeart fontSize={19} className="mx-2 cursor-pointer" />
        <FaRegCommentDots fontSize={19} className="mx-2 cursor-pointer" />
        <IoIosSend fontSize={19} className="mx-2 cursor-pointer" />
      </span>

      {/* comments part  */}
      <span className="w-full px-1 py-2 flex items-center justify-center">
       
          <img
            src=''
            alt="userPic"
            className="lg:w-10 lg:h-10 w-8 h-8 rounded-2xl object-cover border-2 border-gray-500 cursor-pointer"
          />
     
        <input
          type="text"
          placeholder="Write your comment"
          className="w-5/6 mx-4 text-gray-200 outline-none bg-black/20 h-9 rounded-lg text-sm px-3 placeholder:text-gray-600"
        />
      </span>
    </div>
  );
}

export default SinglePost;
