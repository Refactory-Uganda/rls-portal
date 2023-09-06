
import AdminNacHeader from '../Components/AdminNacHeader';
import stlye from './AddCourse.module.css'
const AddCourse = () => {
    return (
        <div className={stlye.addCourse}>
            <AdminNacHeader label='ADD COURSE CONTENT'/>
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

<button className={stlye.button} >Save</button>
            
        </div>
    );
}

export default AddCourse;
