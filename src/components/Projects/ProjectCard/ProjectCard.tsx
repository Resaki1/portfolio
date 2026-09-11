import Github from "@/components/Icons/Github";
import { Project } from "../data/projects";
import "./ProjectCard.scss";
import { TECH_ICONS } from "@/components/Icons/TechIconts";

type ProjectCardProps = Project & {
  index: number;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  technologies,
  githubLink,
  index,
}: ProjectCardProps) {
  return (
    <div
      className={
        "project-card " + (index % 2 !== 0 ? "project-card--reverse" : "")
      }
    >
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h3>{title.toUpperCase()}</h3>
        <p>{description}</p>

        <div className="project-footer">
          <div className="technologies">
            {technologies.map((tech) => {
              const TechIcon = TECH_ICONS[tech];
              return (
                <div title={tech} key={tech}>
                  <TechIcon key={tech} size={24} />
                </div>
              );
            })}
          </div>

          <div className="links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github width={24} height={24} />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                visit {title} {">"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
