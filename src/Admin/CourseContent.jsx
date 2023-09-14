import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import Button from '../Components/Button';
import style from './CourseContent.module.css';


const CourseContent = () => {
  const [content, setContent] = useState('Input content here');

  function handleChange(event) {
    setContent(event.target.value);
  }
  return (
    <>
    
    <div className={style.body}>
      <div className={style.box}>
        <button className={style.button}>MATERIALS</button>
        <button className={style.button}>DETAILS</button>
        <button className={style.button2}>ENROLLED </button>
    </div>
    <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
    <div className={style.container}>
            <ContentEditable html={content} onChange={handleChange} className={style.element}  />
        <div className={style.btn}>
            <Button name='RESET' padding={'8px'}  borderRadius={8} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} size={'10px'} mr={'4px'} />  
            <Button name='SAVE' padding={'8px'} borderRadius={8} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        </div>
    </div>
    </div>
    </>
  )
}

export default CourseContent