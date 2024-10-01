import { useState, useEffect } from "react";
import "../styles/Home.css";

function Typewrite({ words, delay }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const currentWord = words[wordIndex];

  useEffect(() => {
    let timeout;
    if (wordIndex < words.length) {
      if (textIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + currentWord[textIndex]);
          setTextIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText("");
          setTextIndex(0);
          setWordIndex((prevIndex) => prevIndex + 1);
        }, (delay * currentWord.length));
      }
      return () => clearTimeout(timeout);
    } else {
      setWordIndex(0);
    }
  }, [textIndex, delay, wordIndex, currentText]);

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
      <h2>
        <Typewrite
          words={["Programmer", "Full-stack Web Developer", "Game Developer"]}
          delay={150}
        />
      </h2>
    </div>
  );
}
