import { motion } from "framer-motion";
import "../styles/Navigation.css";

function NavButton({ name }) {
  const displayName = name;
  return (
    <motion.button
      initial={{ opacity: 0.2 }}
      whileHover={{ opacity: 1 }}
      onClick={(event) => {
        event.preventDefault();
        window.location.hash = name;
      }}
    >
      {displayName.toUpperCase()}
    </motion.button>
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