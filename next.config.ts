import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.notion.com",
        pathname: "/images/page-cover/**",
      },
    ],
  },
};

export default nextConfig;
