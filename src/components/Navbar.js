import React from "react";
import Brijesh from "./images/Brijesh.jpg";

const AppBar = () => {
  return (
    <div>
      <div className="nav0">
        <nav>
          <h2> Portfolio - Brijesh </h2>
        </nav>

        <div className="bru0">
          <a className="navbar-brand" href="/">
            <div className="bru1">
              <img src={Brijesh} className="img-fluid" alt="bru" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
