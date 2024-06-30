import "./Project.scss";

type ProjectProps = {
  title: string;
  description: string;
  teamSize: number;
  techStack: string[];
  reverse?: boolean;
  link: string;
};

const Project = (props: ProjectProps) => {
  return (
    <li className={`project ${props.reverse ? "project--reverse" : ""}`}>
      <div className="project__content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="project__details">
          <div>T {props.teamSize}</div>
          <ul>
            {props.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            visit
          </a>
        </div>
      </div>

      <a
        className="project__image-wrapper"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`/images/${props.title.toLowerCase()}.webp`}
          alt={props.title}
        />
      </a>
    </li>
  );
};

export default Project;
