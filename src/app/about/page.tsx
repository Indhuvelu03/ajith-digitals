import Link from "next/link";
import { AboutStoryScroll } from "@/components/about-story-scroll";
import { WorkJourney } from "@/components/work-journey";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Digital Agency | Web Development, Video Editing & SEO | AjiDigitalAds",
  description:
    "Discover AjiDigitalAds—a full-service digital agency delivering custom web development, dedicated video editing teams, premium logo branding, and data-driven SEO marketing to scale your business.",
  keywords: [
    "about AjiDigitalAds",
    "digital marketing agency",
    "web development company",
    "video editing team",
    "logo design company",
    "graphic design agency",
    "SEO services company",
    "ecommerce website development",
    "creative digital studio",
  ],
  alternates: {
    canonical: "https://ajidigitalads.com/about",
  },
  openGraph: {
    title: "About AjiDigitalAds | Web Development, Video Editing & Growth Agency",
    description:
      "A joined-up digital agency uniting custom web development, dedicated video editors, brand identity designers, and performance SEO specialists.",
    url: "https://ajidigitalads.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-intro shell">
          <div className="about-hero-title">
            <p className="eyebrow reveal delay-1">About AjiDigitalAds</p>
            <h1 id="about-hero-title" className="reveal delay-2">One digital team.<br/><em>Every move connected.</em></h1>
          </div>
          <div className="about-hero-copy reveal delay-3">
            <span>Web Development · Video Editing · Logo & Branding · SEO</span>
            <p>We bring web development, video editing, branding and SEO under one specialist team—so every deliverable advances the same growth goal.</p>
            <Link href="/contact" className="text-link">Start your project <b>↗</b></Link>
          </div>
        </div>

        <div className="about-hero-visual shell">
          <figure className="about-image about-image-main reveal delay-2">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=88" alt="AjiDigitalAds digital agency team collaborating on web development and video editing projects" />
            <figcaption><span>Specialist Team</span><span>End-to-End Delivery</span></figcaption>
          </figure>
          <figure className="about-image about-image-detail reveal delay-3">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=88" alt="Modern creative agency workspace engineered for digital marketing and design" />
            <figcaption><span>Built with Precision</span><span>01—26</span></figcaption>
          </figure>
          <aside className="about-belief reveal delay-3">
            <span>Our philosophy</span>
            <p>High-converting code, compelling video storytelling, and technical SEO outperform fragmented agency retainers every time.</p>
            <i aria-hidden>↘</i>
          </aside>
        </div>
      </section>

      <AboutStoryScroll />

      <section className="about-team" aria-labelledby="about-team-title">
        <div className="about-team-heading shell" data-reveal>
          <div><p className="eyebrow">Our disciplines</p><h2 id="about-team-title">Specialist squads.<br/><em>Unified execution.</em></h2></div>
          <p>Instead of juggling four separate freelancers or siloed agencies, you partner with a dedicated, joined-up creative technology team where design, code, video, and SEO reinforce each other.</p>
        </div>
        <div className="team-grid shell">
          {[
            ["01", "Web Development & E-Commerce", "High-speed Next.js websites, Shopify stores, and custom web applications engineered for Core Web Vitals and frictionless conversion.", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=88"],
            ["02", "Dedicated Video Editing Team", "Viral short-form reels, YouTube editing, 3D motion graphics, and corporate video production designed for viewer retention and ad ROAS.", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=88"],
            ["03", "Logo Design & Brand Identity", "Distinctive visual systems, brand guidelines, typography standards, and packaging design that communicate authority at first glance.", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=88"],
            ["04", "Digital Marketing & SEO", "Technical SEO audits, organic search ranking strategies, and precision paid ad campaigns built around measurable revenue ROI.", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=88"],
          ].map(([number, role, copy, image]) => (
            <article className="team-card" data-reveal key={number}>
              <figure><img src={image} alt={`AjiDigitalAds specialist lead for ${role}`} /></figure>
              <div><span>{number}</span><h3>{role}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <WorkJourney />

      <section className="about-cta shell" data-reveal aria-labelledby="about-cta-title">
        <div className="about-cta-copy">
          <p className="eyebrow">Ready to scale?</p>
          <h2 id="about-cta-title">Bring us your growth goals.<br/><em>We’ll build the complete system.</em></h2>
        </div>
        <div className="about-cta-action">
          <p>Whether you need a full web development overhaul, a dedicated video editing pipeline, a timeless logo redesign, or top-tier SEO rankings—we are ready to start.</p>
          <Link href="/contact" className="button">Start a conversation <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
