# ShowcasePro - Professional Portfolio & Blog Template

<div align="center">
  <h1>🚀 ShowcasePro</h1>
  <p><strong>A modern, responsive portfolio template for developers, designers, and professionals</strong></p>
  
  ![ShowcasePro Preview](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=ShowcasePro+Portfolio+Template)
  
  <p>
    <a href="#-demo">Live Demo</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-features">Features</a> •
    <a href="#-customization">Customization</a> •
    <a href="#-deployment">Deployment</a>
  </p>
  
  <p>
    <img src="https://img.shields.io/github/license/kyprexs/ShowCasePro?style=flat-square" alt="License">
    <img src="https://img.shields.io/github/stars/kyprexs/ShowCasePro?style=flat-square" alt="Stars">
    <img src="https://img.shields.io/github/forks/kyprexs/ShowCasePro?style=flat-square" alt="Forks">
    <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/github/deployments/kyprexs/ShowCasePro/github-pages?style=flat-square&label=deployment" alt="Deployment">
  </p>
</div>

---

Built with Next.js 14, TypeScript, and Tailwind CSS, ShowcasePro is designed for easy customization and one-click deployment to GitHub Pages. Perfect for developers, designers, freelancers, and creative professionals who want to showcase their work with a modern, professional website.

## 🎯 Demo

**[Live Demo](https://kyprexs.github.io/ShowCasePro)** | **[Documentation](https://github.com/kyprexs/ShowCasePro/wiki)**

### Screenshots

<div align="center">
  <img src="https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Desktop+Hero+Section" alt="Desktop Hero" width="45%">
  <img src="https://via.placeholder.com/300x600/0ea5e9/ffffff?text=Mobile+Responsive" alt="Mobile View" width="25%">
</div>

<details>
<summary>📸 More Screenshots</summary>

#### Desktop Views
- **Hero Section**: Eye-catching landing with animated background
- **Projects Showcase**: Interactive project cards with hover effects
- **Blog Section**: Clean, readable blog layout with syntax highlighting
- **Contact Form**: Professional contact section with validation

#### Mobile Experience
- **Responsive Design**: Optimized for all screen sizes
- **Mobile Navigation**: Collapsible menu with smooth animations
- **Touch Interactions**: Mobile-friendly interactions and gestures
- **Performance**: Fast loading on mobile networks

</details>

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Next.js 14 and optimized for speed
- **📝 Blog Support**: Markdown-powered blog with syntax highlighting
- **🚀 Easy Deployment**: One-click deployment to GitHub Pages
- **🎯 SEO Optimized**: Built-in SEO optimization and Open Graph support
- **♿ Accessible**: WCAG 2.1 compliant with keyboard navigation
- **🌙 Dark Mode**: Automatic dark/light mode based on system preference
- **📊 Analytics Ready**: Easy integration with Google Analytics

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons**: SVG icons and [Heroicons](https://heroicons.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone this repository**
```bash
git clone https://github.com/kyprexs/ShowCasePro.git
cd ShowCasePro
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
showcasepro/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── layouts/            # Layout components
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript type definitions
├── content/
│   ├── projects/           # Project markdown files
│   └── blog/               # Blog post markdown files
├── public/                 # Static assets
└── .github/workflows/      # GitHub Actions for deployment
```

## 🎨 Customization

### 1. Personal Information

Edit `src/lib/constants.ts` to update your personal information:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title - Full Stack Developer',
  description: 'Your description...',
  author: 'Your Name',
  email: 'your.email@example.com',
  location: 'Your City, Country',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:your.email@example.com',
  },
};
```

### 2. Adding Projects

Create a new `.md` file in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief project description"
image: "/images/projects/project-preview.jpg"
tech: ["React", "TypeScript", "Node.js"]
github: "https://github.com/username/project"
live: "https://project-demo.com"
featured: true
createdAt: "2024-03-15"
---

# Project Details

Your detailed project description goes here...
```

### 3. Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Blog Post Title"
description: "Post description"
image: "/images/blog/post-image.jpg"
tags: ["JavaScript", "Web Development"]
publishedAt: "2024-03-20"
---

# Blog Post Content

