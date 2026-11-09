import { processSteps } from "../../data/portfolio";

export function Process() {
  return (
    <section className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">05 / Method</span>
          <h2 className="pf-h2">How I Build Software</h2>
        </div>

        <div className="pf-steps">
          {processSteps.map((step, i) => (
            <article
              key={step.no}
              className="pf-glass pf-step pf-reveal"
              data-delay={i * 90}
            >
              <span className="pf-step__no">{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
