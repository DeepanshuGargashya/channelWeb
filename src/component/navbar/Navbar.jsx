import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  const navigate = useNavigate();
  const logoutHandle = () => {
    console.log(location);
    console.log(location.pathname);
    // localStorage.removeItem("user");
    localStorage.clear();
    navigate("/login");
  };
  const arrayOf = (data) => {
    if (data.toString().length > 0) {
      try {
        var arr = data.toString().split(",");
        return arr;
      } catch (e) {
        var arr = [data.toString()];
        return arr;
      }
    } else {
      var arr = [];
      return arr;
    }
    // console.log(arr);
  };
  const handleNext = () => {
    if (arrayOf(localStorage.getItem("selectedChannels")).length > 0) {
      navigate("/makePayment");
    } else {
      console.log("condition false");
      alert("Please Select Channel first");
    }
  };

  return (
    <div className="body">
      <nav>
        <div className="logo">
          <img
            src={require("../../assets/images/tvLogo.jpg")}
            width={50}
            height={50}
            style={{
              borderRadius: 50,
              objectFit: "cover",
              marginRight: "1rem",
            }}
          />
          <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
            <span style={{ color: "red" }}>C</span>hannel{" "}
            <span style={{ color: "greenyellow" }}>R</span>echarger&#9889;
          </h3>
        </div>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="navbar-link">
            <Link to={"/recharge"}>Recharge</Link>
          </li>
          <li className="navbar-link">
            <Link to={"/history"}>History</Link>
          </li>
          <li className="navbar-link">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          {location.pathname === "/recharge" ? (
            <div className="nav-right">
              <button
                className="btn-makePaymentt"
                title="Next"
                onClick={handleNext}
              >
                Next
                {/* <i class="bi bi-arrow-right-circle-fill"></i> */}
              </button>
            </div>
          ) : (
            ""
          )}
          {localStorage.getItem("user") ? (
            <div className="nav-right">
              <button
                className="btn-logout"
                title="Logout"
                onClick={logoutHandle}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
