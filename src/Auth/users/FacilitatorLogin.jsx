import React from "react";
import LoginForm from "../users/Login/LoginForm";
import LoginHeader from "../users/Login/LoginHeader";
function StaffLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="facilitator" />
    </>
  );
}

export default StaffLogin;
