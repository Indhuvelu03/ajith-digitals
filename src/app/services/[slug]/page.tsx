import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { ServicePricingExplorer } from "@/components/service-pricing-explorer";

type ProblemItem = {
  problem: string;
  problemDetail?: string;
  fixHeadline?: string;
  fix: string;
  metric?: string;
  metricLabel?: string;
  beforeMetric?: string;
};

type ServiceExtra = {
  image: string;
  imageAlt: string;
  problems: ProblemItem[];
  prices: { name: string; price: string; unit?: string; note: string }[];
};

const serviceExtras: Record<string, ServiceExtra> = {
  "digital-marketing": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Creative brand identity, graphic design and digital marketing presentation",
    problems: [
      {
        problem: "The business lacks a distinctive identity and looks generic across channels.",
        problemDetail: "When visual identity is inconsistent and brand guidelines don't exist, marketing looks amateur and struggles to command trust.",
        fixHeadline: "Unified Brand Identity & Distinctive Creative",
        fix: "We design high-impact visual assets, distinctive typography, and clear brand standards that make every customer touchpoint feel unmistakably yours.",
        metric: "3.5x",
        metricLabel: "Brand Recall",
        beforeMetric: "Fragmented",
      },
      {
        problem: "Marketing budget is spread across channels with no shared direction or ROI.",
        problemDetail: "Disconnected posts, random SEO blogs and scattered campaigns generate vanity impressions but zero qualified sales pipeline.",
        fixHeadline: "One Connected Full-Funnel Growth Engine",
        fix: "We align brand positioning, intent-led search, targeted social content and conversion-focused paid advertising into one commercial roadmap.",
        metric: "+240%",
        metricLabel: "Qualified Inquiries",
        beforeMetric: "Vanity Clicks",
      },
      {
        problem: "Campaigns attract casual views but fail to convert into paying customers.",
        problemDetail: "Generic copy and weak calls-to-action fail to address customer hesitation, leaving hard-earned traffic wasted.",
        fixHeadline: "Conversion-Led Messaging & Landing Funnels",
        fix: "We pair persuasive value propositions with tailored landing experiences and frictionless contact paths that turn attention into paying clients.",
        metric: "4.8x",
        metricLabel: "Conversion Rate",
        beforeMetric: "1.1%",
      },
      {
        problem: "Organic search rankings are non-existent, forcing heavy dependence on ad spend.",
        problemDetail: "Without technical SEO, structured content architecture and high-intent keywords, customer acquisition costs spiral higher every month.",
        fixHeadline: "Compound Organic SEO & Search Authority",
        fix: "We engineer durable search rankings with on-page technical optimization, semantic schema and intent-led content that drives steady, unpaid leads.",
        metric: "+380%",
        metricLabel: "Organic Leads",
        beforeMetric: "High Ad Reliance",
      },
      {
        problem: "Marketing creatives take weeks to produce, missing seasonal market momentum.",
        problemDetail: "Ad-hoc design requests, missing asset libraries, and endless revision cycles delay launches and surrender market share to faster competitors.",
        fixHeadline: "Agile Modular Creative Systems & Fast Turnaround",
        fix: "We provide reusable campaign templates, bespoke social designs, and dynamic motion assets ready within 48 hours for rapid seasonal execution.",
        metric: "48 Hrs",
        metricLabel: "Creative Turnaround",
        beforeMetric: "3-4 Weeks",
      },
    ],
    prices: [
      { name: "Brand identity & guidelines", price: "₹30,000", note: "Logo design, visual identity system, typography, colour palette and brand rules." },
      { name: "Graphic design & creatives", price: "₹15,000", note: "Marketing banners, promotional creatives, social design and digital assets." },
      { name: "SEO & content growth", price: "₹18,000", unit: "/ month", note: "Technical SEO, on-page optimisation, keyword research and content execution." },
      { name: "Social media marketing", price: "₹15,000", unit: "/ month", note: "Channel strategy, bespoke post design, copywriting and community publishing." },
      { name: "Performance & paid ads", price: "₹14,000", unit: "/ month", note: "Google & Meta ads management, audience targeting and conversion optimization." },
    ],
  },
  "ecommerce-solutions": {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Customer completing a digital payment at checkout",
    problems: [
      {
        problem: "Shoppers struggle to find products and abandon the store catalogue.",
        problemDetail: "Cluttered menus, slow filtering and poor mobile hierarchy frustrate buyers before they ever reach checkout.",
        fixHeadline: "Frictionless Storefront & Catalogue Hierarchy",
        fix: "Clear navigation structure, fast facet filters, and conversion-first product pages shorten the customer path to purchase.",
        metric: "+65%",
        metricLabel: "Search-to-Cart",
        beforeMetric: "18%",
      },
      {
        problem: "Trust drops at checkout and high basket abandonment eats margin.",
        problemDetail: "Hidden shipping fees, slow payment gateways and clunky multi-step forms kill buyer confidence right at the decision point.",
        fixHeadline: "Transparent One-Click Checkout Experience",
        fix: "A calm, transparent checkout with instant mobile payment options, guest purchasing, and clear delivery cues protects every transaction.",
        metric: "72%",
        metricLabel: "Cart Completion",
        beforeMetric: "26%",
      },
      {
        problem: "Store operations, payments, and order tracking behave like disconnected tools.",
        problemDetail: "Manual order export, mismatched stock updates and delayed shipping notifications create continuous customer support fires.",
        fixHeadline: "Automated Commerce & Dispatch Sync",
        fix: "Direct synchronization between payment gateways, stock inventory, shipping couriers, and automated customer updates frees your team.",
        metric: "100%",
        metricLabel: "Automated Operations",
        beforeMetric: "Manual",
      },
      {
        problem: "Mobile shoppers drop off due to sluggish page speeds and clumsy checkout flows.",
        problemDetail: "Over 75% of e-commerce traffic is mobile; heavy scripts and complicated inputs drive impatient visitors directly to competitors.",
        fixHeadline: "Sub-Second Mobile UX & Instant UPI Checkout",
        fix: "Lightning-fast mobile templates with one-tap UPI, Google Pay, and biometric authentication accelerate customer completion.",
        metric: "< 1.2s",
        metricLabel: "Mobile Checkout Speed",
        beforeMetric: "5.8s Delay",
      },
      {
        problem: "Repeat purchases are rare, leaving revenue trapped in costly new acquisition.",
        problemDetail: "Without post-purchase retention funnels, automated WhatsApp updates or loyalty incentives, customer lifetime value remains low.",
        fixHeadline: "Automated Retention & WhatsApp Commerce Flows",
        fix: "We install automated order notifications, re-order alerts, tailored cross-sells, and VIP incentives that turn one-off buyers into repeat patrons.",
        metric: "3.2x",
        metricLabel: "Repeat Purchase Rate",
        beforeMetric: "One-Offs",
      },
    ],
    prices: [
      { name: "Store strategy", price: "₹15,000", note: "Journey audit, catalogue planning and platform direction." },
      { name: "UX & design", price: "₹30,000", note: "Responsive storefront and conversion-focused screens." },
      { name: "Platform build", price: "₹75,000", note: "A production-ready store configured for your catalogue." },
      { name: "Payments", price: "₹12,000", note: "Gateway, checkout and essential transaction setup." },
      { name: "Growth optimisation", price: "₹18,000", unit: "/ month", note: "Testing, merchandising and conversion improvement." },
    ],
  },
  "video-editing": {
    image: "/video-editing.jpg",
    imageAlt: "Stage lighting representing film and video production",
    problems: [
      {
        problem: "Raw footage has information but fails to command viewer attention.",
        problemDetail: "Unfocused clips, weak hooks and sluggish pacing cause viewers to swipe past within the first two seconds.",
        fixHeadline: "Hook-Driven Dynamic Narrative Structure",
        fix: "We craft punchy opening hooks, deliberate pacing, and compelling story arcs specifically structured to stop the scroll and hold retention.",
        metric: "5.4x",
        metricLabel: "View Retention",
        beforeMetric: "12%",
      },
      {
        problem: "One horizontal edit is pasted everywhere with awkward letterboxing.",
        problemDetail: "Platform algorithms penalize mismatched aspect ratios, and mobile viewers ignore clunky widescreen re-uploads.",
        fixHeadline: "Platform-Native Motion Graphics & Framing",
        fix: "Purpose-built 9:16 vertical reels, 1:1 feeds, dynamic captions, and platform-specific safe-zone layouts maximize algorithmic reach.",
        metric: "+320%",
        metricLabel: "Algorithmic Reach",
        beforeMetric: "Flat Reach",
      },
      {
        problem: "Content looks inconsistent from one campaign to the next.",
        problemDetail: "Inconsistent fonts, random color grades and muddy audio dilute brand recognition and lower production value.",
        fixHeadline: "Signature Visual Grading & Sound Design",
        fix: "Repeatable colour grading, branded kinetic typography, audio mastering, and sound effects build instant brand recognition.",
        metric: "100%",
        metricLabel: "Brand Consistency",
        beforeMetric: "Inconsistent",
      },
      {
        problem: "Videos lack emotional impact due to flat sound design and generic background music.",
        problemDetail: "Audio makes up 50% of the viewer experience; poor mixing and lifeless soundscapes leave viewers disengaged.",
        fixHeadline: "Immersive Audio Mastering & Foley Soundscapes",
        fix: "Layered foley sound effects, precise dialogue leveling, and bespoke musical crescendo create high-energy emotional engagement.",
        metric: "88%",
        metricLabel: "Average Watch Time",
        beforeMetric: "18%",
      },
      {
        problem: "Editing turnarounds are too slow to capitalize on trending moments.",
        problemDetail: "Taking weeks to cut and deliver videos means missing social media trends and causing your marketing calendar to stall.",
        fixHeadline: "Rapid 24–48 Hour Social Delivery Pipeline",
        fix: "Standardized review workflows, cloud asset staging, and dedicated editor queues ensure fast, consistent social content delivery.",
        metric: "24-48h",
        metricLabel: "Turnaround Time",
        beforeMetric: "10+ Days",
      },
    ],
    prices: [
      { name: "Campaign film", price: "₹25,000", note: "Narrative edit, sound design, grade and master delivery." },
      { name: "Short-form edit", price: "₹2,500", unit: "/ video", note: "Platform-ready vertical content from supplied footage." },
      { name: "Motion graphics", price: "₹10,000", note: "Branded titles, explainers and animated graphic systems." },
      { name: "Colour & sound", price: "₹6,000", note: "Professional finishing for an existing edit." },
      { name: "Platform cutdowns", price: "₹1,500", unit: "/ version", note: "Purpose-built lengths and aspect ratios." },
    ],
  },
  "web-design-development": {
    image: "/web-design.jpg",
    imageAlt: "Modern creative studio prepared for collaborative web work",
    problems: [
      {
        problem: "The website looks dated and the offer is difficult to understand.",
        problemDetail: "Visitors cannot tell what you do or why to choose you within five seconds, resulting in high bounce rates and lost deals.",
        fixHeadline: "Sharp Positioning & Conversion-Led UX",
        fix: "Clear hierarchy, persuasive copy structure and distinct visual design make the value proposition obvious and memorable.",
        metric: "4.8x",
        metricLabel: "More Inquiries",
        beforeMetric: "1.4%",
      },
      {
        problem: "Pages are slow, inconsistent or frustrating on mobile devices.",
        problemDetail: "Bloated page templates and sluggish script loading ruin user experience and hurt Google Core Web Vitals rankings.",
        fixHeadline: "Sub-Second Next.js Performance Engineering",
        fix: "A modern, lightweight Next.js build delivers instantaneous page loads, smooth responsiveness, and strong SEO foundations.",
        metric: "< 0.8s",
        metricLabel: "Page Load Time",
        beforeMetric: "4.6s",
      },
      {
        problem: "The site launches and immediately becomes difficult to update or evolve.",
        problemDetail: "Fragile code and inflexible structures make even simple copy updates and new landing pages require expensive developer tickets.",
        fixHeadline: "Modular, Maintainable Component System",
        fix: "Clean, structured components and intuitive layout systems empower your marketing team to publish updates quickly and calmly.",
        metric: "10x",
        metricLabel: "Faster Deployment",
        beforeMetric: "Weeks Delay",
      },
      {
        problem: "Traffic arrives on the website but rarely converts into qualified contact leads.",
        problemDetail: "Hidden contact buttons, sterile inquiry forms, and weak proof points fail to motivate prospective clients to reach out.",
        fixHeadline: "High-Trust Conversion Triggers & Sticky Action Funnels",
        fix: "We place strategically staged trust testimonials, dynamic interactive pricing explorers, and zero-friction inquiry forms across every page.",
        metric: "+280%",
        metricLabel: "Inquiry Conversion",
        beforeMetric: "0.8%",
      },
      {
        problem: "The website lacks proper technical SEO foundations and fails to rank.",
        problemDetail: "Missing semantic tags, broken metadata, and bad URL hierarchy render even beautiful websites completely invisible to search engines.",
        fixHeadline: "Built-In Technical SEO & Schema Markup",
        fix: "We implement semantic HTML5, dynamic OpenGraph previews, automated sitemaps, and rich JSON-LD schema to rank at the top of Google.",
        metric: "100/100",
        metricLabel: "Google Core Vitals",
        beforeMetric: "Poor Rank",
      },
    ],
    prices: [
      { name: "Strategy & UX", price: "₹20,000", note: "Research, sitemap, messaging structure and wireframes." },
      { name: "Web design", price: "₹35,000", note: "Responsive visual design and reusable interface system." },
      { name: "Next.js build", price: "₹60,000", note: "Fast, accessible and maintainable production website." },
      { name: "E-commerce website", price: "₹75,000", note: "Storefront, catalogue, cart and checkout experience." },
      { name: "Performance & SEO", price: "₹15,000", note: "Technical improvements, tracking and search foundations." },
    ],
  },
  "software-development": {
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Designer planning a digital software interface",
    problems: [
      {
        problem: "Teams depend on spreadsheets and repeated manual admin work.",
        problemDetail: "Scattered data across desktop files causes clerical mistakes, delayed invoicing, and hundreds of lost team hours every month.",
        fixHeadline: "Focused Software & Automated Workflows",
        fix: "Tailor-made cloud applications streamline recurring operational tasks into a dependable, error-free automated workflow.",
        metric: "80%",
        metricLabel: "Admin Hours Saved",
        beforeMetric: "Manual",
      },
      {
        problem: "Existing business tools do not exchange the data people need.",
        problemDetail: "Customer details, billing records, and orders live in separate silos, forcing employees to copy-paste between systems.",
        fixHeadline: "Real-Time API & Database Integration",
        fix: "We connect your internal tools, customer databases, and payment providers into a single, unified source of operational truth.",
        metric: "Real-Time",
        metricLabel: "Data Synchronization",
        beforeMetric: "Siloed Tools",
      },
      {
        problem: "A large digital product idea feels risky and difficult to scope.",
        problemDetail: "Unclear roadmaps and endless requirement lists stall progress and risk burning budget on features users don't need.",
        fixHeadline: "Milestone-Driven Staged Product Delivery",
        fix: "We prioritize the highest-value core job first, shipping a reliable MVP early and iterating calmly based on real user feedback.",
        metric: "6 Weeks",
        metricLabel: "To Live Launch",
        beforeMetric: "6+ Months",
      },
      {
        problem: "Legacy systems slow down or crash whenever transaction volume spikes.",
        problemDetail: "Outdated monolithic databases and unoptimized queries cause server timeouts and lost transactions during peak customer usage.",
        fixHeadline: "Scalable Cloud Architecture & Query Optimization",
        fix: "We construct resilient serverless and containerized microservices with smart caching to comfortably support high-throughput operations.",
        metric: "99.99%",
        metricLabel: "Platform Uptime",
        beforeMetric: "Frequent Crashes",
      },
      {
        problem: "Data leaks, weak permission management, and audit gaps threaten business security.",
        problemDetail: "Without role-based access control and encrypted backups, sensitive customer and financial records remain dangerously vulnerable.",
        fixHeadline: "Enterprise RBAC & End-to-End Encryption",
        fix: "We implement rigorous role-based permission tiers, comprehensive audit logs, and bank-grade data encryption at rest and in transit.",
        metric: "Zero",
        metricLabel: "Security Vulnerabilities",
        beforeMetric: "Exposed",
      },
    ],
    prices: [
      { name: "Product discovery", price: "₹25,000", note: "Requirements, flows, priorities and technical direction." },
      { name: "Web application", price: "₹1,50,000", note: "Custom application designed around a defined workflow." },
      { name: "SaaS platform", price: "₹2,50,000", note: "Scalable product foundation with accounts and core billing." },
      { name: "API integration", price: "₹35,000", note: "Connection between essential tools, services or data." },
      { name: "Ongoing support", price: "₹25,000", unit: "/ month", note: "Maintenance, monitoring and planned improvements." },
    ],
  },
  "graphic-design-branding": {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Creative work taking place on a laptop and sketchbook",
    problems: [
      {
        problem: "The business looks different everywhere customers encounter it.",
        problemDetail: "Inconsistent graphic elements, multiple fonts and off-brand social posts make the business look disjointed and forgettable.",
        fixHeadline: "One Flexible Brand Identity System",
        fix: "One unified identity system connects logo, typography, colour and visual rules across digital and print touchpoints.",
        metric: "100%",
        metricLabel: "Brand Cohesion",
        beforeMetric: "Mismatched",
      },
      {
        problem: "Design choices follow passing trends rather than a clear point of view.",
        problemDetail: "Copying competitors creates a generic look that blends into the background without conveying commercial authority.",
        fixHeadline: "Ownable & Distinctive Market Territory",
        fix: "A defined creative territory makes your brand instantly recognisable, memorable, and strategically differentiated.",
        metric: "3.2x",
        metricLabel: "Brand Recall",
        beforeMetric: "Generic",
      },
      {
        problem: "Teams lose time rebuilding common assets for every new campaign.",
        problemDetail: "Starting from scratch for every promotion slows down marketing launches and introduces visual errors.",
        fixHeadline: "Reusable Brand Guidelines & Asset Kits",
        fix: "Editable master templates and comprehensive brand guidelines make rapid, consistent campaign execution effortless.",
        metric: "5x",
        metricLabel: "Faster Production",
        beforeMetric: "Days Delay",
      },
      {
        problem: "Print assets and digital screens suffer from mismatched colors and pixelation.",
        problemDetail: "Files prepared without vector standards or calibrated color profiles look muddy in print and blurry on high-resolution Retina displays.",
        fixHeadline: "Mathematical Vector & CMYK/Pantone Calibration",
        fix: "We deliver razor-sharp vector source files and rigorously calibrated color formulas tailored for both physical print and digital screens.",
        metric: "Crisp 4K",
        metricLabel: "Display & Print Clarity",
        beforeMetric: "Blurry / Distorted",
      },
      {
        problem: "Marketing collateral feels like commodity clip art without emotional weight.",
        problemDetail: "Using generic stock visuals fails to communicate the true quality of your service or justify premium pricing.",
        fixHeadline: "Bespoke Art Direction & Brand Storytelling",
        fix: "Custom graphic compositions, curated iconography, and evocative layouts place your brand at the undisputed premium tier of your industry.",
        metric: "4.2x",
        metricLabel: "Perceived Value",
        beforeMetric: "Commodity Feel",
      },
    ],
    prices: [
      { name: "Brand strategy", price: "₹20,000", note: "Positioning, personality and creative direction." },
      { name: "Visual identity", price: "₹40,000", note: "Logo, typography, colour and image system." },
      { name: "Brand guidelines", price: "₹20,000", note: "Practical rules and examples for consistent use." },
      { name: "Campaign creative", price: "₹15,000", note: "A connected key visual and launch asset set." },
      { name: "Social design system", price: "₹10,000", note: "Editable templates for recurring content formats." },
    ],
  },
  training: {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Team learning together during a practical workshop",
    problems: [
      {
        problem: "Training explains concepts but teams cannot apply them afterwards.",
        problemDetail: "Abstract presentations and passive slides leave participants unsure how to execute when they sit at their desks Monday morning.",
        fixHeadline: "Project-Led Applied Working Skills",
        fix: "Hands-on, brief-driven workshops turn every lesson into practical skill tested against real-world scenarios and client deliverables.",
        metric: "100%",
        metricLabel: "Practical Competence",
        beforeMetric: "Theory Only",
      },
      {
        problem: "One rigid syllabus ignores different roles and starting skill levels.",
        problemDetail: "Advanced members feel held back while beginners feel overwhelmed, wasting company training investment.",
        fixHeadline: "Tailored Multi-Level Learning Pathways",
        fix: "Customized training modules adapted to the actual tools, roles, and commercial goals of your team members.",
        metric: "3x",
        metricLabel: "Knowledge Uptake",
        beforeMetric: "One-Size-Fits-All",
      },
      {
        problem: "Momentum and enthusiasm disappear as soon as the session ends.",
        problemDetail: "Without reinforcement or practical templates, teams revert to old, inefficient habits within two weeks.",
        fixHeadline: "Post-Workshop SOPs, Toolkits & Mentoring",
        fix: "Comprehensive reference guides, repeatable checklists, and follow-up mentoring ensure skills compound into long-term habits.",
        metric: "94%",
        metricLabel: "Long-Term Retention",
        beforeMetric: "Forgotten in 14 Days",
      },
      {
        problem: "Staff struggle to adopt modern AI tooling and automated workflows.",
        problemDetail: "Employees continue doing slow, repetitive tasks manually because they haven't received structured, hands-on AI workflow guidance.",
        fixHeadline: "Applied AI Productivity & Automation Training",
        fix: "We train teams to integrate prompt engineering, design automation, and AI tooling safely into their everyday client workflows.",
        metric: "+250%",
        metricLabel: "Workflow Speed",
        beforeMetric: "Slow Manual Work",
      },
      {
        problem: "Executive leadership has no visibility into training effectiveness or ROI.",
        problemDetail: "Certificates are handed out, but management has no measurable proof of increased performance or real capability growth.",
        fixHeadline: "Measurable Competency Benchmarks & Post-Training Audits",
        fix: "We deliver concrete project evaluation scorecards, skill benchmarks, and follow-up audits validating team capability to leadership.",
        metric: "100%",
        metricLabel: "Verified Competency",
        beforeMetric: "Zero Visibility",
      },
    ],
    prices: [
      { name: "Team workshop", price: "₹15,000", unit: "/ session", note: "Focused, practical learning for up to 12 people." },
      { name: "Digital marketing", price: "₹20,000", note: "Channel strategy and campaign skills programme." },
      { name: "Web skills", price: "₹25,000", note: "Applied design and development learning programme." },
      { name: "Design foundations", price: "₹18,000", note: "Visual principles, systems and hands-on exercises." },
      { name: "Mentoring", price: "₹8,000", unit: "/ month", note: "Regular review, feedback and guided development." },
    ],
  },
};

const serviceSEOConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
  "video-editing": {
    title: "Dedicated Video Editing Team & Motion Graphics Agency",
    description: "Hire our dedicated video editing team for viral reels, shorts, YouTube long-form, cinematic commercials, and motion graphics designed to stop the scroll.",
    keywords: [
      "video editing team",
      "video editing agency",
      "hire video editors",
      "reels video editing team",
      "social media video editing team",
      "YouTube video editors",
      "commercial video production",
      "motion graphics agency",
      "short form video editors",
      "video production company",
    ],
  },
  "web-design-development": {
    title: "Web Development Company & UI/UX Design Agency",
    description: "Premier web development company building sub-second Next.js websites, custom web applications, responsive UI/UX, and conversion-engineered sales platforms.",
    keywords: [
      "web development company",
      "website development agency",
      "custom web development",
      "hire web developers",
      "Next.js web development",
      "website design agency",
      "UI UX design agency",
      "frontend development company",
      "responsive web design",
      "high performance websites",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing, SEO & Logo Graphic Design Agency",
    description: "Full-service digital marketing agency delivering high-ROI SEO, performance ads (Google & Meta), logo branding, graphic design, and conversion sales funnels.",
    keywords: [
      "digital marketing agency",
      "digital marketing services",
      "logo design company",
      "graphic designing agency",
      "logo and graphic design",
      "brand identity design",
      "SEO services company",
      "search engine optimization agency",
      "performance marketing company",
      "Google ads management",
      "social media marketing agency",
    ],
  },
  "ecommerce-solutions": {
    title: "E-Commerce Web Development & Online Store Solutions",
    description: "Custom e-commerce web development, Shopify and WooCommerce store setup, frictionless UPI checkout, and automated customer retention funnels.",
    keywords: [
      "ecommerce website development",
      "ecommerce web development company",
      "online store setup",
      "Shopify development services",
      "WooCommerce developer",
      "ecommerce marketing agency",
      "payment gateway integration",
      "conversion rate optimization for ecommerce",
    ],
  },
  "software-development": {
    title: "Custom Software Development & Cloud SaaS Platform Company",
    description: "Custom software development, cloud web applications, scalable SaaS platforms, API integrations, and automated internal business workflows.",
    keywords: [
      "custom software development company",
      "web application development",
      "SaaS platform development",
      "hire software developers",
      "API integration services",
      "business automation software",
      "cloud software company",
    ],
  },
  "training": {
    title: "Corporate Digital Marketing & Web Skills Training",
    description: "Practical project-based corporate training in modern digital marketing, web design and development, graphic design, and AI workflow automation.",
    keywords: [
      "corporate digital marketing training",
      "corporate web development workshops",
      "executive digital training",
      "design foundations training",
      "AI workflow productivity training",
      "practical team workshops",
    ],
  },
  "graphic-design-branding": {
    title: "Logo Design & Creative Graphic Designing Agency",
    description: "Distinctive custom logo design, comprehensive brand guidelines, social media creative design, marketing collateral, and vector art systems.",
    keywords: [
      "logo design company",
      "graphic designing agency",
      "custom logo design",
      "brand identity design agency",
      "creative graphic designer",
      "social media post design",
      "vector logo designer",
    ],
  },
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  const extra = serviceExtras[slug];
  if (!service) return {};

  const seo = serviceSEOConfig[slug] || {
    title: `${service.title} | High-ROI Solutions`,
    description: `${service.summary} ${service.outcome}`,
    keywords: ["digital marketing", service.title],
  };
  const url = `https://www.ajidigitalads.com/services/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${seo.title} | AjiDigitalAds`,
      description: seo.description,
      url,
      type: "website",
      images: [
        {
          url: extra?.image || "/logo.png",
          alt: extra?.imageAlt || seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.title} | AjiDigitalAds`,
      description: seo.description,
      images: [extra?.image || "/logo.png"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  const extra = serviceExtras[slug];
  if (!service || !extra) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ajidigitalads.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.ajidigitalads.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://www.ajidigitalads.com/services/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: "Digital Marketing & Technology",
    provider: {
      "@type": "ProfessionalService",
      name: "AjiDigitalAds",
      url: "https://www.ajidigitalads.com",
      telephone: "+91 90923 73329",
      logo: "https://www.ajidigitalads.com/logo.png",
    },
    description: service.summary,
    offers: extra.prices.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price.replace(/[^0-9]/g, "") || "10000",
      priceCurrency: "INR",
      description: p.note,
    })),
  };

  return (
    <main className="service-page-v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="service-hero-v2" aria-labelledby="service-page-title">
        <div className="service-hero-v2-copy shell">
          <div className="service-hero-v2-top"><Link href="/" className="back-link">← All services</Link><span>{service.number} / {String(services.length).padStart(2, "0")}</span></div>
          <div className="service-hero-v2-grid">
            <div><p className="eyebrow">{service.kicker}</p><h1 id="service-page-title">{service.title}</h1></div>
            <div className="service-hero-v2-intro"><p>{service.summary}</p><Link className="button" href="#pricing">View pricing <span>↓</span></Link></div>
          </div>
        </div>
        <figure className="service-hero-v2-image"><img src={extra.image} alt={extra.imageAlt} /><figcaption className="shell"><span>{service.outcome}</span><span>Scroll to explore ↓</span></figcaption></figure>
      </section>

      <section className="service-details-v2 shell" aria-labelledby="service-details-title">
        <header data-reveal><p className="eyebrow">What we do</p><h2 id="service-details-title">Every part has<br/><em>a clear purpose.</em></h2><p>Choose a focused starting point or combine capabilities into one connected engagement.</p></header>
        <div className="service-bento-grid">{service.deliverables.map((item, index) => <article className="service-bento-card" data-reveal key={item}><div className="service-bento-top"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden>↗</i></div><div className="service-bento-main"><p>Capability</p><h3>{item}</h3><p>{service.sections[index]?.copy ?? service.summary}</p></div><div className="service-bento-details">{[0, 1].map((offset) => { const detail = service.sections[(index + offset + 1) % service.sections.length]; return <div key={detail.title}><strong>{detail.title}</strong><p>{detail.copy}</p></div>; })}</div></article>)}</div>
      </section>

      <section className="service-fix-v2" aria-labelledby="service-fix-title">
        <div className="shell">
          <header data-reveal className="service-fix-header">
            <p className="eyebrow">The Useful Difference · Proven ROI</p>
            <h2 id="service-fix-title">What gets in your way.<br/><em>How our team solves it.</em></h2>
            <p className="service-fix-intro">From recurring search ranking obstacles, slow websites, and flat video retention to measurable commercial growth and organic market authority.</p>
          </header>

          <div className="service-fix-cards">
            {extra.problems.map((item, index) => (
              <article className="comparison-card" data-reveal key={item.problem}>
                <div className="comparison-side comparison-problem">
                  <span className="comparison-watermark" aria-hidden>0{index + 1}</span>
                  <div className="comparison-badge problem-badge">
                    <span className="badge-dot" aria-hidden />
                    <span>The Problem</span>
                  </div>
                  <div className="comparison-body">
                    <h3 className="problem-title">{item.problem}</h3>
                    {item.problemDetail && <p className="problem-desc">{item.problemDetail}</p>}
                  </div>
                </div>

                <div className="comparison-side comparison-fix">
                  <div className="comparison-badge fix-badge">
                    <span className="badge-arrow" aria-hidden>→</span>
                    <span>The Fix</span>
                  </div>
                  <div className="comparison-body">
                    <h3 className="fix-title">{item.fixHeadline ? <span>{item.fixHeadline}</span> : <span>{item.fix}</span>}</h3>
                    <p className="fix-desc">{item.fix}</p>
                  </div>
                  {item.metric && (
                    <div className="comparison-metrics">
                      <div className="metric-stat">
                        <span className="metric-val">{item.metric}</span>
                        <span className="metric-tag">{item.metricLabel}</span>
                      </div>
                      {item.beforeMetric && (
                        <div className="metric-previous">
                          <span className="previous-val">{item.beforeMetric}</span>
                          <span className="previous-tag">Typical hurdle</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-pricing-v2 shell" id="pricing" aria-labelledby="service-pricing-title">
        <header data-reveal><div><p className="eyebrow">Starting-point pricing</p><h2 id="service-pricing-title">Clear enough to plan.<br/><em>Flexible enough to fit.</em></h2></div><p>These guide prices help you understand the likely starting investment. Your proposal will reflect the final scope, complexity and delivery timeline.</p></header>
        <ServicePricingExplorer serviceTitle={service.title} serviceSlug={service.slug} image={extra.image} imageAlt={extra.imageAlt} packages={extra.prices.map((item, index) => ({ ...item, detail: service.sections[index]?.copy ?? service.summary }))} />
        <p className="service-price-note">All prices are indicative starting points and exclude applicable taxes, paid media budgets, third-party software and production expenses.</p>
      </section>

      <section className="about-cta service-cta shell" id="contact" data-reveal aria-labelledby="service-cta-title">
        <div className="about-cta-copy"><p className="eyebrow">Ready when you are</p><h2 id="service-cta-title">Let’s make the next<br/><em>move more useful.</em></h2></div>
        <div className="about-cta-action"><p>Tell us what you need to change. We’ll help define the right scope, priorities and practical starting point.</p><Link href={`/contact?service=${service.slug}`} className="button">Start a conversation <span>↗</span></Link></div>
      </section>
    </main>
  );
}
