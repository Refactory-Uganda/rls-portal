import React from 'react';
import style from './ViewAssignments.module.css';
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';
import Card from 'react-bootstrap/Card';
import demo from '../Components/Pages/demo.json'

const ViewAssignments = () => {

  return (
    <>
      <LandingPageNavBar />
      <div className={style.card}>
        <h2>Assignments</h2>
      <div className="main grid grid-cols-1 p-3 sm2:grid-cols-2  md2:grid-cols-3  gap-3 lg:grid-cols-2 xl:grid-cols-3">
         
            {
                demo.map((data)=>(
                    <div key={data.id} className="courseCard rounded-1sm p-4 flex flex-col justify-between" id={style.course}>
                <div className="cardContent">
                    <p>Object Oriented Programming</p>
                </div>
                <div className="cardContent">
                    <p>Your Mark</p><span>80/100</span>
                </div>
                <button className={style.button} >View Assignment</button>
            </div>
                ))
            }
         </div>
         </div>


    </>
  );
};

export default ViewAssignments;



