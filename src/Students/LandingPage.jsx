import React from "react";
import style from "./LandingPage.module.css";
import LandingPageNavbar from "../Components/Pages/Student/LandingPageNavBar";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function LandingPage(props) {
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

      <div className="container-fluid">
        <div className="row" id={style.collaboratorsrow}>
          <div className="col-12" id={style.collaboratorsheading}>
            We Collaborate with over{" "}
            <a href="" className={style.companies}>
              20+ Companies
            </a>{" "}
          </div>
          <div className="col-12" id={style.collaborators}>
            <Carousel>
              <Carousel.Item id={style.Item}>
                <ul className={style.ul}>
                  <li className={style.li}>
                    <img src="../images/Laboremus.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img
                      src="../images/the-innovation-village (1).png"
                      alt=""
                    />
                  </li>
                  <li className={style.li}>
                    <img src="../images/Kanzu_Code.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img src="../images/meta.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img src="../images/mtn-foundation.png" alt="" />
                  </li>
                </ul>
              </Carousel.Item>
              <Carousel.Item id={style.Item}>
                <ul className={style.ul}>
                  <li className={style.li}>
                    <img src="../images/xeno.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img src="../images/unicef.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img
                      src="../images/ministry-of-ict-and-guidance.png"
                      alt=""
                    />
                  </li>
                  <li className={style.li}>
                    <img src="../images/outbox.jpg" alt="" />
                  </li>
                  <li className={style.li}>
                    <img src="../images/Norad.png" alt="" />
                  </li>
                </ul>
              </Carousel.Item>
              <Carousel.Item id={style.Item}>
                <ul className={style.ul}>
                  <li className={style.li}>
                    <img src="../images/Propel-Logo-Black.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img
                      src="../images/stanbic-bank-business-incubator.png"
                      alt=""
                    />
                  </li>
                  <li className={style.li}>
                    <img src="../images/Signalytic.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img src="../images/Xente.png" alt="" />
                  </li>
                  <li className={style.li}>
                    <img src="../images/Titl.png" alt="" />
                  </li>
                </ul>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
        <div className="container-fluid" id={style.middlediv1}>
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8  " id={style.middlediv}>
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


      <div className="container" id={style.Coursedisplay}> 
      <Carousel>
      <Carousel.Item id={style.Item}>
   <div className="row"> 
      <div className="col" id={style.Coursedisplaycol}>  <Card style={{ width: '18rem'}}>
      <Card.Img  src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
      <Card.Body id={style.Coursedisplaybody} >
        <Card.Title> Certificate in Javascript</Card.Title>
        <Card.Text>
          Some quick example text 
          
        </Card.Text>
        <Button  id={style.Coursedisplaybutton}>Enrol</Button>
      </Card.Body>
    </Card></div> 
      <div className="col" id={style.Coursedisplaycol}>  <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
      <Card.Body id={style.Coursedisplaybody} >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        course heading
        </Card.Text>
        <Button  id={style.Coursedisplaybutton}>Enrol</Button>
      </Card.Body>
    </Card></div> 
      <div className="col" id={style.Coursedisplaycol}>  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
      <Card.Body id={style.Coursedisplaybody} >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        course heading
        </Card.Text>
        <Button  id={style.Coursedisplaybutton}>Enrol</Button>
      </Card.Body>
    </Card></div> 
     
   </div>
   </Carousel.Item>
   <Carousel.Item id={style.Item}>
   <div className="row"> 
      <div className="col" id={style.Coursedisplaycol}>  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
      <Card.Body id={style.Coursedisplaybody} >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        course heading
        </Card.Text>
        <Button  id={style.Coursedisplaybutton}>Enrol</Button>
      </Card.Body>
    </Card></div> 
      <div className="col" id={style.Coursedisplaycol}>  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
      <Card.Body id={style.Coursedisplaybody} >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        course heading
        </Card.Text>
        <Button  id={style.Coursedisplaybutton}>Enrol</Button>
      </Card.Body>
    </Card></div> 
      <div className="col" id={style.Coursedisplaycol}>  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/JavaScript---Thumbnail-1200-x-630.jpg" />
      <Card.Body id={style.Coursedisplaybody} >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        course heading
        </Card.Text>
        <Button  id={style.Coursedisplaybutton}>Enrol</Button>
      </Card.Body>
    </Card></div> 
     
   </div>
   </Carousel.Item>

   </Carousel> 
</div>
      
<div className="container"> 
   <div className="row">
    <h5> <strong>Categories </strong></h5>
  
      <div className="col" id={style.categoriescol1}>
        <div id={style.categoriescol}>
        <img src="../images/3476582.png" alt="" id={style.categoriesimage}/>
        </div>
       <strong><p>Web Development</p></strong> 
        </div>
      <div className="col" id={style.categoriescol1}>
        <div id={style.categoriescol}>
        <img src="../images/5376895-200.png" alt="" id={style.categoriesimage}/>
        </div>
        <strong><p>Design</p></strong>
        </div>
      <div className="col" id={style.categoriescol1}>
        <div id={style.categoriescol}>
        <img src="../images/2801091.png" alt="" id={style.categoriesimage}/>
        </div>
        <strong><p>Data Science</p></strong>
        </div>
      <div className="col" id={style.categoriescol1}>
        <div id={style.categoriescol}>
        <img src="../images/2801091.png" alt="" id={style.categoriesimage}/>
        </div>
        <strong><p>Security</p></strong>
        </div>
        
     

   </div> 
</div>

<div className="container-fluid" id={style.feacturedtopicscont}> 
<h5 style={{paddingLeft:"5%"}}> <strong>Featured Topics by Categories </strong></h5>
   <div className="row" id={style.feacturedtopicscol}> 
      <div className="col">
        <p><strong>Web development</strong></p>
        <Link className={style.feacturedtopicstopics}><p>Javascript</p></Link>
        <Link rel="stylesheet" href="" className={style.feacturedtopicstopics}><p>Python</p></Link>
      </div>
      <div className="col">
        <p><strong>Design</strong></p>
        <Link rel="stylesheet" href="" className={style.feacturedtopicstopics}> <p >UI/UX</p></Link>
     
      </div>
      <div className="col">
        <p><strong>Data Science</strong></p>
        <Link rel="stylesheet" href="" className={style.feacturedtopicstopics}><p >AI and Machine Learning</p></Link>
        <Link rel="stylesheet" href="" className={style.feacturedtopicstopics}><p >Data Literacy</p></Link>
      </div>
      <div className="col">
        <p><strong>Security</strong></p>
        <Link rel="stylesheet" href="" className={style.feacturedtopicstopics}><p >Cuber Security</p></Link>
        <Link rel="stylesheet" href="" className={style.feacturedtopicstopics}><p >Data Literacy</p></Link>
      </div>
      
   </div> 
</div>

    </>
  );
}

export default LandingPage;