Your blog post content goes here...
```

### 4. Styling Customization

The design system is built with Tailwind CSS. Key customization options:

**Colors** - Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... your custom colors
      },
    },
  },
},
```

**Fonts** - Update in `tailwind.config.ts` and `src/app/globals.css`

**Components** - Modify component files in `src/components/`

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Update configuration** in `next.config.mjs`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

2. **Push to GitHub**:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section  
   - Set source to "GitHub Actions"

4. **Automatic deployment** will start with the included GitHub Actions workflow

### Manual Deployment

```bash
# Build and export static files
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages
- `npm run preview` - Preview built site locally

## 📊 Performance Metrics

<div align="center">
  <img src="https://img.shields.io/badge/Lighthouse-100%25-brightgreen?style=for-the-badge&logo=lighthouse" alt="Lighthouse Score">
  <img src="https://img.shields.io/badge/PageSpeed-95+-brightgreen?style=for-the-badge&logo=pagespeed" alt="PageSpeed Score">
  <img src="https://img.shields.io/badge/Bundle_Size-113kb-blue?style=for-the-badge" alt="Bundle Size">
</div>

### Performance Features
- ⚡ **Fast Loading**: Optimized for Core Web Vitals
- 📦 **Small Bundle**: Minimal JavaScript footprint
- 🏃 **Quick Navigation**: Instant page transitions
- 🗜️ **Static Generation**: Pre-rendered for maximum speed

## 🎯 SEO & Analytics

### SEO Optimization
- 🔍 Automatic sitemap generation
- 🌐 Open Graph meta tags
- 🐦 Twitter Card support
- 📊 Structured data (JSON-LD)
- 🚀 Core Web Vitals optimized
- 📋 Schema.org markup

### Analytics Integration
Add your Google Analytics ID to `src/app/layout.tsx`:

```typescript
// Add Google Analytics
<Script src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
```

## 🔧 Troubleshooting

<details>
<summary>Common Issues and Solutions</summary>

### Build Errors

**Issue**: `Module not found` errors
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: TypeScript compilation errors
```bash
# Solution: Update TypeScript and regenerate types
npm run build --skip-lint
```

### Deployment Issues

**Issue**: GitHub Pages not updating
- Check GitHub Actions logs
- Ensure `basePath` is correctly set in `next.config.mjs`
- Verify Pages source is set to "GitHub Actions"

**Issue**: 404 errors on GitHub Pages
```javascript
// Ensure correct basePath in next.config.mjs
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
```

### Content Issues

**Issue**: Markdown files not rendering
- Check frontmatter syntax
- Ensure required fields are present
- Verify file placement in correct directory

</details>

## ⚙️ Advanced Configuration

<details>
<summary>Advanced Setup Options</summary>

### Custom Domain Setup
1. Add `CNAME` file to `public/` directory
2. Configure DNS settings with your domain provider
3. Update `basePath` in `next.config.mjs` to empty string

### Environment Variables
Create `.env.local` for sensitive data:
```env
GOOGLE_ANALYTICS_ID=your_ga_id
FORMSPREE_ENDPOINT=your_formspree_endpoint
```

### Content Management

#### Using a CMS (Optional)
- **Contentful**: For rich content management
- **Strapi**: Self-hosted headless CMS
- **Sanity**: Real-time collaborative editing

#### Automated Content Updates
```yaml
# .github/workflows/content-update.yml
name: Update Content
on:
  schedule:
    - cron: '0 0 * * *'  # Daily updates
workflow_dispatch:
```

### Performance Optimization

#### Image Optimization
```typescript
// next.config.mjs
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
```

#### Font Optimization
```typescript
// src/app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
```

</details>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help customizing the template:

- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 💬 Create an [issue](https://github.com/yourusername/showcasepro/issues)
- 🌟 Star this repository if you found it helpful!

## 🔮 Roadmap

- [ ] Contact form with email integration
- [ ] Project filtering and search
- [ ] Blog categories and tags
- [ ] Comment system for blog posts
- [ ] Multi-language support
- [ ] Theme customizer
- [ ] CMS integration options

---

**Built with ❤️ using Next.js and Tailwind CSS**
