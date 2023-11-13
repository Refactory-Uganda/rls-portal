import React from 'react';
import LandingPageNavBar from './LandingPageNavBar';
import { Outlet } from 'react-router-dom';

function Courses(props) {
    return (
        <div>
            <LandingPageNavBar/>
            <Outlet/>
        </div>
    );
}

export default Courses;