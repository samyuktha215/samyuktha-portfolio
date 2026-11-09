import { useEffect, useState } from "react";
import { terminalLines } from "../../data/portfolio";

type Rendered = { type: "cmd" | "out"; text: string };

const FULL: Rendered[] = terminalLines.flatMap((l) => [
  { type: "cmd" as const, text: l.cmd },
  ...l.out.map((o) => ({ type: "out" as const, text: o })),
]);

export function Terminal() {
  const [lines, setLines] = useState<Rendered[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLines(FULL);
      return;
    }
    let index = 0;
    let char = 0;
    let timer: number;

    const tick = () => {
      if (index >= FULL.length) return;
      const current = FULL[index];
      if (!current) return;
      if (current.type === "out") {
        setLines((prev) => [...prev, current]);
        index += 1;
        timer = window.setTimeout(tick, 180);
        return;
      }
      if (char < current.text.length) {
        char += 1;
        setTyping(current.text.slice(0, char));
        timer = window.setTimeout(tick, 55);
      } else {
        setLines((prev) => [...prev, current]);
        setTyping("");
        char = 0;
        index += 1;
        timer = window.setTimeout(tick, 320);
      }
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="pf-glass pf-terminal" aria-hidden="true">
      <div className="pf-terminal__bar">
        <i />
        <i />
        <i />
        <span>~/portfolio — zsh</span>
      </div>
      <div className="pf-terminal__body">
        {lines.map((line, i) =>
          line.type === "cmd" ? (
            <div key={i} className="pf-terminal__cmd">
              <b>$</b>
              {line.text}
            </div>
          ) : (
            <div key={i} className="pf-terminal__out">
              {line.text}
            </div>
          ),
        )}
        {typing && (
          <div className="pf-terminal__cmd">
            <b>$</b>
            {typing}
            <span className="pf-caret" />
          </div>
        )}
      </div>
    </div>
  );
}
