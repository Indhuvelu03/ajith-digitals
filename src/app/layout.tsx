import type { Metadata } from "next";
import "./globals.css";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { ScrollEffects } from "@/components/scroll-effects";
import { Navbar } from "@/components/navbar";
import { WhatsAppWidget } from "@/components/whatsapp-contact";

export const metadata: Metadata = {
  metadataBase: new URL("https://ajidigitalads.com"),
  title: {
    default: "AjiDigitalAds | Video Editing Team, Web Development, Logo Design & Digital Marketing",
    template: "%s | AjiDigitalAds",
  },
  description:
    "AjiDigitalAds is an integrated creative and digital agency. We provide dedicated video editing teams, custom web development, logo and graphic design, and high-ROI digital marketing services for ambitious businesses.",
  keywords: [
    // Video Editing Team
    "video editing team",
    "video editing agency",
    "hire video editors",
    "reels video editing team",
    "social media video editing",
    "YouTube video editors",
    "commercial video production",
    "motion graphics agency",
    // Web Development
    "web development company",
    "website development agency",
    "custom web development",
    "Next.js web developers",
    "hire web developers",
    "UI UX design agency",
    "conversion web design",
    // Logo & Graphic Design
    "logo design company",
    "graphic designing agency",
    "logo and graphic design",
    "brand identity design",
    "creative graphic designer",
    "social media creative design",
    // Digital Marketing & SEO
    "digital marketing agency",
    "digital marketing services",
    "best digital marketing company",
    "SEO services company",
    "search engine optimization",
    "performance marketing agency",
    "Google ads management",
    "Meta ads agency",
    // E-Commerce & Software
    "ecommerce website development",
    "Shopify store developers",
    "custom software development",
    "AjiDigitalAds",
  ],
  authors: [{ name: "AjiDigitalAds", url: "https://ajidigitalads.com" }],
  creator: "AjiDigitalAds",
  publisher: "AjiDigitalAds",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "AjiDigitalAds | Video Editing Team, Web Development & Digital Marketing",
    description:
      "Dedicated video editing team, custom web development, logo graphic design, and high-ROI digital marketing built to elevate your business.",
    url: "https://ajidigitalads.com",
    siteName: "AjiDigitalAds",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "AjiDigitalAds — Video Editing Team, Web Development, Logo Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AjiDigitalAds | Video Editing Team, Web Development & Marketing",
    description:
      "Dedicated video editing team, custom web development, logo design, and high-ROI digital marketing.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AjiDigitalAds",
  alternateName: ["Aji Digital Ads", "Ajith Digitals"],
  url: "https://ajidigitalads.com",
  logo: "https://ajidigitalads.com/logo.png",
  image: "https://ajidigitalads.com/logo.png",
  description:
    "Integrated creative and technology agency providing dedicated video editing teams, custom web development, logo & graphic design, and full-funnel digital marketing services.",
  telephone: "+91 90923 73329",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: ["https://wa.me/919092373329"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative, Web Development, Video & Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Video Editing Team & Motion Graphics",
          description: "Dedicated video editing team for viral reels, YouTube production, cinematic commercials, and platform-native motion graphics.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design & Custom Web Development",
          description: "High-speed Next.js web development, custom websites, UI/UX design, and conversion-optimized digital platforms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Logo Design, Graphic Design & Branding",
          description: "Distinctive logo design, corporate brand identity systems, social media creatives, marketing collateral, and vector art.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing & SEO Services",
          description: "Full-funnel digital marketing, Google & Meta advertising management, technical SEO, and lead generation campaigns.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Web Solutions",
          description: "Custom e-commerce storefronts, Shopify and WooCommerce development, instant UPI checkout, and retention flows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description: "Cloud web applications, SaaS platforms, API integrations, and internal workflow automation software.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body><Cursor /><ScrollEffects /><Navbar />{children}<Footer /><WhatsAppWidget /></body>
    </html>
  );
}
