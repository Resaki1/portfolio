import { PROJECTS } from "./data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";

export default function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">PROJECTS</h2>
      <ul className="projects-list">
        {PROJECTS.map((project, index) => (
          <li
            key={project.title}
            className={index === 0 ? "projects-feature" : undefined}
          >
            <ProjectCard {...project} featured={index === 0} />
          </li>
        ))}
      </ul>
    </section>
  );
}
