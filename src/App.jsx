import { Link } from "react-scroll";
import { HomeIcon, AboutIcon, ProjectsIcon, ContactIcon } from "./assets/Icons";
import "./styles/App.css";

import Home from "./components/Home";
import About from "./components/About";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function NavigationBar() {
  function NavigationButton({ name, offset, icon }) {
    return (
      <Link to={name} offset={!offset ? null : offset} smooth={true}>{icon}</Link>
    )
  }
  return (
    <div id="navigation-bar" className="glass">
      <NavigationButton name="home" icon={<HomeIcon />}/>
      <NavigationButton name="about" icon={<AboutIcon />}/>
      <NavigationButton name="projects" offset={-100} icon={<ProjectsIcon />}/>
      <NavigationButton name="contact" icon={<ContactIcon />}/>
    </div>
  )
}

export default function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
