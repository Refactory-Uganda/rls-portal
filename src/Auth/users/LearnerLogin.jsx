import React from "react";
import LoginForm from "./Login/LoginForm";
import LoginHeader from "./Login/LoginHeader";
function StudentLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="learner" />
    </>
  );
}

export default StudentLogin;
