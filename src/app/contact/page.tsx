import { WhatsAppContactForm } from "@/components/whatsapp-contact";
import { FaqSection } from "@/components/faq-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hire Web Developers, Video Editors & SEO Experts | AjiDigitalAds",
  description:
    "Connect with AjiDigitalAds for a free digital marketing consultation, technical SEO audit, web development quote, or dedicated video editing team. Direct WhatsApp & Call: +91 90923 73329.",
  keywords: [
    "contact digital marketing agency",
    "hire web developers",
    "hire video editing team",
    "hire logo designer",
    "SEO audit consultation",
    "custom web development quote",
    "ecommerce website development contact",
    "digital marketing consultation India",
    "AjiDigitalAds contact",
  ],
  alternates: {
    canonical: "https://ajidigitalads.com/contact",
  },
  openGraph: {
    title: "Contact AjiDigitalAds | Hire Web Developers, Video Editors & SEO Team",
    description:
      "Start a direct conversation with our senior team for custom web development, dedicated video editing, logo design, and organic SEO ranking campaigns.",
    url: "https://ajidigitalads.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page-v2">
      <section className="contact-whatsapp shell" aria-labelledby="contact-title">
        <div className="contact-whatsapp-copy reveal delay-1">
          <div>
            <p className="eyebrow">Direct Consultation · Web, Video & Marketing</p>
            <h1 id="contact-title">Start your project.<br/><em>Speak directly with our team.</em></h1>
          </div>
          <div className="contact-whatsapp-copy-bottom">
            <p>Connect immediately on WhatsApp to discuss your custom web development, video editing pipeline, logo branding, or organic SEO ranking roadmap. Zero forms, no waiting for sales reps.</p>
            <div className="contact-whatsapp-line">
              <span>Direct line</span>
              <strong>+91 90923 73329</strong>
            </div>
          </div>
          <div className="contact-whatsapp-status">
            <i></i>
            <span>Replies within minutes during working hours</span>
            <b>Web · Video · Branding · SEO</b>
          </div>
        </div>

        <div className="contact-whatsapp-card reveal delay-2">
          <div className="contact-whatsapp-card-top">
            <span>Direct WhatsApp Desk</span>
            <b>Instant Response</b>
          </div>
          <div>
            <p className="eyebrow">Free Consultation & Audit</p>
            <h2>One direct click.<br/>A commercial gameplan.</h2>
          </div>
          <WhatsAppContactForm />
        </div>
      </section>
      <FaqSection />
    </main>
  );
}
