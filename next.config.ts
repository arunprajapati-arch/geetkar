import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com','i.ytimg.com','assets.aceternity.com'],
  },
};

export default nextConfig;
