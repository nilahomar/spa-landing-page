/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#company">company</a>
          </li>
          <li>
            <a href="#projects">contact</a>
          </li>
        </ul>
        <div className="address">
          <p>Der Düsseldorfer Robot</p>
          <p>12345 Düsseldorf</p>
          <p>Germany</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p>&copy; Der Dusseldorfer Robot</p>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
