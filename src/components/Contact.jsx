import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import * as Icon from "../assets/Icons";

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
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="title-heading">Contact</h1>
        <form id="message-form" onSubmit={sendEmail} method="POST">
          <div className="input-box">
            <Icon.PersonIcon />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={forms.name}
              placeholder="Name"
            />
          </div>
          <div className="input-box">
            <Icon.AtIcon />
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
            type="submit"
            disabled={buttonState}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
