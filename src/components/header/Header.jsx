import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container intro">
      <div className="intro_wrapper">
        <div>
          <h1 className="intro_name">Der Düsseldorfer Roboter</h1>
        </div>
        <div>
          <h3 className="intro_description">
            The world's number 1 manufacturer of vacuum robots
          </h3>
        </div>

        <div className="cta">
          <a href="#products" className="btn btn_primary">
            Check out our products
          </a>
        </div>
        <div className="moving_arrow"></div>
        <div className="moving_arrow"></div>
      </div>
    </div>
  );
}

export default Header;
