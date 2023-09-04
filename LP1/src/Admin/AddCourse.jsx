import ButtonAddContent from "../Components/AddCourseContentButton";
import stlye from './AddCourse.module.css'
const AddCourse = () => {
    return (
        <div className={stlye.AddCourse}>
             <div className={stlye.header}>
            <h3>ADD COURSE CONTENT</h3>
            </div> 
            <input type="text"   className={stlye.AddCourse__input} placeholder="COURSE NAME"/>
            <input type="text" 
            className={stlye.AddCourse__input} 
            placeholder="COURSE DISCRIPTION"/>
            <input type="text" 
            className={stlye.AddCourse__input} 
            placeholder="COURSE DISPLAY ICON"/>
            <input type="text" 
          className={stlye.AddCourse__input}
            placeholder="COURSE DURATION"/>
<ButtonAddContent backgroundColor="#693769ff" label="Save" borderColor="#693769ff" contentColor="white" />

            
        </div>
    );
}

export default AddCourse;
