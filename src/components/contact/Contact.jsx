import React from "react";
import "./contact.css";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import { useState } from "react";

// const API_KEY = process.env.REACT_APP_API_KEY;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");

  //form email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm("service_eqo9ogi", "template_5nnmvts", form.current, API_KEY)
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    e.target.reset();
    setTitle("");
    setSubmitted(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  // const resetInputField = () => {
  //   setTitle("");
  // };


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
                Thank you for your message. We will be in touch with you shortly!!{" "}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
