import React from "react";
import "./Nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const logoutHandle = () => {
    console.log(location);
    console.log(location.pathname);
    localStorage.removeItem("user");
    navigate("/login");
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
                className="btn-makePayment"
                title="Next"
                onClick={logoutHandle}
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
                <i class="bi bi-box-arrow-right"></i> Logout
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
