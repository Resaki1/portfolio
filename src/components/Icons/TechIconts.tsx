import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiWebgpu,
} from "@icons-pack/react-simple-icons";

export const TECH_ICONS: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  React: SiReact,
  TypeScript: SiTypescript,
  Vue: SiVuedotjs,
  Nextjs: SiNextdotjs,
  WebGPU: SiWebgpu,
};
