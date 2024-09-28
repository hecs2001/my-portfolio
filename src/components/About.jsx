import {
  introduction,
  education,
  workExperience,
  devSkills,
} from "../assets/data";
import { LinkIcon } from "../assets/Icons";
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
        <img src={selfPortrait} alt="Picture of Hecs" />
        <h1>About</h1>
        <button
          className="button"
          onClick={() => {
            window.open(
              "https://www.canva.com/design/DAGN1tAikM0/sJnAIXeHK194zLqa3lxhSQ/edit?utm_content=DAGN1tAikM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              "_blank"
            );
          }}
        >
          Resume
          <LinkIcon />
        </button>
      </div>
      <div className="right-pane glass">
        <div>
          <h4>{introduction.text}</h4>
        </div>
        <div>
          <h2>Education</h2>
          {education.map(({ id, level, course, school }) => {
            return (
              <div key={id}>
                <h5>{level}</h5>
                <h3>{course}</h3>
                <h4>{school}</h4>
              </div>
            );
          })}
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
        <div className="skills-content">
          <h2>Technical Skills</h2>
          {devSkills.map(({ id, skill, progress }) => {
            const progressStyle = { "--width": progress + "%" };
            return (
              <div key={id} className="progress-element">
                <p className="progress-label" progress={progress + "%"}>
                  {skill}
                </p>
                <div className="progress-container" style={progressStyle}>
                  <progress max={100} value={progress}>
                    {progress}
                  </progress>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
