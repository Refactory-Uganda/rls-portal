
import Button from '../Components/Button';
import style from './AddCourseContent.module.css';
import {FaEllipsisV} from 'react-icons/fa';
import { useState } from 'react';


const AddCourseContent = () => {
  const [showIcons, setShowIcons] = useState(false);
    const toggleIcons = () => {
        setShowIcons(!showIcons);
      };

         
  return (
    <>

    <div className={style.body}>
    <div className={style.box}>
      <button className={style.button2}>CONTENT</button>
      <button className={style.button}>DETAILS</button>
      <button className={style.button}>ENROLLED</button>
  </div>
  <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
  <div className={style.box}>
      <button className={style.button3}>DRAFT</button>
      <button className={style.button3}>ADD</button>
      <button className={style.button4}>ADDED</button>
  </div>
  <div className={style.container}>
    <div  className={`${style.textBtn} ${showIcons ? '' : style.iconsHidden}`}>
        <Button name='text' pr={20} pl={20} padding={'8px'}  borderRadius={8} mb={"12px"} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} size={'10px'} mr={'4px'} />  
        <Button name='video' pr={18} pl={18} padding={'8px'} borderRadius={8} mb={"12px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        <Button name='image' pr={18} pl={18} padding={'8px'} borderRadius={8} mb={"12px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        <Button name='slide' pr={20} pl={20} padding={'8px'} borderRadius={8} mb={"12px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
    </div>
    <div >
      <div className={style.content}>
          <h2 className={style.text}>SELECT CONTENT TO EDIT</h2>
          <FaEllipsisV className={`${showIcons ? 'active' : ''}`} onClick={toggleIcons} />
      </div>
      
      <div className={style.btns}>
          <button className={style.button5}>PRINCIPLE OF DESIGN PATTERN</button>
          <button className={style.button5}>CORE PART OF DESIGN PATTERN</button>
          <button className={style.button5}>THE HARD PART OBJECT</button>
          <button className={style.button5}>WORKING WITH CLASSES</button>
          <button className={style.button5}>BENEFIT OF OBJECT ORIENTED JS</button>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default AddCourseContent