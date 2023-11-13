import style from './AccountSetting.module.css'
import  { useState } from 'react';
import axios from 'axios';

const AccountSetting = () => {
    const [format, setFormat] = useState({
      username: "",
      email:"",
      fullname:"",
      phone: "",
    });
    const [selectedFile, setSelectedFile] = useState();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormat(prevState => ({...prevState, [name]: value}));
    };
  
    const handleFileUpload = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('username', format.username);
      formData.append('fullname', format.fullname);
      formData.append('email', format.email);
      formData.append('phone', format.phone);
  
      try {
        const response = await axios.put('/api/user', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleDelete = async () => {
      try {
        const response = await axios.delete('/api/user');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
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
            <input type="file" onChange={handleFileUpload} />
            <button className={style.button} onClick={handleUpdate}>Update Profile</button>
            <button className={style.button2} onClick={handleDelete}>Delete Account</button>
          </div>
        </div>
        <hr className={style.hr}/>
        <form className={style.form} onSubmit={handleUpdate}>
          <div className={style.forms}>
            <div className={style.label}>
              <label className={style.lb}>Username</label>
              <input type='text' name='username' className={style.input}  placeholder=' Input the Username' value={format.username} onChange={handleChange}/>
            </div>
            <div className={style.label}>
              <label className={style.lb}>Full Name</label>
              <input type='text' name='fullname' className={style.input}  placeholder='Please Input the Full Name' value={format.fullname} onChange={handleChange}/>
            </div>
          </div>
          <hr className={style.hr}/>
          <div className={style.forms}>
            <div className={style.label}>
              <label className={style.lb}>Email address:</label>
              <input type='email' name='email' className={style.input}  placeholder=' Input the Email address' value={format.email} onChange={handleChange}/>
            </div>
            <div className={style.label}>
              <label className={style.lb}>Phone Number:</label>
              <input type='text' name='phone' className={style.input}  placeholder=' Input the Phone Number' value={format.phone} onChange={handleChange}/>
            </div>
          </div>
          <hr className={style.hr}/>
          <div className={style.forms}>
            <div className={style.label}>
              <label className={style.lb}>Password:</label>
              <input type='email' name='email' className={style.input}  placeholder=' Input the Email address' value={format.email} onChange={handleChange}/>
            </div>
            <div className={style.label}>
              <label className={style.lb}>Set Password:</label>
              <input type='text' name='phone' className={style.input}  placeholder=' Input the Phone Number' value={format.phone} onChange={handleChange}/>
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
            
           
       </div>
    </>
  )
}

export default AccountSetting