import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import HeroBackground from "@/components/Hero/HeroBackground";
import MainBackground from "@/components/MainBackground/MainBackground";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <HeroBackground />
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
