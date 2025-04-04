import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rickandmortyapi.com'], // ✅ Añade este dominio
  },
};

export default nextConfig;
