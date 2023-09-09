import { FaEllipsisH, FaEllipsisV, FaPlusSquare, FaTrash } from 'react-icons/fa';
import Button from '../Components/Button';
import style from './facilitatorModules.module.css';
import { useState } from 'react';



const FacilitatorModules = () => {
    const [showIcons, setShowIcons] = useState(false);
    const toggleIcons = () => {
        setShowIcons(!showIcons);
      };
  return (
    <div className={style.body}>
        <div className={style.box}>
                <h4 className={style.text} >JACKSON Mc</h4>
                <Button name='SAVE' pr={40} pl={40} mr={'8px'} borderRadius={10} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}   />
        </div>
        <hr style={{background: '#693769',color:"#693769", borderColor: '#693769',height: '3px', width: '100%'}}/>
        <div className={style.btns}>
            <div className={style.contain}>
                <div className={style.icon}>
                    <img src='/images/IMG-20220711-WA0056 (2).jpg' alt='Icon_img' className={style.img} />
                    <p className={style.texts}>sarahnadianekwu@gmail.com</p>
                </div>
                <FaEllipsisV />
            </div>
            <div className={style.container}>
                <div className={style.start} >
                    <div className={style.label}>
                        <label>NAME:</label>
                        <p className={style.text2}>Jack Jackson</p>
                    </div>
                    <div className={style.label}>
                        <label>USER NAME:</label>
                        <p className={style.text2}>Jjackack@refactory.academy</p>
                    </div>
                    <div className={style.label}>
                        <label>ID:</label>
                        <p className={style.text2}>RFC234567877fdrg3556</p>
                    </div>
                    <div className={style.label}>
                        <label>PASSWORD:</label>
                        <p className={style.text2}>JACK.......2020</p>
                    </div>

                </div>
                <div className={style.end}>
                    <FaEllipsisH className={`${showIcons ? 'active' : ''}`} onClick={toggleIcons} />
                    <div className={`${style.icons} ${showIcons ? '' : style.iconsHidden}`}>
                        <FaPlusSquare />
                        <FaTrash />
                    </div>
                </div>
            </div>
            <div className={style.container2}>
                    <h2 className={style.text3}>COURSES FACILITATED</h2>
                    <div className={style.courses}>
                        <h4 className={style.text4}>UI/UX</h4>
                        <Button name='REMOVE UPLOAD RIGHTS' pt={20} pb={20} pr={34} pl={34} mr={'8px'} borderRadius={5} borderColor={'purple'} color={'white'} backgroundColor={'#693769'}  />
                        <Button name='REMOVE COURSE' pt={20} pb={20} pr={66} pl={66} mr={'8px'} borderRadius={2} borderColor={'#58C5C8'} color={'black'} backgroundColor={'#58C5C8'} /> 
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default FacilitatorModules