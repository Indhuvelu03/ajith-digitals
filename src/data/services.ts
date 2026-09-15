export type Service = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  summary: string;
  outcome: string;
  deliverables: string[];
  sections: { title: string; copy: string }[];
};

const serviceCatalog: Service[] = [
  {
    slug: "web-design-development",
    number: "01",
    title: "Web Design & Development",
    kicker: "Custom web development company & UI/UX design.",
    summary: "Fast, bespoke Next.js web development and responsive UI/UX websites engineered around how modern customers decide.",
    outcome: "A sharper digital first impression, engineered to convert.",
    deliverables: ["Custom Web Development", "Next.js & React Builds", "UI/UX Website Design", "E-Commerce Web Platforms", "Technical SEO & Speed"],
    sections: [
      { title: "Understand", copy: "We learn your offer, audience and commercial goals before a single layout is drawn." },
      { title: "Position", copy: "Clear messaging and information architecture make the right decision feel obvious." },
      { title: "Design", copy: "Distinct visual systems and responsive UI give your company a credible, memorable digital presence." },
      { title: "Build", copy: "Modern, high-speed Next.js development keeps the experience lightning-fast, reliable and easy to maintain." },
      { title: "Optimise", copy: "We engineer built-in technical SEO, accessibility and real-world conversion triggers from the outset." },
      { title: "Launch", copy: "Every release is checked across devices, mobile viewports and performance benchmarks." },
      { title: "Improve", copy: "Post-launch insights show what to refine next, so your website keeps compounding in value." }
    ]
  },
  {
    slug: "software-development",
    number: "02",
    title: "Software Development",
    kicker: "Custom software development & web applications.",
    summary: "Custom software development company turning complex operations into high-speed web apps, cloud SaaS platforms, and automated workflow integrations.",
    outcome: "From manual process to a dependable product advantage.",
    deliverables: ["Custom Web Applications", "SaaS Platform Engineering", "API & Cloud Integrations", "Database Architecture", "Dedicated Support & SLA"],
    sections: [
      { title: "Discover", copy: "We map the people, friction and opportunity behind the technical requirements." },
      { title: "Scope", copy: "A practical software roadmap focuses investment on the highest-value core job first." },
      { title: "Prototype", copy: "Early interactive flows let teams validate user experience before full engineering." },
      { title: "Engineer", copy: "Clean, scalable systems built with enterprise security, cloud resilience and speed." },
      { title: "Integrate", copy: "Your software connects naturally with payment gateways, CRMs and operational databases." },
      { title: "Release", copy: "Structured quality assurance makes production launch calm, reliable and secure." },
      { title: "Evolve", copy: "We maintain and upgrade systems as customer volume and business demands expand." }
    ]
  },
  {
    slug: "graphic-design-branding",
    number: "03",
    title: "Graphic Design & Branding",
    kicker: "Custom logo design, brand identity & creative assets.",
    summary: "Distinctive custom logo design, comprehensive visual identity systems, and high-impact marketing creatives that elevate brand authority.",
    outcome: "A visual identity with the range to grow with you.",
    deliverables: ["Custom Logo Design", "Brand Identity Systems", "Brand Guidelines & Rules", "Social Media Creatives", "Print & Marketing Assets"],
    sections: [
      { title: "Listen", copy: "We discover the real personality, audience and market positioning behind your business." },
      { title: "Clarify", copy: "A clear creative territory anchors every logo, typography and layout decision that follows." },
      { title: "Identity", copy: "Logo design, type pairings, colour psychology and graphic direction form a cohesive system." },
      { title: "Apply", copy: "We bring the visual identity to life across websites, packaging, social media and stationery." },
      { title: "Equip", copy: "Practical guidelines ensure every future creative execution stays recognisably on-brand." },
      { title: "Campaign", copy: "High-impact visual assets make product launches, seasonal offers and updates stand out." },
      { title: "Refine", copy: "We evolve the visual asset library as your company expands into new markets." }
    ]
  },
  {
    slug: "training",
    number: "04",
    title: "Training",
    kicker: "Corporate digital marketing & web skills workshops.",
    summary: "Practical, project-led corporate training for teams and leaders ready to master modern digital marketing, web technologies, and AI workflow automation.",
    outcome: "Knowledge that becomes useful from the next working day.",
    deliverables: ["Corporate Team Workshops", "Digital Marketing Skills", "Web Development Training", "Brand & Design Principles", "AI Workflow Automation"],
    sections: [
      { title: "Assess", copy: "We evaluate existing skill levels and identify the commercial capabilities that matter most." },
      { title: "Plan", copy: "A tailored syllabus fits your team's role, time constraints and immediate project goals." },
      { title: "Explain", copy: "Clear, jargon-free teaching makes advanced digital concepts easy to understand." },
      { title: "Practice", copy: "Hands-on, brief-driven exercises reinforce learning far better than passive lectures." },
      { title: "Review", copy: "Constructive feedback and code/creative critiques help each member reach professional standards." },
      { title: "Apply", copy: "Teams execute live campaign and web deliverables during the training sessions." },
      { title: "Continue", copy: "SOPs, templates, checklists and follow-up mentoring ensure skills compound into daily habits." }
    ]
  },
  {
    slug: "ecommerce-solutions",
    number: "05",
    title: "E-Commerce Solutions",
    kicker: "E-commerce website development & Shopify stores.",
    summary: "High-converting e-commerce web development, custom Shopify & WooCommerce stores, instant UPI checkout, and automated customer retention funnels.",
    outcome: "A commerce platform ready for the next stage of demand.",
    deliverables: ["E-Commerce Storefront Design", "Custom Shopify Builds", "WooCommerce Development", "UPI & Payment Gateway Setup", "Conversion Funnel Optimization"],
    sections: [
      { title: "Audit", copy: "We inspect your product catalogue, checkout flow and customer journey for hidden drop-offs." },
      { title: "Structure", copy: "Intuitive product categories, instant search and facet filters shorten the path to purchase." },
      { title: "Design", copy: "Every screen establishes trust, displays verified social proof, and makes checkout effortless." },
      { title: "Build", copy: "Fast, mobile-first storefronts integrated seamlessly with inventory and shipping couriers." },
      { title: "Convert", copy: "One-click UPI checkout, mobile wallets and cart recovery sequences protect every sale." },
      { title: "Measure", copy: "Actionable revenue analytics and tracking make commercial decisions confident and clear." },
      { title: "Scale", copy: "Your online store is architected to handle viral campaign traffic and high transaction spikes." }
    ]
  },
  {
    slug: "video-editing",
    number: "06",
    title: "Video Editing",
    kicker: "Dedicated video editing team for brands and creators.",
    summary: "Hire a dedicated video editing team for viral reels, shorts, YouTube videos, and high-impact commercial motion graphics designed to stop the scroll.",
    outcome: "Video content with a clear job: attention, understanding or action.",
    deliverables: ["Short-Form Reels & Shorts", "YouTube Video Editing", "Commercial Video Production", "Motion Graphics & VFX", "Platform-Native Cutdowns"],
    sections: [
      { title: "Brief", copy: "We define the audience hooks, target platform algorithms and core calls-to-action." },
      { title: "Shape", copy: "A tight, retention-engineered story arc is structured before editing begins." },
      { title: "Select", copy: "Footage, audio tracks and key visual moments are chosen for emotional resonance." },
      { title: "Edit", copy: "Deliberate pacing, dynamic cuts and rhythm turn raw clips into high-retention content." },
      { title: "Animate", copy: "Branded motion graphics, kinetic subtitles and visual effects elevate perceived value." },
      { title: "Adapt", copy: "Every cutdown is formatted for 9:16 vertical reels, 16:9 widescreen and 1:1 feeds." },
      { title: "Refine", copy: "Viewer retention curves inform ongoing edits to continuously boost engagement." }
    ]
  }
];

