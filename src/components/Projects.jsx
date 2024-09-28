import "../styles/Projects.css";

function ProjectCard({ image, title, description }) {
  return (
    <div className="item-card glass">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
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
      </div>
    </div>
  );
}

export function FullPageProjects() {}
