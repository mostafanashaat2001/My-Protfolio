import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-brands-svg-icons";
import {
  faHouseChimney,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Skills } from "./skills";

export default function About() {
  return (
    <>
      <div className="about container">
        <div className="row skills-row">
          <h1 className="skills title">Technical Skills</h1>
          {Skills.map((skill) => {
            return (
              <div
                className="skills-container col-md-3 col-lg-2 col-6"
                key={skill.id}
              >
                <img className="icons" src={skill.image} alt=".." />
                <h3>{skill.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="">
          <h1 className="title">Background Knowledge</h1>
          <p className="sub-title">
            knowledge (Languages, Compilers, Algorithms, Network, Quality
            Assurance, Analysis, Testing, Databases, DBMS, Data Structure ,
            Problem Solving , Logic Thinking) acquired thru university.
          </p>
          <p className="sub-title">
            I am familiar with REST API, Hosting, and UI/UX technologies, and I
            am proficient in working with <span>Git and GitHub</span>.
          </p>
        </div>
        <div className="row pt-4">
          <div className="col-lg-6">
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
          <div className=" col-lg-6">
            <h1 className="title">Education</h1>

            <p className="sub-title">
              <span>Bachelor of Computer Science Helwan University, </span>GPA:
              2.86 BA in computer Science with degree ( B ) Graduation Project (
              Real-estate project ) With degree ( A )
            </p>
          </div>
          <div className="col-lg-6">
            <h1 className="title">Languages</h1>
            <ul>
              <li className="sub-title">Arabic : Native</li>
              <li className="sub-title">English : Very Good</li>
            </ul>
          </div>
          <div className="col-lg-6">
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
        </div>
      </div>
    </>
  );
}
