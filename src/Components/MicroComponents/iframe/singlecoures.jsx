export default function  SinglecourseIframe(props){
    return(
        <>
        <div className="div">
        <iframe src={props.video} className="w-[90%] h-[90%]"></iframe>
        </div>
      
        </>
    )
}