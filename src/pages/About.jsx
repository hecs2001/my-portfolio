import { LinkButton } from "../components/Button";
import { introduction, education, workExperience, devSkills } from "../assets/data";
import selfPortrait from "../assets/me.jpg";
import "../styles/About.css";



export default function About() {
  function nameMonth(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-EN", { month: "long" });
  }

  return (
    <div id="about" className="container glass">
      <div className="left-pane">
        <img src={selfPortrait} alt="Picture of Hecs"/>
        <h1>About</h1>
        <LinkButton type="normal" link="https://www.canva.com/design/DAGN1tAikM0/sJnAIXeHK194zLqa3lxhSQ/edit?utm_content=DAGN1tAikM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" text="Resume" />
      </div>
      <div className="right-pane glass">
        <div>
          <h4>{introduction.text}</h4>
        </div>
        <div>
          <h2>Education</h2>
          <ul>
            {education.map(({ id, level, course, school }) => {
              return (
                <li key={id}>
                  <h5>{level}</h5>
                  <h3>{course}</h3>
                  <h4>{school}</h4>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Work Experience</h2>
          <ul>
            {workExperience.map(
              ({
                id,
                title,
                company,
                startDate: { startYear, startMonth },
                endDate: { endYear, endMonth },
              }) => {
                return (
                  <li key={id}>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <h5>
                      {nameMonth(startMonth)} {startYear} -{" "}
                      {nameMonth(endMonth)} {endYear}
                    </h5>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="skills-content">
          <h2>Professional Skills</h2>
          {devSkills.map(({ id, skill, progress }) => {
            return (
              <div key={id} className="progress-element">
                <label>{skill}</label>
                <progress value={progress} max={100}>{progress}%</progress>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
