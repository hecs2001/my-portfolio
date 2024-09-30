import { projects } from "../assets/data";
import "../styles/Projects.css";

function ProjectCard({ title, description, url }) {
  return (
    <div className="item-card glass">
      <img src={"https://picsum.photos/200/300"} alt="Link Preview" />
      <h3 className="project-title">{title}</h3>
      <p>{description}</p>
      <button
        className="button text-button"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        View Project
      </button>
    </div>
  );
}

export function Projects() {
  return (
    <div id="projects" className="container glass">
      <div className="top-pane">
        <h1>Projects</h1>
      </div>
      <div className="bottom-pane glass">
        {!projects.length ? (
          <h2>NO PROJECTS YET</h2>
        ) : (
          projects.map(({ id, title, description, link }) => {
            return (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                url={link}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
