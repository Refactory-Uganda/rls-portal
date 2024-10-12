import React from "react";
import LoginHeader from "./login/LoginHeader";
import LoginForm from "./login/LoginForm";
function AdminLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="admin" />
    </>
  );
}

export default AdminLogin;
