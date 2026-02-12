# LIHTC Analytics Hub - Deployment Guide

## Quick Deployment Options

### 1. GitHub Pages (Recommended for Quick Start)

**Steps:**
1. Create a new repository on GitHub
2. Upload all files from this folder to the repository
3. Go to Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be live at: `https://[username].github.io/[repository-name]/`

**Time to deploy:** ~2 minutes

### 2. Netlify (Best for Custom Domains)

**Steps:**
1. Create account at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop this entire folder
4. Site goes live instantly with a Netlify subdomain
5. Optional: Add custom domain in Site Settings

**Features:**
- Automatic HTTPS
- Custom domain support
- Form handling (if you add contact forms later)
- Instant deployments

**Time to deploy:** ~1 minute

### 3. Vercel (Best for Developers)

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to this folder in terminal
3. Run `vercel`
4. Follow prompts (create account if needed)
5. Confirm deployment

**Features:**
- Lightning-fast edge network
- Automatic HTTPS
- Preview deployments for branches
- Analytics included

**Time to deploy:** ~2 minutes

### 4. AWS S3 + CloudFront (Best for Enterprise)

**Steps:**
1. Create S3 bucket with public website hosting enabled
2. Upload all files to bucket
3. Enable "Static website hosting" in bucket properties
4. Create CloudFront distribution pointing to S3 bucket
5. Configure custom domain in Route 53 (optional)

**Features:**
- Full AWS integration
- Unlimited scalability
- Custom caching rules
- Enterprise-grade security

**Time to deploy:** ~15 minutes

### 5. Local Development Server

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx serve
```

**PHP:**
```bash
php -S localhost:8000
```

**VS Code:**
Install "Live Server" extension, right-click `index.html`, select "Open with Live Server"

---

## Post-Deployment Checklist

### Essential Steps
- [ ] Test all pages load correctly
- [ ] Verify charts render properly
- [ ] Check mobile responsiveness
- [ ] Test navigation links
- [ ] Ensure external resource links work (Chart.js, Leaflet, Google Fonts)

### Optimization (Optional)
- [ ] Set up custom domain
- [ ] Configure SSL certificate (automatic with Netlify/Vercel/GitHub Pages)
- [ ] Add Google Analytics or similar
- [ ] Set up monitoring/uptime checks
- [ ] Configure CDN for faster global delivery

### Data Integration
- [ ] Review `js/data.js` for API integration points
- [ ] Replace sample data with real data sources
- [ ] Set up data refresh schedule
- [ ] Add error handling for API failures
- [ ] Implement caching strategy

---

## Environment-Specific Configuration

### GitHub Pages
No configuration needed - works out of the box!

### Netlify
Create `netlify.toml` in root (optional):
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel
Create `vercel.json` in root (optional):
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

---

## Updating the Site

### GitHub Pages
1. Commit and push changes to repository
2. GitHub automatically rebuilds and deploys
3. Changes live in 1-2 minutes

### Netlify
**Option A - Drag & Drop:**
1. Drag updated folder to Netlify site
2. Instant deployment

**Option B - Git Integration:**
1. Connect repository to Netlify
2. Automatic deployments on push

### Vercel
1. Run `vercel --prod` in project folder
2. Or set up Git integration for auto-deploy

---

## Troubleshooting

### Charts Not Displaying
- Check browser console for errors
- Verify Chart.js CDN is accessible
- Ensure JavaScript files are loading

### Fonts Not Loading
- Check Google Fonts CDN accessibility
- Verify font CSS import in HTML head

### Maps Not Working
- Verify Leaflet CDN is accessible
- Check map container has height set
- Ensure latitude/longitude coordinates are valid

### Mobile Issues
- Test viewport meta tag is present
- Verify CSS media queries are working
- Check for horizontal scrolling issues

---

## Next Steps

1. **Integrate Real Data**: Replace sample data in `js/data.js` with actual API calls
2. **Add Analytics**: Track visitor behavior to improve the platform
3. **Custom Domain**: Set up your own domain name
4. **SEO Optimization**: Add meta descriptions, Open Graph tags
5. **Performance**: Implement lazy loading for images/charts
6. **Accessibility**: Run WAVE or aXe audits and fix issues
7. **Security**: Add CSP headers, review external dependencies

---

## Support

For issues or questions:
- Check the README.md file
- Review CONTRIBUTING.md for guidelines
- Open a GitHub issue
- Consult documentation for your hosting platform

---

**Congratulations on deploying LIHTC Analytics Hub!**
