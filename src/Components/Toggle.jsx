import  { useState } from 'react';
import styles from './toggle.module.css';

function ToggleSwitch() {
 const [isChecked, setIsChecked] = useState(false);

 const handleToggle = () => {
  setIsChecked(!isChecked);
 };

 return (
  <div className={`${styles.label} ${isChecked ? styles.checked : ''}`}>
    <input className={styles.input} type="checkbox" onChange={handleToggle} />
    <div className={styles.slider}></div>
  </div>
 );
}

export default ToggleSwitch;