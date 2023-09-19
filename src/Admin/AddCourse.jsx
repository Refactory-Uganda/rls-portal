
import Navbar from '../Components/MicroComponents/Navbar/Navbar';
import stlye from './AddCourse.module.css'
const AddCourse = () => {
    return (
        <>
        {/* <Navbar label='ADD COURSE CONTENT'/> */}
        <div className={stlye.addCourse}>
            <hr style={{background: '#693769', color:"#693769", borderColor: '#693769',height: '3px', width: '100%',marginTop:'3rem', marginBottom:'2rem'}}/>
           <form className={stlye.form}>
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
           </form>
        <button className={stlye.button} >Save</button>   
        </div>
        </>
    );
}

export default AddCourse;
