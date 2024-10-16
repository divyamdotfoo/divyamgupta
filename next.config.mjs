/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/16Mj3EdC24-0OjX4bgzNj2z0NwkJTmMuK/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
