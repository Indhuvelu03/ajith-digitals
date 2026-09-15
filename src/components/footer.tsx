import Link from "next/link";
import { services } from "@/data/services";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main shell">
      <div className="footer-brand">
        <Link href="/" className="wordmark-logo-link" aria-label="AjiDigitalAds home">
          <img src="/logo.png" alt="AjiDigitalAds digital agency logo" className="site-logo footer-logo" />
        </Link>
        <p>Custom Web Development · Dedicated Video Editing Teams · Logo & Graphic Design · SEO & Digital Marketing.</p>
      </div>
      <div>
        <p className="footer-label">Explore</p>
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <p className="footer-label">Core Services</p>
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>
        ))}
      </div>
      <div>
        <p className="footer-label">Say hello</p>
        <a href="mailto:hello@ajidigitalads.com">hello@ajidigitalads.com</a>
        <a href="tel:+919092373329">+91 90923 73329</a>
        <p className="footer-location">India · Serving clients worldwide</p>
      </div>
    </div>
    <div className="footer-legal shell">
      <span>© {new Date().getFullYear()} AjiDigitalAds</span>
      <span>Engineered for search performance & commercial growth.</span>
      <Link href="/">Back to top ↑</Link>
    </div>
  </footer>;
}
