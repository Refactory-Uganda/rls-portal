
import style from './AddCourse.module.css'
const AddCourse = () => {
    return (
        <>
        {/* <Navbar label='ADD COURSE CONTENT'/> */}
        <div className={style.addCourse}>
           
           <form className={style.form}>
           <div className={style.btn}>
      <label className={style.label}> Course Name</label>
      <input type="text"  
          className={style.input}  
        placeholder="ADD Course Name"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Image</label>
        <input type="file"  
          className={style.input}  
        
        placeholder="ADD Course Icon"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Course Description</label>
        <input type="text"  
          className={style.input}  
        placeholder="ADD COURSE DISCRIPTION"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>COURSE DURATION</label>
        <input type="time"  
          className={style.input}  
        
        placeholder="ADD COURSE DURATION"/>
      </div>
      <button className={style.button} >Save</button>   
    </form>
        
        </div>
        </>
    );
}

export default AddCourse;
