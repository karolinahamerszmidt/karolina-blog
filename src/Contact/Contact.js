import React from "react";
import "./Contact.css";

export const Contact = () => (
  <div className="Contact__title">
    <div className="Contact__titleTitle">Get In Touch</div>
    <div className="Contact__titleText">
      If you have any questions or want to get in contact, please use the form
      below.
    </div>

    <form className="Contact__form">
      <input className="Contact__formFirstName" placeholder="First name" />
      <input className="Contact__formLastName" placeholder="Last name" />
      <input className="Contact__formEmail" placeholder="Email" />
      <textarea
        className="Contact__formMessage"
        placeholder="Message"
        rows={10}
      />
      <div className="Contact__formButton">
        <button className="Contact__formButtonButton">Send</button>
      </div>
    </form>
  </div>
);
