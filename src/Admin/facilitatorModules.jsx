import Button from '../Components/Button';
import style from './facilitatorModules.module.css';


const FacilitatorModules = () => {
  return (
    <div className={style.body}>
        <div className={style.box}>
            <h3>JACKSON MC</h3>
            <Button name='SAVE' pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
        </div>
        <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
    </div>
  )
}

export default FacilitatorModules