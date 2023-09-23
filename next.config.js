/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: true,
  },

  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://venkatgolamaru.vercel.app/$1',
        permanent: true,
      },
    ];
  },
};
