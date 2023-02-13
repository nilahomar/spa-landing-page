import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  //form email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_eqo9ogi", "template_5nnmvts", form.current, API_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <section id="contact">
      <h2>Contact Support</h2>
      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
            onClick={() => setSubmitted(false)}
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            id="message"
            name="message"
            rows="10"
            placeholder="Your Message"
            value={title}
            onChange={handleTitleChange}
            required
          >
            {title}
          </textarea>
          <button id="contact-submit" type="submit" className="btn btn_primary">
            Send Message
          </button>
          {submitted && (
            <div className="success-message">
              <p>
                Hey, {name.toLocaleUpperCase()}. Thanks for your message{" "}
                <span role="img" aria-label="smile">
                  😊
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;