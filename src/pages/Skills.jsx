import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <>
      <div className="skill-container mt-3">
        <h2>I am quite experienced about these fields</h2>
        <ul>
          <li className="html">
            <h4>html5:</h4>
            <div className="progress">
              <div
                className="progress-bar w-100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="10"
                aria-valuemax="100"
              ><span>75%</span></div>
            </div>
          </li>
          <li className="css">
            <h4>CSS3:</h4>
            <div className="progress">
              <div
                className="progress-bar w-100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="10"
                aria-valuemax="100"
              ><span>60%</span></div>
            </div>
          </li>
          <li className="bootstrap">
            <h4>bootstrap4:</h4>
            <div className="progress">
              <div
                className="progress-bar w-100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="10"
                aria-valuemax="100"
              ><span>55%</span></div>
            </div>
          </li>
          <li className="jquery">
            <h4>jquery:</h4>
            <div className="progress">
              <div
                className="progress-bar w-100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="10"
                aria-valuemax="100"
              ><span>50%</span></div>
            </div>
          </li>
          <li className="react">
            <h4>react js:</h4>
            <div className="progress">
              <div
                className="progress-bar w-100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="10"
                aria-valuemax="100"
              ><span>65%</span></div>
            </div>
          </li>
          <li className="node">
            <h4>node js:</h4>
            <div className="progress">
              <div
                className="progress-bar w-100"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="10"
                aria-valuemax="100"
              > <span>60%</span></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
