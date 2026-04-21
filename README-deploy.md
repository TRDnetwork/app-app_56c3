# Dawn Brew Landing Page — Deployment Guide

## Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Select the project root as deployment target
4. Click "Deploy" — no build command or output directory needed
5. Once deployed, set your custom domain (optional)

## Environment Variables
None required. This is a static HTML site with:
- UI-only email form (client-side validation only)
- No backend API
- No database
- No authentication

## First-time Setup
None needed. The site is fully static and requires no database setup, schema migration, or service configuration.

> ✅ Tip: Vercel auto-detects this as a static site. No `vercel.json` is needed — removing it improves framework detection.