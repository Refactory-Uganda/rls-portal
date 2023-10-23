
// ....................caroseul partners...........................
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import demoStory from "../../Pages/demoUseStory.json"
import styles2 from '../../../assets/Landingpagestlyes/styles.module.css'

function Journey(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
       <>
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
            // removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            className="flex flex-wrap justify-between w-[100%" >
                { demoStory.map((story)=>(
                 <div key={story.id} className="story bg-slate flex gap-5 p-[60px] justify-between rounded-1m" id={styles2.stry}>
                  <div className="img">
                    <img src={story.image} alt="" className='rounded-5sm' id={styles2.imgs}/>
                  </div>
                  <div className="storyText">
                    <h4 className='font-extrabold text-2xl  mb-[30px]  md:text-3xl mb-[50px] '>{`"${story.story.substring(-1,150)+"....."}"`}</h4>
                    <div className="details flex flex-col gap-2">
                      <span>{story.name}</span>
                      <span>{story.studentTrack}</span>
                    </div>
                    <div className="buttons mt-2">
                      <div className="div flex bg-purple text-white p-3 w-[200px] justify-around rounded-2sm "><span>Read more</span> <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></div>
                    </div>
                    </div>
                 </div>

            ))
           
          }  
        </Carousel>
       </>
    )
}
export default Journey;