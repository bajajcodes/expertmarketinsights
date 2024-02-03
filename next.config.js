/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dvi5qujxs/image/upload/**',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
