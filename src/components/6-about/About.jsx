import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-brands-svg-icons";
import {
  faHouseChimney,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <>
      <div className="about container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <h1 className="title">Contact</h1>
            <ul>
              <li className="sub-title">
                <i>
                  <FontAwesomeIcon icon={faHouseChimney} />
                </i>
                Shobra , Cairo
              </li>
              <li className="sub-title">
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                +201149156825
              </li>
              <li className="sub-title">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                mostafa.nashaat2001@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1 className="title">Education</h1>

            <p className="sub-title">
              <span>Bachelor of Computer Science Helwan University, </span>GPA:
              2.86 BA in computer Science with degree ( B ) (IS Major ,CS Minor)
              Graduation Project ( Real-estate project ) With degree ( A )
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1 className="title">Languages</h1>
            <ul>
              <li className="sub-title">Arabic : Native</li>
              <li className="sub-title">English : Very Good</li>
            </ul>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6 col-lg-4">
            <h1 className="title">Technical Skills</h1>
            <p className="sub-title">
              HTML & CSS & Javascript & Bootstrap & React JS & Redux & Jest
              Testing & Wordpress & Github
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1 className="title">Experience</h1>
            <p className="sub-title">
              <span>Freelancer : </span>Front End Developer I Modified some
              native and React projects like fixing errors, and adding new
              features.
            </p>
            <p className="sub-title">
              <span>Codeinger : </span>Web development instructor.
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1 className="title">Knowledge</h1>
            <p className="sub-title">
              knowledge (languages, compilers, algorithms, analysis, programming
              structure , problem solving , logic thinking) acquired thru
              university and I am familiar with REST API, Hosting and UI/UX
              technologies and I am proficient in working with Git and Github
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
