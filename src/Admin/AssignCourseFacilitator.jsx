import AdminNacHeader from "../Components/AdminNacHeader";
import style from "./AssignCourseFacilitator.module.css";

const AssignCourseFacilitator = () => {
    return (
        <>
    <div className={style.assignCourseFacilitator}>
    <AdminNacHeader label=' Assign Course Facilitator' />
            <input type="text" placeholder="SELECT COURSE"  className={style.input}/>
            <input type="text" placeholder="SELECT FACILITATOR" className={style.input} />
            <button className={style.button}>Save</button>
    </div>
           
        </>
    );
}

export default AssignCourseFacilitator;
