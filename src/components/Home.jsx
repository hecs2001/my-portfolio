import { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import selfPortrait from "../assets/me.svg";

function AnimatedText() {
  const wordIndex = useMotionValue(0);
  const words = [
    "Front-end Developer",
    "Web Developer",
    "Programmer",
  ];
  const baseWord = useTransform(wordIndex, (latest) => words[latest]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseWord.get().slice(0, latest)
  );
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
      },
    });
  }, []);

  return <motion.span>{displayText}</motion.span>;
}

export default function Home() {
  return (
    <section id="home">
      <img src={selfPortrait} alt="Picture of Hecs" />
      <div>
        <h1>Hi, my name is <span>Hecs</span>.</h1>
        <h2>A {AnimatedText()}<span id="cursor">|</span></h2>
        <h4>from Cavite, Philippines</h4>
        <div>
          <button>
            <Link to="contact">
              Contact Me
            </Link>
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.canva.com/design/DAGN1tAikM0/sJnAIXeHK194zLqa3lxhSQ/edit?utm_content=DAGN1tAikM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                "_blank"
              );
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
