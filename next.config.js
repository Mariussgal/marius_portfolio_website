/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ligolang.org'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during build
  },
  experimental: {
    suppressHydrationWarning: false,
  },
};

module.exports = nextConfig;
