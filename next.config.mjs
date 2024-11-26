/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'docs',
  // 缓存 Pages，默认时间为 0
  experimental: {
    staleTimes: {
      dynamic: 30, // 针对 ssr，非静态、非预取，Link 的 prefetch 不为 true
      static: 180, // 静态，或者 Link 的 prefetch 为 true
    },
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
