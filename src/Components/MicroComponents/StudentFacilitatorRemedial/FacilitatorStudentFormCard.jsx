function FacilitatorStudentFormCard(props){
    return(
        <>
<div className="formCard w-[100%]  rounded-1sm shadow-sm ">
    <div className="header bg-bluegreen flex flex-row gap-3 h-[70px] rounded-t-1sm p-2">
        <div className="img h-[50px] w-[50px]">
            <span><img src={props.img} alt="Prof" className="h-[50px] w-[50px] m-auto" /></span>
        </div>
        <div className="text-lg text-white flex flex-col gap-1">
        <p className="m-0 ">{props.name}</p>
        <p className="m-0 ">{props.tittle}</p>
        </div>
    </div>
    <div className="form w-[100%]">
        <form action=" " className="w-[100%] flex flex-col gap-3 p-4">
            <input type="text" name='courseid' className="hidden" />
            <input type="text" name='studentemail' className="hidden"/>
            <label htmlFor="date">Date of meeting</label>
            <input type="date" name="date" id="date"  className="h-[50px] w-[90%] md:w-[70%] lg:w-[50%] border-2 border-slatedark border-solid rounded-0.5sm  shadow-md hover:border-bluegreen  "/>
            <textarea name="comment" id="" className="w-[100%] border-slatedark border-solid border-2 h-[40vh] rounded-0.5sm p-3 hover:border-bluegreen" placeholder="Breif comment for  request for remedial time. For example : I am reaching out to request some additional guidance on understanding the color wheel concepts covered in our recent session. Unfortunately, I am struggling to grasp the nuances and would greatly appreciate a brief remedial session to help clarify my understanding.

Your expertise and support are highly valued, and I believe this extra time with you will be instrumental in helping me overcome this hurdle.">
                
            </textarea>
            <button type="submit" className=" rounded-0.5sm font-semibold text-white text-lg p-3 w-[100%] md:w-[40%] bg-purple md:bg-bluegreen md:hover:bg-purple">Submit</button>
        </form>
    </div>

</div>
        </>
    )
}
export default FacilitatorStudentFormCard