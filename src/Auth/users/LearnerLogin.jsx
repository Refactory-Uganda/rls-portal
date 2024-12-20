import LoginForm from "./Login/LoginForm";
import LoginHeader from "./Login/LoginHeader";
function StudentLogin() {
  return (
    <>
      <LoginHeader />
      <LoginForm userGroup="Student" />
    </>
  );
}

export default StudentLogin;
