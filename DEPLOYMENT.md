# Vercel Deployment Guide

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git installed on your machine

## Step 1: Initialize Git Repository

If you haven't already, initialize a git repository:

```bash
git init
git add .
git commit -m "Initial commit - HSI Alumni Portal"
```

## Step 2: Push to GitHub (Recommended)

1. Create a new repository on GitHub
2. Push your code:

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect your Vite project settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
5. Click "Deploy"
6. Your site will be live in a few minutes!

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Important Notes

- The `vercel.json` file is already configured to handle React Router's client-side routing
- All routes will properly redirect to `index.html` for client-side routing
- Your site will be accessible at a URL like: `https://your-project-name.vercel.app`
- Every push to your main branch will automatically trigger a new deployment (if you connect GitHub)

## Troubleshooting

If you encounter any issues:
1. Make sure `npm run build` works locally
2. Check the build logs in Vercel dashboard
3. Ensure all environment variables (if any) are set in Vercel project settings
