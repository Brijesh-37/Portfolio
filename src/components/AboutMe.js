import React from "react";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import email from "./images/email.png";
import callme from "./images/callme.png";
import "../App.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="ab1">
        <h4>You Can Contact me On Below PlatForms</h4>
      </div>
      <div className="ab2">
        <ul>
          <div className="ab3">
            <a
              href="https://www.instagram.com/brijeshd369/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="imgab1" alt="bru012" />
            </a>
            InstaGram
          </div>{" "}
          <div className="ab4">
            <a
              href="https://www.facebook.com/brijesh.dudhbhate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="bru789" className="imgab2" />
            </a>
            Facebook{" "}
          </div>{" "}
          <div className="ab5">
            <a
              href="https://github.com/Brijesh-37"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="bry456" className="imgab3" />
            </a>
            GitHub
          </div>{" "}
          <div className="ab6">
            <a href="mailto:brijeshdudhbhategmail.com">
              {" "}
              <img src={email} alt="bru121" className="imgab4" />
            </a>
            Email - brijeshdudhbhate@gmail.com
            {/* <a href="mailto:brijeshdudhbhate@gmail.com"></a> */}
          </div>{" "}
          <div className="ab7">
            {" "}
            <img src={callme} alt="bru666" className="imgab5" />
            Mobile number - 9421115816
          </div>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
