import React from 'react';
import { BiCaretRightCircle } from 'react-icons/bi';
import styles from './VideoComponent.module.css';

const VideoComponent = ({ videoUrl, title }) => {
  return (
    <div className={styles.video}>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <BiCaretRightCircle size={50} />
      </a>
      <span className={styles.materialTitle}>{title}</span>
    </div>
  );
};

export default VideoComponent;
