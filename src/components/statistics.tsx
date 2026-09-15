"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 6, suffix: "", label: "Integrated disciplines", note: "Web, video, branding & SEO in one team" },
  { value: 100, suffix: "%", label: "Custom design & code", note: "Zero templates, built-in technical SEO" },
  { value: 48, suffix: "h", label: "Video turnaround", note: "Fast reels, shorts & motion graphics" },
  { value: 1, suffix: "", label: "Accountable partner", note: "Direct communication with lead specialists" },
];

export function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    let animation = 0;
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(animation);
      if (!entry.isIntersecting) { setValues(metrics.map(() => 0)); return; }
      const started = performance.now();
      const duration = 1250;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - started) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValues(metrics.map((metric) => Math.round(metric.value * eased)));
        if (progress < 1) animation = requestAnimationFrame(tick);
      };
      animation = requestAnimationFrame(tick);
    }, { threshold: .35 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { observer.disconnect(); cancelAnimationFrame(animation); };
  }, []);

  return <section ref={sectionRef} className="impact-ledger" aria-labelledby="impact-title">
    <div className="impact-shell shell">
      <div className="impact-intro">
        <p className="eyebrow">Built into every project</p>
        <h2 id="impact-title">Engineered for search.<br/><em>Designed to convert.</em></h2>
        <p>Every website development build, video editing cut, logo design, and digital marketing campaign is engineered with speed, clean architecture, and commercial accountability from day one.</p>
      </div>
      <div className="impact-metrics">
        {metrics.map((metric, index) => (
          <article key={metric.label}>
            <div className="impact-value">
              {String(values[index]).padStart(2, "0")}<span>{metric.suffix}</span>
            </div>
            <h3>{metric.label}</h3>
            <p>{metric.note}</p>
            <small>0{index + 1}</small>
          </article>
        ))}
      </div>
    </div>
  </section>;
}
