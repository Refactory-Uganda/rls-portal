
import Button from '../Components/Button';
import style from './AddCourseContent.module.css';
import {FaEllipsisV} from 'react-icons/fa';
import { useState } from 'react';


const AddCourseContent = () => {
  const [showIcons, setShowIcons] = useState(false);
    const toggleIcons = () => {
        setShowIcons(!showIcons);
      };

      
  return (
    <>

    <div className={style.body}>
    <div className={style.box}>
    <Button  name='CONTENT' pr={30} pl={30} mr={'8px'} borderRadius={10} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
      <Button className={style.button} name='DETAILS' pr={30} pl={30} mr={'8px'} borderRadius={10} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} />  
      <Button className={style.button} name='ENROLLED'  pr={30} pl={30} mr={'8px'} borderRadius={10} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'}  />
  </div>
  <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
  <div className={style.box}>
      <Button name='DRAFT' pr={40} pl={40} mr={'8px'} borderRadius={1} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} />  
      <Button name='ADD'  pr={40} pl={40} mr={'8px'} borderRadius={1} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'}  />
      <Button name='ADDED' pr={40} pl={40} mr={'8px'} borderRadius={1} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
  </div>
  <div className={style.container}>
    <div  className={`${style.textBtn} ${showIcons ? '' : style.iconsHidden}`}>
        <Button name='text' pr={20} pl={20} padding={'8px'}  borderRadius={8} mb={"12px"} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} size={'10px'} mr={'4px'} />  
        <Button name='video' pr={18} pl={18} padding={'8px'} borderRadius={8} mb={"12px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        <Button name='image' pr={18} pl={18} padding={'8px'} borderRadius={8} mb={"12px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        <Button name='slide' pr={20} pl={20} padding={'8px'} borderRadius={8} mb={"12px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
    </div>
    <div >
      <div className={style.content}>
          <h2>SELECT CONTENT TO EDIT</h2>
          <FaEllipsisV className={`${showIcons ? 'active' : ''}`} onClick={toggleIcons} />
      </div>
      
      <div className={style.btns}>
          <Button name='PRINCIPLE OF DESIGN PATTERN' pl={100} pr={100} mb={10} pt={10} pb={10} color={'white'} backgroundColor={'#693769'}  />
          <Button name='CORE PART OF DESIGN PATTERN' pl={100} pr={100} mb={10} pt={10} pb={10}  color={'white'} backgroundColor={'#693769'}  />
          <Button name='THE HARD PART OBJECT' pl={100} pr={160} mb={10} pt={10} pb={10} color={'white'} backgroundColor={'#693769'} />
          <Button name='WORKING WITH CLASSES' pl={100} pr={150} mb={10} pt={10} pb={10} color={'white'} backgroundColor={'#693769'} />
          <Button name='BENEFIT OF OBJECT ORIENTED JS' pl={95} pr={95} mb={10} pt={10} pb={10} color={'white'} backgroundColor={'#693769'}  />
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default AddCourseContent