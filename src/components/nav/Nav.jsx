/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { SiAbbrobotstudio } from "react-icons/si";

import { useState } from "react";
import { useRef } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const inputElement = useRef();

  const focusInput = () => {
    if (inputElement.current.style.display === "flex") {
      inputElement.current.style.display = "none";
    } else {
       inputElement.current.style.display = "flex";
    }
  };

  return (
    <div className="topnav">
      <nav className="navbar">
        <div>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={`logo ${activeNav === "#" ? "active" : ""}`}
          >
            <SiAbbrobotstudio />
          </a>
        </div>

        <div ref={inputElement} className="navbar_opt">
          <a
            href="#products"
            onClick={() => setActiveNav("#products")}
            className={`"myLinks" ${activeNav === "#products" ? "active" : ""}`}
          >
            Products
          </a>
          <a
            href="#company"
            onClick={() => setActiveNav("#company")}
            className={`"myLinks" ${activeNav === "#company" ? "active" : ""}`}
          >
            Company
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={`"myLinks" ${activeNav === "#contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </div>
      </nav>
      <a href={void(0)} className="icon" onClick={focusInput}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Nav;
