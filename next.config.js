const withTM = require('next-transpile-modules')(['react-daisyui']);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
});

module.exports = nextConfig;
