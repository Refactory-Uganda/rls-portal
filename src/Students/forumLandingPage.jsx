import React from 'react';
import style from './formlandingPage.module.css'
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';
import Forum from './Forum';
const ForumLandingPage = () => {
     return (
          <div>
               <LandingPageNavBar/>
               <Forum/>
          </div>
     );
}

export default ForumLandingPage;
