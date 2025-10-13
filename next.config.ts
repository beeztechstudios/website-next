// next.config.ts

import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Add other configurations here if you have any (e.g., experimental features)
    eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'www.framer.com',       // ✅ Add this
      'y4pdgnepgswqffpt.public.blob.vercel-storage.com', // optional, if blob URLs used
      '5pdgnepgswqffpt.public.blob.vercel-storage.com',
    ],
    // Add all the domains you use for external images here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;