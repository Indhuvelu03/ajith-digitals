"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Package = { name: string; price: string; unit?: string; note: string; detail: string };
type Props = { serviceTitle: string; serviceSlug: string; image: string; imageAlt: string; packages: Package[] };

const timelines = ["1–2 weeks", "2–4 weeks", "4–8 weeks", "1–3 weeks", "Ongoing"];
const supportingImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=88",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=88",
];

const digitalMarketingImages = [
  "/digital/brand.jpg",
  "/digital/graphic-design.avif",
  "/digital/seo.jpg",
  "/digital/social-media.jpg",
  "/digital/paid-adds.jpg",
];

const webDevelopmentImages = [
  "/web-des.avif",
  "/web-dev/web-d.jpg",
  "/web-dev/nextjs.jpg",
  "/web-dev/e-commerce.jpg",
  "/web-design.jpg",
];

export function ServicePricingExplorer({ serviceTitle, serviceSlug, image, imageAlt, packages }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const scenes = Array.from(root.querySelectorAll<HTMLElement>("[data-package-scene]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      const focusLine = Math.min(150, window.innerHeight * .22);
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      scenes.forEach((scene, index) => {
        const rect = scene.getBoundingClientRect();
        const nextScene = scenes[index + 1];
        const nextTop = nextScene?.getBoundingClientRect().top ?? window.innerHeight;
        const fadeDistance = Math.max(1, window.innerHeight - focusLine);
        const exitProgress = reduceMotion ? 0 : Math.min(1, Math.max(0, (window.innerHeight - nextTop) / fadeDistance));
        scene.style.setProperty("--package-exit-opacity", String(1 - exitProgress));
        scene.style.setProperty("--package-exit-y", `${exitProgress * -34}px`);
        if (rect.bottom <= focusLine) return;
        const distance = Math.abs(rect.top - focusLine);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActiveIndex((current) => current === nearestIndex ? current : nearestIndex);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const selectPackage = (index: number) => {
    const scene = rootRef.current?.querySelectorAll<HTMLElement>("[data-package-scene]")[index];
    if (!scene) return;
    const top = window.scrollY + scene.getBoundingClientRect().top - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="pricing-explorer-scroll" ref={rootRef}>
      <div className="pricing-explorer">
        <nav className="pricing-explorer-tabs" aria-label={`${serviceTitle} packages`}>
          {packages.map((item, index) => (
            <button className={activeIndex === index ? "is-active" : ""} type="button" aria-pressed={activeIndex === index} onClick={() => selectPackage(index)} key={item.name}>
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </nav>

        <div className="pricing-explorer-scenes">
          {packages.map((item, index) => {
            const itemImage = serviceSlug === "digital-marketing"
              ? digitalMarketingImages[index % digitalMarketingImages.length]
              : serviceSlug === "web-design-development"
                ? webDevelopmentImages[index % webDevelopmentImages.length]
                : index === 0
                  ? image
                  : supportingImages[(index - 1) % supportingImages.length];
            return (
              <div className="pricing-package-scene" data-package-scene key={item.name}>
                <article className="pricing-explorer-card">
                  <figure>
                    <img src={itemImage} alt={index === 0 ? imageAlt : `${item.name} service workspace`} />
                    <figcaption><span>{serviceTitle}</span><b>0{index + 1}</b></figcaption>
                  </figure>
                  <div className="pricing-explorer-content">
                    <div className="pricing-explorer-title"><div><p className="eyebrow">Focused service</p><h3>{item.name}</h3></div><span>From</span></div>
                    <p className="pricing-explorer-summary">{item.note}</p>
                    <div className="pricing-explorer-meta"><span><small>Typical timeline</small>{timelines[index]}</span><span><small>Delivery</small>Focused engagement</span></div>
                    <div className="pricing-explorer-includes"><h4>What is included</h4><ul><li>{item.detail}</li><li>Clear scope, milestones and delivery plan</li><li>Review, refinement and final handover</li></ul></div>
                    <div className="pricing-explorer-bottom"><p><small>Starting at</small><strong>{item.price}</strong><em>{item.unit}</em></p><Link href={`/contact?service=${serviceSlug}&package=${encodeURIComponent(item.name)}`}>Discuss package <span>↗</span></Link></div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
