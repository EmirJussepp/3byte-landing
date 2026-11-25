import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    remotePatterns: [
      { protocol: "https", hostname: "elitecarshopsf.duckdns.org" },
      { protocol: "https", hostname: "aerogym.duckdns.org" },
      { protocol: "https", hostname: "turnero-club.vercel.app" },
      { protocol: "https", hostname: "www.sportbyte.com.ar" },
      { protocol: "https", hostname: "pboquensesf.duckdns.org" },
    ],
  },
};

export default nextConfig;
