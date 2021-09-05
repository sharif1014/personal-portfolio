import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <>
     
        <div className="navbar navbar-dark bg-dark navbar-expand-md">
          <div className="navbar-brand">
            <a href="#">
              <h2>
                Developer<span> Sharif</span>
              </h2>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="#myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ml-auto">
              <a className="nav-link" href="#home">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </ul>
          </div>
        </div>
  
    </>
  );
};

export default Topbar;
