import style from './AddCourseMaterialField.module.css';
import { Link } from 'react-router-dom';



const AddCourseMaterialField = () => {
        
  return (
    <>
    {/* <Navbar label={'ADD COURSE MATERIAL'} /> */}
    <div className={style.body}>
      
    <div className={style.box}>
    <button className={style.button}><Link to='/admin/addcoursematerial' style={{color:'white'}}>CONTENT</Link></button>
      <button className={style.button2}><Link to='/admin/AddCourseMaterialField' style={{color:'white'}}>TOPICS</Link></button>
      <button className={style.button}><Link to='/admin/AddCourseMaterialDaft' style={{color:'white'}}>MATERIAL</Link></button>
  </div>
  <hr className={style.hr}/>
  <div className={style.box}>
      <button className={style.button3}>Edit</button>
      <button className={style.button4}>ADD</button>
      <button className={style.button3}>PREVIEW</button>
  </div>
  <div className={style.container}>
    <div  className={`${style.textBtn} `}>
        <button className={style.button6}>text</button>
        <button className={style.button7}>video</button>
        <button className={style.button7}>image</button>
        <button className={style.button7}>slide</button>
        <img src='/images/drive.png' alt='logo' className={style.img}/>
        <button className={style.button6}>Save</button>
        <button className={style.button7}>Reset</button>
    </div>
      <div className={style.btns}>
            <input type="text" placeholder="SELECT COURSE"  className={style.input}/>
            <input type="text" placeholder="SELECT FACILITATOR" className={style.input} />
            <textarea rows="9" placeholder="ADD FILE DESCRIBTION" className={style.textarea} />
            
      </div>
  
  </div>
    </div>
    </>
  )
}

export default AddCourseMaterialField