# LIHTC Analytics Hub - GitHub Integration Guide
**Easy Deployment via GitHub Web Interface**

## 📦 Package Downloaded: `lihtc-upgrade-v1.0.zip`

This guide shows you how to deploy the upgrade package directly through GitHub's web interface - **no command line required!**

---

## 🚀 Method 1: GitHub Web Upload (Easiest - 15 minutes)

### Step 1: Extract the Zip File
1. Download `lihtc-upgrade-v1.0.zip` to your computer
2. Right-click → "Extract All" or "Unzip"
3. You'll see a folder called `lihtc-upgrade` with subfolders: `js/`, `css/`, `docs/`

### Step 2: Upload JavaScript Files (5 minutes)

1. Go to your repository: `https://github.com/pggllc/lihtc-analytics-hub`
2. Navigate to the `js/` folder (click on `js` in the file list)
3. Click **"Add file"** → **"Upload files"**
4. Drag these 3 files from your extracted folder:
   - `responsive-nav.js`
   - `state-allocations-2026.js`
   - `fred-commodities.js`
5. Scroll down, commit message: `Add upgrade package JavaScript files`
6. Click **"Commit changes"**

### Step 3: Upload CSS File (2 minutes)

1. Navigate to the `css/` folder in your repository
2. Click **"Add file"** → **"Upload files"**
3. Drag `responsive-nav.css` from your extracted folder
4. Commit message: `Add responsive navigation styles`
5. Click **"Commit changes"**

### Step 4: Configure FRED API Key (3 minutes)

1. Get your FREE API key:
   - Visit: https://research.stlouisfed.org/useraccount/register
   - Create account (first name, last name, email)
   - Verify email and login
   - Go to "API Keys" → "Request API Key"
   - Copy your key (looks like: `abc123def456...`)

2. Update the file in GitHub:
   - In your repository, navigate to `js/fred-commodities.js`
   - Click the pencil icon (✏️) to edit
   - Find line 7: `apiKey: 'YOUR_FRED_API_KEY_HERE',`
   - Replace `YOUR_FRED_API_KEY_HERE` with your actual key
   - Keep the quotes around it!
   - Commit message: `Configure FRED API key`
   - Click **"Commit changes"**

### Step 5: Update HTML Files (5 minutes)

For **EACH** of your HTML files (index.html, dashboard.html, regional.html, insights.html, about.html, etc.):

1. Click on the HTML file in your repository
2. Click the pencil icon (✏️) to edit
3. Scroll to the bottom, find `</body>`
4. **Just before** `</body>`, add these lines:

```html
<!-- LIHTC Upgrade Package v1.0 -->
<link rel="stylesheet" href="css/responsive-nav.css">
<script src="js/responsive-nav.js"></script>
<script src="js/state-allocations-2026.js"></script>
<script src="js/fred-commodities.js"></script>
```

5. Commit message: `Add upgrade scripts to [filename]`
6. Click **"Commit changes"**
7. Repeat for each HTML file

**Pro Tip:** Copy the 4 lines above to your clipboard, then paste into each file. Much faster!

### Step 6: Update Map Page (Optional - 3 minutes)

If you have a state allocation map page:

1. Find the file (likely `state-data.html` or similar)
2. Click the pencil icon (✏️) to edit
3. Change the title:
   - Find: `LIHTC Allocation Heatmap` (or similar)
   - Replace with: `2026 Federal LIHTC Information by State`

4. Add source attribution (find a good spot, usually below the map):

```html
<div class="map-source-info">
    <p><strong>Data Source:</strong> 
        <a href="https://www.novoco.com/resource-centers/affordable-housing-tax-credits/2026-federal-lihtc-information-by-state" 
           target="_blank" rel="noopener">
            Novogradac - 2026 Federal LIHTC Information by State
        </a>
    </p>
    <p><small>Last Updated: February 2026 | Update Frequency: Quarterly</small></p>
    <p><small>27 states confirmed, 23 states estimated. Check source for latest updates.</small></p>
</div>
```

5. Commit message: `Update map title and add Novogradac source`
6. Click **"Commit changes"**

### Step 7: Wait & Test (5 minutes)

1. **Wait 2-3 minutes** for GitHub Pages to rebuild
2. Visit your site: `https://pggllc.github.io/lihtc-analytics-hub/`
3. **Test the menu:**
   - Desktop: Menu should be horizontal
   - Resize browser to mobile: Hamburger icon appears
   - Resize back to desktop: Menu switches back
   - No stuck menus!

4. **Test in browser console (F12):**
   ```javascript
   // Type these and press Enter:
   StateAllocations2026.getStats()
   // Should show statistics
   
   await FREDCommodities.getAllCommodities()
   // Should fetch commodity data
   ```

5. **If everything works:** 🎉 **You're done!**

---

## 🚀 Method 2: Git Command Line (For Advanced Users)

If you prefer using Git command line:

```bash
# 1. Clone your repository
git clone https://github.com/pggllc/lihtc-analytics-hub.git
cd lihtc-analytics-hub

# 2. Extract upgrade package into repo
unzip /path/to/lihtc-upgrade-v1.0.zip
cp -r lihtc-upgrade/js/* js/
cp -r lihtc-upgrade/css/* css/

# 3. Configure FRED API key
# Edit js/fred-commodities.js line 7 with your API key

# 4. Update HTML files
# Add script tags to all HTML files before </body>

# 5. Commit and push
git add .
git commit -m "Add LIHTC upgrade package v1.0"
git push origin main

# 6. Wait 2-3 minutes for GitHub Pages to rebuild
```

