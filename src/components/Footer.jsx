import { ViteIcon, ReactIcon } from "../assets/Icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <p>Made in:</p>
        <button className="button" onClick={() => {window.open("https://www.vitejs.dev", "_blank")}}><ViteIcon /></button>
        <button className="button" onClick={() => {window.open("https://www.react.dev", "_blank")}}><ReactIcon /></button>
      </div>
      <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} Hector Liam Valdez</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
