/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, Alert, Checkbox } from "@mui/material";
import { Save } from "@mui/icons-material";
import { TextField1 } from "../../../microComponents/TextField1"; // Adjust import path
import AccessInputs from "../../../microComponents/AccessInputs"; // Adjust import path
import Dashboard from "../../../../src/assets/Images/refactory-IMS-dashboard.png";
import { LoadingButton } from "@mui/lab";
import "./assets/form-styles.css";
import api from "../../../services/api";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginForm({ userGroup }) {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // Validation schema
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Provide a valid email")
      .required("Enter your email"),
    password: yup.string().required("Enter your password"),
  });

  const handleLogin = async (values) => {
    setLoading(true);
    try {
   
      const payload = {
        ...values,
        userGroup,
      };

      const response = await api.post("/authentication/login", payload);
      const { user, tokens } = response.data;

      // Save tokens and user details in local storage
      localStorage.setItem("accessToken", tokens.access_token);
      localStorage.setItem("refreshToken", tokens.refresh_token);
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate based on user group
      const roleToRoute = {
        Administrator: "/admin",
        Staff: "/facilitator",
        Student: "/learner",
      };
      window.location.replace(roleToRoute[user.userGroup] || "/");
    } catch (err) {
      setError(true);
      setErrorMessage("Invalid credentials or server error.");
    } finally {
      setLoading(false);
    }
  };

  const buttonState = {
    true: (
      <LoadingButton
        className="btnNext"
        loading
        color="secondary"
        loadingPosition="start"
        startIcon={<Save />}
        variant="contained"
        fullWidth
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          height: "50px",
          background: "#542A52",
          textTransform: "none",
          boxShadow: "none",
          marginTop: "10px",
          borderRadius: "5px",
          color: "white",
          textAlign: "center",
        }}
      >
        Logging in
      </LoadingButton>
    ),
    false: (
      <Button
        fullWidth
        type="submit"
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          height: "50px",
          background: "#542A52",
          textTransform: "none",
          boxShadow: "none",
          marginTop: "10px",
          borderRadius: "5px",
          color: "white",
          textAlign: "center",
          ":hover": {
            bgcolor: "transparent",
            color: "#542A52",
            border: "1px solid #542A52",
            boxShadow: "none",
          },
        }}
      >
        Log In
      </Button>
    ),
  }[loading];

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleLogin(values)}
    >
      {({ handleSubmit, errors, touched }) => (
        <form className="form-wrap" onSubmit={handleSubmit}>
          <div className="main-content">
            <div className="column-grid">
              <div className="column-content image-area">
                <h1 style={{ fontSize: "36px" }}>
                  Welcome back{" "}
                  {userGroup.charAt(0).toUpperCase() + userGroup.slice(1)}
                </h1>
                <img src={Dashboard} alt="signupDashboard" />
              </div>
              <div className="column-content login-area">
                {error && (
                  <Alert
                    severity="error"
                    onClose={() => setError(false)}
                    className="error-message"
                  >
                    {errorMessage}
                  </Alert>
                )}
                <div className="email">
                  <TextField1
                    name="email"
                    placeholder="Email Address"
                    size="small"
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </div>
                <div className="password">
                  <AccessInputs
                    name="password"
                    placeholder="Password"
                    size="small"
                    fullWidth
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </div>
                <div className="remember">
                  <p>
                    <Checkbox {...label} /> Remember me
                  </p>
                  <p>
                    <Link to="/user/password/forgot">Forgot Password?</Link>
                  </p>
                </div>
                {buttonState}
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
