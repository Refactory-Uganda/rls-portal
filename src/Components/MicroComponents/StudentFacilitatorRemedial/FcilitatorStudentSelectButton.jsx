

function FacilitatorStudentSelectButton(props){
   return(
        <>
        <div onClick={props.onClick} className={`flex flex-row gap-2 rounded-0.5sm px-3 py-2 h-[50px] w-[90%] mx-auto my-3  shadow-sm bg-slate  hover:bg-purple hover:text-white  ${props.class}`}>
            <input type="checkbox" name="" id="" onChange={props.onChange} onClick={props.onClick} className="form  h-7 w-7 text-bluegreen"/>
            <p className=" text-center text-lg m-0">{props.text}</p>
        </div>
        </>
    )
}
export default FacilitatorStudentSelectButton