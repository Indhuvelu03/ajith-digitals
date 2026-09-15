"use client";

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    title: "Our mission",
    description: "To make enterprise-grade web development, high-impact video editing, distinctive logo design, and organic SEO ranking accessible to ambitious businesses seeking measurable commercial scale.",
    points: [
      "Custom Next.js & Shopify stores engineered for sub-second page loads and maximum conversion rates.",
      "High-retention video editing teams producing viral Instagram reels, YouTube long-forms, and high-converting paid ads.",
      "Data-driven technical SEO audits and keyword ranking strategies that capture qualified organic search traffic.",
      "Premium logo design, brand guidelines, and visual identity systems that position your company as the market leader."
    ],
    image: "/mission.jpg",
    alt: "AjiDigitalAds agency studio strategizing modern digital marketing and web development campaigns",
  },
  {
    title: "Why we started",
    description: "AjiDigitalAds was founded on a simple truth: modern brands fail when their web developer, video editor, logo designer, and SEO marketer work in silos. We united them into one synchronized growth engine.",
    points: [
      "Eliminating the friction between creative design and technical performance engineering.",
      "Replacing expensive multi-agency retainers with a single, dedicated team of seasoned specialists.",
      "Aligning every asset—from YouTube thumbnails and 4K videos to website code—with organic search intent.",
      "Direct communication with lead engineers and designers, without account managers filtering your feedback."
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=88",
    alt: "Multidisciplinary creative team collaborating on video editing and branding",
  },
  {
    title: "The problem we solve",
    description: "Most businesses juggle 4+ disconnected contractors who blame each other for slow load times, poor ad retention, or stagnant Google rankings. We take end-to-end accountability for traffic, design, and conversions.",
    points: [
      "No more pretty websites that fail Core Web Vitals or don't rank on page 1 of Google search.",
      "No more video editors who don't understand paid ad metrics, hooks, or viewer drop-off analytics.",
      "No more generic logo templates that get lost in crowded digital marketplaces.",
      "One cohesive strategy where your branding powers your videos, and your web development fuels your SEO."
    ],
    image: "/problem.png",
    alt: "Strategic digital marketing and SEO ranking workshop session",
  },
  {
    title: "What sets us apart",
    description: "Senior practitioners, zero fluff. You work directly with senior full-stack developers, professional video editors, and technical SEO specialists who treat your ROI and brand authority as their own.",
    points: [
      "100% custom codebase and handcrafted branding—zero slow drag-and-drop page builders.",
      "48-hour video editing turnarounds for fast-moving social media and paid advertising campaigns.",
      "Comprehensive technical SEO and structured Schema.org data integrated into every single build.",
      "Transparent commercial reporting focused on customer acquisition, qualified leads, and measurable revenue."
    ],
    image: "/apart.png",
    alt: "AjiDigitalAds team delivering client results across digital disciplines",
  },
];

export function AboutStoryScroll() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const articleRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!scrollRef.current) return;

    let frame = 0;
    const update = () => {
      const centre = window.innerHeight * .48;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;

      articleRefs.current.forEach((article, index) => {
        if (!article) return;
        const rect = article.getBoundingClientRect();
        const articleCentre = rect.top + rect.height / 2;
        const nextDistance = Math.abs(centre - articleCentre);
        if (nextDistance < distance) {
          distance = nextDistance;
          closest = index;
        }
      });

      setActive(closest);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className={`about-narrative-section ${active % 2 === 0 ? "theme-dark" : "theme-light"}`}
      data-theme={active % 2 === 0 ? "dark" : "light"}
      aria-labelledby="about-narrative-title"
    >
      <div className="about-narrative shell">
        <div className="about-narrative-heading" data-reveal>
          <p className="eyebrow">Inside AjiDigitalAds</p>
          <h2 id="about-narrative-title">The thinking behind<br/><em>the work.</em></h2>
        </div>

        <div className="about-scroll" ref={scrollRef}>
          <div className="about-scroll-copy">
            {chapters.map((chapter, index) => (
              <article
                className={active === index ? "is-active" : ""}
                key={chapter.title}
                ref={(node) => { articleRefs.current[index] = node; }}
              >
                <div className="about-chapter-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.description}</p>
                  {chapter.points && (
                    <ul className="about-chapter-points">
                      {chapter.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  )}
                  <img className="about-chapter-mobile-image" src={chapter.image} alt={chapter.alt} />
                </div>
              </article>
            ))}
          </div>

          <aside className="about-scroll-visual" aria-live="polite">
            {chapters.map((chapter, index) => (
              <img className={active === index ? "is-active" : ""} src={chapter.image} alt={active === index ? chapter.alt : ""} key={chapter.title} />
            ))}
            <div className="about-scroll-shade" />
            <div className="about-scroll-status"><span>{String(active + 1).padStart(2, "0")}</span><span>0{chapters.length}</span></div>
            <p>{chapters[active].title}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
