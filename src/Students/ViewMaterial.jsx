import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { BiCaretRightCircle, BiFile, BiSave } from 'react-icons/bi';
import MaterialComponent from '../Components/MaterialComponent';
import styles from './ViewMaterial.module.css';
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';

const ViewMaterial = () => {
  const materialData = [
    { type: 'video', url: 'https://www.youtube.com/watch?v=AagjAUE8U8s', title: 'Introduction to CSS', icon: <BiCaretRightCircle size={50} /> },
    { type: 'pdf', url: 'pdf_url_here', title: 'Introduction To HTML', icon: <BiSave size={50} /> },
    { type: 'word', url: 'word_url_here', title: 'Introduction To Javascript', icon: <BiFile size={50} /> },
  ];

  return (
    <>
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






// const ViewMaterial = () => {
//     const [materialData, setMaterialData] = useState([]);
  
//     useEffect(() => {
//       axios.get('http://localhost:5000/courseMaterial')
//         .then((response) => setMaterialData(response.data))
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);
  
//     return (
//       <>
//         <LandingPageNavBar />
//         <Accordion defaultActiveKey="0" className={styles.accordion}>
//           <h1>Course Material</h1>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>Materials</Accordion.Header>
//             <Accordion.Body>
//               {materialData.map((material, index) => (
//                 <MaterialComponent key={index} icon={material.icon} title={material.title} url={material.url} />
//               ))}
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </>
//     );
//   };