import React from 'react'
import ProfileCom from '../Components/Pages/Student/ProfileCom'
import SkillCom from '../Components/Pages/Student/SkillCom'
import NewpostUploader from '../Components/Pages/Student/NewpostUploader'
import style from './forum.module.css'
export default function Forum() {
  return (
     <div className={style.container}>
     {/* Left side components */}

     <div className={style.left}>
       <ProfileCom />
       <SkillCom
       />
       <h1>left side of things</h1>
     </div>

     {/* Center side components */}

     <div className={style.main}>
       <NewpostUploader/>
       <h1>Main Section</h1>
       {/* <Post/> */}
     </div>

     {/* Right side components */}

     <div className={style.right}>
       {/* <Recent /> */}
       <h1> Right side OF things</h1>
     </div>
   </div>
  )
}
