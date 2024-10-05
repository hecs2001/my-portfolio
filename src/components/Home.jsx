import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import "../styles/Home.css";

function AnimatedText() {
  const wordIndex = useMotionValue(0);
  const words = ["Web Developer", "Game Developer", "Interaction Designer?"];
  const baseWord = useTransform(wordIndex, (latest) => words[latest]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseWord.get().slice(0, latest));
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: 2,
      duration: 1.2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (wordIndex.get() === words.length - 1) {
            wordIndex.set(0);
          } else {
            wordIndex.set(wordIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, []);

  return (
    <>
      <motion.span>{displayText}</motion.span>
      <span id="cursor">_</span>
    </>
  );
}

export default function Home() {
  return (
    <section id="home" className="container">
      <h1>Hector Liam Valdez</h1>
      <h2>I am a {AnimatedText()}</h2>
    </section>
  );
}
