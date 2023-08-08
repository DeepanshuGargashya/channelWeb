import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../constant/constant";

function Contact({ showAlert }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    var ambId = localStorage.getItem("ambId");
    var payload = {
      ...contactData,
      ambId: ambId,
    };
    console.log(payload);

    await axios
      .post(`${API_URL}/contact`, payload)
      .then((res) => {
        if (res.data.status === 200) {
          showAlert(res.data.data, "success");
          setContactData({
            name: "",
            email: "",
            description: "",
          });
        } else {
          showAlert(res.data.data, "danger");
        }
      })
      .catch((e) => {
        showAlert("Please try again", "danger");
      });
  };
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        width: "100%",
        // backgroundColor: "red",
        marginTop: "3.5rem",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form style={{ width: "80%" }} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John doe"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={contactData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
