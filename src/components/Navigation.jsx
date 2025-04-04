import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MoonIcon, SunIcon } from "../assets/Icons";
import "../styles/Navigation.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
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
    <button id="navigation-button">
      <Link activeClass="active" to={name} spy={true}>
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
