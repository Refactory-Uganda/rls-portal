import style from "./AdminProfile.module.css"

function Profile(){
    return(
        <>
       <div className="form  m-auto">
       <img  src='/images/profile.jpg' className={style.img}/>
        <form action="" className="flex flex-col  bg-white mt-5 p-4 rounded-1sm" id={style.form}>
            <label htmlFor="username" className="mt-2">Name</label>
            <input type="text" id="username" className={`${style.input} h-[50px] p-3 mt-2`}/>
            <label htmlFor="password" className="mt-2" >Password</label>
            <input type="text" id="password"className={`${style.input} h-[50px] p-3  `}/>
            <label htmlFor="role" className="mt-2">Role</label>
            <input type="text" id="role"className={`${style.input} h-[50px] p-3  `}/>
            <label htmlFor="id" className="mt-2">ID</label>
            <input type="text" id="id"className={`${style.input} h-[50px] p-3  `}/>
            <button type="submit" className="bg-bluegreen p-2 w-[100px] m-auto mt-5 rounded-1sm">Save</button>
        </form>
       </div>
        </>
    )
}
export default Profile