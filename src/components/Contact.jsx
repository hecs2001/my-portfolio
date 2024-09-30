import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../assets/data";
import "../styles/Contact.css";
import {
  LinkedInIcon,
  GitHubIcon,
  BehanceIcon,
  PersonIcon,
  AtIcon,
} from "../assets/Icons";

function SocialButton({ social, link }) {
  function getIcon(socialName) {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "GitHub":
        return <GitHubIcon />;
      case "Behance":
        return <BehanceIcon />;
      default:
        return null;
    }
  }
  return (
    <button
      className="button"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      {getIcon(social)}
    </button>
  );
}

export default function Contact() {
  const [forms, setForms] = useState({ name: "", email: "", message: "" });
  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(forms.name.length < 0 || !forms.message.length < 0) {
      return setButtonState(false);
    }
    if (forms.email.match(validRegex)) {
      return setButtonState(false);
    }
    return setButtonState(true);
  }, [forms]);

  const handleChange = (event) => {
    setForms({
      ...forms,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_ne3hprb", "template_81idoai", event.target, {
        publicKey: "UOBfejocWA4YIgWti",
      })
      .then(
        () => {
          alert("SUCCESS!");
          setForms({ name: "", email: "", message: "" });
          setButtonState(true);
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="container glass">
      <div className="left-pane">
        <h1>Contact</h1>
        <div className="social-links">
          {socialLinks.map(({ id, social, link }) => {
            return <SocialButton key={id} social={social} link={link} />;
          })}
        </div>
      </div>
      <div className="right-pane glass">
        <form onSubmit={sendEmail} method="POST">
          <div className="input-box">
            <PersonIcon />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={forms.name}
              placeholder="Name"
            />
          </div>
          <div className="input-box">
            <AtIcon />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={forms.email}
              placeholder="Email"
            />
          </div>
          <div className="input-box">
            <textarea
              rows={5}
              name="message"
              onChange={handleChange}
              value={forms.message}
              placeholder="Message"
            />
          </div>
          <button
            className="button send-button"
            type="submit"
            disabled={buttonState}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
