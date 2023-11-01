import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import style from "./LandingPageNavbar.module.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdbreact";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from "react-router-dom";
import Login from "../Login";

function  LandingPageNavBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };
  


  const values = ["md-down"];
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <>
      <div>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            // expanded={expanded}
            expand="lg"
            className="bg-body"
            id={style.NavBar}
          >
            <Container fluid id={style.container}>
              {/* toggle */}
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                id={style.toggle}
              />

              <Navbar.Brand href="#">
                <img
                  src="../img/refactoryLogoColored.png"
                  alt=""
                  className={style.logoImage}
                />
              </Navbar.Brand>

              {/* Offcanvas */}

              <Navbar.Offcanvas
                // id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                  id={style.NavBar_Offcanvas}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img
                      src="../img/refactoryLogoColored.png"
                      alt=""
                      className={style.logoImage}
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className="me-auto my-2 my-lg-0"
                  
                    navbarScroll
                  >
                   
                    {/* Categories */}
                    
                    
                    <Dropdown>
                      <Dropdown.Toggle id={style.Courses}>
                        Categories
                      </Dropdown.Toggle>

                      <Dropdown.Menu id={style.Dropdown_menu}>
                        <Dropdown.Item
                          href="#/action-1"
                          id={style.Dropdown_Item}
                        >
                          Learning Path
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          id={style.Dropdown_Item}
                        >
                          {" "}
                          Assessment
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          id={style.Dropdown_Item}
                        >
                          Certification
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* search */}
                    <div id={style.form2}>
                      <MDBCol>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search for anything"
                          aria-label="Search"
                          id={style.form3}
                        />
                      </MDBCol>
                    </div>
                  </Nav>

                  <Nav>
                    {/* courses */}
                    <Nav.Link href="#home" id={style.Courses2}>
                      Courses
                    </Nav.Link>

                    {/* features */}
                    <Dropdown>
                      <Dropdown.Toggle id={style.Courses}>
                      features
                      </Dropdown.Toggle>

                      <Dropdown.Menu id={style.Dropdown_menu}>
                        <Dropdown.Item
                          href="#/action-1"
                          id={style.Dropdown_Item}
                        >
                          Learning Path
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          id={style.Dropdown_Item}
                        >
                          {" "}
                          Assessment
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          id={style.Dropdown_Item}
                        >
                          Certification
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* community */}
                    <Dropdown>
                      <Dropdown.Toggle id={style.Courses}>
                      community 
                      </Dropdown.Toggle>

                      <Dropdown.Menu id={style.Dropdown_menu}>
                        <Dropdown.Item
                          href="#/action-1"
                          id={style.Dropdown_Item}
                        >
                          Forum
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          id={style.Dropdown_Item}
                        >
                          {" "}
                          Learner Stories
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <FaBell className={style.bellIcon} />
                    {/* Profile */}
                    < div className={style.overlay}>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          
          overlay={
            <Popover  id={style.Overlaytrigger}>
               <Popover.Body id={style.Popover_Body}>
              
                <Nav.Link href="#home" id={style.Nav_Link}>
                     <strong>Profile</strong> 
               </Nav.Link>
               <Nav.Link href="#home" id={style.Nav_Link}>
                     <strong> Settings</strong> 
               </Nav.Link>
               <Nav.Link href="#home" id={style.Nav_Link}>
                     <strong>Accomplishments</strong> 
               </Nav.Link>
               <Nav.Link href="#home" id={style.Nav_Link}>
                     <strong>Help Center</strong> 
               </Nav.Link>

               <Nav.Link href="/login" id={style.Nav_Link}>
                     <strong>Log Out</strong> 
               </Nav.Link>
              </Popover.Body>
            
             
            </Popover>
          }
        >
            <img
                      src="/images/profile.jpg"
                      alt=""
                      className={style.profileImage}
                    />
        </OverlayTrigger>
      ))}
    </div>
                  
                    {/* account */}
                    {/* <Nav.Link href="#home" id={style.account}>
                      Account
                    </Nav.Link> */}
                    <Dropdown>
                      <Dropdown.Toggle id={style.account}>
                      Account
                      </Dropdown.Toggle>

                      <Dropdown.Menu id={style.Dropdown_menu}>
                        <Dropdown.Item
                          href="#/action-1"
                          id={style.Dropdown_Item}
                        >
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          id={style.Dropdown_Item}
                        >
                          {" "}
                          Settings
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          id={style.Dropdown_Item}
                        >
                         Accomplishments
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          id={style.Dropdown_Item}
                        >
                        Help Center
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          id={style.Dropdown_Item}
                        >
                        <Link to="/login"> Log Out</Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

              {/* bell and search */}

              <label id={style.bellsearch}>
                <FaBell className={style.bell2} />
                {values.map((v, idx) => (
                  <FaSearch
                    className={style.bell2}
                    key={idx}
                    onClick={() => handleShow(v)}
                  >
                    {" "}
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </FaSearch>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                  id={style.modal}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {" "}
                      <MDBCol>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search for anything"
                          aria-label="Search"
                          id={style.search3}
                        />
                      </MDBCol>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Modal body content</Modal.Body>
                </Modal>
              </label>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default LandingPageNavBar;
