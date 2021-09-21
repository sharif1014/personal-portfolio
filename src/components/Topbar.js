import React from "react";
import { Link } from "react-router-dom";
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
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              
              <Link className="nav-link" to="/services">
                Services
              </Link>
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
  
    </>
  );
};

export default Topbar;