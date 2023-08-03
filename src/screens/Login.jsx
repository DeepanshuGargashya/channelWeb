import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { API_URL } from "../constant/constant";

export default function Login() {
  const Navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    mobile: "",
  });
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleVerifyOtp = async () => {
    if (otp.length === 4) {
      var payload = {
        id: userId,
        otp: otp,
      };
      await axios
        .post(`${API_URL}/auth/verifyotp`, payload)
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("user", true);
            localStorage.setItem("ambId", res.data.data._id);
            Navigate("/");
          } else {
            alert(res.data.data);
          }
        })
        .catch((e) => {
          alert("Please try again later");
        });
    } else {
      alert("enter valid otp");
    }
  };

  const handleSubmit = async () => {
    // console.log(handleSubmit)
    if (
      (credentials.email.length > 0 &&
        credentials.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )) ||
      (credentials.mobile.length === 10 &&
        credentials.mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/))
    ) {
      var payload = {
        email: credentials.email.toString(),
        mobile: credentials.mobile.toString(),
      };
      await axios
        .post(`${API_URL}/auth/sendotp`, payload)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            // console.log(res.data.data);
            setVerifyOtp(true);
            setUserId(res.data.data);
          } else {
            alert(`${res.data.data}`);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Please try again later");
        });
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "3rem",
          width: "70%",
          background: "white",
          boxShadow: "0rem 0rem 2rem grey",
          padding: "3rem 3rem 3rem 3rem",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            marginBottom: "2rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3 style={{ color: "lightblue", fontWeight: "bold" }}>
            Ambassador Pannel
          </h3>
        </div>
        {verifyOtp && userId.length > 4 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OtpInput
              value={otp}
              containerStyle={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              inputStyle={{ width: "3rem" }}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>&nbsp;&nbsp;</span>}
              renderInput={(props) => <input {...props} />}
            />
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                href=""
              >
                Go Back
              </a>
            </div>
          </div>
        ) : (
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div>
              <p
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                OR
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Mobile
              </label>
              <input
                minLength={10}
                type="number"
                className="form-control"
                name="mobile"
                value={credentials.mobile}
                onChange={handleChange}
              />
            </div>
          </form>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => (!verifyOtp ? handleSubmit() : handleVerifyOtp())}
      >
        {!verifyOtp ? "Send otp" : "verify otp"}
      </button>
    </div>
  );
}
