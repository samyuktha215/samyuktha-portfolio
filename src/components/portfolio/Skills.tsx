import type { MouseEvent, ReactNode } from "react";
import { skillGroups } from "../../data/portfolio";
import {
  IconCloud,
  IconCode,
  IconDatabase,
  IconServer,
  IconShield,
} from "./Icons";

const icons: Record<string, ReactNode> = {
  Frontend: <IconCode />,
  Backend: <IconServer />,
  Database: <IconDatabase />,
  "DevOps & Cloud": <IconCloud />,
  Security: <IconShield />,
};

export function Skills() {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">02 / Toolbox</span>
          <h2 className="pf-h2">Skills</h2>
          <p className="pf-lead">
            Technologies I work with across the stack — from interface to database and deployment.
          </p>
        </div>

        <div className="pf-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="pf-glass pf-skill pf-reveal"
              data-delay={i * 80}
              onMouseMove={onMove}
            >
              <h3>
                {icons[group.title]}
                {group.title}
              </h3>
              <div className="pf-chips">
                {group.items.map((item) => (
                  <span key={item} className="pf-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
