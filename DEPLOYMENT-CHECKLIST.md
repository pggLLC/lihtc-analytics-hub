# LIHTC Analytics Hub - Deployment Checklist
Version 1.0 - February 14, 2026

## Pre-Deployment

### ☐ Backup Current Website
- [ ] Clone current repository to local machine
- [ ] Create backup branch: `git checkout -b backup-pre-upgrade`
- [ ] Push backup: `git push origin backup-pre-upgrade`

### ☐ Verify Package Contents
- [ ] 3 JavaScript files present
- [ ] 1 CSS file present  
- [ ] 4 documentation files present
- [ ] Total package size: ~68 KB

---

## Step 1: File Upload (5 minutes)

### ☐ Upload JavaScript Files
Navigate to your GitHub repository → `js/` folder

- [ ] Upload `js/responsive-nav.js` (3.2 KB)
  - Click "Add file" → "Upload files"
  - Drag responsive-nav.js
  - Commit message: "Add responsive navigation fix"

- [ ] Upload `js/state-allocations-2026.js` (9.3 KB)
  - Same process
  - Commit message: "Add 2026 state allocation data"

- [ ] Upload `js/fred-commodities.js` (6.9 KB)
  - Same process
  - Commit message: "Add FRED construction commodities integration"

### ☐ Upload CSS File
Navigate to `css/` folder

- [ ] Upload `css/responsive-nav.css` (4.0 KB)
  - Commit message: "Add responsive navigation styles"

### ☐ Verify Upload
- [ ] Check all 4 files appear in repository
- [ ] No error messages during upload
- [ ] File sizes match expected values

---

## Step 2: Configure FRED API (3 minutes)

### ☐ Get API Key
- [ ] Visit: https://research.stlouisfed.org/useraccount/register
- [ ] Create account (first name, last name, email)
- [ ] Verify email
- [ ] Login to account dashboard
- [ ] Navigate to "API Keys"
- [ ] Click "Request API Key"
- [ ] Copy the key (format: abc123def456...)

### ☐ Add API Key to Code
- [ ] Open `js/fred-commodities.js` in GitHub editor
- [ ] Find line 7: `apiKey: 'YOUR_FRED_API_KEY_HERE',`
- [ ] Replace `YOUR_FRED_API_KEY_HERE` with your actual key
- [ ] Save and commit: "Configure FRED API key"

### ☐ Test API Key
- [ ] Open: https://api.stlouisfed.org/fred/series/observations?series_id=PCU331111331111&api_key=YOUR_KEY&file_type=json
- [ ] Replace YOUR_KEY with your actual key
- [ ] Should return JSON data, not error

---

## Step 3: Update HTML Files (10 minutes)

### ☐ Identify All HTML Pages
List of files to update:
- [ ] index.html
- [ ] dashboard.html
- [ ] regional.html
- [ ] insights.html
- [ ] about.html
- [ ] state-data.html (if exists)
- [ ] Any other .html files

### ☐ Add Script/Style Includes
For EACH HTML file above:

1. [ ] Open file in GitHub editor
2. [ ] Scroll to bottom, find `</body>` tag
3. [ ] Add BEFORE `</body>`:

```html
<!-- LIHTC Upgrade Package v1.0 - Feb 2026 -->
<link rel="stylesheet" href="css/responsive-nav.css">
<script src="js/responsive-nav.js"></script>
<script src="js/state-allocations-2026.js"></script>
<script src="js/fred-commodities.js"></script>
```

4. [ ] Save and commit: "Add upgrade package scripts to [filename]"
5. [ ] Repeat for next file

### ☐ Verify All Files Updated
- [ ] Check each HTML file has the new script tags
- [ ] No typos in file paths
- [ ] Scripts are in correct order

---

## Step 4: Update Map Page (5 minutes)

### ☐ Locate Map Page
- [ ] Find file with state allocation map (likely `state-data.html` or `dashboard.html`)

### ☐ Update Page Title
- [ ] Find: `<h1>LIHTC Allocation Heatmap</h1>` (or similar)
- [ ] Replace with: `<h1>2026 Federal LIHTC Information by State</h1>`

### ☐ Add Source Attribution
- [ ] Find a good location (below map, or in info section)
- [ ] Add this HTML:

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

- [ ] Save and commit: "Update map title and add Novogradac source"

### ☐ Add Source Styling (if not styled)
If source info needs styling, add to your CSS:

```css
.map-source-info {
    background-color: rgba(232, 220, 196, 0.1);
    border-left: 3px solid #d4a574;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 4px;
}
```

---

## Step 5: Test Deployment (15 minutes)

### ☐ Wait for GitHub Pages Rebuild
- [ ] Wait 2-3 minutes after last commit
- [ ] GitHub Pages rebuilds automatically

### ☐ Test Responsive Navigation
Open website on desktop:
- [ ] Menu displays horizontally
- [ ] Dropdown menus work on hover
- [ ] No JavaScript errors in console (F12)

Resize browser to mobile width (<768px):
- [ ] Hamburger icon appears
- [ ] Menu toggles open/closed when clicked
- [ ] Dropdown menus work on tap

Resize back to desktop:
- [ ] Menu switches back to horizontal
- [ ] No stuck states or broken menus
- [ ] Dropdown hovers work again

### ☐ Test State Allocations
Open browser console (F12):
- [ ] Type: `StateAllocations2026`
- [ ] Object should appear, not "undefined"
- [ ] Type: `StateAllocations2026.getStats()`
- [ ] Should return statistics object
- [ ] Type: `StateAllocations2026.getState('CA')`
- [ ] Should return California data

