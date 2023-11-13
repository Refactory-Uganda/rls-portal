import React from "react";
import LandingPageNavBar from "../Components/Pages/Student/LandingPageNavBar";
import Footer from "../Components/MicroComponents/footer/Footer";
import "./CategoriesPage.css"

function CategoriesPage(props) {
  return (
    <div>
      <LandingPageNavBar />
      <div class="container" id="container">
        <div class="row">
          <div class="col-12">
            <h5>Web Development</h5>
            <div className="webcategory"></div>
          </div>
          <div class="col-12">
            <h5>Design</h5>
            <div className="webcategory"></div>
          </div>
          <div class="col-12">
            <h5>Data Science</h5>
            <div className="webcategory"></div>
          </div>
          <div class="col-12">
            <h5>Security</h5>
            <div className="webcategory"></div>
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CategoriesPage;
