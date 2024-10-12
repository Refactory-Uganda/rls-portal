import React from "react";
import LoginForm from "./login/LoginForm";
import LoginHeader from "./login/LoginHeader";
function StaffLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="facilitator" />
    </>
  );
}

export default StaffLogin;
