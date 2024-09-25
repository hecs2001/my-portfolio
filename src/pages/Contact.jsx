import { useState } from "react";
import { LinkButton } from "../components/Button";
import { socialLinks } from "../assets/data";
import "../styles/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello");
  }

  function InputBox(props) {
    return (
      <input className={"input-box "} type="text" />
    )
  }

  return (
    <div id="contact" className="container glass">
      <div className="left-pane">
        <h1>Contact</h1>
        <div className="social-links">
          {socialLinks.map(({id, social, link}) => {
            return (
              <LinkButton key={id} type="normal" link={link} text={social} />
            )
          })}
        </div>
      </div>
      <div className="right-pane glass">
        <form onSubmit={handleSubmit}>
          <InputBox box="normal" />
          <InputBox box="normal" />
          <InputBox box="expanded" />
          <button type="submit" />
        </form>
      </div>
    </div>
  );
}
