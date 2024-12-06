import React from "react";
import LoginHeader from "../users/Login/LoginHeader";
import LoginForm from "../users/Login/LoginForm";
function AdminLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="admin" />
    </>
  );
}

export default AdminLogin;
