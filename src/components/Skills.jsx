import { motion } from "framer-motion";
import * as MySkill from "../assets/Skills";

function SkillDisplay({ icon, skill, proficiency }) {
  const progressStyle = { "--width": proficiency * 10 + "%" };
  return (
    <div className="skill-item">
      <div className="skill-icon">{icon}</div>
      <div className="progress-element">
        <p progress={proficiency + "/10"}>{skill}</p>
        <div className="progress-bar" style={progressStyle} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <h1 className="title-heading">Skills</h1>
        <div id="skills-content">
          <div id="frontend">
            <h2>Front-end</h2>
            {MySkill.frontendSkills.map(({ id, icon, skill, proficiency }) => {
              return (
                <SkillDisplay
                  key={id}
                  icon={icon}
                  skill={skill}
                  proficiency={proficiency}
                />
              );
            })}
          </div>
          <div id="backend">
            <h2>Back-end</h2>
            {MySkill.backendSkills.map(({ id, icon, skill, proficiency }) => {
              return (
                <SkillDisplay
                  key={id}
                  icon={icon}
                  skill={skill}
                  proficiency={proficiency}
                />
              );
            })}
          </div>
          <div id="other">
            <h2>Other</h2>
            <div className="other-content">
              {MySkill.otherSkills.map(({ id, icon, skill }) => {
                return (
                  <div key={id} className="skill-item">
                    {icon}
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
