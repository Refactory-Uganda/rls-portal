import { Link } from "react-router-dom"


const NoData = () => {
  return (
<>
    
    <div className="mx-auto w-full max-w-7xl  px-4 py-12 text-center">
      <h2 className="mx-auto mb-6 max-w-3xl flex-col text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12"> <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c361_Online_math_tutoring.svg" alt="" className="inline-block" /></h2>
      <p className="mx-auto mb-6 max-w-xl text-sm text-[#636262] sm:text-base md:mb-12">No Course Created yet, You can get started  with a click of the button</p>
      <Link to="/admin/addcourse" className="mb-4 inline-block items-center bg-purple px-6 py-3 text-center font-semibold text-white">Create Course</Link>
      
    </div>
  
</>
  )
}

export default NoData