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
    <div className={style.body}>
      <div className={style.box}>
        <Button name='MATERIALS' pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} />  
        <Button name='DETAILS'  pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'}  />
        <Button name='ENTROLLED' pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
    </div>
    <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
    <div className={style.container}>
            <ContentEditable html={content} onChange={handleChange} style={{width: '710px', height: '500px',  padding: '10px'}}  />
        <div className={style.btn}>
            <Button name='RESET' padding={'8px'}  borderRadius={8} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} size={'10px'} mr={'4px'} />  
            <Button name='SAVE' padding={'8px'} borderRadius={8} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        </div>
    </div>
    </div>
  )
}

export default CourseContent