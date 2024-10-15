import { projects } from "../assets/data";

function ProjectCard({ title, tags, url }) {
  return (
    <div className="project-item">
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <div className="project-tags">
        {tags.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h1 className="title-heading">Projects</h1>
        <div id="project-display">
          {projects.map(({ id, title, tags, url }) => {
            return <ProjectCard key={id} title={title} tags={tags} url={url} />;
          })}
        </div>
      </div>
    </section>
  );
}
