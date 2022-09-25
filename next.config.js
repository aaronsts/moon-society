/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
