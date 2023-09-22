import style from "./Chatgptdash.module.css"

function Chat(){
    return(
        <>
        <div className="main h-screen" id={style.main}>
            <div className="navbarchat bg-black pt-4 " id={style.navbarchat}>
                <div className="div hidden  " id={style.div}>
                <div className="New w-[70%] p-2 text-white m-auto flex justify-between " id={style.new}> New chat <small>+</small></div>
                </div>
               
            </div>
            <div className="viewcontainer" id={style.viewcontainer}>
                <div className="veiwwrapper overflow-y-scroll">container</div>
                <div className="inputfeild bg-menuwhite p-3 ">
                    <form action="" className="w-[100%] m-auto flex flex-row justify-around md:[90%] lg:[80%]">
                        
                        <input className="inputdash w-[70%] h-[50px]" type="text" id={style.inputdash} />
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Chat