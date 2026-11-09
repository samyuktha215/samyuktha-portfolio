import { useState } from "react";
import { projects, type Project } from "../../data/portfolio";
import { Modal } from "./Modal";
import { IconArrow, IconGithub } from "./Icons";

function Diagram({ steps }: { steps: string[] }) {
  return (
    <div className="pf-project__nodes">
      {steps.map((step, i) => (
        <div key={step}>
          <div className="pf-node" style={{ animationDelay: `${i * 90}ms` }}>
            {step}
          </div>
          {i < steps.length - 1 && (
            <div
              className="pf-node pf-node--arrow"
              style={{ animationDelay: `${i * 90 + 45}ms`, textAlign: "center" }}
              aria-hidden="true"
            >
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">04 / Work</span>
          <h2 className="pf-h2">Featured Projects</h2>
          <p className="pf-lead">
            Applications built end to end — secure APIs, data modelling, interfaces and delivery.
          </p>
        </div>

        <div className="pf-projects">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="pf-glass pf-project pf-reveal"
              data-delay={i * 100}
            >
              <div className="pf-project__visual">
                <Diagram steps={(project.diagrams[0]?.steps ?? []).slice(0, 4)} />
              </div>
              <div className="pf-project__body">
                <h3>{project.title}</h3>
                <p className="pf-project__desc">{project.description}</p>
                <div className="pf-chips">
                  {project.tech.map((t) => (
                    <span key={t} className="pf-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="pf-feature-list">
                  {project.features.slice(0, 6).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="pf-actions">
                  <a
                    className="pf-btn pf-btn--sm pf-btn--ghost"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconGithub size={15} /> GitHub
                  </a>
                  <a
                    className="pf-btn pf-btn--sm pf-btn--ghost"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live Demo
                  </a>
                  <button
                    type="button"
                    className="pf-btn pf-btn--sm pf-btn--primary"
                    onClick={() => setOpenProject(project)}
                  >
                    View Details <IconArrow size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}

          {projects.length <= 2 && (
            <p className="pf-more pf-reveal">More projects coming soon.</p>
          )}
        </div>
      </div>

      {openProject && (
        <Modal title={openProject.title} onClose={() => setOpenProject(null)}>
          <div className="pf-modal__head">
            <div>
              <span className="pf-eyebrow">Project</span>
              <h3 style={{ fontSize: "1.45rem", marginTop: "0.7rem" }}>
                {openProject.title}
              </h3>
            </div>
            <button
              type="button"
              className="pf-modal__close"
              aria-label="Close project details"
              onClick={() => setOpenProject(null)}
            >
              ✕
            </button>
          </div>

          <div className="pf-modal__body">
            <p style={{ marginTop: "1.1rem", color: "var(--pf-muted)" }}>
              {openProject.description}
            </p>

            <h4>Technologies</h4>
            <div className="pf-chips">
              {openProject.tech.map((t) => (
                <span key={t} className="pf-chip">
                  {t}
                </span>
              ))}
            </div>

            <h4>Key features</h4>
            <ul className="pf-feature-list">
              {openProject.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {openProject.diagrams.map((d) => (
              <div key={d.label}>
                <h4>{d.label}</h4>
                <div className="pf-diagram">
                  {d.steps.map((s, i) => (
                    <span key={s} style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
                      <span className="pf-node" style={{ animationDelay: `${i * 80}ms` }}>
                        {s}
                      </span>
                      {i < d.steps.length - 1 && (
                        <span className="pf-node pf-node--arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="pf-actions">
              <a
                className="pf-btn pf-btn--sm pf-btn--ghost"
                href={openProject.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconGithub size={15} /> GitHub
              </a>
              <a
                className="pf-btn pf-btn--sm pf-btn--ghost"
                href={openProject.demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
