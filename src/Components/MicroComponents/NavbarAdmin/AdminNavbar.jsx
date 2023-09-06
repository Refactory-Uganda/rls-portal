import styles from "../../../assets/Admisstyles/landing.module.css"

function AdminNavBar(){
    return(
        <>
        <div className="bg-white border-solid border-purple border-1 sticky top-0 md:fixed top-0 left-0" id={styles.NavAdmin}>
            <div className=" bg-purple p-2 flex justify-between" id={styles.logo} >
                    <div className="innerlogo bg-bluegreen w-10 rounded-5sm ">
                        <img src="/img/logosmall.svg" alt="" />
                    </div>
                    <div className="DropdowmIcons p-2 md:hidden">
                            <img src="/img/more.svg" alt="" />
                    </div>
            </div>
            <div className="   bg-grey md:flex flex-col " id={styles.icons}>
             <a href="" className=" bg-darkpurple p-2 m-auto my-2 rounded-1sm">
                <img src="/img/person.svg" alt="" />
             </a>
             <a href="" className="bg-darkpurple p-2 m-auto my-2 rounded-1sm">
                <img src="/img/school.svg" alt="" />
             </a>
             <a href="" className="bg-darkpurple p-2 m-auto my-2 rounded-1sm">
                <img src="/img/group.svg" alt="" />
             </a>
             <a href=" " className="bg-darkpurple p-2 m-auto my-2 rounded-1sm">
                <img src="/img/book.svg" alt="" />
             </a>
            </div>
            
        </div>
         
        </>
    )
}
export default AdminNavBar