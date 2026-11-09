import { useState, type FormEvent } from "react";
import { personal, social } from "../../data/portfolio";
import { IconGithub, IconLinkedin, IconMail, IconPin } from "./Icons";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      e.message = "Please write at least 10 characters.";
    return e;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setState("error");
      return;
    }
    setState("loading");
    // No email service is connected yet — the message is validated locally only.
    window.setTimeout(() => setState("sent"), 700);
  };

  const field = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (e: { target: { value: string } }) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
    "aria-invalid": errors[key] ? ("true" as const) : undefined,
    "aria-describedby": errors[key] ? `pf-err-${key}` : undefined,
  });

  return (
    <section id="contact" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal">
          <span className="pf-eyebrow">08 / Contact</span>
          <h2 className="pf-h2">Let's Build Something Together</h2>
          <p className="pf-lead">
            I'm open to opportunities as a Full Stack Developer or Java Developer and would
            be happy to connect.
          </p>
        </div>

        <div className="pf-contact">
          <div className="pf-glass pf-card pf-reveal">
            <h3 style={{ fontSize: "1.05rem" }}>Direct</h3>
            <div className="pf-contact__list">
              <a className="pf-contact__row" href={`mailto:${social.email}`}>
                <IconMail /> {social.email}
              </a>
              <a className="pf-contact__row" href={`tel:${social.phone.replace(/\s/g, "")}`}>
                {social.phone}
              </a>
              <a
                className="pf-contact__row"
                href={social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconLinkedin /> LinkedIn
              </a>
              <a
                className="pf-contact__row"
                href={social.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconGithub /> GitHub
              </a>
              <span className="pf-contact__row">
                <IconPin /> {personal.location}
              </span>
            </div>
          </div>

          <form className="pf-glass pf-card pf-reveal" data-delay="120" onSubmit={onSubmit} noValidate>
            <div className="pf-field">
              <label htmlFor="pf-name">Name</label>
              <input id="pf-name" name="name" type="text" autoComplete="name" {...field("name")} />
              {errors.name && (
                <span className="pf-error" id="pf-err-name">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="pf-field">
              <label htmlFor="pf-email">Email</label>
              <input id="pf-email" name="email" type="email" autoComplete="email" {...field("email")} />
              {errors.email && (
                <span className="pf-error" id="pf-err-email">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="pf-field">
              <label htmlFor="pf-message">Message</label>
              <textarea id="pf-message" name="message" {...field("message")} />
              {errors.message && (
                <span className="pf-error" id="pf-err-message">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="pf-btn pf-btn--primary"
              disabled={state === "loading"}
            >
              {state === "loading" ? (
                <>
                  <span className="pf-spinner" /> Sending
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <div aria-live="polite">
              {state === "sent" && (
                <p className="pf-status pf-status--ok">
                  Your message passed validation. No email service is connected yet, so it
                  was not delivered — reach me directly at {social.email}.
                </p>
              )}
              {state === "error" && Object.keys(errors).length > 0 && (
                <p className="pf-status pf-status--err">
                  Please correct the highlighted fields and try again.
                </p>
              )}
            </div>

            <p className="pf-note">
              This form validates input in the browser only. Connect an email service to
              deliver messages.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
