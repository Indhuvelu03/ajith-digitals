"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=88",
  "ecommerce-solutions": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=88",
  "video-editing": "/video-editing.jpg",
  "web-design-development": "/web-design.jpg",
  "software-development": "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=88",
  "graphic-design-branding": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=88",
  "training": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=88",
};

const servicePoints: Record<string, string[]> = {
  "digital-marketing": ["Logo & graphic design", "Technical SEO ranking", "High-ROI Google & Meta ads"],
  "ecommerce-solutions": ["Custom online stores", "Shopify & WooCommerce", "One-click UPI checkout"],
  "video-editing": ["Reels & YouTube edits", "Motion graphics & VFX", "Dedicated editing team"],
  "web-design-development": ["Custom web development", "Responsive UI/UX design", "Sub-second Next.js builds"],
  "software-development": ["Custom web applications", "Cloud SaaS platforms", "API & workflow automation"],
  "graphic-design-branding": ["Custom logo design", "Brand guidelines & rules", "Social media creatives"],
  "training": ["Corporate team workshops", "Applied web & marketing", "AI workflow automation"],
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ServiceCarousel() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scenes = Array.from(root.querySelectorAll<HTMLElement>("[data-service-scene]"));
    let frame = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height));
        const focus = clamp(1 - Math.abs(progress - .5) / .27);
        const exit = clamp((progress - .52) / .48);
        const readableFocus = Math.pow(focus, .45);

        scene.style.setProperty("--service-scale", String(1 - exit * .13));
        scene.style.setProperty("--service-copy-y", `${180 - progress * 360}px`);
        scene.style.setProperty("--service-copy-opacity", String(readableFocus));
        scene.style.setProperty("--service-shade-opacity", String(.82 - exit * .3));
      });

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

  return (
    <div className="sticky-services" ref={rootRef}>
      {services.map((service) => (
        <article className="service-scroll-item" key={service.slug}>
          <div className="service-scroll-scene" data-service-scene>
            <div className="service-sticky-frame">
              <img src={serviceImages[service.slug]} alt={`${service.title} — ${service.kicker} by AjiDigitalAds`} />
              <div className="service-sticky-shade" />
              <div className="service-sticky-copy">
                <h3>{service.title}</h3>
              </div>
            </div>
          </div>
          <div className="service-after shell">
            <div className="service-after-heading">
              <span>{service.number}</span>
              <h4>{service.outcome}</h4>
            </div>
            <div className="service-after-copy">
              <p>{service.summary}</p>
              <ul>{servicePoints[service.slug]?.map((point) => <li key={point}>{point}</li>)}</ul>
              <Link href={`/services/${service.slug}`}>Explore {service.title} <span>↗</span></Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
