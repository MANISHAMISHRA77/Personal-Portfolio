import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/Assets/theme_pattern.svg";
import mail_icon from "../../assets/Assets/mail_icon.svg";
import location_icon from "../../assets/Assets/location_icon.svg";
import call_icon from "../../assets/Assets/call_icon.svg";
import linkedIn_icon from "../../assets/Assets/linkedIn.png";
import github_icon from "../../assets/Assets/github.png";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e7ec19be-bdc7-4989-95a0-7c1ee10ba6dc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available on new projects. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>jnvmanisha2220@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Haryana,India</p>
            </div>

            <div className="connect-with-me">
              <p className="connect-text">Connect with me:</p>
              <div className="contact-social">
                <a
                  href="https://www.linkedin.com/in/manisha-kumari-99713731b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedIn_icon} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/MANISHAMISHRA77"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github_icon} alt="GitHub" />
                </a>
              </div>
            </div>

          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
