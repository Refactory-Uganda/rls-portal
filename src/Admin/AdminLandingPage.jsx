
// importing react reactor dom
// importing section compontents
import { Outlet } from "react-router-dom"
import Nav from "../Components/MicroComponents/NavbarAdmin/AdminNavbar"
import styles from "./AdminLandingPage.module.css"
function Admin(){
    return(
        <>
        <div className={styles.AdminDashBoard}>
            {/* the navbar selection is to be arranged here */}
            <Nav/>
            {/* the view content section tis to arranged here the router element*/}

            <div className={styles.ViewContainer}>
                <Outlet/>
            <div className={styles.ChartandNotifications}>2</div>
            </div>
            {/* the chart and notification content is to arranged here */}
            
        </div>

        </>
    )
}
export default Admin