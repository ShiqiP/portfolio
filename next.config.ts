import type { NextConfig } from "next";
import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight]
  }
})

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true, //dynamic features
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

export default withMDX(nextConfig);
