import "./styles/index.css";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import { Projects } from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
