import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Alert from "../component/Alert";
function AuthComponent(props) {
  let auth = localStorage.getItem("user");
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: 0,
          margin: 0,
          zIndex: 2,
        }}
      >
        <Navbar />
        <Alert alert={props.alert} />
      </div>

      {auth ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}
export default AuthComponent;
