import React from "react";
import "./company.css";
import Robot3 from "../../assets/about-robot.png";

function Company() {
  return (
    <section id="company">
      <h2>LIVE SMART, LIVE EASY</h2>
      <p className="company_about_content">
        Since it was founded in 2013, Der Düsseldorfer Robot has become a
        leading enterprise in the field of smart home appliances. It is
        dedicated to providing global users with the best solutions, products,
        and services regarding smart home appliances to help every family
        improve their quality of life.
      </p>
      <div className="company_container">
        <div className="about_description">
          <div className="about_content">
            <article className="about_details">
              <p>
                We have always been exploring what a simple and intelligent home
                appliance brand should have, which is exactly why Der
                Düsseldorfer Robot was founded. We firmly believe that
                scientific and technological founded.
              </p>
              <p>
                We firmly believe that scientific and technological innovation
                is originated from life and applied in life. We aim to use the
                power of technology to make life easier, smarter, and more
                efficient.
              </p>
            </article>
          </div>
        </div>

        <div className="about_image">
          <img src={Robot3} alt="Robot in the living room" />
        </div>
      </div>
    </section>
  );
}

export default Company;
