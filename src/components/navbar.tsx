"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const serviceGroups = [
  {
    title: "Digital Marketing\n& Branding",
    href: "/services/digital-marketing",
    items: ["Logo & Graphic Design", "Brand Identity & Guidelines", "Technical SEO Services", "Social Media Marketing", "Google & Meta Ads"],
  },
  {
    title: "Web\nDevelopment",
    href: "/services/web-design-development",
    items: ["Custom Web Development", "Next.js & React Builds", "UI/UX Website Design", "Landing Page Funnels", "Technical SEO & Speed"],
  },
  {
    title: "Video Editing\nTeam",
    href: "/services/video-editing",
    items: ["Short-Form Reels & Shorts", "YouTube Video Editing", "Commercial Video Films", "Motion Graphics & VFX", "Platform-Native Cutdowns"],
  },
  {
    title: "E-Commerce\nSolutions",
    href: "/services/ecommerce-solutions",
    items: ["E-Commerce Web Stores", "Shopify & WooCommerce", "UPI Payment Gateways", "Catalogue Architecture", "Conversion Optimization"],
  },
  {
    title: "Software\nDevelopment",
    href: "/services/software-development",
    items: ["Custom Cloud Software", "Web SaaS Applications", "API & Database Sync", "Business Automation Tools", "Dedicated Support & SLA"],
  },
  {
    title: "Professional\nTraining",
    href: "/services/training",
    items: ["Digital Marketing Training", "Web Development Skills", "Graphic Design & Branding", "Video Editing Masterclass", "Applied Team Workshops"],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesPage = pathname.startsWith("/services");
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return <header className="site-header">
    <nav className="nav shell" aria-label="Main navigation">
      <Link href="/" className="wordmark-logo-link" aria-label="AjiDigitalAds home" onClick={closeMobileMenu}><img src="/logo.png" alt="AjiDigitalAds" className="site-logo" /></Link>
      <div className="nav-links">
        <Link href="/" className={pathname === "/" ? "is-active" : undefined} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "is-active" : undefined} aria-current={pathname === "/about" ? "page" : undefined}>About us</Link>
        <div className="services-menu" onMouseLeave={() => setOpen(false)}>
          <button className={`nav-dropdown${isServicesPage ? " is-active" : ""}`} aria-expanded={open} aria-current={isServicesPage ? "page" : undefined} onClick={() => setOpen(!open)}>Services <span aria-hidden>↘</span></button>
          <div className={`dropdown-panel ${open ? "is-open" : ""}`}>
            {serviceGroups.map((group) => <section className="mega-column" key={group.title}>
              <Link href={group.href} className="mega-title" onClick={() => setOpen(false)}>{group.title.split("\n").map((line) => <span key={line}>{line}</span>)}</Link>
              {group.items.map((item) => <Link href={group.href} key={item} onClick={() => setOpen(false)}>{item}</Link>)}
            </section>)}
          </div>
        </div>
        <Link href="/contact" className={pathname === "/contact" ? "is-active" : undefined} aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
      </div>
      <Link className="button button-small desktop-nav-cta" href="/contact">Start a project <span>↗</span></Link>
      <button
        className={`mobile-nav-toggle${mobileOpen ? " is-open" : ""}`}
        type="button"
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          setMobileOpen((current) => !current);
          if (mobileOpen) setMobileServicesOpen(false);
        }}
      ><span /><span /><span /></button>
    </nav>
    <div id="mobile-navigation" className={`mobile-nav-panel${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen} inert={!mobileOpen}>
      <nav className="mobile-nav-main" aria-label="Mobile navigation">
        <Link href="/" onClick={closeMobileMenu} className={pathname === "/" ? "is-active" : undefined}><span>01</span>Home</Link>
        <Link href="/about" onClick={closeMobileMenu} className={pathname === "/about" ? "is-active" : undefined}><span>02</span>About us</Link>
        <button className={`mobile-services-toggle${isServicesPage ? " is-active" : ""}`} type="button" aria-expanded={mobileServicesOpen} aria-controls="mobile-service-navigation" onClick={() => setMobileServicesOpen((current) => !current)}><span>03</span>Services <b aria-hidden>{mobileServicesOpen ? "−" : "+"}</b></button>
        <Link href="/contact" onClick={closeMobileMenu} className={pathname === "/contact" ? "is-active" : undefined}><span>04</span>Contact</Link>
      </nav>
      <div id="mobile-service-navigation" className={`mobile-service-links${mobileServicesOpen ? " is-open" : ""}`} aria-hidden={!mobileServicesOpen} inert={!mobileServicesOpen}>
        {serviceGroups.map((group) => <Link href={group.href} onClick={closeMobileMenu} className={pathname === group.href ? "is-active" : undefined} key={group.href}><span aria-hidden>•</span>{group.title.replace("\n", " ")}</Link>)}
      </div>
      <Link className="button mobile-nav-cta" href="/contact" onClick={closeMobileMenu}>Start a project <span>↗</span></Link>
    </div>
  </header>;
}
