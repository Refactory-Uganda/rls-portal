
import ButtonAddContent from '../Components/AddCourseContentButton';

const AddFacilitator = () => {
    return (
        <div className="AddCourse">
        <div className="header">
       <h3>ADD FACILITATOR</h3>
       </div> 
       <input type="text"   className="AddCourse__input" placeholder="USER NAME"/>
       <input type="text" 
       className="AddCourse__input" 
       placeholder="COURSE NAME "/>
     
<ButtonAddContent backgroundColor="#693769ff" label="Save" borderColor="#693769ff" contentColor="white" />

       
   </div>
    );
}

export default AddFacilitator;
