import React from "react";
import LoginHeader from "./Login/LoginHeader";
import LoginForm from "./Login/LoginForm";
function AdminLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="admin" />
    </>
  );
}

export default AdminLogin;
