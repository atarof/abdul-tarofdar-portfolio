/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    enableUndici: true,
  },
}

module.exports = nextConfig
