/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    // Alternatively, you can use remotePatterns for more specific control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dxmjxtwbu/**', // Your cloud name
      },
    ],
  },
}

module.exports = nextConfig 