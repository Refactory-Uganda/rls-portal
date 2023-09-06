import React from "react";
import {Link} from "react-router-dom"
import LoginCss from "./Login.module.css"


function Login(props) {
  return (
    <>
  
      <div>
        {/* Header */}
        <div className="container-fluid" id="logincontainer">
          <div className="row">
            <div className="col-xl-4 , col-lg-4 , col-md-2 , col-sm-12"></div>
            {/* form */}
            <div className="col-xl-4 , col-lg-4 , col-md-8 , col-sm-12">
              <div className={LoginCss.formcontainer}>
                <form action="">
                  <div>
                    <img src="../public/images/refactory logo.png" alt="" className={LoginCss.loginimage} />
                  </div>
                  <div className={LoginCss.inputs}>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className={LoginCss.loginUsernameInput}
                    />
                  </div>
                  <div className={LoginCss.inputs}>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className={LoginCss.loginPasswordInput}
                    />
                  </div>
                  <div className={LoginCss.inputs}>
                    <button className={LoginCss.button1}>Sign In</button>
                  </div>
                  <div className={LoginCss.inputs}>
                    <p className={LoginCss.absentaccount}>
                      If dont have an account please contract your suppervisor
                      for account and later use the details for signing in to
                      the platform , but for now you can <a href="">Cancel</a> and return to
                      the home
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 , col-lg-4 ,col-md-2 ,col-sm-12"></div>
          </div>
        </div>
        {/* Footer */}
        <div className="container-fluid" id="footercontainer">
          <div className="row">
            <div className="col">I'm your content inside the grid!</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
