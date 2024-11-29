import SignUpLogo from "../../../../src/assets/Images/staff-logo.png";

const LoginHeader = () => {
  return (
    <nav className="appBar">
      <img src={SignUpLogo} alt="Logo" className="nav-logo" />
    </nav>
  );
};
export default LoginHeader;
