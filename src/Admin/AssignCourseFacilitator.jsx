import AdminNacHeader from "../Components/AdminNacHeader";


const AssignCourseFacilitator = () => {
    return (
        <>
        <AdminNacHeader label=' Assign Course Facilitator' />
            <input type="text" placeholder="SELECT COURSE" />
            <input type="text" placeholder="SELECT FACILITATOR" />
            <button>Save</button>
           
        </>
    );
}

export default AssignCourseFacilitator;
