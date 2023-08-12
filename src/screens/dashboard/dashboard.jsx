import React from "react";

function Dashboard() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              width={"100%"}
              style={{ width: "100%", height: "30rem", opacity: 0.8 }}
              src={
                "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: "100%", height: "30rem", opacity: 0.8 }}
              src={
                "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: "100%", height: "30rem", opacity: 0.8 }}
              src={
                "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <h4 style={{ color: "green", textDecoration: "underline" }}>
          <b>Channel Recharger</b>
        </h4>
      </div>
      <div>
        <div
          class="card-group"
          style={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            opacity: "0.8",
          }}
        >
          <div class="card" style={{ borderRadius: 35 }}>
            <img
              style={{ height: "50vh" }}
              src="https://unsplash-assets.imgix.net/unsplashplus/why-grid-a.webp?auto=format&fit=crop&h=1527&q=75"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Instant Cable TV Recharge Online Service
              </h5>
              <p class="card-text">Let's Get Your Cable TV Recharge Done!</p>
              <p class="card-text"></p>
            </div>
          </div>
          <div class="card" style={{ borderRadius: 35 }}>
            <img
              style={{ height: "50vh" }}
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Recharge1 Trust</h5>
              <p class="card-text">
                Your money is yours! All refunds come into your Recharge1 wallet
                with 100% assurance
              </p>
            </div>
          </div>
          <div class="card" style={{ borderRadius: 35 }}>
            <img
              style={{ height: "50vh" }}
              src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">solid protection</h5>
              <p class="card-text">
                We protect your data using Symantec Antivirus and high level of
                encryption using EV SSL. And do not share your details with any
                other.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "20vh",
          backgroundColor: "lightgray",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <h3>Payment Methods</h3>
        <img
          style={{
            height: "15vh",
            width: "100%",
            marginBottom: "15px",
            marginTop: "10px",
          }}
          src="https://www.shutterstock.com/image-vector/kerala-india-may-08-2023-260nw-2304421791.jpg"
          alt=""
        />
      </div>
      <hr />
    </>
  );
}

export default Dashboard;
