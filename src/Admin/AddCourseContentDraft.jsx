import ContentEditable from 'react-contenteditable';
import style from './AddCourseContentDraft.module.css';
import {FaEllipsisV} from 'react-icons/fa';
import { useState } from 'react';
import Navbar from '../Components/MicroComponents/Navbar/Navbar';



const AddCourseMaterial = () => {
  const [showIcons, setShowIcons] = useState(false);
    const toggleIcons = () => {
        setShowIcons(!showIcons);
      };
    const [content, setContent] = useState('Input content here');

  function handleChange(event) {
    setContent(event.target.value);
  }
         
  return (
    <>
    {/* <Navbar label={'ADD COURSE CONTENT'}/> */}
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
        <button className={style.button6}>text</button>
        <button className={style.button7}>video</button>
        <button className={style.button7}>image</button>
        <button className={style.button7}>slide</button>
        <img src='/images/drive.png' alt='logo' className={style.img}/>
        <button className={style.button6}>Save</button>
        <button className={style.button7}>Reset</button>
    </div>
    <div >
      <div className={style.content}>
          <button className={style.button6}>CANCEL</button>
          <button className={style.button7}>DELETE</button>
          <FaEllipsisV className={`${showIcons ? 'active' : ''}`} onClick={toggleIcons} />
      </div>
      
      <div className={style.btns}>
      <ContentEditable html={content} onChange={handleChange} className={style.element}  />
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default AddCourseMaterial