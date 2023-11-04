import React from 'react';
import styles from './VideoComponent.module.css';

const MaterialComponent = ({ icon, title, url }) => {
  return (
    <div className={styles.materialContainer}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.iconContainer}>{icon}</div>
      </a>
      <span className={styles.materialTitle}>{title}</span>
    </div>
  );
};

export default MaterialComponent;
