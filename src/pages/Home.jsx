import Typewrite from "../components/Typewrite";
import "../styles/Home.css";

export default function Home() {
  return (
    <div id="home" className="container">
      <h1>Hello, I'm Hecs</h1>
      <h2>{<Typewrite text="Fullstack Web Developer" delay={150} />}</h2>
    </div>
  );
}
