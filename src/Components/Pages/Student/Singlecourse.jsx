// Note: This is the page where the student will see the course content
import demotopic from "../demotopics.json";
import SinglecourseIframe from "../../MicroComponents/iframe/singlecoures";
import { useState, useEffect } from "react";

export default function Singlecourse() {
  const [Iframe, setIframe] = useState("");

  useEffect(() => {
    // Fetch or set your Iframe data here by default it is set to first topic
    demotopic.map((item) => {
      item.Topics && item.Topics.map((item,index) => (item.minitop && index===1 && item.minitop.map((item, index) => (index===0 && setIframe(item.link) && console.log(item.link)))))});
    // Example: setIframe("https://www.example.com");
  }, []); 

  return (
    <>
      <div className="flex gap-4 relative">
    <div className="bg-purple p-4  overflow-auto text-white">
    <div className="div ">
          {demotopic.map((item, index) => (
            <h4 key={index}>{item.Heading && item.Heading.heading}</h4>
          ))}
        </div>
        <h5>Table of content</h5>
        <div className="topicsSubtopics">
         {demotopic.map((item, index) => (
           item.Topics && item.Topics.map((item, index) => (
            <div key={index} className="">
                <h5 className="">{index+1}. {item.topic}</h5>
                <ul>
                    {
                        item.minitop &&item.minitop.map((item,index)=>( <li key={index} >{item.minitopic}</li>))
                    }
                </ul>
            </div>
           ))
         ))}
        </div>
    </div>
    <div className="p-5 pt-3 h-screen w-[100%]">    
    <SinglecourseIframe videoId={Iframe} /> 
    </div>
        
      </div>
    </>
  );
}

