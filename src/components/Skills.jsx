import { motion } from "framer-motion";
import * as MyData from "../assets/data";
import "../styles/Skills.css";

function SkillDisplay({ skill, proficiency }) {
  const progressStyle = { "--width": proficiency + "%" };
  return (
    <div className="progress-element skill">
      <p className="progress-label" progress={proficiency + "%"}>
        {skill}
      </p>
      <div className="progress-bar" style={progressStyle} />
    </div>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="container"
      initial={{ scale: 0.8, opacity: 0.2 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.4 }}
    >
      <div className="top-pane">
        <h1>Skills</h1>
      </div>
      <div className="bottom-pane">
        <div className="skills-content">
          <h2>Front-end</h2>
          {MyData.frontendSkills.map(({ id, skill, proficiency }) => {
            return (
              <SkillDisplay key={id} skill={skill} proficiency={proficiency} />
            );
          })}
        </div>
        <div className="skills-content">
          <h2>Back-end</h2>
          {MyData.backendSkills.map(({ id, skill, proficiency }) => {
            return (
              <SkillDisplay key={id} skill={skill} proficiency={proficiency} />
            );
          })}
        </div>
        <div className="skills-content">
          <h2>Other</h2>
          {MyData.otherSkills.map(({ id, skill, proficiency }) => {
            return (
              <SkillDisplay key={id} skill={skill} proficiency={proficiency} />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
