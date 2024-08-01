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
          "https://drive.google.com/file/d/1-kGLj66JQ0M9audm8jDbQH9AcCgx6GP9/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
