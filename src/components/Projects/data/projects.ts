import type { StaticImageData } from "next/image";
import blockalot from "../../../../public/images/projects/blockalot.webp";
import scrumlr from "../../../../public/images/projects/scrumlr.webp";
import stellarNomad from "../../../../public/images/projects/stellar-nomad.webp";

export interface Project {
  title: string;
  description: string;
  contribution: string;
  contributionLabel?: string;
  image: StaticImageData;
  imageAlt: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Scrumlr",
    description: "Open-source retrospective tool for agile teams.",
    contribution:
      "Developed major features, designed parts of the UI, and built a 3D mixed-reality interface.",
    image: scrumlr,
    imageAlt:
      "Scrumlr retrospective board with shared notes across meeting columns",
    link: "https://scrumlr.io/",
    technologies: ["React", "TypeScript"],
    githubLink: "https://github.com/inovex/scrumlr.io",
  },
  {
    title: "BLOCKALOT",
    description: "Helping teachers bring virtual worlds into the classroom.",
    contribution: "Designed the UI and developed most of the Vue frontend.",
    image: blockalot,
    imageAlt: "BLOCKALOT landing page for creating virtual learning worlds",
    technologies: ["Vue", "TypeScript"],
  },
  {
    title: "Stellar Nomad",
    description:
      "Exploring space through a browser, grounded in scientific realism.",
    contribution: "A personal 3D space exploration game built with WebGPU.",
    contributionLabel: "The project",
    image: stellarNomad,
    imageAlt: "A spacecraft orbiting a planet in Stellar Nomad",
    technologies: ["Next.js", "TypeScript", "WebGPU"],
    link: "https://stellar-nomad.com/",
    githubLink: "https://github.com/Resaki1/stellar-nomad",
  },
];
