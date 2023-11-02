import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import style from "../../../Students/LandingPage.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CoursesCarousel(props) {


    
    return (
        <div>
       
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
        </div>
    );
}

export default CoursesCarousel;