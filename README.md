# ShowcasePro - Professional Portfolio & Blog Template

A modern, responsive portfolio template for developers, designers, and professionals. Built with Next.js 14, TypeScript, and Tailwind CSS, designed for easy customization and deployment to GitHub Pages.

![ShowcasePro Preview](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=ShowcasePro+Portfolio+Template)

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
git clone https://github.com/yourusername/showcasepro.git
cd showcasepro
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

## 🎯 SEO & Analytics

### SEO Optimization
- Automatic sitemap generation
- Open Graph meta tags
- Twitter Card support
- Structured data (JSON-LD)

### Analytics Integration
Add your Google Analytics ID to `src/app/layout.tsx`:

```typescript
// Add Google Analytics
<Script src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
```

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
