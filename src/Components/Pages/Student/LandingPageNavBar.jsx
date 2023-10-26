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

function LandingPageNavBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const values = ["md-down"];
  const [fullscreen, setFullscreen] = useState(true);

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setShow(true);
  // }

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
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
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
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    {/* Categories */}
                    <NavDropdown title="Categories" id={style.Courses}>
                      <NavDropdown.Item href="#action3">
                        Learning Path
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Assessment
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Certification
                      </NavDropdown.Item>
                    </NavDropdown>

                    {/* search */}
                    <div id={style.form2}>
                    <MDBCol>
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>
                    </div>
                  </Nav>

                  <Nav>
                    {/* courses */}
                    <Nav.Link href="#home" id={style.Courses}>
                      Courses
                    </Nav.Link>

                    {/* features */}
                    <NavDropdown title="Features" id={style.Courses}>
                      <NavDropdown.Item href="#action3">
                        Learning Path
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Assessment
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Certification
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* community */}
                    <NavDropdown title="Community" id={style.Courses}>
                      <NavDropdown.Item href="#action3" id={style.them}>
                        Forum
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4" id={style.them}>
                        Learner Stories
                      </NavDropdown.Item>
                    </NavDropdown>

                    <FaBell className={style.bellIcon} />
                    <img
                      src="/images/profile.jpg"
                      alt=""
                      className={style.profileImage}
                    />
                    {/* account */}
                    <Nav.Link href="#home" id={style.account}>
                      Account
                    </Nav.Link>
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
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" id={ style.search3}/>
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
