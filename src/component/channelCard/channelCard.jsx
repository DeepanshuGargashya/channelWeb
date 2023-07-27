import React, { useState } from "react";

function ChannelCard({ item, performActionOnItem }) {
  // const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
      performActionOnItem("add", item);
    } else {
      performActionOnItem("remove", item);
      console.log("⛔️ Checkbox is NOT checked");
    }
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 1rem 0.5rem 1rem",
          margin: "1rem",
        }}
      >
        {/* <div> */}
        <input
          style={{ width: "1.5rem", height: "1.5rem" }}
          type="checkbox"
          value={`${item.CHANNEL_NAME}`}
          onChange={handleChange}
          id={item.PID}
          name={`${item.CHANNEL_NAME}`}
        />
        {/* </div> */}

        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 className="card-title">{`${item.CHANNEL_NAME.substring(
            0,
            18
          )}`}</h5>
          <p className="card-text">{`${item.PMRP}`}</p>
        </div>
      </div>
    </>
  );
}

export default ChannelCard;
