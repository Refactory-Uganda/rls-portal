import React from "react";
import style from "./LandingPage.module.css";
import LandingPageNavbar from "../Components/Pages/Student/LandingPageNavBar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CoursesCarousel from "../Components/Pages/Student/CoursesCarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/MicroComponents/footer/Footer";

import CoursesCarousel2 from "../Components/Pages/Student/CoursesCarousel2";

function LandingPage(props) {
  return (
    <>
      {/* div1  heading*/}
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
            <div className="col"></div>
          </div>
        </div>
      </div>

      {/* div2  companies*/}
      <CoursesCarousel
        heading="We Collaborate with over"
        companies="20+ Companies"
      />
      {/* div3  launch career*/}
      <div className="container-fluid" id={style.middlediv1}>
        <div className="container">
          <div className="row">
            <div
              className="col-xs-8 col-sm-8 col-md-8 col-lg-8  "
              id={style.middlediv}
            >
              <label htmlFor="">
                Get to launch your career in 3 months or more
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
      {/* div4  Courses */}

      <CoursesCarousel2 />

      {/* div5 categories */}

      <div className="container-fluid" style={{ paddingBottom: "20px" }}>
        <div className="row">
          <h5 style={{ marginBottom: "30px", paddingTop: "20px" }}>
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
      {/* div 6  Featured Categories*/}
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
