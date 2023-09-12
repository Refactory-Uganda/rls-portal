import { useEffect,useState } from 'react'
import styles from "../../assets/Landingpagestlyes/Landingpage.module.css"
// ....................the technology icons and partners...........................
import imgdata from "../../assets/images.json"
import partners from "../../assets/partners.json"

//  .............................the footer........................
import Footer from '../MicroComponents/footer/Footer';

import demo from "./demo.json";
import demoForum from "./demoForum.json"
import demoStory from "./demoUseStory.json"



function Landing() {

const [dropdwon,setdropdown]=useState( )
useEffect(()=>{})
  return (
    <>
   
      <div className="main">
        <div className="topNav  md:flex flex-row justify-between">
          <div className="logo bg-white">
            <img
              src="/img/refactoryLogoColored.png"
              alt="Refactory Ugnada"
              className="w-40 mx-auto p-3"
            />
          </div>
          <div   className=' hidden bg-white md:flex flex-row justify-between' id={styles.navicons}>
            <div className="p-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
            </div>
            <div className="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440h80v-200h-80v200Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
          </div>
          <div className="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
          </div>
          <div className="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
            </div>
            
           
          </div>
        </div>
        <div className="bottomNav sticky top-0 z-10  md:grid grid-cols-2 gap-10 justify-between bg-purple">
          <div className="bg-purple  h-10 " id={styles.courseGallary}>
            <div className="text-center p-2 ">
            <button className="  rounded-5sm h-5 w-5 bg-black  mx-auto my-1 p-0.2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 -960 960 960"
              >
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
              </svg>
            </button>
            
            </div>
            
            <div className="gallary flex flex-row justify-around overflow-x-auto overflow-y-hidden ">
              {demo.map((data) => (
                <div className="mx-1 my-2 bg-white  h-6 w-35 rounded-0.5sm justify-" key={data.id}>
                  <p className="text-purple  text-sm px-2 py-0.5 ">{data.name}</p>
                </div>
              ))}
            </div>
            <div className="text-center p-2">
            <button className=" rounded-5sm h-5 w-5 bg-black  mx-auto my-1 p-0.2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 -960 960 960"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </button>
            
            </div>
           
          </div>
            <div className="flex justify-between   bg-menuwhite md:bg-purple " id={styles.searchbar}>
              <div className="p-1.5  flex flex-row ">
              <input type="text" className=" input border-solid  border-bluegreen border-2 rounded-0.5sm w-32 sm:w-auto" />
              <div className=" py-1.5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24"  className='md:fill-white' id={styles.dropNavIcon} viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              </div>
              </div>

       {/* the icon that is supposed to bring the drop menu        */}
              <div className="menu p-2 md:hidden ">
               <svg xmlns="http://www.w3.org/2000/svg"  height="24" className='md:fill-white' viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> 
              </div>
            </div>
      </div>
          <div id={styles.wrapper}>
            <div className="innerwrapper backdrop-blur-sm bg-purple/60">
            <div className="coursewrapper py-1 sm2:grid grid-cols-2 md:flex flex-col lg:grid grid-cols-2">{
              demo.map((data)=>(

                <div key={data.id}id={styles.course} className=" m-5 bg-darkpurple rounded-1sm md:grid grid-cols-2 gap-2 my-10 w-[90%] mx-auto ">
                <div className="coursecard bg-darkpurple rounded-1sm ">
                   <div className="rouded-5sm py-2" >
                  <img src={data.img} className='  rounded-5sm  md:mx-5 ' id={styles.courseimg} alt=""  />
                  </div>
                  
                  <div className="tittle bg-bluegreen my-2">
                    <h4 className='text-white text-lg text-center'>{data.tittle}</h4>
                  </div>
                </div>
                <div className="coursedescription ">
                  <div className="ps-3" id={styles.sidebar}>
                  <div className=" md:bg-white" id={styles.details}>
                    <p className=' text-center text-base p-2 ' id={styles.Desctext} >{data.description}</p>
                  </div>
                  </div>
                  <div className="flex justify-around " id={styles.actions}>
                    <button className='flex border-solid border-bluegreen border-2 bg-white my-2 mx-1 text-purple p-1'><svg xmlns="http://www.w3.org/2000/svg" className='fill-purple' height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z"/></svg>Enroll</button>
                    <button className='flex bg-bluegreen  my-2 mx- rounded-0.5sm text-purple p-1'><svg xmlns="http://www.w3.org/2000/svg" height="24" className='fill-purple' viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>View</button>
                    <button className='flex bg-bluegreen  my-2 mx-1 rounded-0.5sm text-purple p-1 '><svg xmlns="http://www.w3.org/2000/svg" height="24" className='fill-purple' viewBox="0 -960 960 960" width="24"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>Mark</button>
                  </div>
                  </div>
                
              </div>
              ))
            
            }
               
            </div>
            </div>
         </div>
         <div className="technologies  bg-fadepurple">
          <div className=" bg-purple" id={styles.headingTech}>
            <h1 className=' text-white text-center '>Technologies</h1>
          </div>
          <div className="techIcons grid grid-cols-5 m-auto md:grid-cols-9 w-[95%]">
            {imgdata.map((image)=>(
               <img key={image.id} src={image.src} className=' m-auto' id={styles.techimgs} alt="" />
            ))}
           
          </div>
         </div>
         <div className="trendingForum">
          <div id={styles.trendingHeading}>
            <h1 className='text-center m-10'>Trending Forums</h1>
          </div>
          <div className=" grid grid-cols-2 sm2:grid-cols-3 md:grid-cols-4 " id={styles.forums}>{
            demoForum.map((forum)=>(
              <div className="forum  my-8" key={forum.id}>
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
                 <div className="m-4" key={story.id} id={styles.story}>
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
        <div className="partners bg-grey grid grid-cols-3 gap-1 p-2  md:grid-cols-6 p-5">
          {
            partners.map((partner)=>(
              <img key={partner.id} src={partner.src} className='w-30 h-10 m-auto my-5 md:h-16' alt="" />
            ))

          }
        </div> 
      </div>
     <Footer/>
    </>
  );
}

export default Landing;
