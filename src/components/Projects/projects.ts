type Project = {
  title: string;
  description: string;
  teamSize: number;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "BLOCKALOT",
    description:
      "BLOCKALOT is an online platform for teachers to manage virtual classrooms for their students. I made the UI design and developed most of the Vue frontend. It is still WIP, but already used by many teachers all over Germany.",
    teamSize: 3,
    techStack: ["Vue", "JavaScript", "Figma"],
    link: "https://www.blockalot.de",
  },
  {
    title: "Scrumlr",
    description:
      "Scrumlr is an open source collaborative tool for interactive meetings. I developed major features of Scrumlr, designed some parts of the UI, and developed a 3D MR interface as part of my master's thesis. Scrumlr is loved by thousands of monthly users worldwide.",
    teamSize: 7,
    techStack: ["React", "TypeScript", "Figma"],
    link: "https://scrumlr.io/",
  },
  {
    title: "MCP",
    description:
      "Mission Control Paramedic (MCP) is a free and open source web app developed together with the Red Cross Karlsruhe. It helps them (and others) manage their ressources during large events. Being my first real project, it sparked my love for web development.",
    teamSize: 6,
    techStack: ["React", "TypeScript", "Sketch"],
    link: "https://www.mission-control-paramedic.de/",
  },
  {
    title: "Stellar Nomad",
    description:
      "Stellar Nomad is a fun little side project I am working on right now. With it I try to learn more about visually pleasing 3D content inside of web apps using three.js.",
    teamSize: 1,
    techStack: ["React", "TypeScript", "three.js"],
    link: "https://stellar-nomad.vercel.app/",
  },
];
