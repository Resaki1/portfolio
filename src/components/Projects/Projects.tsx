import Project from "../Project/Project";
import "./Projects.scss";
import { projects } from "./projects";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="projects__list">
        {projects.map((project, index) => (
          <Project key={index} {...project} reverse={index % 2 !== 0} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
