import React, { useState, useEffect } from "react";
import LandingPageNavbar from "../Components/Pages/Student/LandingPageNavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./CourseDetails.module.css";
import Button from "react-bootstrap/Button";
import CoursesCarousel from "../Components/Pages/Student/CoursesCarousel";
import Footer from "../Components/MicroComponents/footer/Footer";
import Accordion from "react-bootstrap/Accordion";

function CourseDetails(props) {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/courses/" + id;
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

  return (
    <div className={style.body}>
      <strong>
        <div className="container-fluid" id={style.Aboutcourse}>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12" style={{ paddingLeft: "60px" }}>
              {" "}
              <h4 style={{ fontFamily: "sans-serif", paddingBottom: "10px" }}>
                About {data.course_name}
              </h4>
              <p>
                {data.course_description} 
               
                <br />
                {}
              </p>
              <p>Course Duration : &nbsp;{data.course_duration}</p>
              <p>Tution Fees : &nbsp;{}</p>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div >
                <img
                  src="/images/JavaScript---Thumbnail-1200-x-630.jpg"
                  alt=""
                  className={style.image}
                />
              </div>
            </div> */}
             <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className={style.belowimage}>
              <img
                  src="/images/JavaScript---Thumbnail-1200-x-630.jpg"
                  alt=""
                  className={style.image}
                />
              </div>
            </div>
          </div>
        </div>
        {/* div2 */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="container-fluid" id={style.rowinfo}>
                <div className="row">
                <h5 className={style.h5}>What you will learn</h5>
                  <div className="col">
                    
                    <ul>
                      <li className={style.li2}>
                        After the Course you will be able to build any website
                        you want
                      </li>
                      <li className={style.li}>Work as a remote developer</li>
                      <li className={style.li}>
                        Master Backend development with Jjango
                      </li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li className={style.li2}>
                        Work as a freelance developer
                      </li>
                      <li className={style.li}>Master frontend development</li>
                      <li className={style.li}>
                        Master Professional developer practices
                      </li>
                      <li className={style.li}>
                        Master Professional developer practices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className={style.belowimage}>
                <Button
                id={style.button}
                  style={{
                    width: "40%",
                    marginTop: "30px",
                    marginBottom: "20px",
                    marginLeft: "32%",
                    backgroundColor: "rgb(73, 178, 178)",
                    borderColor: " rgba(78, 30, 78, 0.855)",
                  }}
                  
                >
                  Enrol
                </Button>
                <h5 className={style.h5}>
                  <strong>Requirements </strong>
                </h5>
                <ul className={style.ul}>
                  <li className={style.li}>No Programming experience needed</li>
                  <li className={style.li}>
                    A computer with access to the internet
                  </li>
                  <li className={style.li}>No Paid software required </li>
                  <li className={style.li}>Dedicate a few hours a day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* div3 */}
        <div className="container-fluid">
          <div className="row" id={style.topcompanies}>
            <div className="col">
              <CoursesCarousel
                heading="Top companies are in demand for this course from their employees"
                companies=""
                paragraph="this course was selected from our top courses"
              />
            </div>
          </div>
        </div>

        {/* div4 */}
        
          <div id={style.certificate1}>
          <div className="container-fluid" id={style.certificate}>
            <div className="row">
              <div className="col-8">
                <h5>Earn a career certificate</h5>
                <p>Add this credential on your resume or Cv,Linkedin Profile</p>
              </div>
              <div className="col-4" id={style.image3}>
                <div>
                  {" "}
                  <img
                    src="/images/certificate.jpg"
                    alt=""
                    className={style.image2}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>

        {/* div5 */}
        <div className="container-fluid" id={style.coursecontent}>
          <div className="row">
            <div className="col">
              <h5 className={style.h6}
               
              >
                Course Content
              </h5>
              <p>
                The curriculum has been designed to equip you with an in-depth
                understanding of technology and how you can use it to become an
                efficient problem solver
              </p>
            </div>
          </div>
        </div>
        {/* div6 */}
        <div className="container-fluid" id={style.content}>
          <div className="row">
            <div className="col">
              <Accordion id={style.accordion}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header id={style.custom_accordion_header}>
                    Week 1
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Week 2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Week 3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Week 4</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Week 5</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Week 6</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Week 7</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </strong>
      <Footer />
    </div>
  );
}

export default CourseDetails;
