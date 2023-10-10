
import  {useEffect } from 'react'; // Ensure you import React and useEffect

import styles2 from '../../assets/Landingpagestlyes/styles.module.css'
// ....................the technology icons and partners...........................
import imgdata from "../../assets/images.json"
import partners from "../../assets/partners.json"

// ....................caroseul partners...........................
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//  .............................the footer........................
import Footer from '../MicroComponents/footer/Footer';
import Navbar from '../MicroComponents/LandingNav/nav'
import Journey from '../MicroComponents/journeys/Journey';

import demo from "./demo.json";
import demoForum from "./demoForum.json"


function Landing() {
  useEffect(() => {
    let speed = 50;
    let message =
      "Unleash Your Potential! Dive into a world of endless knowledge and discovery. Every lesson is a step towards success. Embrace challenges, seek understanding, and let curiosity be your guide. Your journey starts now. Seize the opportunity, and let's make learning an adventure together!";
    let textposition = 0;

    const interval = setInterval(() => {
      document.querySelector('.message').innerHTML = message.substring(0, textposition);
      if (textposition !== message.length) {
        textposition++;
      } else {
        clearInterval(interval); // Clear the interval when text is fully displayed
      }
    }, speed);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
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
    
   <Navbar/> 
   
    <div className="w-[90%] m-auto md:grid grid-cols-2" id={styles2.heading}>
        <div  id={styles2.h1}>
          <h1 id={styles2.headingH1}>Embrace growth, explore passions, and unlock your full learning potential!</h1>
        </div>
        <div className="md:pt-20">
        <div className="div" id={styles2.glow}>
          <h3 className="message" id={styles2.h3}></h3>
        </div>
        </div>
      </div>
      
      <div className="courses">
        <h1 className='text-center '> Platform Courses</h1>
        <div className="coursewrapper w-[90%] m-auto  md:grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
          {
            demo.map((data)=>(
              <div key={data.id} className="course my-3 rounded-1sm  flex flex-col justify-between " id={styles2.coursecard}>
                <div className="div">
                <div className=" border-solid  w-[100px] m-auto">
                <img src={data.img} className='w-[100px] m-auto py-10  ' alt="" />
                </div>
                <h4 className='text-center text-white bg-bluegreen p-3 font-bold'>{data.tittle}</h4>
                <p className='text-left text-lg p-2'>{data.description}</p>
                </div>
                
                <div className="flex flex-wrap justify-center ">
                    <button className='flex border-hidden border-2 my-2 mx-1 text-purple p-1' id={styles2.buttunsvg}><svg xmlns="http://www.w3.org/2000/svg" id={styles2.svgbutton} className='fill-bluegreen ' fill="currentColort" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z"/></svg>Enroll</button>
                    <button className='flex my-2 mx- rounded-0.5sm text-purple p-1' id={styles2.buttunsvg}><svg xmlns="http://www.w3.org/2000/svg" id={styles2.svgbutton} height="24" className='fill-bluegreen' fill="currentColort" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>View</button>
                    <button className='flex  my-2 mx-1 rounded-0.5sm text-purple p-1 ' id={styles2.buttunsvg}><svg xmlns="http://www.w3.org/2000/svg" id={styles2.svgbutton} height="24" className='fill-bluegreen' viewBox="0 -960 960 960" width="24"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>Mark</button>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="justify-center flex flex-wrap w-[90%] my-20 mx-auto m" id={styles2.marqueecontent}>

      {
        imgdata.map((data)=>(
          <img key={data.id} src={data.src} className='w-20 hover:rotate-6'  alt="" />
        ))
      }
     </div>
      

      <div className="trendingForum">
          <div id={styles2.trendingHeading}>
            <h1 className='text-center m-10 text-bluegreen'>Trending Conversations</h1>
          </div>
          <div className=" grid grid-cols-1 justify-around gap-3 p-3  sm2:grid-cols-2 lg:grid-cols-3 " id={styles2.forums}>
            {
            demoForum.map((forum)=>(
             
                <div className="forum m-auto rounded-lg hover:scale-105 shadow-2xl" key={forum.id} >
                  <span >
                <div className="forum  m-6 my-8" >
                 
                <div className="trendingName">
                  <h5 className='text-center'>{forum.name}</h5>
               </div>
               <div className="div">
                  <p className='text-center font-bolder'>{forum.description.substring(-1,22)}</p>
               </div>
              <div className="trendingRate  flex justify-between max-w-[150px] m-auto">
               {
                Array.from({length:forum.rate},(_,index)=>(
                  <img key={index} src="/img/icons8-star-48.png" className='w-5 m-auto' alt=""/>
                ))
               }
             </div>
           </div>
              </span>
              </div>
            
             
              
              
             
            ))
          }
          
          </div>
         
          
         </div>
         <div className="userStory ">
          <div id="userStoryHeading">
            <h1 className='text-bluegreen text-center mt-20 mb-10'>My Journey With Refactory</h1>
          </div>
          <div className="storys w-[90%] md:w-[70%] m-auto ">
          <Journey/>

            
          </div>
          </div>
      <div className="parterners my-6">
        <h3 className='text-center text-purple p-5'>In parternship with</h3>

        <Carousel 
            responsive={responsive}  
            swipeable={true} 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            className="flex flex-wrap justify-between w-[100%" >
               {
           partners.map((data)=>(
            <img key={data.id} src={data.src} className='w-30 h-20 p-3 hover:scale-110 focus:scale-50' alt="" />
           ))
          }      
        </Carousel>
      </div>
      
      <Footer />
    </>
  );
}

export default Landing;
