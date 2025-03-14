import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.BASE_PATH,
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true, //dynamic features
  },
};

export default nextConfig;
