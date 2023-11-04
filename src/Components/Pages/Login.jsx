import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginCss from "./Login.module.css";
import Footer from "../MicroComponents/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setPassword(""),
    setUsername("")
    try {
       const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      
      if (response.data.role === "Admin") {
        navigate("/admin");
      } else if  (response.data.role === "Facilitator"){
        navigate("/admin/facilitator");
      }
      else if  (response.data.role === "Student"){
        navigate("/student/landingPage");
      }
     
      
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div>
      <div className={LoginCss.LoginDiv3}>
        {/* Header */}
        <div className="container-fluid" id="logincontainer">
          <div className="row">
            <div className="col-xl-4 , col-lg-4 , col-md-2 , col-sm-12"></div>
            {/* form */}
            <div className="col-xl-4 , col-lg-4 , col-md-8 , col-sm-12">
              <div className={LoginCss.formcontainer}>
                <form onSubmit={handleLogin}>
                  <div>
                    <img
                      src="../images/refactory logo.png"
                      alt=""
                      className={LoginCss.loginimage}
                    />
                  </div>
                  <div className={LoginCss.inputs}>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className={LoginCss.loginUsernameInput}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className={LoginCss.inputs}>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className={LoginCss.loginPasswordInput}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className={LoginCss.login}>
                    <button className={LoginCss.button1} >Sign In</button>
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
            <div className="col" id={LoginCss.footer}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
