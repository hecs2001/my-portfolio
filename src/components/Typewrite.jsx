import { useState, useEffect } from "react";
import "../styles/components.css";

export default function Typewrite(props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + props.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, props.delay);
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
