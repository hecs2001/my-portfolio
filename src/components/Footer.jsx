import "../styles/Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-copy">
        <p>Copyright &copy; {new Date().getFullYear()} Hector Liam Valdez</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
