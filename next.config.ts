import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.accredible.com", // no path, just the domain
      },
    ],
    // or: domains: ["example.com"],
  },
};

export default nextConfig;
