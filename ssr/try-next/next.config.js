/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname)
    };
    return config
  },
  images: {
    domains: ["127.0.0.1"],
  },
}

module.exports = nextConfig
