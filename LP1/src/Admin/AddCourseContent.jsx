import Button from '../Components/Button';
import style from './AddCourseContent.module.css';

const AddCourseContent = () => {
  return (
    <div className={style.body}>
    <div className={style.box}>
    <Button name='CONTENT' pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
      <Button name='DETAILS' pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} />  
      <Button name='ENROLLED'  pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'}  />
  </div>
  <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
  <div className={style.box}>
      <Button name='DRAFT' pr={40} pl={40} mr={'8px'} borderRadius={1} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} />  
      <Button name='ADD'  pr={40} pl={40} mr={'8px'} borderRadius={1} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'}  />
      <Button name='ADDED' pr={40} pl={40} mr={'8px'} borderRadius={1} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
  </div>
  <div>
    <div className={style.textBtn}>
        <Button name='text' padding={'8px'}  borderRadius={8} mb={"8px"} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} size={'10px'} mr={'4px'} />  
        <Button name='video' padding={'8px'} borderRadius={8} mb={"8px"} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        <Button name='image' padding={'8px'} borderRadius={8} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
        <Button name='slide' padding={'8px'} borderRadius={8} borderColor={'purple'} color={'white'} backgroundColor={'#693769'} size={'10px'} />
    </div>
  </div>
  </div>
  )
}

export default AddCourseContent