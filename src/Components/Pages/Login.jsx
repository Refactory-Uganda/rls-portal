import React from "react";
import {Link} from "react-router-dom"
import LoginCss from "./Login.module.css"
import Footer from "../MicroComponents/footer/Footer";
import  {useState, useEffect } from "react";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 

  const handleLogin = async(e) =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/login", {
    username:username,
    password:password
    })
      setUsername("")
      setPassword("")
    }
    catch(error) {
          console.error(error.message)
    }
  }
  
  return (
    <div>
  
      <div  className={LoginCss.LoginDiv3}>
        {/* Header */}
        <div className="container-fluid" id="logincontainer">
          <div className="row">
            <div className="col-xl-4 , col-lg-4 , col-md-2 , col-sm-12"></div>
            {/* form */}
            <div className="col-xl-4 , col-lg-4 , col-md-8 , col-sm-12">
              <div className={LoginCss.formcontainer}>
                <form onSubmit={handleLogin}>
                  <div>
                    <img src="../images/refactory logo.png" alt="" className={LoginCss.loginimage} />
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
            <div className="col" id={LoginCss.footer}><Footer/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
