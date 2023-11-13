import React from 'react';
import { BiFile } from 'react-icons/bi';
import styles from './VideoComponent.module.css';

const WordComponent = ({ url }) => {
  return (
    <div className={`${styles.material} ${styles.word}`}>
      <div className={styles.icons}>
        <BiFile size={50} />
      </div>
      <p>Word Document</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Open Word Document
      </a>
    </div>
  );
};

export default WordComponent;
