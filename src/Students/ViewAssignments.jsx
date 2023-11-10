import React from 'react';
import styles from './ViewAssignments.module.css';
import LandingPageNavBar from '../Components/Pages/Student/LandingPageNavBar';
import Card from 'react-bootstrap/Card';

const ViewAssignments = () => {

  return (
    <>
      <LandingPageNavBar />
      <div>
        <h1 className={styles.h1}>Assignments</h1>
        </div>
        <div>
  <Card className={styles.card}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold' }}>Object Oriented Programming</div>
      <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>80%</span>
    </div>
  </Card>
</div>
<div>
<Card className={styles.card}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold' }}>Calculator App</div>
      <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>80%</span>
    </div>
  </Card>
</div>
<div>
<Card className={styles.card}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold' }}>CI/CD</div>
      <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>80%</span>
    </div>
  </Card>
</div>


    </>
  );
};

export default ViewAssignments;



