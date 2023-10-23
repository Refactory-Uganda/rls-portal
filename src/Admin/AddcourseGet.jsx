import { Link } from "react-router-dom"


const AddcourseGet = () => {
  return (
    <div>
            <section
  id="features"
  className="container mr-10 ml-10 px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10 rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200"
>
  <div className="mx-auto flex max-w-[58rem] flex-col  space-y-4 text-start">
    <h3 className="font-bold text-xl flex leading-[1.1] sm:text-3xl md:text-6xl ">
      Topic: <img src="/img/icons8-vue-js.svg" className="w-[5rem]" alt="" /><span className="text-4xl pt-[30px]">Vue</span>
    </h3>
    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
      <span className="text-3xl font-bold">Description: </span>The product can personalize user experiences by understanding individual
      preferences and tailoring recommendations or content based on user
      behavior and historical data.
    </p>
    <p className="text-2xl"><span className="text-3xl font-bold">Duration:   </span>2hrs</p>
    <p className="text-2xl"><span className="text-3xl font-bold">  Content:    </span><button className='bg-bluegreen text-white p-2 rounded-0.5sm'><Link to='/admin/addcoursematerial' className="no-underline text-white">Add Content</Link></button></p>
   
  </div>
  
</section>

    </div>
  )
}

export default AddcourseGet