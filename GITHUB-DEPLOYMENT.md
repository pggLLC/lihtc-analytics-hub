# GitHub Deployment Guide - LIHTC Analytics Hub

## Complete Step-by-Step Instructions for GitHub Pages

### Method 1: Using GitHub Web Interface (Easiest - No Command Line)

#### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" (top right)
3. Follow the registration steps
4. Verify your email address

#### Step 2: Create New Repository
1. Once logged in, click the **"+"** icon (top right)
2. Select **"New repository"**
3. Fill in:
   - **Repository name**: `lihtc-analytics-hub` (or your preferred name)
   - **Description**: "LIHTC data analytics and market intelligence platform"
   - **Public** (select this option)
   - ✅ Check **"Add a README file"**
   - Leave other options as default
4. Click **"Create repository"**

#### Step 3: Upload Your Files
1. After creating repository, you'll see your new repo page
2. Click **"Add file"** button → **"Upload files"**
3. Drag and drop ALL files/folders from the `lihtc-analytics-hub` folder:
   - All .html files
   - css/ folder
   - js/ folder
   - assets/ folder
   - README.md
   - All other files
4. Add commit message: "Initial commit - LIHTC Analytics Hub"
5. Click **"Commit changes"**

**⏱️ Upload may take 1-2 minutes**

#### Step 4: Enable GitHub Pages
1. Click **"Settings"** tab (top of repository)
2. Scroll down left sidebar, click **"Pages"**
3. Under **"Source"**:
   - Select **"Deploy from a branch"**
4. Under **"Branch"**:
   - Select **"main"** (or "master")
   - Select **"/ (root)"**
   - Click **"Save"**
5. Wait 1-2 minutes for deployment

#### Step 5: Access Your Live Site
1. Refresh the Pages settings page
2. You'll see: **"Your site is live at https://[username].github.io/[repository-name]/"**
3. Click the link to view your site!

**🎉 DONE! Your site is now live!**

---

### Method 2: Using GitHub Desktop (User-Friendly GUI)

