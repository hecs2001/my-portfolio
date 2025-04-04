import { introduction, education, workExperience } from "../assets/data";
import "../styles/About.css";

export default function About() {
  function nameMonth(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-EN", { month: "long" });
  }

  return (
    <section id="about">
      <div className="container">
        <h1 className="title-heading">About Me</h1>
        <div id="about-details">
          <div>
            <h4>{introduction.text}</h4>
          </div>
          <div id="experience">
            <h2>Work Experience</h2>
            {workExperience.map(
              ({
                id,
                title,
                employment,
                company,
                startDate: { startYear, startMonth },
                endDate: { endYear, endMonth },
              }) => {
                return (
                  <div key={id}>
                    <h6>{employment}</h6>
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
    </section>
  );
}
