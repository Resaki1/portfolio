import { PROJECTS } from "./data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      <ul>
        {PROJECTS.map((project, index) => (
          <li key={project.title}>
            <ProjectCard {...project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
