import { LinkButton } from "./Button";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import "../styles/components.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <LinkButton
          type="image"
          link="https://www.vitejs.dev"
          icon={viteLogo}
          text="Vite Logo"
        />
        <LinkButton
          type="image"
          link="https://www.react.dev"
          icon={reactLogo}
          text="React Logo"
        />
      </div>
      <div className="footer-text">
        <p>Hecs &copy; {new Date().getFullYear()}</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
