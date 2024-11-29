import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LoginApiClient from "../apiClient";

function useLogin() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = navigate.state?.from?.pathname || { pathname: "/" };
  const login = new LoginApiClient();

  const handleLogin = async (values, user_group) => {
    setError(false);
    setLoading(true);
    const response = await login.request(values, user_group);
    if (response.status === 200) {
      Cookies.remove("refresh_token");
      Cookies.remove("access_token");
      Cookies.remove("user");
      Cookies.set("refresh_token", response.data.tokens.refresh_token);
      Cookies.set("access_token", response.data.tokens.access_token);
      Cookies.set("user", JSON.stringify(response.data.user));
      if (user_group === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else if (user_group === "staff") {
        navigate("/facilitatorDashboard", { replace: true });
      } else if (user_group === "student") {
        navigate("/studentDashboard", { replace: true });
      }
    } else {
      if (response.response) setErrorMessage(response.response.data.message);
      else {
        setErrorMessage("An Error occured!");
      }
      setError(true);
    }
    setLoading(false);
  };
  return {
    error,
    loading,
    errorMessage,
    handleLogin,
    setError,
    showPassword,
    setShowPassword,
  };
}

export default useLogin;
