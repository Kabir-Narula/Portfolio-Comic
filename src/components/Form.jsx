import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import Location from "../images/icons/location.png";
import Email from "../images/icons/email.png";
import Phone from "../images/icons/phone.png";
import "../css/form.css";

export const Form = () => {
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
  .sendForm(
    "service_ujqthku", // Updated Service ID
    "template_b86j6p6", // Keep or update your Template ID if different
    e.target,
    "hLeN3Oc1BpQoEDzOi" // Your User ID seems to remain the same
  )
  .then(
    (result) => {
      console.log(result.text);
      alert("Thanks for your message");
    },
    (error) => {
      console.log(error.text);
    }
  );

e.target.reset();

  }

  return (
    <div className="form-container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text-form">
            Please always feel free to contact me with any questions, comments
            or concerns, at anytime.
          </p>

          <div className="info">
            <div className="information">
              <img src={Location} className="icon" alt="location" />
              <p>Toronto, Ontario</p>
            </div>
            <div className="information">
              <img src={Email} className="icon" alt="email" />
              <p>Kabirnar10@gmail.com</p>
            </div>
            <div className="information">
              <img src={Phone} className="icon" alt="phone" />
              <p>+1 6474106699</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with me :</p>
            <div className="social-icons">
              <a
                href="https://github.com/Kabir-Narula"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BpP4DBORhTT2g3j3Z8CHb7A%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://codepen.io/martinrss3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-codepen"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off" onSubmit={sendEmail}>
            <h3 className="title">Contact me</h3>
            <div className="input-container">
              <input type="text" name="from_name" className="input" required />
              <label style={{ marginRight: 30 }}>Name</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="user_email"
                className="input"
                required
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" required></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
