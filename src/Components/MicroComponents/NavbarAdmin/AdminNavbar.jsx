import styles from "../../../assets/Admisstyles/Adminlanding.module.css"
import {Link} from "react-router-dom"

function AdminNavBar(){
    return(
        <>
        <div className="bg-grey border-solid border-left-purple border-1 sticky top-0 md:fixed top-0 left-0" id={styles.NavAdmin}>
            <div className=" bg-purple p-2 flex justify-between" id={styles.logo} >
                    <div className=" bg-bluegreen w-10 rounded-5sm" id={styles.innerlogo}>
                        <img src="/img/logosmall.svg" alt="" />
                    </div>
                    <div className="DropdowmIcons p-2 md:hidden">
                            <img src="/img/more.svg" alt="" />
                    </div>
            </div>
            <div className="md:flex flex-col justify-around m-0 w-[100%]" id={styles.icons}>
             <Link href="" className="px-1 py-2 flex m-1 rounded-0.5sm  " id={styles.Navicons}>
                <img src="/img/person.svg" alt="" />
                <p  className="text-white m-0 px-1 hidden " id={styles.NavText}>Account</p>
             </Link>
             <Link href="" className="px-1 py-2 hover:bg-white flex m-1 rounded-0.5sm  " id={styles.Navicons}>
                <img src="/img/school.svg" alt="" />
                <p className="text-white m-0 px-1 hidden "  id={styles.NavText}>Student</p>
             </Link>
             <Link to="/admin/coursecontent" className="px-1 py-2 hover:bg-white flex m-1 rounded-0.5sm  " id={styles.Navicons}>
                <img src="/img/group.svg" alt="" />
                <p className="text-white m-0 px-1 hidden "  id={styles.NavText}>Facilitator</p>
             </Link>
             <Link href=" " className="px-1 py-2 hover:bg-white flex m-1 rounded-0.5sm  " id={styles.Navicons}>
                <img src="/img/book.svg" alt="" />
                <p className="text-white  px-1 hidden md:m-0 "  id={styles.NavText}>Courses</p>
             </Link>
            </div>
            
        </div>
         
        </>
    )
}
export default AdminNavBar