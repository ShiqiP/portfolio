import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true, //dynamic features
  },
};

export default nextConfig;
