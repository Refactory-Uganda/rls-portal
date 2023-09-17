
import  {useEffect } from 'react'; // Ensure you import React and useEffect

import styles2 from '../../assets/Landingpagestlyes/styles.module.css'
// ....................the technology icons and partners...........................
import imgdata from "../../assets/images.json"
import partners from "../../assets/partners.json"

//  .............................the footer........................
import Footer from '../MicroComponents/footer/Footer';
import Navbar from '../MicroComponents/LandingNav/nav'

import demo from "./demo.json";
import demoForum from "./demoForum.json"
import demoStory from "./demoUseStory.json"
import trendingcourse from"./demo.trendingcourse.json"

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
      <div className="div my-10 mx-2">
        <h2 className='text-center font-bold text-purple p-5'>Trending Course</h2>
        <div className=" p-3 m-0  justify-center  md3:grid grid-cols-2 gap-4 m-auto rounded-1sm lg:grid-cols-3" id={styles2.trenidngcards}>
          {
           trendingcourse.map((data)=>(
            <div key={data.id} className="  rounded-1ms rounded-1sm flex flex-col justify-between my-2  " id={styles2.trendingcourse}>
              <div className="p-3 pb-0">
              <h6 className='font-bold'>{data.class}</h6>
              <h3 className='font-bold'>{data.tittle}</h3>
              <p>{data.description}</p>
              <div className="flex-col justify-around " >
                    <button className='flex border-hidden border-2 my-2 mx-1 text-purple p-1'><svg xmlns="http://www.w3.org/2000/svg" className='fill-purple' height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z"/></svg>Enroll</button>
                    <button className='flex my-2 mx- rounded-0.5sm text-purple p-1'><svg xmlns="http://www.w3.org/2000/svg" height="24" className='fill-purple' viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>View</button>
                    <button className='flex  my-2 mx-1 rounded-0.5sm text-purple p-1 '><svg xmlns="http://www.w3.org/2000/svg" height="24" className='fill-purple' viewBox="0 -960 960 960" width="24"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>Mark</button>
                  </div>
              </div>
             
              <img src={data.img} className='w-[100%] opacity-50 h-[200px] my-0' id={styles2.imgtrending} alt="" />

            </div>
           )) 
          }
        </div>
      </div>
      <div className="courses">
        <h1 className='text-center '> Platform Courses</h1>
        <div className="coursewrapper w-[90%] m-auto md:grid grid-cols-2 gap-3 lg:grid-cols-4">
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
            <h1 className='text-center m-10 text-bluegreen'>Trending Forums</h1>
          </div>
          <div className=" flex flex-wrap justify-center  h-[400px] overflow-x-scroll " id={styles2.forums}>
            {
            demoForum.map((forum)=>(
              <span key={forum.id} className=' hover:scale-125'>
                <div className="forum  m-6 my-8" >
                 <div className="trendingImage ">
                    <img src={forum.image} className='w-20 h-20 rounded-5sm m-auto' alt="" />
                 </div>
                <div className="trendingName">
                  <h5 className='text-center'>{forum.name}</h5>
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
              
             
            ))
          }
          
          </div>
         
          
         </div>
         <div className="userStory ">
          <div id="userStoryHeading">
            <h1 className='text-bluegreen text-center mt-20 mb-10'>User Story</h1>
          </div>
          <div className="storys md:grid grid-cols-2 ">
            { demoStory.map((story)=>(
                 <div className="m-4 hover:bg-menuwhite" key={story.id} id={styles2.story}>
                 <div className="top sm:flex ">
                   <div className="userImg">
                  <img src={story.image} className="w-10 h-10 rounded-5sm m-auto sm:m-2"  alt="" />
                   </div>
                   <div className="userDetails text-center mb-3 w-full">
                    <h3 className='text-center'>{story.name}</h3>
                    <h4>{story.studentTrack}</h4>
                   </div>
                 </div>
                 <div className="storyDetails">
                   <p className='text-left'>{story.story}</p>
                   <button className='bg-purple px-2 py0.5 m-1 rounded-0.5sm text-center text-white'>Details...</button>
                 </div>
               </div>

            ))
           
          }
            
          </div>
          </div>
      <div className="parterners my-6">
        <h3 className='text-center text-purple p-5'>In parternship with</h3>
        <div className="flex flex-wrap justify-center">
          {
           partners.map((data)=>(
            <img key={data.id} src={data.src} className='w-30 h-20 p-3 hover:scale-110 focus:scale-50' alt="" />
           ))
          }
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Landing;
