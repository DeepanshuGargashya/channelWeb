import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
function AuthComponent() {
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
      </div>

      {auth ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}
export default AuthComponent;
