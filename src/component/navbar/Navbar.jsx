import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Navbar() {
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
            <Link to={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link to={"/recharge"}>
              <a>Recharge</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link to={"/history"}>
              <a>History</a>
            </Link>
          </li>
          <li className="navbar-link">
            <Link to={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
