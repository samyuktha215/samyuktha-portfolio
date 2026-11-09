import { personal, resumePath } from "../../data/portfolio";
import { Terminal } from "./Terminal";
import { IconArrow, IconDownload, IconMail } from "./Icons";

const heroTech = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Docker",
  "MySQL",
  "Git",
  "Cloud",
];

export function Hero() {
  return (
    <section id="home" className="pf-section pf-hero">
      <div className="pf-container pf-hero__grid">
        <div className="pf-reveal">
          <span className="pf-hero__badge">
            <span className="pf-pulse" />
            Open to opportunities · {personal.location}
          </span>

          <p className="pf-hero__hi">Hi, I'm {personal.name}</p>
          <h1 className="pf-hero__title">{personal.role}</h1>
          <p className="pf-hero__sub">{personal.tagline}</p>
          <p className="pf-hero__intro">{personal.intro}</p>

          <div className="pf-hero__actions">
            <a className="pf-btn pf-btn--primary" href="#projects">
              View My Projects <IconArrow />
            </a>
            <a className="pf-btn pf-btn--ghost" href="#contact">
              <IconMail size={16} /> Let's Connect
            </a>
            <a className="pf-btn" href={resumePath} download>
              <IconDownload size={16} /> Download Resume
            </a>
          </div>
        </div>

        <div className="pf-hero__visual pf-reveal" data-delay="140">
          <Terminal />
          <div className="pf-glass pf-hero__chips">
            <div className="pf-chips">
              {heroTech.map((t) => (
                <span key={t} className="pf-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
