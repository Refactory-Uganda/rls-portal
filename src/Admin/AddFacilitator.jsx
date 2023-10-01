
import style from './AddFacilitar.module.css'
const AddFacilitator = () => {
    return (
      <>
      {/* <Navbar label={'Add Facilitator'} /> */}
      <div className={` ${style.addFacillitator}`}>
       
      <form className={style.form}>
      <div className={style.btn}>
      <label className={style.label}>Name</label>
      <input type="text"  
          className={style.input}  
        
        placeholder="ADD NAME"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Image</label>
        <input type="file"  
          className={style.input}  
        
        placeholder="ADD IMAGE"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Role:</label>
        <input type="text"  
          className={style.input}  
        
        placeholder="ADD ROLE"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Email</label>
        <input type="email"  
          className={style.input}  
        
        placeholder="ADD EMAIL"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>ID</label>
        <input type="TEXT"  
          className={style.input}  
        
        placeholder="ADD ID"/>
      </div>
      <div className={style.btn}>
        <label htmlFor="" className={style.label}>Course</label>
        <input type="text" 
         className={style.input}  
       placeholder="COURSE NAME "/>
      </div>
     <button className={style.button}>Save</button>
      </form>

       
   </div>
      </>
       
    );
}

export default AddFacilitator;
