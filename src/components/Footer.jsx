import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-left">
        <h3>Mailing adress</h3>
        <ul>
          <li>
            <h5>Phone</h5>
            <i className="fas fa-phone icon"></i>
            <span>+123456789</span>
          </li>
          <li>
            <h5>Email</h5>
            <i className="far fa-envelope icon"></i>
            <span>example@gmail.com</span>
          </li>
          <li>
            <h5> Fax</h5>
            <i className="fas fa-fax icon"></i>
            <span>example@faxemail.com</span>
          </li>
          <li>
            <h5>Web Site</h5>
            <i className="fas fa-globe icon"></i>
            <span>www.example.webdev.com</span>
          </li>
        </ul>
      </div>
      <div className="footer-center">
        <h3>Home adress</h3>
        <ul>
          <li>
            <h5>Name</h5>
            <i className="fas fa-user-tie  icon"></i>
            <span>Md. Shariful Islam</span>
          </li>
          <li>
            <h5>House</h5>
            <i className="far fa-home icon"></i>
            <span>BAHS, Road No-13</span>
          </li>
          <li>
            <h5> City</h5>
            <i className="fas fa-city icon"></i>
            <span>Dhaka</span>
          </li>
          <li>
            <h5>Country</h5>
            <i className="fas fa-flag icon"></i> <span>Bangladesh</span>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Social Links</h3>
        <ul>
          <li>
            <h5>Facebook</h5>
            <i className="fab fa-facebook-square facebook icon"></i>
            <span>Md. Shariful Islam</span>
          </li>
          <li>
            <h5>Twitter</h5>
            <i className="fab fa-twitter-square twitter icon"></i>
            <span>Md. Shariful Islam</span>
          </li>
          <li>
            <h5> LinkedIn</h5>
            <i className="fab fa-linkedin linkedin icon"></i>
            <span>Md. Shariful Islam</span>
          </li>
          <li>
            <h5>Instagram</h5>
            <i className="fab fa-instagram instagram icon"></i>
            <span>Md. Shariful Islam</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
