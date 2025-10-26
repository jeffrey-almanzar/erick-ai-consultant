# AI Consulting Website

A modern, responsive website showcasing AI consulting services backed by research and real-world insight. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Comprehensive metadata and structured content
- **Performance**: Built with Next.js for optimal loading speeds
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Contact Integration**: Direct email links and social media integration

## 🛠️ Tech Stack

- **Framework/Library**: Next.js 16.0.0 / React 19.2.0
- **Language**: JavaScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Shadcn UI
- **Icons**: Lucide React


## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 20 or higher)
- **npm** or **pnpm** package manager
- **Git** for version control

## 🏃‍♂️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ai-consulting-site
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
ai-consulting-site/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about-section.tsx
│   ├── case-studies-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── research-section.tsx
│   ├── services-section.tsx
│   └── testimonials-section.tsx
├── public/               # Static assets
│   ├── logo2.png        # Main logo
│   ├── hero.png         # Hero image
│   └── ...              # Other images
├── .github/workflows/   # GitHub Actions
│   └── nextjs.yml       # Deployment workflow
└── package.json         # Dependencies and scripts
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages through GitHub Actions.

### How Deployment Works

1. **Push to Main Branch**: When you push changes to the `main` branch, GitHub Actions automatically triggers
2. **Build Process**: The workflow installs dependencies and builds the project
3. **Deploy to GitHub Pages**: The built application is deployed to GitHub Pages
4. **Live Site**: Your changes are live at your GitHub Pages domain

### Styling

- **Global Styles**: Edit `app/globals.css`
- **Component Styles**: Use Tailwind CSS classes in component files
- **Theme**: Customize colors and fonts in the CSS variables

### Images

- **Logo**: Replace `public/logo2.png` with your logo
- **Hero Image**: Replace `public/hero.png` with your hero image
- **Other Images**: Add images to `public/` directory and reference them

