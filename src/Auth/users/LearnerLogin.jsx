import React from "react";
import LoginForm from "./login/LoginForm";
import LoginHeader from "./login/LoginHeader";
function StudentLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="learner" />
    </>
  );
}

export default StudentLogin;
