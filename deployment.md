# Portfolio Website Setup Guide

A personal portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Prerequisites

- Node.js 18+
- npm or yarn
- Git
- GitHub account
- Vercel account

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment to Vercel

### Option 1: Deploy via CLI

1. Install Vercel CLI
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel
   ```bash
   vercel login
   ```

3. Deploy
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)

3. Click "Add New Project"

4. Import your GitHub repository

5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains

2. Add your custom domain

3. Follow the instructions to configure DNS records

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui
- Lucide React (icons)
