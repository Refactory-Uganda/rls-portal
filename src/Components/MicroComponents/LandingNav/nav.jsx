import {useState} from "react"
import styles from "../../../assets/Landingpagestlyes/Landingpage.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import demo from "../../Pages/demo.json";
import { Link } from "react-router-dom";  



const Navbar = () => {
    const [toggle, setToggle]=useState(false)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 725 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 725, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
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
            <div className="p-3 flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> 
            <p>Home</p>
            </div>
          <div className="p-3 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
          <p>Help</p>
          </div>
          <Link to="/login" className="no-underline text-black">
          <div className="p-3 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
          <p className="">Login</p>
            </div>
            </Link>
           
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
            customTransition="all 1s"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            containerClass="carousel-container"
            className="flex flex-wrap justify-between w-[100%" >
               {demo.map((data) => (
                <div className="text-center m-1 bg-white py-1 px-2 h-[35px] rounded-0.5sm flex " key={data.id}>
       
       <img src={data.img} className=" hidden lg:block w-10 h-7" alt="" />
                  <p className="m-0  text-purple text-xs py-1 sm:text-sm  ">{data.name}</p>
                 
                </div>
              ))}
           </Carousel>
           
          </div>
            <div className="flex justify-between   bg-menuwhite md:bg-purple " id={styles.searchbar}>
                
              <div className="p-1.5  flex flex-row m-auto w-[100%] md:justify-end ">
              <input type="text" className=" input border-solid  border-bluegreen border-2 rounded-0.5sm w-[90%] lg:w-[50%] p-2 text-center   "  placeholder="Search for a course"/>
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