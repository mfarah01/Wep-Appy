/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      domains: ["https://images.unsplash.com/", "https://res.cloudinary.com/"],

      allowFutureImage: true,
      layoutRaw: true
    }
  },
}

module.exports = nextConfig
