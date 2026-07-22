import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  allowedDevOrigins: ["172.20.50.182"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;