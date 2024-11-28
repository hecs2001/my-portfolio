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
    <section id="skills">
      <div className="container">
        <h1 className="title-heading">Skills</h1>
        <div id="skills-content">
          <div className="skill-category">
            <h2>Languages</h2>
            {MySkill.programmingSkills.map(({ id, icon, skill, proficiency }) => {
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
          <div className="skill-category">
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
          <div className="skill-category">
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
          <div className="skill-category">
            <h2>Database</h2>
            {MySkill.databaseSkills.map(({ id, icon, skill, proficiency }) => {
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
          <div className="skill-category">
            <h2>Software</h2>
            {MySkill.softwareSkills.map(({ id, icon, skill, proficiency }) => {
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
          <div className="skill-category">
            <h2>Other</h2>
            {MySkill.otherSkills.map(({ id, icon, skill, proficiency }) => {
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
        </div>
      </div>
    </section>
  );
}
