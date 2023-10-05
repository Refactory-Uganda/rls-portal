
import style from './Setting.module.css'

const Setting = () => {
  return (
    <>
       <div className={style.body}>
            <h2 className={style.header}> Setting</h2>
            <div className={style.profile}>
                <div>
                  <h5 className={style.header} >Your Avatar</h5>
                  <img  src='/images/profile.jpg' className={style.img}/>
                </div>
                <div className={style.btn}>
                 <button className={style.button}>Upload </button>
                 <button className={style.button}>Delete </button>
                </div>
            </div>
            <hr className={style.hr}/>
            <form className={style.form}>
              <div className={style.forms}>
                  <div className={style.label}>
                  <label className={style.lb}>Display Name</label>
                  <input type='text' className={style.input}  placeholder=' Input the Display Name'/>
                  </div>
                  <div className={style.label}>
                  <label className={style.lb}>Full Name</label>
                  <input type='text' className={style.input}  placeholder='Please Input the Full Name'/>
                  </div>
              </div>
              <hr className={style.hr}/>
              <div className={style.forms}>
                  <div className={style.label}>
                  <label className={style.lb}>Email address:</label>
                  <input type='email' className={style.input}  placeholder=' Input the Email address'/>
                  </div>
                  <div className={style.label}>
                  <label className={style.lb}>Phone Number:</label>
                  <input type='text'className={style.input}  placeholder=' Input the Phone Number'/>
                  </div>
              </div>
            </form>
            <hr className={style.hr}/>
            <div>
              <div>
                  <h2 className={style.header}>Linked Account</h2>
                  <h4 className={style.head}>connect your google account for easy accesibility</h4>
              </div>
              <div className={style.google}>
                <div className={style.goimg}>
                  <img src='/images/google.svg' className={style.img1}/>
                  <h3 className={style.text}>Sign in with Google</h3>
                </div>
                <div>
                <button className={style.button}>Connect </button>
                </div>
              </div>

            </div>
            <hr className={style.hr}/>
            <div>
  
              <div className={style.google}>
                <div >
                <h2 className={style.header}>Delete Account</h2>
                  <h4 className={style.head}>By deleting your account you will lose all your data</h4>
                </div>
                <div>
                <button className={style.button2}>Delete account </button>
                </div>
              </div>
            </div>
            <hr className={style.hr}/>
            <div className={style.end}>
            <button className={style.button3}>Save Change </button>
            </div>
       </div>
    </>
  )
}

export default Setting;
