import LoginForm from "./Login/LoginForm";
import LoginHeader from "./Login/LoginHeader";
function StaffLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="Staff" />
    </>
  );
}

export default StaffLogin;
