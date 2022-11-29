/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
  },
  // experimental: { appDir: true },
};

module.exports = nextConfig;
