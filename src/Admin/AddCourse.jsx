
import stlye from './AddCourse.module.css'
const AddCourse = () => {
    return (
        <div className={stlye.addCourse}>
             <div className={stlye.header}>
            <h3 className={stlye.header__content}>ADD COURSE CONTENT</h3>
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

<button className={stlye.button} >Save</button>
            
        </div>
    );
}

export default AddCourse;
