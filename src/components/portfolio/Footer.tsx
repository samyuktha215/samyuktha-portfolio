import { navLinks, personal, resumePath, social } from "../../data/portfolio";
import { IconDownload, IconGithub, IconLinkedin, IconMail } from "./Icons";

export function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-container">
        <div className="pf-footer__top">
          <div>
            <span className="pf-brand">
              <span className="pf-brand__dot" />
              {personal.name}
            </span>
            <p className="pf-muted" style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
              {personal.role}
            </p>
          </div>

          <nav className="pf-footer__nav" aria-label="Footer navigation">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "grid", gap: "0.9rem", justifyItems: "start" }}>
            <div className="pf-socials">
              <a
                className="pf-social"
                href={social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
              >
                <IconGithub />
              </a>
              <a
                className="pf-social"
                href={social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
              >
                <IconLinkedin />
              </a>
              <a className="pf-social" href={`mailto:${social.email}`} aria-label="Send an email">
                <IconMail />
              </a>
            </div>
            <a className="pf-btn pf-btn--sm pf-btn--ghost" href={resumePath} download>
              <IconDownload size={15} /> Resume
            </a>
          </div>
        </div>

        <div className="pf-footer__bottom">
          <span>
            © {new Date().getFullYear()} {personal.name}. Built with passion for software
            development.
          </span>
          <span className="pf-mono">{personal.location}</span>
        </div>
      </div>
    </footer>
  );
}
