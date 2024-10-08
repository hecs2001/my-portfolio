import { motion } from "framer-motion";
import { projects } from "../assets/data";
import memoryGamePreview from "../assets/memory-game-preview.png"
import "../styles/Projects.css";

function ProjectCard({ title, tags, url, image }) {
  return (
    <div className="item-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt="Link Preview"
        />
      </a>
      <div className="item-details">
        <h2>{title}</h2>
        {tags.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="container"
      initial={{ scale: 0.8, opacity: 0.2 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.1 }}
    >
      <div className="top-pane">
        <h1>Projects</h1>
      </div>
      <div className="bottom-pane">
        {projects.map(({ id, title, tags, url }) => {
          return <ProjectCard key={id} title={title} tags={tags} url={url} image={memoryGamePreview} />;
        })}
      </div>
    </motion.section>
  );
}