import { motion } from "framer-motion";
import { introduction, education, workExperience } from "../assets/data";

export default function About() {
  function nameMonth(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-EN", { month: "long" });
  }

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <h1 className="title-heading">About Me</h1>
        <div id="about-details">
          <div>
            <h4>{introduction.text}</h4>
          </div>
          <div id="experience">
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
          <div id="education">
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
      </div>
    </motion.section>
  );
}
