import Link from "next/link";
import { ServiceCarousel } from "@/components/service-carousel";
import { Statistics } from "@/components/statistics";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AjiDigitalAds",
    alternateName: "AjiDigitalAds — Video Editing Team, Web Development, Logo Design & Marketing",
    url: "https://www.ajidigitalads.com",
    description: "Integrated creative and technology agency specializing in dedicated video editing teams, custom web development, logo & graphic design, and digital marketing.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ajidigitalads.com/services/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <main id="top">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
    <section className="hero hero-new shell" aria-labelledby="home-hero-title">
      <div className="hero-new-grid">
        <div className="hero-new-copy">
          <p className="eyebrow reveal delay-1">Digital Marketing · Web Development · Video Editing · Brand Design</p>
          <h1 id="home-hero-title" className="reveal delay-1">Web, video & marketing.<br/><em>Built for growth.</em></h1>
          <p className="reveal delay-2">We combine custom websites, dedicated video editing, brand design and performance marketing to turn attention into measurable revenue.</p>
          <div className="reveal delay-3">
            <Link className="button" href="/contact">Start with a free audit <span>↗</span></Link>
          </div>
        </div>
        <figure className="hero-image reveal delay-2">
          <img src="https://images.unsplash.com/photo-1637979910474-38e3ad8d5cab?auto=format&fit=crop&w=1400&q=90" alt="AjiDigitalAds team collaborating on web development, video editing, logo design, and digital marketing" />
          <figcaption><span>Strategy, design & technology</span><i>↗</i></figcaption>
        </figure>
      </div>
    </section>
    <section className="signal-strip" aria-label="Core digital capabilities">
      <div className="signal-track">
        {[false, true].map((duplicate) => <div className="signal-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
          <span>Custom Web Development</span><i>✦</i>
          <span>Dedicated Video Editing Team</span><i>✦</i>
          <span>Logo & Graphic Design</span><i>✦</i>
          <span>High-ROI Digital Marketing</span><i>✦</i>
        </div>)}
      </div>
    </section>
    <section className="positioning shell" aria-labelledby="home-positioning-title">
      <div data-reveal>
        <p className="eyebrow">The AjiDigitalAds advantage</p>
        <h2 id="home-positioning-title">Integrated creative & technology studio.<br/><span>Built for measurable business growth.</span></h2>
      </div>
      <div className="positioning-copy" data-reveal>
        <img className="positioning-photo" src="https://images.unsplash.com/photo-1700241956197-0b13f96fd69e?auto=format&fit=crop&w=900&q=85" alt="AjiDigitalAds team collaborating on digital marketing, web development, video editing, and logo design strategy" />
        <p>We unite the four capabilities ambitious brands need most: custom web development, dedicated video editing teams, bespoke logo and graphic design, and performance-led digital marketing. No disconnected freelancers or fragmented agencies—just one joined-up team driving commercial results.</p>
        <Link className="text-link" href="/about">Meet our approach <span>↗</span></Link>
      </div>
    </section>
    <section className="service-directory" id="services" aria-labelledby="services-heading">
      <div className="shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Integrated Digital Capabilities</p>
            <h2 id="services-heading">One specialized partner.<br/><em>Seven ways to grow your business.</em></h2>
          </div>
          <p>We unite high-performance web development, dedicated video editing teams, custom logo graphic design, and data-driven SEO & performance marketing under one roof—giving ambitious brands a cohesive advantage online.</p>
        </div>
      </div>
      <ServiceCarousel />
    </section>
    <section className="method shell" aria-labelledby="home-method-title">
      <div className="method-heading" data-reveal>
        <p className="eyebrow">How momentum gets made</p>
        <h2 id="home-method-title">A clear path from<br/><em>brief to market leadership.</em></h2>
        <p>Our proven six-stage framework connects custom web development, dedicated video editing, brand design, and performance SEO into one reliable execution engine.</p>
      </div>
      <ol className="method-steps" data-reveal data-reveal-repeat>
        {[
          ["Audit & Discover", "We analyze your market, competitors, and target search keywords to uncover high-impact growth opportunities across web development, video content, and digital marketing."],
          ["Strategy & Roadmap", "We establish an intent-driven roadmap—combining custom logo branding, technical SEO keyword mapping, and user conversion funnels so every asset serves a commercial purpose."],
          ["Build, Edit & Design", "Our specialized teams take over: engineering custom Next.js websites, producing viral short-form video reels, and crafting bespoke vector logo and graphic design systems."],
          ["SEO & Quality Launch", "Every deliverable is calibrated for speed and discoverability: testing sub-second page loads, implementing Schema.org markup, and mastering platform-native video cutdowns."],
          ["Campaign & Distribute", "We launch targeted Google Ads, Meta performance marketing, and organic social campaigns engineered to capture buyer attention and generate qualified leads from day one."],
          ["Measure & Scale", "We track organic search rankings, visitor conversion rates, and video retention curves, continuously refining your digital presence so commercial momentum compounds over time."]
        ].map(([title, copy], index) => <li tabIndex={0} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
      </ol>
    </section>
    <Statistics />
    {/* Testimonials are temporarily hidden until verified client quotes are supplied. */}
    <section className="brand-partners" aria-labelledby="brand-partners-title"><div className="shell"><div className="brand-partners-heading" data-reveal><p className="eyebrow">Brand partners</p><h2 id="brand-partners-title">Built together.<br/><em>Made to last.</em></h2><p>Partner identities will appear here once the approved logo assets are supplied.</p></div></div><div className="partner-marquees" data-reveal aria-label="Brand partner logo placeholders">{["forward", "reverse"].map((direction, row) => <div className={`partner-row partner-row-${direction}`} key={direction}><div className="partner-track">{Array.from({ length: 14 }, (_, index) => <div className="partner-logo" key={`${row}-${index}`} aria-hidden={index >= 7}><img src="/partner-placeholder.svg" alt={index < 7 ? `Partner logo placeholder ${index + 1}` : ""}/></div>)}</div></div>)}</div></section>
    <FaqSection />
    <section className="about-cta home-cta shell" data-reveal aria-labelledby="home-cta-title">
      <div className="about-cta-copy">
        <p className="eyebrow">Start a conversation</p>
        <h2 id="home-cta-title">Ready to work with a dedicated<br/><em>creative & tech team?</em></h2>
      </div>
      <div className="about-cta-action">
        <p>Whether you need a dedicated video editing team, custom web development, fresh logo design, or full-funnel digital marketing, we’re ready to build your next advantage.</p>
        <Link href="/contact" className="button">Let’s talk <span>↗</span></Link>
      </div>
    </section>
  </main>;
}
