import style from './AccountSetting.module.css'

const AccountSetting = () => {
  return (
    <>
       <div className={style.body}>
            <h2 className={style.header}>Acoount Setting</h2>
            <hr className={style.hr}/>
            <form className={style.form}>
              <div className={style.forms}>
                  <div className={style.label}>
                  <label className={style.lb}> Edit Display Name</label>
                  <input type='text' className={style.input}  placeholder=' Input the Display Name'/>
                  </div>
                  <div className={style.label}>
                  <label className={style.lb}>Edit Full Name</label>
                  <input type='text' className={style.input}  placeholder='Please Input the Full Name'/>
                  </div>
              </div>
              <hr className={style.hr}/>
              <div className={style.forms}>
                  <div className={style.label}>
                  <label className={style.lb}>Password:</label>
                  <input type='password' className={style.input}  placeholder=' Input the Email address'/>
                  </div>
                  <div className={style.label}>
                  <label className={style.lb}>Change Password:</label>
                  <input type='password'className={style.input}  placeholder=' Input the Phone Number'/>
                  </div>
              </div>
            </form>
            <hr className={style.hr}/>

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

export default AccountSetting