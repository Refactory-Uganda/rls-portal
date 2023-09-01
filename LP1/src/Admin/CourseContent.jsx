
import Button from '../Components/Button';
import style from './CourseContent.module.css';

const CourseContent = () => {
  return (
    <div>
      <div className={style.body}>
        <Button name='Materials' padding={'15px'} borderRadius={5} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} />  
        <Button name='Details' padding={'15px'} borderRadius={5} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'}  />
        <Button name='Entrolled' padding={'15px'} borderRadius={5} borderColor={'#58C5C8'} color={'black'} backgroundColor={'purple'}  />
    </div>
    </div>
  )
}

export default CourseContent