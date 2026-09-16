import Image from "next/image";
import type { Project } from "../data/projects";
import "./ProjectCard.scss";

type ProjectCardProps = Project & {
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  contribution,
  contributionLabel = "My contribution",
  image,
  imageAlt,
  link,
  technologies,
  githubLink,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card${featured ? " project-card--featured" : ""}`}
      aria-label={title}
    >
      <div className="project-visual">
        <Image
          src={image}
          alt={imageAlt}
          sizes={
            featured
              ? "(max-width: 640px) 80vw, (max-width: 900px) 85vw, (max-width: 1024px) 50vw, 36vw"
              : "(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 28vw"
          }
        />
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-contribution">
          <h4>{contributionLabel}</h4>
          <p>{contribution}</p>
        </div>

        <ul
          className="project-technologies"
          aria-label={`${title} technologies`}
        >
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {(link || githubLink) && (
          <div className="project-links">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} (opens in a new tab)`}
              >
                Visit project <span aria-hidden="true">↗</span>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code (opens in a new tab)`}
              >
                Source code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
