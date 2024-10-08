import { Link } from "react-scroll";
import "../styles/Navigation.css";

function NavButton({ name }) {
  return (
    <button>
      <Link activeClass="active" to={name} offset={-150} spy={true}>{name.toUpperCase()}</Link>
    </button>
  );
}

export default function Navigation() {
  return (
    <div id="navigation-bar">
      <NavButton name="home" />
      <NavButton name="about" />
      <NavButton name="skills" />
      <NavButton name="projects" />
      <NavButton name="contact" />
    </div>
  );
}
