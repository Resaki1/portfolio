export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Scrumlr",
    description:
      "Open source collaborative tool for interactive meetings. Developed major features of Scrumlr, designed some parts of the UI, and developed a 3D MR interface.",
    imageUrl: "/images/projects/scrumlr.webp",
    link: "https://scrumlr.io/",
    technologies: ["React", "TypeScript"],
    githubLink: "https://github.com/inovex/scrumlr.io",
  },
  {
    title: "BLOCKALOT",
    description:
      "Online platform for teachers to manage virtual classrooms for their students. Designed the UI and developed most of the Vue frontend.",
    imageUrl: "/images/projects/blockalot.webp",
    technologies: ["Vue", "TypeScript"],
  },
  {
    title: "Stellar Nomad",
    description:
      "3D space exploration game built on scientific realism. Built with WebGPU as a hobby project.",
    imageUrl: "/images/projects/stellar-nomad.webp",
    technologies: ["Nextjs", "TypeScript", "WebGPU"],
    link: "https://stellar-nomad.com/",
    githubLink: "https://github.com/Resaki1/stellar-nomad",
  },
];
