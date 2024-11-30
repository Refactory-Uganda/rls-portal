import { Button, Grid } from "@mui/material";
import React from "react";
// import "./style.css";
import logo from "../../assets/images/login-logo.png";
import { userGroups } from "../../Auth/users/Login/userGroups";
import { Link } from "react-router-dom";

export default function LoginWelcome() {
  return (
    <div className="bg-content">
      <Grid className="content-container">
        <div className="contents">
          <img src={logo} alt="logo" className="login-logo" />
          <h1> Welcome to the Refactory-LS </h1>
          <br /> <br /> <br />
          {userGroups.map((role, index) => {
            return (
              <React.Fragment key={index}>
                <p className="caption">
                  {/* {role.info} <br /> click button below to continue */}
                </p>
                <Button
                  component={Link}
                  to={role.to}
                  variant="contained"
                  sx={{
                    fontSize: "20px",
                    padding: "0px 100px",
                    fontWeight: "600",
                    background: "#542A52",
                    textTransform: "capitalize",
                    boxShadow: "none",
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
                  {role.role}
                </Button>
              </React.Fragment>
            );
          })}
        </div>
      </Grid>
    </div>
  );
}
