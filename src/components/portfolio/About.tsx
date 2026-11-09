import { aboutClosing, aboutInterests, aboutParagraphs } from "../../data/portfolio";

export function About() {
  return (
    <section id="about" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">01 / Background</span>
          <h2 className="pf-h2">About Me</h2>
        </div>

        <div className="pf-about">
          <article className="pf-glass pf-card pf-reveal">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="pf-about__closing">{aboutClosing}</p>
          </article>

          <aside className="pf-glass pf-card pf-about__aside pf-reveal" data-delay="120">
            <h3>Interests</h3>
            <div className="pf-chips">
              {aboutInterests.map((i) => (
                <span key={i} className="pf-chip">
                  {i}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
