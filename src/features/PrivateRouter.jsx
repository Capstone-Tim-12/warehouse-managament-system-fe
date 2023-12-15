import React from "react";
import { Navigate } from "react-router-dom/dist";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    console.log("hihii", token);
    return <Navigate to="/admin/login-admin" />;
  }

  return children;
}

export default PrivateRoute;
