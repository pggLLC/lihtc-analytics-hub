# LIHTC Analytics Hub - Quick Start Guide

## 🚀 Get Your Site Live in 5 Minutes

### Option 1: GitHub Pages (Easiest)
```
1. Create GitHub account (if needed) → github.com
2. Create new repository → Click "+" → "New repository"
3. Upload all files → Drag and drop this entire folder
4. Enable Pages → Settings → Pages → Select "main" branch
5. Done! Site live at: username.github.io/repository-name
```

### Option 2: Netlify (Fastest)
```
1. Go to netlify.com
2. Sign up with GitHub/Email
3. Drag this folder onto Netlify
4. Done! Site live instantly with free subdomain
```

---

## 📁 What You Got

```
lihtc-analytics-hub/
├── index.html          ← Landing page (START HERE)
├── dashboard.html      ← Interactive data dashboard
├── regional.html       ← State/metro analysis
├── insights.html       ← Market reports & trends
├── about.html          ← About page
├── css/
│   └── styles.css      ← All styles (single file)
├── js/
│   ├── main.js         ← Navigation & utilities
│   ├── dashboard.js    ← Dashboard charts
│   ├── regional.js     ← Regional maps & charts
│   └── data.js         ← Data integration layer
└── assets/
    └── images/         ← (empty - add your images)
```

---

## ✏️ Customize It

### Change Colors
Edit `css/styles.css` at line 7-20 (CSS Variables):
```css
--color-primary: #1a3a52;     /* Main brand color */
--color-accent: #d4a574;      /* Accent color */
--color-background: #fdfcfa;  /* Page background */
```

### Update Content
- **Site name**: Search & replace "LIHTC Analytics" in all .html files
- **Footer info**: Edit footer section in each .html file
- **Stats**: Update numbers in index.html hero-stats section
- **Data**: Edit `js/data.js` to change chart data

### Add Real Data
1. Open `js/data.js`
2. Replace `SampleData` object with your data
3. Or integrate APIs using the provided templates

---

## 🎨 Design Features

- **Responsive**: Works on all devices (mobile, tablet, desktop)
- **Accessible**: Semantic HTML, ARIA labels included
- **Fast**: No build process, loads instantly
- **Modern**: Clean, professional design inspired by financial platforms
- **Interactive**: Charts, maps, and data visualizations

---

## 🔧 Common Customizations

### Add a Page
1. Copy any existing .html file
2. Rename it (e.g., `resources.html`)
3. Update navigation in all files:
```html
<a href="resources.html" class="nav-link">Resources</a>
```

### Add a Chart
1. Open dashboard.html
2. Copy a chart-card div
3. Add canvas element with unique ID
4. Add chart code to `js/dashboard.js`

### Change Fonts
1. Go to [Google Fonts](https://fonts.google.com)
2. Select fonts
3. Replace font link in HTML `<head>`
4. Update CSS variables:
```css
--font-display: 'Your Font', serif;
--font-body: 'Your Font', sans-serif;
```

---

## 📊 Data Sources to Integrate

1. **HUD LIHTC Database**
   - URL: huduser.gov/portal/datasets/lihtc.html
   - Format: CSV/Excel downloads
   - Update: Annually

2. **Novoco**
   - URL: novoco.com
   - Contact for data access
   - Pricing data & market intelligence

3. **Census Bureau**
   - API: census.gov/data/developers
   - Housing starts, permits data
   - Update: Monthly

4. **State HFAs**
   - Each state has different formats
   - QAP docs, allocation announcements
   - Update: Varies by state

---

## 🐛 Troubleshooting

**Charts not showing?**
- Check browser console (F12)
- Verify Chart.js CDN is loading
- Clear browser cache

**Map not working?**
- Verify Leaflet CDN loads
- Check map div has height in CSS

**Mobile issues?**
- Test on real device, not just browser resize
- Check viewport meta tag exists

**Slow loading?**
- Enable browser caching
- Consider using a CDN
- Optimize images in assets/images

---

## 📚 Learn More

- **Chart.js Docs**: chartjs.org/docs
- **Leaflet Docs**: leafletjs.com/reference
- **CSS Grid**: css-tricks.com/snippets/css/complete-guide-grid
- **Responsive Design**: web.dev/responsive-web-design-basics

---

## 🎯 Next Steps

1. Deploy to GitHub Pages or Netlify (see DEPLOYMENT.md)
2. Test on mobile devices
3. Add Google Analytics (optional)
4. Integrate real data sources
5. Customize colors and content
6. Share with stakeholders!

---

## 💡 Pro Tips

- **Version Control**: Use Git to track changes
- **Backup**: Keep copies before major edits
- **Test Locally**: Use Python/Node server before deploying
- **Mobile First**: Always test on mobile
- **Accessibility**: Run WAVE audit (wave.webaim.org)

---

**Questions?** Check README.md or DEPLOYMENT.md for detailed info!
