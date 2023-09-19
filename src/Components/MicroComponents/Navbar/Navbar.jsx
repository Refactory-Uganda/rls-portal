import style from './Navbar.module.css';

const Navbar = ({label}) => {
  return (
    <div className={style.container}>
            <div className={style.label}>
                <h1>Facilitators</h1>
            </div>
            <div className={style.text}>
                <h3 className={style.txt}>Chart</h3>
                <button className={style.btn}>Signout</button>
            </div>
    </div>
  )
}

export default Navbar