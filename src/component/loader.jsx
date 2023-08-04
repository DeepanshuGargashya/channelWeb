import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="loader">
      <div className="loading">
        {/* <img src={require("./../assets/images/loader.gif")} /> */}
        <marquee behavior="scroll" direction="right" scrollamount="50">
          <img src={require("./../assets/images/goku.gif")} />
        </marquee>
      </div>
    </div>
  );
}

export default Loader;
