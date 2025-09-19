# 🚀 TrailGuide Deployment Guide

This guide covers deploying TrailGuide to various hosting platforms with production-ready configurations.

## 🏃‍♂️ Quick Deploy Options

### **Vercel (Recommended)**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJoshuaShepherd%2Ftrailguide)

**One-click deployment with automatic CI/CD**

### **Netlify**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JoshuaShepherd/trailguide)

### **Railway**
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/trailguide)

## 🔧 Manual Deployment

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager
- Git repository access

### **Build Process**
```bash
# Clone repository
git clone https://github.com/JoshuaShepherd/trailguide.git
cd trailguide

# Install dependencies
npm install

# Build for production (generates 45+ static pages)
npm run build

# Test production build locally
npm run start
```

### **Environment Variables**
Create `.env.local` for production settings:

```env
# App Configuration
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com

# AI Integration (Optional)
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
VERCEL_ANALYTICS_ID=your_vercel_analytics_id

# Database (Future Integration)
DATABASE_URL=your_database_connection
```

## 🌐 Platform-Specific Deployment

### **Vercel Deployment**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Custom domain (optional)
vercel domains add your-domain.com
```

**Vercel Configuration** (`vercel.json`):
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options", 
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### **Netlify Deployment**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### **Docker Deployment**
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build application
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run Docker container:
```bash
docker build -t trailguide .
docker run -p 3000:3000 trailguide
```

## ⚡ Performance Optimization

### **Next.js Configuration**
Update `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compression
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

### **Bundle Analysis**
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle size
ANALYZE=true npm run build
```

## 🔍 Monitoring & Analytics

### **Vercel Analytics**
```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### **Google Analytics**
```tsx
// src/lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID!, {
    page_path: url,
  })
}
```

## 🛡️ Security Best Practices

### **Environment Security**
- Never commit `.env` files to version control
- Use platform environment variable management
- Rotate API keys regularly
- Implement rate limiting for API routes

### **Content Security Policy**
Add to `next.config.mjs`:
```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-scripts.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data:;
      font-src 'self';
      connect-src 'self' *.vercel.app;
    `.replace(/\s{2,}/g, ' ').trim()
  },
]
```

## 🔄 CI/CD Pipeline

### **GitHub Actions**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📊 Post-Deployment Checklist

- [ ] **Verify build success** (45+ pages generated)
- [ ] **Test all TrailKit pages** (15 kits functional)
- [ ] **Confirm responsive design** (mobile/desktop)
- [ ] **Validate forms and interactions**
- [ ] **Check performance scores** (Lighthouse > 90)
- [ ] **Test TrailMap assessment flow**
- [ ] **Verify blog system functionality**
- [ ] **Confirm navigation and routing**
- [ ] **Test error pages** (404, 500)
- [ ] **Monitor initial analytics**

## 🆘 Troubleshooting

### **Common Build Issues**
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npm run type-check

# Verify all environment variables
npm run lint
```

### **Performance Issues**
- Enable static generation where possible
- Optimize images with next/image
- Use dynamic imports for heavy components
- Implement proper caching headers

### **Deployment Failures**
- Check build logs for specific errors
- Verify all dependencies are in package.json
- Ensure environment variables are set
- Test locally with `npm run build && npm run start`

---

**Need help?** Check our [Issues page](https://github.com/JoshuaShepherd/trailguide/issues) or open a new issue.
