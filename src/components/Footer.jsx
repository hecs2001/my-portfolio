import { socialLinks } from "../assets/Socials";

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-socials">
        <p>Socials:</p>
        <div>
          {socialLinks.map(({ id, icon, social, link }) => {
            return (
              <button
                key={id}
                onClick={() => {
                  window.open(link, "_blank");
                }}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>
      <div id="footer-copy">
        <p>Copyright &copy; {new Date().getFullYear()} Hector Liam Valdez</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