### ☐ Test FRED Commodities
In browser console:
- [ ] Type: `FREDCommodities`
- [ ] Object should appear
- [ ] Type: `await FREDCommodities.getAllCommodities()`
- [ ] Should fetch data (takes 5-10 seconds)
- [ ] Should return commodity object with data
- [ ] No API errors in console

### ☐ Test Map Updates
Navigate to map page:
- [ ] Title shows "2026 Federal LIHTC Information by State"
- [ ] Novogradac source link displays
- [ ] Click source link - opens in new tab
- [ ] Last updated date shows "February 2026"

### ☐ Mobile Testing
Test on actual mobile device or DevTools mobile view:
- [ ] All pages load correctly
- [ ] Navigation works on mobile
- [ ] No horizontal scrolling
- [ ] Touch interactions work
- [ ] Map is responsive

### ☐ Cross-Browser Testing
Test on different browsers:
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile if available)
- [ ] Edge (if available)

---

## Step 6: Verify Data Accuracy (5 minutes)

### ☐ Check State Data
- [ ] California: $134.7M allocation
- [ ] Texas: $106.9M allocation
- [ ] Wyoming: $6.93 per capita (highest)
- [ ] Illinois: $2.65 per capita (lowest confirmed)
- [ ] Total states: 50
- [ ] Confirmed states: 27
- [ ] Estimated states: 23

### ☐ Check FRED Data
- [ ] All 18 commodity series load
- [ ] Year-over-year changes display
- [ ] Current dates are recent (within last month)
- [ ] No "undefined" or "null" values

---

## Post-Deployment

### ☐ Monitor for Issues
First 24 hours:
- [ ] Check for any error reports
- [ ] Monitor GitHub Issues
- [ ] Test from different networks/locations
- [ ] Verify all features work as expected

### ☐ Documentation
- [ ] Update main README with upgrade version
- [ ] Add changelog entry
- [ ] Document any custom modifications made

### ☐ Backup Successful Deployment
- [ ] Create tag: `git tag v1.0-upgrade`
- [ ] Push tag: `git push origin v1.0-upgrade`
- [ ] Note deployment date in changelog

---

## Rollback Plan (If Needed)

### If Something Goes Wrong:

1. **Quick Rollback**:
   ```bash
   git checkout backup-pre-upgrade
   git push origin main --force
   ```

2. **Selective Rollback**:
   - Remove script tags from HTML files
   - Delete uploaded JS/CSS files
   - Revert map page changes

3. **Troubleshooting First**:
   - Check browser console for errors
   - Verify all files uploaded correctly
   - Check FRED API key is valid
   - Clear browser cache

---

## Common Issues & Fixes

### Menu Not Working After Resize
**Fix:**
- Clear browser cache (Ctrl+Shift+R)
- Check responsive-nav.js loaded in Network tab
- Verify no JavaScript errors in console

### FRED Data Not Loading
**Fix:**
- Check API key is correct (no spaces)
- Test API directly in browser
- Wait a few minutes (FRED has rate limits)
- Check network connectivity

### State Data Shows Undefined
**Fix:**
- Verify state-allocations-2026.js loaded
- Check script tag placement (before closing body)
- Use uppercase abbreviations ('CA' not 'ca')

### Map Source Not Showing
**Fix:**
- Check CSS file loaded
- Clear cache and refresh
- Inspect element (F12) to see if div exists
- Verify HTML was saved correctly

---

## Success Criteria

Deployment is successful when:
- ✅ All HTML pages load without errors
- ✅ Responsive navigation works on resize
- ✅ State data loads correctly
- ✅ FRED commodities fetch successfully
- ✅ Map shows new title and source
- ✅ No JavaScript errors in console
- ✅ Mobile view works correctly
- ✅ All links function properly

---

## Next Steps After Deployment

### Immediate (Week 1):
- [ ] Monitor for any user-reported issues
- [ ] Check analytics for increased errors
- [ ] Verify FRED API usage (should be under 100/hour)

### Short-term (Month 1):
- [ ] Review FRED API usage patterns
- [ ] Check for Novogradac data updates
- [ ] Gather user feedback on new features

### Ongoing (Quarterly):
- [ ] Update state allocation data from Novogradac
- [ ] Review commodity price trends
- [ ] Check for FRED API changes

---

## Support Contacts

**Technical Issues:**
- GitHub Issues: [Your repository]/issues
- Browser Console: F12 for error messages

**Data Source Updates:**
- Novogradac: https://www.novoco.com/resource-centers/affordable-housing-tax-credits/2026-federal-lihtc-information-by-state
- FRED: https://fred.stlouisfed.org

**API Support:**
- FRED API: https://fred.stlouisfed.org/docs/api/

---

## Deployment Log

**Date**: ___________________
**Deployed By**: ___________________
**Version**: 1.0
**Completion Time**: ___________________

**Issues Encountered:**
- ___________________________________________________
- ___________________________________________________
- ___________________________________________________

**Resolution:**
- ___________________________________________________
- ___________________________________________________
- ___________________________________________________

**Notes:**
___________________________________________________________
___________________________________________________________
___________________________________________________________

---

**✅ Deployment Complete!**

Check off all items before considering deployment finished.
Keep this checklist for future reference and troubleshooting.

---

*End of Deployment Checklist*
