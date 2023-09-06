
// importing react reactor dom
// importing section compontents
import Nav from "../Components/MicroComponents/NavbarAdmin/AdminNavbar"
import styles from "./AdminLandingPage.module.css"
function Admin(){
    return(
        <>
        <div className={styles.AdminDashBoard}>
            {/* the navbar selection is to be arranged here */}
            <Nav/>
            {/* the view content section tis to arranged here the router element*/}

            <div className={styles.ViewContainer}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum odit qui eligendi enim commodi itaque esse dignissimos aut officiis.
            <div className={styles.ChartandNotifications}>2</div>
            </div>
            {/* the chart and notification content is to arranged here */}
            
        </div>

        </>
    )
}
export default Admin