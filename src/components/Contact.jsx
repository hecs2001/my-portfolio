import { useState } from "react";
import { socialLinks } from "../assets/data";
import "../styles/Contact.css";
import {
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
  LinkIcon,
  PersonIcon,
  EmailIcon,
} from "../assets/Icons";

function SocialButton({ social, link}) {
  function getIcon(socialName) {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />
      case "GitHub":
        return <GitHubIcon />
      case "Instagram":
        return <InstagramIcon />
      default:
        return <LinkIcon />
    }
  }
  return (
    <button className="button" onClick={() => {window.open(link, "_blank")}}>
      {getIcon(social)}
    </button>
  )
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("This feature has not yet implemented. If you are interested, you can email me at: liam.valdez@protonmail.com");
  };

  return (
    <div id="contact" className="container glass">
      <div className="left-pane">
        <h1>Contact</h1>
        <div className="social-links">
          {socialLinks.map(({ id, social, link }) => {
            return (
              <SocialButton key={id} social={social} link={link} />
            );
          })}
        </div>
      </div>
      <div className="right-pane glass">
        <form onSubmit={handleSubmit} method="POST">
          <div className="input-box">
            <PersonIcon />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-box">
            <EmailIcon />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-box">
            <textarea rows={5} placeholder="Message" />
          </div>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
