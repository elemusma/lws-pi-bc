import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://paintinnovators.com/locations/colorado/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
