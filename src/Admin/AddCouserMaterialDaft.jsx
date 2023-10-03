import ContentEditable from 'react-contenteditable';
import style from './AddCouserMaterialDaft.module.css';
import {FaEllipsisV} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const AddCouserMaterialDaft = () => {
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
    <button className={style.button}><Link to='/admin/addcoursematerial' style={{color:'white'}}>CONTENT</Link></button>
      <button className={style.button}><Link to='/admin/AddCourseMaterialField' style={{color:'white'}}>TOPICS</Link></button>
      <button className={style.button2}><Link to='/admin/AddCourseMaterialDaft' style={{color:'white'}}>MATERIAL</Link></button>
  </div>
  <hr className={style.hr}/>
  <div className={style.box}>
      <button className={style.button3}>EDIT</button>
      <button className={style.button4}>ADD</button>
      <button className={style.button3}>PREVIEW</button>
  </div>
  <div className={style.container}>
    <div  className={`${style.textBtn} ${showIcons ? '' : style.iconsHidden}`}>
        <button className={style.button6}>text</button>
        <button className={style.button7}>video</button>
        <button className={style.button7}>image</button>
        <button className={style.button7}>slide</button>
       
        <button className={style.button8}>Save</button>
        <button className={style.button7}>Reset</button>
    </div>
    <div >
      <div className={style.content}>
      <img src='/images/drive.png' alt='logo' className={style.img}/>
          <button className={style.button9  }>CANCEL</button>
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

export default AddCouserMaterialDaft;