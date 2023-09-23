/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/defaultsite',
        destination: '/',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;