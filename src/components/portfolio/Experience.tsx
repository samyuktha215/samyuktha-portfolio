import { experience } from "../../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">03 / Journey</span>
          <h2 className="pf-h2">Experience</h2>
        </div>

        <div className="pf-timeline">
          {experience.map((item, i) => (
            <article
              key={`${item.role}-${item.place}`}
              className="pf-glass pf-tl-item pf-reveal"
              data-delay={i * 100}
            >
              <h3>{item.role}</h3>
              <div className="pf-tl-meta">
                <span>{item.place}</span>
                <span>{item.dates}</span>
              </div>
              <ul className="pf-bullets">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="pf-chips">
                {item.tech.map((t) => (
                  <span key={t} className="pf-chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
