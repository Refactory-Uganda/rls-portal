import AdminNacHeader from '../Components/AdminNacHeader';
import style from './AddFacilitar.module.css'
const AddFacilitator = () => {
    return (
        <div className={style.addFacillitator}>

       <AdminNacHeader label='ADD FACILITATOR'/>
      <form className={style.form}>

      <input type="text"  
          className={style.input}  
        
        placeholder="USER NAME"/>
       <input type="text" 
         className={style.input}  
       placeholder="COURSE NAME "/>
     
<button className={style.button}>Save</button>
      </form>

       
   </div>
    );
}

export default AddFacilitator;
