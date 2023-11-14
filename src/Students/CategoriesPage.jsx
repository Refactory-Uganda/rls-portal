import React from "react";
import LandingPageNavBar from "../Components/Pages/Student/LandingPageNavBar";
import Footer from "../Components/MicroComponents/footer/Footer";
import "./CategoriesPage.css";
import { useState, useEffect } from "react";
import Card from "../Components/Pages/Student/Card";
import Buttons from "../Components/Pages/Student/Buttons";
import Data from "../Students/Data";
import CoursesCarousel2 from "../Components/Pages/Student/CoursesCarousel2";
import CoursesCarousel from "../Components/Pages/Student/CoursesCarousel";

function CategoriesPage() {
  const data = Data();

  const [item, setItems] = useState(data);

  const menuItems = [...new Set(data.map((val) => val.course_category))];

  const filterItems = (cat) => {
    const newItems = data.filter((newval) => newval.course_category === cat);
    setItems(newItems);
  };
  return (
    <div>
      <LandingPageNavBar />
      <div className="container" id="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fw-bold mt-3 mb-5">Course Filter</h1>

            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
            <Card item={item} />
          </div>
        </div>
      </div>
      <CoursesCarousel2 />
      <CoursesCarousel
        heading="We Collaborate with over"
        companies= "20+ Companies"
      />

      <Footer />
    </div>
  );
}

export default CategoriesPage;
