
// importing react reactor dom
// importing section compontents
import { Outlet } from "react-router-dom"
import styles from "./AdminLandingPage.module.css";
import Navbar from '../Components/MicroComponents/NewNav/navBar.jsx'
import PieChart from "../Components/MicroComponents/PieChart/PieChart";
function Admin(){
    return(
        <>
        <div className={styles.AdminDashBoard}>
            {/* the navbar selection is to be arranged here */}
            <Navbar />
            {/* the view content section tis to arranged here the router element*/}

            <div className={styles.ViewContainer}>
                <Outlet/>
            <div className={styles.ChartandNotifications}>
                <PieChart />
            </div>
            </div>
            {/* the chart and notification content is to arranged here */}
            
        </div>

        </>
    )
}
export default Admin