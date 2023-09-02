import React from "react";
import {Link} from "react-router-dom"

function Login(props) {
  return (
    <>
      <div>
        {/* Header */}
        <div className="container-fluid" id="logincontainer">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"></div>
            {/* form */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="formcontainer">
                <form action="">
                  {/* <div>
                    <img src="../public/images/IMG-20220711-WA0056 (2).jpg" alt="" className="loginimage"/>
                  </div> */}
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Enter Username"
                      id="inputtext"
                    />
                  </div>
                  <div className="inputs">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      id="inputtext"
                    />
                  </div>
                  <div className="inputs">
                    <button className="button1">Sign In</button>
                  </div>
                  <div className="inputs">
                    <p className="absentaccount">
                      If dont have an account please contract your suppervisor
                      for account and later use the details for signing in to
                      the platform , but for now you can <a href="">Cancel</a> and return to
                      the home
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"></div>
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
