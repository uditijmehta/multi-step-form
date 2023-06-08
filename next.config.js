/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.test.jsx$/,
      loader: 'ignore-loader'
    });

    return config;
  }
}

module.exports = nextConfig;