#### Step 1: Install GitHub Desktop
1. Download from [desktop.github.com](https://desktop.github.com)
2. Install and open
3. Sign in with your GitHub account

#### Step 2: Create Repository
1. Click **"File"** → **"New Repository"**
2. Name: `lihtc-analytics-hub`
3. Local path: Choose where to create it
4. Click **"Create Repository"**

#### Step 3: Add Files
1. Open the repository folder (GitHub Desktop shows the path)
2. Copy ALL files from `lihtc-analytics-hub` into this folder
3. GitHub Desktop will show all new files
4. Add commit message: "Initial commit"
5. Click **"Commit to main"**

#### Step 4: Publish to GitHub
1. Click **"Publish repository"** (top)
2. Uncheck "Keep this code private"
3. Click **"Publish repository"**

#### Step 5: Enable Pages
1. Click **"Repository"** menu → **"View on GitHub"**
2. Follow Steps 4-5 from Method 1 above

---

### Method 3: Using Command Line (For Developers)

#### Prerequisites
- Git installed ([git-scm.com](https://git-scm.com))
- GitHub account created

#### Commands
```bash
# Navigate to the lihtc-analytics-hub folder
cd path/to/lihtc-analytics-hub

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - LIHTC Analytics Hub"

# Create repository on GitHub first (through web interface)
# Then connect and push:
git remote add origin https://github.com/[username]/lihtc-analytics-hub.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages through Settings (see Method 1, Step 4).

---

## Troubleshooting

### Site Shows README Instead of Website
**Problem**: GitHub is displaying README.md instead of index.html

**Solution**:
1. Go to Settings → Pages
2. Make sure "Branch" is set to "main" and "/ (root)"
3. If still not working, rename README.md to README-temp.md temporarily
4. Push changes, wait for deployment
5. Rename back to README.md

### 404 Error on GitHub Pages
**Problem**: Site shows "404 - File not found"

**Solutions**:
1. Wait 5-10 minutes (first deployment can take time)
2. Check Settings → Pages shows "Your site is live"
3. Verify index.html is in root folder (not in a subfolder)
4. Clear browser cache and try again
5. Try incognito/private browsing window

### Files Didn't Upload
**Problem**: Only some files appeared in repository

**Solutions**:
1. Upload in smaller batches (HTML files first, then folders)
2. Use GitHub Desktop instead of web interface
3. Check file size limits (GitHub has 100MB per file limit)

### CSS/JavaScript Not Loading
**Problem**: Site looks broken, no styles or interactivity

**Solutions**:
1. Check browser console (F12) for errors
2. Verify folder structure is correct:
   ```
   repository-root/
   ├── index.html
   ├── css/
   │   └── styles.css
   └── js/
       └── main.js
   ```
3. Make sure you uploaded the css/ and js/ folders, not just the files

### Charts Not Appearing
**Problem**: Dashboard charts are blank

**Solutions**:
1. Wait for CDN resources to load (Chart.js)
2. Check internet connection
3. Open browser console (F12) for JavaScript errors
4. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## Customizing Your GitHub Pages URL

### Option 1: Use Custom Repository Name
- Repository name becomes part of URL
- Example: `housing-data` → `username.github.io/housing-data`

### Option 2: Use Custom Domain
1. Buy domain from registrar (Namecheap, Google Domains, etc.)
2. In GitHub repo Settings → Pages → Custom domain
3. Enter your domain (e.g., `lihtc-analytics.com`)
4. Add DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: [username].github.io
   ```
5. Wait for DNS propagation (24-48 hours)
6. Enable HTTPS in GitHub Pages settings

---

## Making Updates After Deployment

### Via Web Interface:
1. Go to your repository on GitHub
2. Navigate to file you want to edit
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Wait 1-2 minutes, changes will be live

### Via GitHub Desktop:
1. Edit files locally
2. GitHub Desktop shows changes
3. Add commit message
4. Click "Commit to main"
5. Click "Push origin"
6. Changes deploy automatically

---

## Best Practices

### Security
- ✅ Enable HTTPS in Settings → Pages (automatic with GitHub Pages)
- ✅ Don't commit API keys or sensitive data
- ✅ Use environment variables for secrets (if adding backend)

### Performance
- ✅ Optimize images before uploading (use TinyPNG, etc.)
- ✅ Keep files organized in folders
- ✅ Use browser caching headers

### Maintenance
- ✅ Update data regularly
- ✅ Test on multiple browsers
- ✅ Monitor with Google Analytics (optional)
- ✅ Keep dependencies updated (Chart.js, Leaflet)

---

## Additional Features You Can Enable

### GitHub Actions (Auto-Deploy)
- Automatically deploy when you push changes
- Run tests before deploying
- Schedule data updates

### Project Board
- Track feature requests
- Manage updates and fixes
- Collaborate with team

### Issues
- Track bugs
- Collect feedback
- Prioritize features

### Wiki
- Document data sources
- Explain methodologies
- Create user guides

---

## Getting Help

### GitHub Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Learning Lab](https://lab.github.com)
- [GitHub Community Forum](https://github.community)

### This Project
- Check README.md for project overview
- See DEPLOYMENT.md for other hosting options
- Review QUICKSTART.md for customization

### Support Channels
- Open an Issue in your repository
- Ask in GitHub Discussions
- Check Stack Overflow for technical questions

---

## Quick Reference

### Your URLs
- **Repository**: `https://github.com/[username]/lihtc-analytics-hub`
- **Live Site**: `https://[username].github.io/lihtc-analytics-hub`
- **Settings**: `https://github.com/[username]/lihtc-analytics-hub/settings/pages`

### Important Files
- `index.html` - Landing page (MUST be in root)
- `css/styles.css` - All styles
- `js/main.js` - Core functionality
- `README.md` - Project documentation

### Deployment Time
- First deployment: 2-5 minutes
- Updates: 30 seconds - 2 minutes
- Changes visible after: ~1 minute

---

**🎉 Congratulations! Your LIHTC Analytics Hub is now live on GitHub Pages!**

Share your site: `https://[username].github.io/lihtc-analytics-hub`
