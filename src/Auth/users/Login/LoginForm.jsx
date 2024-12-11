import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, Snackbar, Alert, Checkbox } from "@mui/material";
import { Save } from "@mui/icons-material";
import { TextField1 } from "../../../microComponents/TextField1"; // Adjust based on your import path
import AccessInputs from "../../../microComponents/AccessInputs"; // Adjust based on your import path
import Dashboard from "../../../../src/assets/Images/refactory-IMS-dashboard.png";
import useLogin from "./hooks/useLogin";
import { LoadingButton } from "@mui/lab";
import "./assets/form-styles.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginForm(props) {
  const { error, loading, errorMessage, handleLogin, setError } = useLogin();

  // Updated validation schema
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Provide a valid email")
      .required("Enter your email"),
    password: yup.string().required("Enter your password"),
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
        Logging in
      </LoadingButton>
    ),
    false: (
      <Button
        component={Link}
        to="/learner"
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
      onSubmit={(values) => {
        handleLogin(values, props.userGroup);
      }}
    >
      {({ handleSubmit, errors, touched }) => {
        return (
          <form className="form-wrap" onSubmit={handleSubmit} method="POST">
            <div className="main-content">
              <div className="column-grid">
                <div className="column-content image-area">
                  <h1 style={{ fontSize: "36px" }}>
                    Welcome back{" "}
                    {props.userGroup.charAt(0).toUpperCase() +
                      props.userGroup.slice(1)}
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
                      placeholder="Email Address" // Placeholder text
                      size="small"
                      fullWidth
                      error={touched.email && Boolean(errors.email)} // Check for errors
                      helperText={touched.email && errors.email} // Display error message
                      sx={{
                        marginTop: "5px",
                        height: "50px",
                        position: "relative",
                        "& input": {
                          padding: "12px 0", // Adjust padding to align with the design
                        },
                        "&::before": {
                          content: '"Email Address"', // Floating label
                          position: "absolute",
                          left: "10px",
                          top: "15px",
                          color: "#aaa", // Placeholder color
                          fontSize: "14px",
                          pointerEvents: "none",
                          transition: "0.2s ease all",
                        },
                        "&:focus-within::before": {
                          top: "-10px", // Adjust position when focused
                          fontSize: "12px",
                          color: "blue", // Change color when focused
                        },
                        "&:has(input:valid)::before": {
                          top: "-10px", // Adjust position if input is valid
                          fontSize: "12px",
                          color: "blue", // Change color if input is valid
                        },
                      }}
                    />
                  </div>

                  <div className="password">
                    <AccessInputs
                      name="password"
                      placeholder="Password" // Placeholder text
                      size="small"
                      fullWidth
                      error={touched.password && Boolean(errors.password)} // Check for errors
                      helperText={touched.password && errors.password} // Display error message
                      sx={{
                        marginTop: "5px",
                        height: "50px",
                        position: "relative",
                        "& input": {
                          padding: "12px 0", // Adjust padding to align with the design
                        },
                        "&::before": {
                          content: '"Password"', // Floating label
                          position: "absolute",
                          left: "10px",
                          top: "15px",
                          color: "#aaa", // Placeholder color
                          fontSize: "14px",
                          pointerEvents: "none",
                          transition: "0.2s ease all",
                        },
                        "&:focus-within::before": {
                          top: "-10px", // Adjust position when focused
                          fontSize: "12px",
                          color: "blue", // Change color when focused
                        },
                        "&:has(input:valid)::before": {
                          top: "-10px", // Adjust position if input is valid
                          fontSize: "12px",
                          color: "blue", // Change color if input is valid
                        },
                      }}
                    />
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
