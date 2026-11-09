import { resumePath } from "../../data/portfolio";
import { IconDownload } from "./Icons";

export function Resume() {
  return (
    <section id="resume" className="pf-section">
      <div className="pf-container">
        <div className="pf-glass pf-resume pf-reveal">
          <span className="pf-eyebrow" style={{ justifyContent: "center" }}>
            07 / Resume
          </span>
          <h2 className="pf-h2">My Resume</h2>
          <p>
            Download my resume to learn more about my experience, education and technical
            skills.
          </p>
          <a className="pf-btn pf-btn--primary" href={resumePath} download>
            <IconDownload size={16} /> Download Resume
          </a>
          <p className="pf-note pf-mono">PDF · Swedish</p>
        </div>
      </div>
    </section>
  );
}
