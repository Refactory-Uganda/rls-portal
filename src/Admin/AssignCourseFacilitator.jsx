import Navbar from "../Components/MicroComponents/Navbar/Navbar";
import style from "./AssignCourseFacilitator.module.css";

const AssignCourseFacilitator = () => {
    return (
        <>
        {/* <Navbar label=' Assign Course Facilitator' /> */}
    <div className={style.assignCourseFacilitator}>
    <hr style={{background: '#693769', color:"#693769", borderColor: '#693769',height: '3px', width: '100%',marginTop:'3rem', marginBottom:'2rem'}}/>
            <input type="text" placeholder="SELECT COURSE"  className={style.input}/>
            <input type="text" placeholder="SELECT FACILITATOR" className={style.input} />
            <button className={style.button}>Save</button>
    </div>    
        </>
    );
}

export default AssignCourseFacilitator;
