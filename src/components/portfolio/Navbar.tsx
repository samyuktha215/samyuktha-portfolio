import { useCallback, useEffect, useMemo, useState } from "react";
import { navLinks, personal, resumePath } from "../../data/portfolio";
import { useActiveSection } from "./useReveal";
import { IconDownload } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const ids = useMemo(() => navLinks.map((l) => l.id), []);

  useActiveSection(ids, useCallback((id: string) => setActive(id), []));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`pf-nav${scrolled ? " pf-nav--scrolled" : ""}`}>
        <nav className="pf-container pf-nav__inner" aria-label="Main navigation">
          <a href="#home" className="pf-brand" onClick={() => setOpen(false)}>
            <span className="pf-brand__dot" />
            {personal.name}
          </a>

          <div className="pf-nav__links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="pf-nav__link"
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              className="pf-btn pf-btn--primary pf-btn--sm pf-nav__cta"
              href={resumePath}
              download
            >
              <IconDownload size={15} />
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className="pf-burger"
            aria-expanded={open}
            aria-controls="pf-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {open && (
        <div className="pf-mobile" id="pf-mobile-menu">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{ animationDelay: `${i * 45}ms` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="pf-btn pf-btn--primary"
            style={{ marginTop: "1.25rem" }}
            href={resumePath}
            download
            onClick={() => setOpen(false)}
          >
            <IconDownload size={16} />
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
