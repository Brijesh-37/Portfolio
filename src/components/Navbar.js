import React from "react";
// import Brijesh from "./images/Brijesh.jpg";
import male from "./images/male.png";
import "../App.css";

const AppBar = () => {
  return (
    <div className="appbar">
      <div className="nav0">
        <nav>
          <h2 className="appbar1">
            {" "}
            Portfolio - Brijesh{" "}
            <img src={male} className="nav12" alt="bru 45" />{" "}
          </h2>
        </nav>
      </div>
    </div>
  );
};

export default AppBar;
