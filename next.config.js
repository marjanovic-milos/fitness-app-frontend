/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    // Example: Add custom alias
    config.resolve.alias["@components"] = require("path").resolve(__dirname, "components");

    return config;
  },
};

module.exports = nextConfig;
