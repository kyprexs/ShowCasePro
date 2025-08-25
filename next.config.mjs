/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/showcasepro' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/showcasepro/' : '',
}

export default nextConfig
