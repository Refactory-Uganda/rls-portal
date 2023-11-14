import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { BiCaretRightCircle, BiFile, BiSave } from 'react-icons/bi';
import MaterialComponent from '../Components/MaterialComponent';
import Sidebar from "../Components/Pages/Student/sideBar";
import styles from './ViewMaterial.module.css';
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';
import axios from "axios"

const ViewMaterial = () => {
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
        {courseMaterial.map((section, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{section.module_name}</Accordion.Header>
            <Accordion.Body>
              {section.video && (
                <MaterialComponent
                  icon={<BiCaretRightCircle size={50} />}
                  title="Video Material"
                  url={section.video}
                />
              )}
              {section.text && (
                <MaterialComponent
                  icon={<BiSave size={50} />}
                  title="Text Material"
                  url={section.text}
                />
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default ViewMaterial;
