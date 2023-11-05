import React from 'react';
import { BiSave } from 'react-icons/bi';
import styles from './VideoComponent.module.css';

const PdfComponent = ({ url }) => {
  return (
    <div className={`${styles.material} ${styles.pdf}`}>
      <div className={styles.icons}>
        <BiSave size={50} />
      </div>
      <p>Introduction To HTML</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Open PDF
      </a>
    </div>
  );
};

export default PdfComponent;
