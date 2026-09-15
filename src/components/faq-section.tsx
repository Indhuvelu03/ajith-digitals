import Link from "next/link";

const questions = [
  ["What core services does AjiDigitalAds provide?", "We operate as an integrated creative and technology agency, providing dedicated video editing teams, custom Next.js web development, custom logo and graphic design, and full-funnel digital marketing & SEO under one roof."],
  ["Can your video editing team handle short-form reels, shorts, and YouTube videos?", "Yes. Our dedicated video editing team crafts viral Instagram reels, YouTube shorts, long-form YouTube episodes, and high-impact commercial motion graphics with rapid 24–48 hour turnarounds."],
  ["What web development technologies do you use for websites and web apps?", "We engineer sub-second, mobile-first websites and web applications using Next.js, React, TypeScript, and modern headless CMS architecture, complete with built-in technical SEO and conversion-focused UI/UX."],
  ["Do you provide custom logo design and complete graphic designing services?", "Yes. We design distinctive custom logos, vector brand identity systems, brand guidelines, social media marketing creatives, and commercial print collateral tailored to position your company at a premium tier."],
  ["How does your digital marketing and SEO service improve Google rankings?", "We combine technical SEO audits, on-page schema markup, intent-driven content architecture, and high-ROI Google & Meta ads management to build compound organic authority and lower customer acquisition costs."],
  ["Can we hire your team on a monthly retainer or per-project basis?", "Both. You can engage our video editing team, web development team, or digital marketing specialists on flexible monthly retainers, or scope a dedicated fixed-price project tailored to your milestones."],
];

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq-shell shell">
        <div className="faq-heading" data-reveal>
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="faq-title">Clear answers.<br/><em>Before we begin.</em></h2>
          <p>A useful partnership starts with clarity. Here are the questions businesses usually ask before choosing their next digital move.</p>
          <Link href="/contact" className="button">Ask us something <span>↗</span></Link>
        </div>
        <div className="faq-list" data-reveal>
          {questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{question}</h3><i aria-hidden>+</i></summary><div><p>{answer}</p></div></details>)}
        </div>
      </div>
    </section>
  );
}
