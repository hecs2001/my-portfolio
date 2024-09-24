import { LinkButton } from "../components/Button";
import { socialLinks } from "../assets/data";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="container">
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
      <div className="right-pane">
      </div>
    </div>
  );
}
