import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function LoginComponent() {
  let auth = localStorage.getItem("user");
  return !auth ? <Outlet /> : <Navigate to="/" />;
}
export default LoginComponent;
