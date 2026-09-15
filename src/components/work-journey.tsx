"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  [
    "01",
    "Audit & Search Discovery",
    "We conduct a full technical SEO audit, competitor search ranking analysis, website speed diagnostics, and video content gap assessment to pinpoint exact organic growth opportunities."
  ],
  [
    "02",
    "Architecture & Keyword Strategy",
    "We architect high-converting wireframes, map intent-driven keyword clusters for Google rankings, script high-retention video hooks, and establish responsive web development specifications."
  ],
  [
    "03",
    "Development, Video & Brand Production",
    "Our specialized squads build in Next.js and Shopify with clean semantic HTML, edit 4K reels and YouTube videos for maximum audience retention, and craft bespoke vector logo branding."
  ],
  [
    "04",
    "Core Web Vitals & Technical Launch",
    "We test for sub-second load times, implement Schema.org structured data, configure analytics and conversion pixels, verify 100% mobile responsiveness, and deploy with zero downtime."
  ],
  [
    "05",
    "Rankings, Ad Scale & Revenue Growth",
    "We actively track organic search ranking gains, video viewer watch time, and conversion funnels—continuously optimizing technical SEO and paid ads to scale commercial return on investment."
  ],
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function WorkJourney() {
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ width: 1200, height: 2200 });
  const [lineProgress, setLineProgress] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let frame = 0;

    const measure = () => {
      const listRect = list.getBoundingClientRect();
      const nextPaths = cardRefs.current.slice(0, -1).map((card, index) => {
        const next = cardRefs.current[index + 1];
        if (!card || !next) return "";
        const from = card.getBoundingClientRect();
        const to = next.getBoundingClientRect();
        const fromLeft = index % 2 === 0;
        const x1 = (fromLeft ? from.right : from.left) - listRect.left;
        const y1 = from.top - listRect.top + from.height / 2;
        const x2 = (fromLeft ? to.left : to.right) - listRect.left;
        const y2 = to.top - listRect.top + to.height / 2;
        const middleX = (x1 + x2) / 2;
        return `M ${x1} ${y1} C ${middleX} ${y1}, ${middleX} ${y2}, ${x2} ${y2}`;
      });
      setSize({ width: listRect.width, height: list.scrollHeight });
      setPaths(nextPaths);
    };

    const update = () => {
      const focus = window.innerHeight * .66;
      const first = cardRefs.current[0]?.getBoundingClientRect();
      setStarted(Boolean(first && first.top < window.innerHeight * .84));
      setLineProgress(cardRefs.current.slice(0, -1).map((card, index) => {
        const next = cardRefs.current[index + 1];
        if (!card || !next) return 0;
        const from = card.getBoundingClientRect();
        const to = next.getBoundingClientRect();
        const fromCentre = from.top + from.height / 2;
        const toCentre = to.top + to.height / 2;
        return clamp((focus - fromCentre) / Math.max(1, toCentre - fromCentre));
      }));
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    measure();
    update();
    const resizeObserver = new ResizeObserver(() => {
      measure();
      requestUpdate();
    });
    resizeObserver.observe(list);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="work-journey" aria-labelledby="work-journey-title">
      <div className="shell">
        <header className="work-journey-heading" data-reveal>
          <div>
            <p className="eyebrow">How we work</p>
            <h2 id="work-journey-title">Five proven stages.<br/><em>One connected growth path.</em></h2>
          </div>
          <p>From initial technical SEO audits and responsive web development to high-retention video production and conversion scaling—every stage builds compound momentum.</p>
        </header>

        <div className="work-journey-list" ref={listRef}>
          <svg viewBox={`0 0 ${size.width} ${size.height}`} preserveAspectRatio="none" aria-hidden>
            {paths.map((path, index) => <path d={path} key={index} pathLength="1" style={{ strokeDasharray: 1, strokeDashoffset: 1 - lineProgress[index] }} />)}
          </svg>
          {steps.map(([number, title, copy], index) => {
            const visible = index === 0 ? started : lineProgress[index - 1] >= .78;
            return <article className={visible ? "is-visible" : ""} ref={(node) => { cardRefs.current[index] = node; }} key={number}><i aria-hidden/><strong>{number}</strong><h3>{title}</h3><p>{copy}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
