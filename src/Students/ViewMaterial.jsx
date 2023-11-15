import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { BiCaretRightCircle, BiFile, BiSave } from 'react-icons/bi';
import MaterialComponent from '../Components/MaterialComponent';
import Sidebar from "../Components/Pages/Student/sideBar";
import styles from './ViewMaterial.module.css';
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';
import axios from "axios"

const ViewMaterial = () => {
  const materialData = [
    { type: 'video', url: 'https://www.youtube.com/watch?v=AagjAUE8U8s', title: 'Introduction to CSS', icon: <BiCaretRightCircle size={50} /> },
    { type: 'pdf', url: 'pdf_url_here', title: 'Introduction To HTML', icon: <BiSave size={50} /> },
    { type: 'word', url: 'word_url_here', title: 'Introduction To Javascript', icon: <BiFile size={50} /> },
  ];
  const [courseMaterial, setCourseMaterial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/coursesMaterial');
        const data = await response.json();
        setCourseMaterial(data);
      } catch (error) {
        console.error('Error fetching course material:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Sidebar />
      <LandingPageNavBar />
      <Accordion defaultActiveKey="0" className={styles.accordion}>
        <h1>Course Material</h1>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction</Accordion.Header>
          <Accordion.Body>
            {materialData.map((material, index) => (
              <MaterialComponent key={index} icon={material.icon} title={material.title} url={material.url} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" className={styles.accordion2}>
      <Accordion.Item eventKey="0">
          <Accordion.Header>Object Oriented Programming</Accordion.Header>
          <Accordion.Body>
            {materialData.map((material, index) => (
              <MaterialComponent key={index} icon={material.icon} title={material.title} url={material.url} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </>
  );
};

export default ViewMaterial;
