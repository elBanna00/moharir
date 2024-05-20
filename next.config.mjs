/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  experimental: {
    appDir: false,
  },
};

export default nextConfig;
