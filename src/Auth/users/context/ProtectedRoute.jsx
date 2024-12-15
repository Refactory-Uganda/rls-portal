// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  // STEPS
  //Load the authenticated user
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("accessToken");

  //If there is no authenticated user, redirect to login
  if (!user || !token) {
    return <Navigate to="/" replace/>;
  }

//Redirect if user's role is not allowed
if (allowedRoles && !allowedRoles.includes(user.userGroup)) {
    const roleToRoute = {
      Administrator: "/admin",
      Staff: "/facilitator",
      Student: "/learner",
    };
    return <Navigate to={roleToRoute[user.userGroup] || "/"} replace />;
  }
  
  return children;
};

export default ProtectedRoute;
