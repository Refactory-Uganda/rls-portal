/* eslint-disable no-unused-vars */
import { Button, Grid } from "@mui/material";
import React from "react";
import "../Login/style.css";
import logo from "../assets/images/login-logo.png";
import { Link } from "react-router-dom";
export default function LoginWelcome() {
  return (
    <div className="bg-content">
      <Grid className="content-container">
        <div className="contents">
          <img src={logo} alt="logo" className="login-logo" />
          <br />
          <h1> Welcome to the Refactory-LS. </h1>
          <br />
          {/* <p className="caption">
            Are you a refactory Facilitator, <br /> click button below to continue
          </p> */}
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              fontSize: "20px",
              padding: "0px 100px",
              fontWeight: "600",
              background: "transparent",
              border: "1px solid #542A52",
              textTransform: "none",
              boxShadow: "none",
              marginTop: "10px",
              borderRadius: "50px",
              color: "#542A52",
              textAlign: "center",
              ":hover": {
                bgcolor: "#542A52", // theme.palette.primary.main
                color: "white",
                border: "none",
              },
            }}
          >
            Facilitator
          </Button>
          {/* <p className="caption">
            Are you a Learner,
            <br />
            click button below to continue
          </p> */}
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              fontSize: "20px",
              padding: "0px 100px",
              fontWeight: "600",
              background: "#542A52",
              textTransform: "none",
              boxShadow: "none",
              marginTop: "10px",
              borderRadius: "50px",
              color: "",
              textAlign: "center",
              ":hover": {
                bgcolor: "transparent", // theme.palette.primary.main
                color: "#542A52",
                border: "1px solid #542A52",
                boxShadow: "none",
              },
            }}
          >
            Learner
          </Button>

          {/* <p className="caption">
            Are you an Admin,
            <br />
            click button below to continue
          </p> */}
          <Button
            component={Link}
            to="/admin/login"
            variant="contained"
            sx={{
              fontSize: "20px",
              padding: "0px 100px",
              fontWeight: "600",
              background: "#542A52",
              textTransform: "none",
              boxShadow: "none",
              marginTop: "10px",
              borderRadius: "50px",
              color: "",
              textAlign: "center",
              ":hover": {
                bgcolor: "transparent", // theme.palette.primary.main
                color: "#542A52",
                border: "1px solid #542A52",
                boxShadow: "none",
              },
            }}
          >
            Admin
          </Button>
          
        </div>
      </Grid>
    </div>
  );
}
