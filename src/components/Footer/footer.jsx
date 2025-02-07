/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../../assets/logo1.png";
import titleImage from "../../assets/title.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="m2">
        <img src={logo1} width="25%" className="m5" alt="Logo" />
      </div>
      <div className="m3">
        <h1>Ready To Get Started</h1>
        <div className="m4">
          <b>
            Upcoming Events <FontAwesomeIcon icon={faArrowRight} />
          </b>
        </div>
      </div>
      <p>
        <img src={titleImage} width="20%" className="m1" alt="Title" />© 2024
        Student Activity Council. All Rights Reserved
      </p>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
