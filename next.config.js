/** @type {import('next').NextConfig} */

// Next.js configuration for standalone Docker deployment
const nextConfig = {
  // Enables output optimized for Docker / server environments
  output: 'standalone',

  // Enables additional React runtime checks in development
  reactStrictMode: true,
};

module.exports = nextConfig;
