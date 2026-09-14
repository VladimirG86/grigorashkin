#!/bin/bash

# Portfolio Deployment Script
# Usage: ./deploy.sh [platform]

PLATFORM=${1:-"local"}

echo "🚀 Portfolio Deployment Script"
echo "================================"

case $PLATFORM in
    "local")
        echo "Starting local server..."
        echo "Open http://localhost:8000 in your browser"
        echo ""
        echo "Press Ctrl+C to stop the server"
        python3 -m http.server 8000
        ;;
    
    "github")
        echo "Deploying to GitHub Pages..."
        echo ""
        echo "1. Create a new repository on GitHub"
        echo "2. Run these commands:"
        echo ""
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial commit'"
        echo "   git branch -M main"
        echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
        echo "   git push -u origin main"
        echo ""
        echo "3. Go to Settings → Pages"
        echo "4. Select 'main' branch as source"
        echo "5. Your site will be at: https://YOUR_USERNAME.github.io/YOUR_REPO"
        ;;
    
    "netlify")
        echo "Deploying to Netlify..."
        echo ""
        echo "Option 1: Drag & Drop"
        echo "1. Go to https://app.netlify.com/drop"
        echo "2. Drag the 'portfolio' folder to the browser"
        echo ""
        echo "Option 2: Git Deploy"
        echo "1. Push code to GitHub/GitLab/Bitbucket"
        echo "2. Connect repository in Netlify"
        echo "3. Deploy settings:"
        echo "   - Build command: (leave empty)"
        echo "   - Publish directory: ."
        ;;
    
    "vercel")
        echo "Deploying to Vercel..."
        echo ""
        echo "1. Install Vercel CLI: npm i -g vercel"
        echo "2. Run: vercel"
        echo "3. Follow the prompts"
        echo ""
        echo "Or deploy via GitHub:"
        echo "1. Go to https://vercel.com"
        echo "2. Import your repository"
        echo "3. Deploy automatically"
        ;;
    
    *)
        echo "Unknown platform: $PLATFORM"
        echo ""
        echo "Available platforms:"
        echo "  local    - Start local server (default)"
        echo "  github   - Deploy to GitHub Pages"
        echo "  netlify  - Deploy to Netlify"
        echo "  vercel   - Deploy to Vercel"
        exit 1
        ;;
esac
