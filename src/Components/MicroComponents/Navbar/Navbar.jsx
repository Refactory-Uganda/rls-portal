import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.container}>
            <div className={style.label}>
                <h1>Refactory</h1>
            </div>
            <div className={style.text}>
                <h3>Chat</h3>
                <button className={style.btn}>Signout</button>
            </div>
    </div>
  )
}

export default Navbar