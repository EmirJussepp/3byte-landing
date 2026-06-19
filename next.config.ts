import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
