import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      { protocol: "https", hostname: "hilightmedia.in" },
      { protocol: "https", hostname: "www.hilightmedia.in" },
      { protocol: "http", hostname: "localhost" }, // local dev media
    ],
  },
};

export default nextConfig;
