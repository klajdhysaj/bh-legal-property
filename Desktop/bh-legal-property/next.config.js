const path = require('path');

/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);