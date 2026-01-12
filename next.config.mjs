import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://image.liuxs.pro/**")],
    dangerouslyAllowLocalIP: true, // 允许私有、保留 IP 地址的图片加载
  },
};

export default withMDX(config);
