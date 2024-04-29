/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      }, {
        protocol: 'https',
        hostname: 'daisyui.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
