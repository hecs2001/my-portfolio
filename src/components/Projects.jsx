import "../styles/Projects.css";

function ProjectCard({ title, description, url }) {
  return (
    <div className="item-card glass">
      <img className="item-image" src={"https://picsum.photos/1920/1080"} alt="Link Preview" />
      <div className="item-details">
        <h2>{title}</h2>
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
        <ProjectCard
          title="Sample 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="https://github.com/hecs2001?tab=repositories"
        />
        <ProjectCard
          title="Sample 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="https://www.google.com/"
        />
      </div>
    </div>
  );
}
