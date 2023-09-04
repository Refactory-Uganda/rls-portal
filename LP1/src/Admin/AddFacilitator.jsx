
import ButtonAddContent from '../Components/AddCourseContentButton';
import style from './AddFacilitar.module.css'
const AddFacilitator = () => {
    return (
        <div className={style.AddFacilitator}>
        <div className={style.header}>
       <h3>ADD FACILITATOR</h3>
       </div> 
       <input type="text"  
          className={style.input}  
        
        placeholder="USER NAME"/>
       <input type="text" 
         className={style.input}  
       placeholder="COURSE NAME "/>
     
<ButtonAddContent backgroundColor="#693769ff" label="Save" borderColor="#693769ff" contentColor="white" />

       
   </div>
    );
}

export default AddFacilitator;
