import { useEffect, useRef, useState } from "react";

/** Subtle desktop-only cursor. Disabled on touch devices and for reduced motion. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX - 13}px, ${e.clientY - 13}px, 0)`;
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, [role='button']");
      el.classList.toggle("pf-cursor--active", Boolean(interactive));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;
  return <div ref={ref} className="pf-cursor" aria-hidden="true" />;
}
