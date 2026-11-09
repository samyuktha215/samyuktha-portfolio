import { techStrip } from "../../data/portfolio";

export function TechStrip() {
  const items = [...techStrip, ...techStrip];
  return (
    <div className="pf-strip" aria-label="Technologies I work with">
      <div className="pf-strip__track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="pf-strip__item" aria-hidden={i >= techStrip.length}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