---

## ✅ Post-Deployment Checklist

After deploying, verify these work:

### Responsive Navigation
- [ ] Desktop menu displays horizontally
- [ ] Mobile menu shows hamburger icon (< 768px)
- [ ] Resizing switches menu modes correctly
- [ ] Dropdown menus work in both modes
- [ ] No JavaScript errors in console

### State Allocations
- [ ] Open console (F12), type: `StateAllocations2026`
- [ ] Should show object, not "undefined"
- [ ] Type: `StateAllocations2026.getState('CA')`
- [ ] Should return California data

### FRED Commodities
- [ ] Type: `await FREDCommodities.getAllCommodities()`
- [ ] Should fetch data (takes ~5 seconds)
- [ ] Should return object with 18 commodity series
- [ ] No API errors

### Map Updates
- [ ] Title shows "2026 Federal LIHTC Information by State"
- [ ] Novogradac source link displays and works
- [ ] Last updated shows "February 2026"

---

## 🐛 Troubleshooting

### "Files won't upload"
**Solution:** GitHub has file size limits (100MB). Your files are all under 10KB, so if you can't upload:
- Check you're uploading from the correct extracted folder
- Try uploading one file at a time instead of all together
- Make sure you're logged into GitHub

### "Script tags break my page"
**Solution:** Make sure you added them in the right place:
- Must be **before** `</body>` tag
- Must be **after** all your other content
- Check for typos in file paths (case-sensitive!)

### "Menu still doesn't work"
**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Check browser console (F12) for errors
4. Verify `responsive-nav.js` and `responsive-nav.css` both uploaded

### "FRED data not loading"
**Solution:**
1. Check API key is correct (no extra spaces)
2. Test API directly in browser:
   ```
   https://api.stlouisfed.org/fred/series/observations?series_id=PCU331111331111&api_key=YOUR_KEY&file_type=json
   ```
3. Make sure you saved the file after editing
4. Wait a few minutes - FRED sometimes has delays

### "State data shows undefined"
**Solution:**
1. Check `state-allocations-2026.js` uploaded correctly
2. Verify script tag is in HTML before `</body>`
3. Use uppercase state abbreviations: `'CA'` not `'ca'`
4. Clear cache and refresh

---

## 📁 What Got Uploaded

After following this guide, your repository should have:

```
lihtc-analytics-hub/
├── js/
│   ├── responsive-nav.js              ← NEW
│   ├── state-allocations-2026.js      ← NEW
│   ├── fred-commodities.js            ← NEW (with your API key)
│   └── (your existing JS files)
│
├── css/
│   ├── responsive-nav.css             ← NEW
│   └── (your existing CSS files)
│
├── index.html                         ← UPDATED (added script tags)
├── dashboard.html                     ← UPDATED (added script tags)
├── regional.html                      ← UPDATED (added script tags)
├── insights.html                      ← UPDATED (added script tags)
├── about.html                         ← UPDATED (added script tags)
└── (any other HTML files)             ← UPDATED (added script tags)
```

---

## 📚 Reference Documentation

The zip file includes complete documentation in the `docs/` folder:

- **README.md** - Package overview
- **DEPLOYMENT-CHECKLIST.md** - Detailed deployment steps
- **IMPLEMENTATION-GUIDE.md** - Complete implementation guide
- **QUICK-REFERENCE.md** - API reference and code snippets
- **EXAMPLE-USAGE.html** - Interactive demo page

You can upload these to your repo too (optional) or keep them for reference.

---

## 🎯 Quick Command Reference

### To test state data (in browser console):
```javascript
// Get statistics
StateAllocations2026.getStats()

// Get specific state
StateAllocations2026.getState('CA')
StateAllocations2026.getState('TX')

// Get top 5 states
Object.values(StateAllocations2026.states)
  .sort((a,b) => b.allocation - a.allocation)
  .slice(0,5)
```

### To test FRED data (in browser console):
```javascript
// Fetch all commodity prices
const data = await FREDCommodities.getAllCommodities()

// Calculate project impact
const impacts = FREDCommodities.calculateProjectImpact(data, 25000000)
console.log(impacts)
```

---

## 🔄 Future Updates

### Quarterly (Every 3 Months)
Check Novogradac for updated state allocation data:
https://www.novoco.com/resource-centers/affordable-housing-tax-credits/2026-federal-lihtc-information-by-state

If data changes, update `js/state-allocations-2026.js`

### Monthly (Automatic)
FRED commodity prices update automatically - no action needed!

### Check for Issues
Monitor your GitHub repository "Issues" tab for any user-reported problems.

---

## ✨ You're All Set!

Your LIHTC Analytics Hub is now upgraded with:
- ✅ Fixed responsive navigation
- ✅ Complete 2026 state allocation data (50 states)
- ✅ Live FRED construction commodity prices (18 series)
- ✅ Updated map with Novogradac source

**Questions?** Check the documentation files or open an issue on GitHub.

---

**Package Version:** 1.0  
**Release Date:** February 14, 2026  
**Total Files:** 11 files, 34KB compressed  
**Installation Time:** 15-25 minutes  

**Need help?** Open an issue on your GitHub repository with error details.

---

*End of GitHub Integration Guide*
