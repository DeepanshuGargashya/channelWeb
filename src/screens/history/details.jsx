import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const [itemProp, setItemProp] = useState({});
  const [color, setColor] = useState("black");
  const colors = [
    "darkGreen",
    "black",
    "blue",
    "lightgreen",
    "grey",
    "gray",
    "darkgreen",
    "brown",
    "pink",
  ];
  const startTime = () => {
    // setInterval(() => {
    //   // setColor(Math.random(8))
    //   var vari = parseInt(Math.random(1) * 10);
    //   setColor(colors[vari]);
    // }, 3000);
  };
  useEffect(() => {
    var props = location.state;
    setItemProp(props);
  }, []);
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "6rem",
          backgroundColor: "white",
          boxShadow: "0rem 0rem 1rem grey",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: "45%", fontWeight: "bold" }}>Name</div>
          <div
            style={{
              width: "45%",
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "end",
              color: "green",
            }}
          >
            {itemProp.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: "45%", fontWeight: "bold" }}>mobile</div>
          <div
            style={{
              width: "45%",
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "end",
              color: "green",
            }}
          >
            {itemProp.mobile}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: "45%", fontWeight: "bold" }}>email</div>
          <div
            style={{
              width: "45%",
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "end",
              color: "green",
            }}
          >
            {itemProp.email}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: "45%", fontWeight: "bold" }}>Account No.</div>
          <div
            style={{
              width: "45%",
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "end",
              color: "green",
            }}
          >
            {itemProp.accNo}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: "45%", fontWeight: "bold" }}>Total Amount</div>
          <div
            style={{
              width: "45%",
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "end",
              color: "green",
            }}
          >
            &#x20B9; {itemProp.totalAmount}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ color: "gray" }}>User's Channels</h3>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Channel Name</th>
              </tr>
            </thead>
            <tbody>
              {itemProp.channels?.length > 0 &&
                itemProp.channels?.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Details;
