import React from "react";
import  { useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaBell } from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown';
import style from "./LandingPageNavBar.module.css";

function LandingPageNavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={style.yaa}>
        <Navbar bg="dark" expand="lg" className="bg-body" id={style.NavBar}>
          <Container fluid id={style.container}>
            <Navbar.Brand href="#"><img src="../img/refactoryLogoColored.png" alt=""  className={style.logoImage}/></Navbar.Brand>
            {/* <FaSearch className={style.search} /> */}
            <FaBell className={style.bell2} /> 
            
 
            
            <Navbar.Toggle aria-controls="navbarScroll" />
           
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link href="#action1">Categories</Nav.Link> */}
                {/* categories */}
                <div className="hover-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dropdown >
        {/* categories */}
      <Nav.Link  id={style.Courses}>Catergories</Nav.Link>

        <Dropdown.Menu show={isOpen}>
          <Dropdown.Item href="#/action-1">Web Development </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Design</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Data Science</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></div>

                {/* search */}
                <Form className="d-flex" id={style.form}>
               
               <Form.Control
              
                 type="search"
                 placeholder="Search for Courses"
                 id={style.search}
                 aria-label="Search"
               />
               <Button variant="outline" id={style.button} ><FaSearch/></Button>
             </Form>
                
              </Nav>

              <Nav>
                {/* courses */}
                < NavDropdown className={style.headers} title="Courses" id={style.Courses} >
                  <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                {/* features */}
                <NavDropdown title="Features" id={style.Courses} >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                  {/* community */}
                  <NavDropdown title="Community" id={style.Courses}>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
               
                 <FaBell className={style.bellIcon}/> 
               <img src="/images/profile.jpg" alt="" className={style.profileImage} /> 
               {/* account */}
               <Nav.Link href="#home" id={style.account}>Account</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default LandingPageNavBar;