const digitalMarketing: Service = {
  slug: "digital-marketing",
  number: "01",
  title: "Digital Marketing & Branding",
  kicker: "Full-funnel digital marketing agency & creative studio.",
  summary: "Connected custom logo design, graphic designing, technical SEO, social media marketing, and high-ROI paid ads that turn attention into paying customers.",
  outcome: "A cohesive brand and growth engine that attracts, convinces and converts.",
  deliverables: ["Custom Logo & Brand Identity", "Graphic Designing & Creatives", "Search Engine Optimization (SEO)", "Google Ads & Performance Marketing", "Social Media Marketing Strategy"],
  sections: [
    { title: "Brand Identity", copy: "Distinctive logo design, typography and creative guidelines establish an unmistakable, ownable market presence." },
    { title: "Graphic Design", copy: "High-impact visual creatives, marketing banners and social assets make your brand memorable across touchpoints." },
    { title: "Strategy & Audit", copy: "We audit your market, competitors, audience and search footprint to identify high-conversion opportunities." },
    { title: "SEO & Content", copy: "Intent-led search engine optimization and technical schema position your business where buyer intent is highest." },
    { title: "Social Media", copy: "Consistent brand storytelling, engaging reels, and targeted publishing build an active, loyal customer community." },
    { title: "Paid Performance", copy: "Precision-targeted Google Ads and Meta campaigns engineered to minimize acquisition cost and maximize ROI." },
    { title: "Measure & Scale", copy: "Transparent attribution reporting and conversion testing ensure your marketing budget compounds into revenue." }
  ]
};

const orderedSlugs = [
  "web-design-development",
  "ecommerce-solutions",
  "video-editing",
  "software-development",
  "training",
];

export const services: Service[] = [
  digitalMarketing,
  ...orderedSlugs.flatMap((slug) => {
    const service = serviceCatalog.find((item) => item.slug === slug);
    return service ? [service] : [];
  }),
].map((service, index) => ({ ...service, number: String(index + 1).padStart(2, "0") }));

export const getService = (slug: string) => services.find((service) => service.slug === slug);
