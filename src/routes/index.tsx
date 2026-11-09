import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Cursor } from "@/components/portfolio/Cursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechStrip } from "@/components/portfolio/TechStrip";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { Education } from "@/components/portfolio/Education";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/components/portfolio/useReveal";

const TITLE = "Samyuktha Basam | Java & React Full Stack Developer";
const DESC =
  "Samyuktha Basam, full stack developer in Stockholm specializing in Java, Spring Boot, TypeScript, React and cloud development. Explore experience, skills and resume.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="pf">
      <Background />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
