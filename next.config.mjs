/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': new URL('./src', import.meta.url).pathname,
    };
    return config;
  }
};

export default nextConfig;