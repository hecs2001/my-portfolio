import { useState, useEffect } from "react";
import "../styles/Home.css";

function Typewrite({text, delay}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <>
      <span>{currentText}</span>
      <span id="cursor">_</span>
    </>
  );
}

export default function Home() {
  return (
    <div id="home" className="container">
      <h1>Hello, I'm Hecs</h1>
      <h2><Typewrite text="Fullstack Web Developer" delay={100} /></h2>
    </div>
  );
}
