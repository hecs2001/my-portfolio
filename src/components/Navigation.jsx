import { motion } from "framer-motion";
import "../styles/Navigation.css";

function NavButton({ name }) {
  const displayName = name;
  return (
    <motion.button
      initial={{ opacity: 0.2 }}
      whileHover={{ opacity: 1 }}
      onClick={() => {
        var oldURL = window.location.href;
        window.location.hash = name;
        window.addEventListener("hashchange", function(){
          window.history.pushState({}, null, oldURL);
        });
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
