/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import titleImage from "./title.png"; // Ensure the image is inside public/images

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header ref={dropdownRef}>
      <div className="logo">
        <img src={titleImage} alt="Logo" />
      </div>
      <nav>
        <ul className={`navbar ${menuActive ? "active" : ""}`}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li
            className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown(1);
            }}
          >
            <a href="#" className="dropdown-toggle">
              EVENTS <span className="caret">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">UpComing / Present</a>
              </li>
              <li>
                <a href="#">Past</a>
              </li>
            </ul>
          </li>
          <li
            className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown(2);
            }}
          >
            <a href="#" className="dropdown-toggle">
              CLUBS <span className="caret">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Technical Club</a>
              </li>
              <li>
                <a href="#">Film & Music</a>
              </li>
              <li>
                <a href="#">EDC</a>
              </li>
              <li>
                <a href="#">Sports & Games</a>
              </li>
              <li>
                <a href="#">Cultural & Literacy</a>
              </li>
              <li>
                <a href="#">Digital Media</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">TEAM</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
