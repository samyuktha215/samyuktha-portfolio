import { useEffect, useState } from "react";

type Particle = { left: string; delay: string; duration: string; size: string };

export function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generated after hydration so SSR and client markup match.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setParticles(
      Array.from({ length: 22 }, () => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 18}s`,
        duration: `${16 + Math.random() * 18}s`,
        size: `${2 + Math.random() * 2}px`,
      })),
    );
  }, []);

  return (
    <div className="pf-bg" aria-hidden="true">
      <div className="pf-bg__orb pf-bg__orb--a" />
      <div className="pf-bg__orb pf-bg__orb--b" />
      <div className="pf-bg__orb pf-bg__orb--c" />
      <div className="pf-bg__grid" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="pf-particle"
          style={{
            left: p.left,
            bottom: "-5vh",
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <div className="pf-bg__noise" />
    </div>
  );
}
