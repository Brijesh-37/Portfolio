import React from "react";
import "../App.css";

const Project = () => {
  return (
    <div className="container">
      <div className="pr1">
        <h3 className="pr11">Below Are Some Of My Projects</h3>
      </div>
      <div>
        <ul>
          <li className="pr2">
            <h6 className="pr23">To-Do-List</h6>{" "}
            <a
              href="https://to-do-li-st-pearl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h6>Click here To See The Project</h6>
            </a>
          </li>
          <li className="pr4">
            <h6 className="pr43">Digital clock</h6>
            <a
              href="https://digital-clock-sandy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h6>Click here To See The Project</h6>
            </a>
          </li>

          <li className="pr4">
            <h6 className="pr43">Covid-Tracker</h6>
            <a
              href="https://covid-tracker-e1ar1zzu5-brijesh-37.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h6>Click here To See The Project</h6>
            </a>
          </li>

          <li className="pr3">
            <h6 className="pr23">Portfolio</h6>
            <a
              href="https://portfolio-pearl-psi-47.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h6>Click here To See The Project</h6>
            </a>
          </li>

          <li className="pr4">
            <h6 className="pr43">Form-Validation</h6>
            <a
              href="https://form-validation-pearl-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h6>Click here To See The Project</h6>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
