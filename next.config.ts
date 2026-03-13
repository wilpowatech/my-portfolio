import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: '/my-portfolio', // Required because your site is in a subfolder
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js image optimization
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
}

export default nextConfig
