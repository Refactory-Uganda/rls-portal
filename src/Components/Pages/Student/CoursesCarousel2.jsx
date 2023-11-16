import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import style from "../../../Students/LandingPage.module.css";

function CoursesCarousel2(props) {
    const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/courses";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if( response.data){
          
        setData(response.data );}
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  
  const id = useParams()

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
    
        
      };
      const targetRef = useRef();

     
    return (
        <div>
             {/* div4  Courses */}
        
      <div className="container-fluid" style={{padding:"12px"}} id="scroll-target2" ref={targetRef}>
      <div className="container-fluid" id={style.Coursedisplay}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
        >
          {data.map((data, index) => (
            <div className="row">
              <div className="col" id={style.Coursedisplaycol} key={data._index}>
                <NavLink href={`./course/${data._id}`} style={{textDecoration:"none"}}>
                <Card id={style.card} >
                  <Card.Img src={data.image} id={style.img}/>
                  <Card.Body id={style.Coursedisplaybody}>
                  <Card.Title> <strong> {data.course_name }{ data.id}</strong></Card.Title>
                    <Card.Text>
                      {data.course_description.substring(-1, 50) + "........"}
                    </Card.Text>
                    {/* <Button id={style.Coursedisplaybutton}>Enrol</Button> */}
                  </Card.Body>
                </Card>
                </NavLink>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
        </div>
    );
}

export default CoursesCarousel2;