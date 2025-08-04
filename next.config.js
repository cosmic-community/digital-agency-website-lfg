/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
  },
  // Disable typedRoutes to prevent route type errors
  experimental: {
    typedRoutes: false,
  },
}

module.exports = nextConfig