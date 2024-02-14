/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www-cs-faculty.stanford.edu',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
