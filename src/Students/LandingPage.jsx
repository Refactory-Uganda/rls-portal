import React from "react";
import style from "./LandingPage.module.css";
import LandingPageNavbar from "../Components/Pages/Student/LandingPageNavBar"

function LandingPage(props) {
  return (
    <>

      <div className={style.imageDiv}>
        <LandingPageNavbar/>
        <div class="container" id={style.container}> 
   <div class="row"> 
      <div class="col"> 
      <div className={style.div2}><p  className={style.Para}>Learn with Refactory to achieve your career dreams </p> </div>
      </div>
      <div class="col">Right column</div> 
   </div> 
</div>
       
      </div>

      <div></div>
    </>
  );
}

export default LandingPage;
