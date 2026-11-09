import { education } from "../../data/portfolio";
import { IconGraduation } from "./Icons";

export function Education() {
  return (
    <section id="education" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">06 / Learning</span>
          <h2 className="pf-h2">Education</h2>
        </div>

        <div className="pf-timeline">
          {education.map((item, i) => (
            <article
              key={item.title}
              className="pf-glass pf-tl-item pf-reveal"
              data-delay={i * 90}
            >
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <IconGraduation />
                {item.title}
              </h3>
              <div className="pf-tl-meta">
                <span>{item.place}</span>
                <span>{item.dates}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
