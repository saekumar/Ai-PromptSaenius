/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'pixner.net',
      'res.cloudinary.com',
      'unsplash.com',
      'media-exp1.licdn.com',
    ],
  },
  swcMinify: true,
}

module.exports = nextConfig
