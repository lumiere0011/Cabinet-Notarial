import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  allowedDevOrigins: [" 192.168.100.49"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;