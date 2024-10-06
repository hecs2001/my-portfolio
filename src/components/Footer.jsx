import "../styles/Main.css"

const footerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "15rem",
}

const footerTextStyle = {
  margin: "0%",
  textAlign: "center",
}

export default function Footer() {
  return (
    <div id="footer" style={footerStyle}>
      <div style={footerTextStyle}>
        <p>Copyright &copy; {new Date().getFullYear()} Hector Liam Valdez</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
