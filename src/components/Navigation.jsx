import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MoonIcon, SunIcon } from "../assets/Icons";
import "../styles/Navigation.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'dark');

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute('class', theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? <MoonIcon /> : theme === "light" ? <SunIcon /> : null}
    </button>
  );
}

function NavButton({ name }) {
  return (
    <button>
      <Link activeClass="active" to={name} offset={-220} duration={500} spy={true}>
        {name.toUpperCase()}
      </Link>
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
      <ThemeSwitcher />
    </div>
  );
}
