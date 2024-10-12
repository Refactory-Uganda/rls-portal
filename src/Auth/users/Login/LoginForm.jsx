import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, Snackbar, Alert, Checkbox } from "@mui/material";
import { Save, Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField1 } from "../../../microComponents/TextField1";
import AccessInputs from "../../../microComponents/AccessInputs";
import Dashboard from "../../../../src/assets/Images/refactory-IMS-dashboard.png";
import useLogin from "./hooks/useLogin";

import { LoadingButton } from "@mui/lab";
import "./assets/form-styles.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginForm(props) {
  const {
    error,
    loading,
    errorMessage,
    handleLogin,
    setError,
    showPassword,
    setShowPassword,
  } = useLogin();
  const validationSchema = yup.object({
    email: yup.string().required("Required").email("Provide a valid email"),
    password: yup.string().required("Required"),
  });

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
        Signing in
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
            bgcolor: "transparent", // theme.palette.primary.main
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
      onSubmit={(values) => {
        handleLogin(values, props.userGroup);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <form className="form-wrap" onSubmit={handleSubmit} method="POST">
            <div className="main-content">
              <div className="column-grid">
                <div className="column-content image-area">
                  <b>
                    <h1 style={{ fontSize: "36px" }}>
                      Welcome back{" "}
                      {props.userGroup.charAt(0).toUpperCase() + props.userGroup.slice(1)}
                    </h1>
                  </b>
                  <img src={Dashboard} alt="signupDashboard" />
                </div>

                <div className="column-content login-area">
                  {/* <h1>Login to RLS</h1> */}
                  {error && (
                    <Alert severity="error" onClose={() => setError(false)}>
                      {errorMessage}
                    </Alert>
                  )}
                  {/* <p>
              Enter your details below to access the {props.userGroup}{" "}
              Dashboard
            </p> */}
                  <div className="email">
                    {/* <label htmlFor="emailAddress" style={{ textAlign: '' }}>
                      Email Address<span className="asterisks">*</span>
                    </label> */}
                    <TextField1
                      label="Email Address"
                      name="email"
                      placeholder="Enter a valid Email Address"
                      size="small"
                      fullWidth
                      sx={{ marginTop: "5px", height: "50px" }} />
                  </div>
                  <div className="password">
                    <AccessInputs
                      label="Password"
                      name="password"
                      placeholder="Enter a valid password"
                      size="small"
                      fullWidth
                      sx={{
                        marginTop: "5px",
                        height: "50px",
                      }} />
                  </div>
                  <div className="remember">
                    <p>
                      <span>
                        <Checkbox {...label} />
                      </span>
                      Remember me
                    </p>
                    <p>
                      <Link to="/user/password/forgot">Forgot Password?</Link>{" "}
                    </p>
                  </div>
                  {buttonState}
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
