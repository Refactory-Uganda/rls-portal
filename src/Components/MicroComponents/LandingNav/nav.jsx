import {useState} from "react"
import styles from "../../../assets/Landingpagestlyes/Landingpage.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import demo from "../../Pages/demo.json";



const Navbar = () => {
    const [toggle, setToggle]=useState(false)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    

 
  return (
   <>
      <div className="topNav  flex flex-row justify-between ">
          <div className="logo bg-white">
            <img
              src="/img/refactoryLogoColored.png"
              alt="Refactory Ugnada"
              className="w-40 mx-auto p-3"
            />
          </div>
          <div   className={`${toggle ? "absolute top-[4.5rem]  drop-shadow-2xl block z-40 bg-white  text-center":"hidden" } md:flex flex-row justify-between md:static top-4 md:drop-shadow-none`} >
            <div className="p-3">
            <p>Home</p>
            </div>
          <div className="p-3">
          <p>Help</p>
          </div>
          <div className="p-3">
          <p>Login</p>
            </div>
            
           
          </div>
           {/* the icon that is supposed to bring the drop menu */}
           <div className="menu p-4 md:hidden ">
               <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{!toggle ? setToggle(true):setToggle(false)}}  height="24" className='md:fill-white' viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> 
              </div>
        </div>
        <div className="bottomNav sticky top-0 z-10  md:grid grid-cols-2 gap-10 justify-between bg-purple">
          <div className="bg-purple  h-[70px] p-3 ">
            <Carousel 
            responsive={responsive}  
            swipeable={true} 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            className="flex flex-wrap justify-between w-[100%" >
               {demo.map((data) => (
                <div className="text-center m-1 bg-white py-1 h-[35px] rounded-0.5sm" key={data.id}>
                  <p className="m-0  text-purple text-xs py-1 sm:text-sm  ">{data.name}</p>
                </div>
              ))}
           </Carousel>
           
          </div>
            <div className="flex justify-between   bg-menuwhite md:bg-purple " id={styles.searchbar}>
                
              <div className="p-1.5  flex flex-row m-auto w-[100%] md:justify-end ">
              <input type="text" className=" input border-solid  border-bluegreen border-2 rounded-0.5sm w-[90%] lg:w-[50%]   " />
              <div className=" py-1.5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24"  className='md:fill-white' id={styles.dropNavIcon} viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              </div>
              </div>
              

      
              
            </div>
      </div>
     
   </>
  );
};

export default Navbar;