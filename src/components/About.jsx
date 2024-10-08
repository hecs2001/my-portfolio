import { motion } from "framer-motion";
import { introduction, education, workExperience } from "../assets/data";
import selfPortrait from "../assets/me.jpg";
import "../styles/About.css";

export default function About() {
  function nameMonth(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-EN", { month: "long" });
  }

  return (
    <motion.section
      id="about"
      className="container"
      initial={{ scale: 0.8, opacity: 0.2 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.1 }}
    >
      <div className="left-pane">
        <img src={selfPortrait} alt="Picture of Hecs" />
        <h1>About</h1>
        <motion.button
          className="button text-button"
          onClick={() => {
            window.open(
              "https://www.canva.com/design/DAGN1tAikM0/sJnAIXeHK194zLqa3lxhSQ/edit?utm_content=DAGN1tAikM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              "_blank"
            );
          }}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Resume
        </motion.button>
      </div>
      <div className="right-pane">
        <div>
          <h4>{introduction.text}</h4>
        </div>
        <div>
          <h2>Experience</h2>
          {workExperience.map(
            ({
              id,
              title,
              company,
              startDate: { startYear, startMonth },
              endDate: { endYear, endMonth },
            }) => {
              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <h4>{company}</h4>
                  <h5>
                    {nameMonth(startMonth)} {startYear} -{" "}
                    {endMonth === null && endYear === null
                      ? "Present"
                      : nameMonth(endMonth) + " " + endYear}
                  </h5>
                </div>
              );
            }
          )}
        </div>
        <div className="education-info">
          <h2>Education</h2>
          {education.map(({ id, level, course, school }) => {
            return (
              <div key={id}>
                <h6>{level}</h6>
                <h3>{course}</h3>
                <h4>{school}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
