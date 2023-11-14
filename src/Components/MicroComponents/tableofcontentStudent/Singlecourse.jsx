import demotopic from "../../Pages/demotopics.json"
import { Link } from "react-router-dom"
import SinglecourseIframe from "../iframe/singlecoures"
import { useState,useEffect } from "react"
export default function Singlecourse() {
    const [Iframe ,setIframe]=useState("")
    return(
        <>
        <div className="div">
            <SinglecourseIframe video={Iframe}/>
            <div className="div">
                {
                    demotopic.map((item,index) => (
                        <h1 key={index}>{item.heading}</h1>
                                        ))
                }
            </div>
            <h2>Table of content</h2>
            <div className="topicsSubtopics">
                {
                    demotopic.map((item,index) => (
                       <div className="div" key={index}>
                        <h2>{index}.{item.topic}</h2>
                        <ul>
                            {item.minitopics.map((item,index)=>(
                            
                            ))}
                        </ul>
                        </div> 
                    ))
                }
                </div>            
        </div>
        </>
    )
}