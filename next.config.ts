import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/graphic-design-branding",
        destination: "/services/digital-marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
