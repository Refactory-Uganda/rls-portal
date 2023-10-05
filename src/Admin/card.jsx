import style from './Card.module.css'

const Card = () => {
  return (
    <div className={style.container}>
        <div className={style.el}>
            <div className={style.card}>
                <div className={style.img}>
                    
                    <img src='images/profile.jpg' />
                </div>
                
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            
            
            
          
        </div>
        <div className={style.el}>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            <div className={style.card}>
                <img src='images/profile.jpg' />
                <h3>Electronics</h3>
            </div>
            
            
            
          
        </div>
       
    </div>
  )
}

export default Card