import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.button
      className="button"
      onClick={() => {
        window.open(link, "_blank");
      }}
      initial={{ opacity: 0.4 }}
      whileHover={{ opacity: 1, scale: 1.5 }}
      whileFocus={{ opacity: 1, scale: 1.5 }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon(social)}
    </motion.button>
  );
}

export default function Contact() {
  const [forms, setForms] = useState({ name: "", email: "", message: "" });
  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      forms.name.length !== 0 &&
      forms.email.length !== 0 &&
      forms.message.length >= 10
    ) {
      if (forms.email.match(validRegex)) {
        return setButtonState(false);
      }
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
    <motion.section
      id="contact"
      className="container"
      initial={{ scale: 0.8, opacity: 0.2 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.1 }}
    >
      <div className="left-pane">
        <h1>Contact</h1>
        <motion.a
          href="mailto:liam.valdez@protonmail.com"
          initial={{ opacity: 0.6 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileFocus={{ scale: 1.1, opacity: 1 }}
        >
          liam.valdez@protonmail.com
        </motion.a>
        <div className="social-links">
          {socialLinks.map(({ id, social, link }) => {
            return <SocialButton key={id} social={social} link={link} />;
          })}
        </div>
      </div>
      <div className="right-pane">
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
          <motion.button
            className="button send-button"
            type="submit"
            disabled={buttonState}
            whileHover={!buttonState ? { scale: 1.1 } : null}
            whileTap={!buttonState ? { scale: 0.9 } : null}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
