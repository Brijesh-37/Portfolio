import React from "react";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import email from "./images/email.png";
import callme from "./images/callme.png";

const AboutMe = () => {
  return (
    <div className="container">
      <div>
        <h4>You Can Contact me On Below PlatForms</h4>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <a
                href="https://www.instagram.com/brijeshd369/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="bru012" />
              </a>
            </div>{" "}
            InstaGram
          </li>
          <li>
            {" "}
            <div>
              <a
                href="https://www.facebook.com/brijesh.dudhbhate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="bru789" />
              </a>
            </div>{" "}
            Facebook{" "}
          </li>
          <li>
            <div>
              <a
                href="https://github.com/Brijesh-37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="bry456" />
              </a>
            </div>{" "}
            GitHub
          </li>
          <li>
            <div>
              <a href="mailto:brijeshdudhbhategmail.com">
                {" "}
                <div>
                  <img src={email} alt="bru121" />
                </div>
                Email - brijeshdudhbhate@gmail.com
              </a>
              {/* <a href="mailto:brijeshdudhbhate@gmail.com"></a> */}
            </div>{" "}
          </li>
          <li>
            <div>
              {" "}
              <img src={callme} alt="bru666" />
            </div>
            Mobile number - 9421115816
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
