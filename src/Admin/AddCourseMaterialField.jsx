
import Navbar from '../Components/MicroComponents/Navbar/Navbar';
import style from './AddCourseMaterialField.module.css';



const AddCourseMaterialField = () => {
 
         
  return (
    <>
    {/* <Navbar label={'ADD COURSE MATERIAL'} /> */}
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
            <button className={style.button9}>Submit </button>
            
      </div>
  
  </div>
    </div>
    </>
  )
}

export default AddCourseMaterialField