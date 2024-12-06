import React from "react";
import LoginForm from "../users/Login/LoginForm";
import LoginHeader from "../users/Login/LoginHeader";
function StudentLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="learner" />
    </>
  );
}

export default StudentLogin;
