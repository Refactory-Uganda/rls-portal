import React from "react";
import style from "./LandingPage.module.css";
import LandingPageNavbar from "../Components/Pages/Student/LandingPageNavBar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CoursesCarousel from "../Components/Pages/Student/CoursesCarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, Outlet} from "react-router-dom";
import Footer from "../Components/MicroComponents/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { useParams } from "react-router-dom";

function LandingPage(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/courses";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
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

  return (
    <>
      <div className={style.imageDiv}>
        <LandingPageNavbar />
        <div className="container" id={style.container}>
          <div className="row">
            <div className="col">
              <div className={style.div2}>
                <p className={style.Para}>
                  Learn with Refactory to achieve your career dreams{" "}
                </p>{" "}
              </div>
            </div>
            <div className="col">Right column</div>
          </div>
        </div>
      </div>
      <CoursesCarousel heading="We Collaborate with over" companies="20+ Companies"/>

      <div className="container-fluid" id={style.middlediv1}>
        <div className="container">
          <div className="row">
            <div
              className="col-xs-8 col-sm-8 col-md-8 col-lg-8  "
              id={style.middlediv}
            >
              <label htmlFor="">
                Get to launch your carrier in 3 months or more
              </label>{" "}
              <h3 id={style.middlediv}>A Selection of courses to pick from</h3>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
              <div className={style.middlediv2}></div>
              <div className={style.middledivimage}></div>
              {/* <img src="../images/studying image.jpeg" alt="" className={style.middledivimage} /> */}
            </div>
          </div>
        </div>
      </div>
        
      <div className="container-fluid" style={{padding:"12px"}}>
      <div className="container-fluid" id={style.Coursedisplay}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
        >
          {data.map((data, index) => (
            <div className="row">
              <div className="col" id={style.Coursedisplaycol} key={index}>
                <NavLink href={`./course/${data._id}`} style={{textDecoration:"none"}}>
                <Card id={style.card} >
                  <Card.Img src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
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


      <div className="container-fluid" style={{paddingBottom:"20px"}}>
        <div className="row">
          <h5 style={{ marginBottom:"30px", paddingTop:"20px"}}>
            {" "}
            <strong>Categories </strong>
          </h5>

          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Link id={style.categoriescol1}>
              <div id={style.categoriescol}>
                <img
                  src="../images/3476582.png"
                  alt=""
                  id={style.categoriesimage}
                />
              </div>
              <strong>
                <p>Web Development</p>
              </strong>
            </Link>
          </div>
          <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Link id={style.categoriescol1}>
              <div id={style.categoriescol}>
                <img
                  src="../images/5376895-200.png"
                  alt=""
                  id={style.categoriesimage}
                />
              </div>
              <strong>
                <p>Design</p>
              </strong>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Link id={style.categoriescol1}>
              <div id={style.categoriescol}>
                <img
                  src="../images/2801091.png"
                  alt=""
                  id={style.categoriesimage}
                />
              </div>
              <strong>
                <p>Data Science</p>
              </strong>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <Link id={style.categoriescol1}>
              <div id={style.categoriescol}>
                <img
                  src="../images/2801091.png"
                  alt=""
                  id={style.categoriesimage}
                />
              </div>
              <strong>
                <p>Security</p>
              </strong>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid" id={style.feacturedtopicscont}>
        <h5>
          {" "}
          <strong>Featured Topics by Categories </strong>
        </h5>
        <div className="row" id={style.feacturedtopicscol}>
          <div className="col">
            <p>
              <strong>Web development</strong>
            </p>
            <Link className={style.feacturedtopicstopics}>
              <p>Javascript</p>
            </Link>
            <Link
              rel="stylesheet"
              href=""
              className={style.feacturedtopicstopics}
            >
              <p>Python</p>
            </Link>
          </div>
          <div className="col">
            <p>
              <strong>Design</strong>
            </p>
            <Link
              rel="stylesheet"
              href=""
              className={style.feacturedtopicstopics}
            >
              {" "}
              <p>UI/UX</p>
            </Link>
          </div>
          <div className="col">
            <p>
              <strong>Data Science</strong>
            </p>
            <Link
              rel="stylesheet"
              href=""
              className={style.feacturedtopicstopics}
            >
              <p>AI and Machine Learning</p>
            </Link>
            <Link
              rel="stylesheet"
              href=""
              className={style.feacturedtopicstopics}
            >
              <p>Data Literacy</p>
            </Link>
          </div>
          <div className="col">
            <p>
              <strong>Security</strong>
            </p>
            <Link
              rel="stylesheet"
              href=""
              className={style.feacturedtopicstopics}
            >
              <p>Cuber Security</p>
            </Link>
            <Link
              rel="stylesheet"
              href=""
              className={style.feacturedtopicstopics}
            >
              <p>Data Literacy</p>
            </Link>
          </div>
        </div>
      </div>
     
      <Footer />
     
    </>
  );
}

export default LandingPage;
