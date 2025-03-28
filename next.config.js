/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Keeping existing domain for Unsplash
    // domains: ['images.unsplash.com'], // Deprecated, use remotePatterns instead
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Allow local images (served from /public)
      {
        protocol: 'http', // Or https if using https locally
        hostname: 'localhost',
        port: '', // Adjust if your local dev server uses a specific port for images
        pathname: '/**',
      },
      // You might need to add other domains if you load images from elsewhere
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
