import style from './AddFacilitar.module.css'
const AddFacilitator = () => {
    return (
        <div className={style.addFacillitator}>
        <div className={style.header}>
       <h3>ADD FACILITATOR</h3>
       </div> 
       <input type="text"  
          className={style.input}  
        
        placeholder="USER NAME"/>
       <input type="text" 
         className={style.input}  
       placeholder="COURSE NAME "/>
     
<button className={style.button}>Save</button>

       
   </div>
    );
}

export default AddFacilitator;
