import LoginCss from "../Admin/AdminProfile.module.css"
import TextField from '@mui/material/TextField';
import Navbar from "../Components/MicroComponents/Navbar/Navbar";


function Profile() {
  return (
    <>
    {/* <Navbar label={' ADMIN PROFILE'} /> */}
      <div  className={LoginCss.LoginDiv3}>
        <div className="container-fluid" id="logincontainer">
          <div className="row">
            <div className="col-xl-4 , col-lg-4 , col-md-8 , col-sm-12">
              <div className={LoginCss.formcontainer}>
                <form action="">
                  <div>
                    <img src="../images/profile.jpg" alt="" className={LoginCss.loginimage} />
                  </div>
                  <div className={LoginCss.inputs}>
                  <TextField id="standard-basic" label="User Name" variant="standard" />
                  </div>
                  <div className={LoginCss.inputs}>
                  <TextField id="standard-basic" label="Password" variant="standard" />
                  </div>
                  <div className={LoginCss.inputs}>
                  <TextField id="standard-basic" label="Role" variant="standard" />
                  </div>
                  <div className={LoginCss.inputs}>
                  <TextField id="standard-basic" label="ID" variant="standard" />
                  </div>
                  <div className={LoginCss.inputs}>
                    <button className={LoginCss.button1}>SAVE</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 , col-lg-4 ,col-md-2 ,col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
