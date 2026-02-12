# LIHTC Analytics Hub

A modern web platform for tracking and analyzing Low-Income Housing Tax Credit (LIHTC) data, housing starts, foreclosures, and tax credit pricing across regional and national markets.

## Features

- **Real-time LIHTC Data Dashboard**: Track tax credit allocations, pricing trends, and market dynamics
- **Regional Analytics**: Drill down into state and metro-level housing finance data
- **Market Insights**: Foreclosure rates, housing starts, and development pipeline tracking
- **Interactive Visualizations**: Dynamic charts and maps for data exploration
- **Market Reports**: Export-ready analytics for housing finance professionals

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (no build process required)
- **Charts**: Chart.js for data visualization
- **Maps**: Leaflet.js for geographic data
- **Icons**: Lucide icons
- **Fonts**: Google Fonts

## Quick Start

### Option 1: GitHub Pages (Recommended)

1. Fork this repository
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder
5. Click Save
6. Your site will be live at `https://[username].github.io/lihtc-analytics-hub/`

### Option 2: Local Development

1. Clone the repository:
```bash
git clone https://github.com/[username]/lihtc-analytics-hub.git
cd lihtc-analytics-hub
```

2. Serve locally (choose one):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

3. Open `http://localhost:8000` in your browser

### Option 3: Deploy to Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the entire folder to Netlify
3. Site goes live instantly

### Option 4: Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy

## Project Structure

```
lihtc-analytics-hub/
├── index.html              # Main landing page
├── dashboard.html          # Interactive data dashboard
├── regional.html           # Regional analytics
├── insights.html           # Market insights & reports
├── about.html              # About page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── main.js            # Core functionality
│   ├── dashboard.js       # Dashboard logic
│   ├── charts.js          # Chart configurations
│   └── data.js            # Sample data & API integration
├── assets/
│   └── images/            # Images and graphics
└── README.md              # This file
```

## Data Integration

The site currently uses sample data for demonstration. To integrate real data:

1. **API Integration**: Update `js/data.js` to fetch from your data sources
2. **CSV Import**: Add CSV parsing for static data files
3. **Database Connection**: Set up backend API (suggestions in `js/data.js`)

## Customization

- **Colors**: Edit CSS variables in `css/styles.css` (`:root` section)
- **Data Sources**: Modify `js/data.js`
- **Layout**: Adjust HTML structure in individual pages
- **Charts**: Configure chart options in `js/charts.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for commercial or personal projects

## Contributing

Contributions welcome! Please open an issue or submit a pull request.

## Resources

- [Novoco LIHTC Resources](https://www.novoco.com)
- [HUD LIHTC Database](https://www.huduser.gov/portal/datasets/lihtc.html)
- [Chart.js Documentation](https://www.chartjs.org/)
- [Leaflet Documentation](https://leafletjs.com/)

## Support

For questions or issues, please open a GitHub issue or contact the maintainers.

---

Built with focus on housing finance professionals and policy makers tracking affordable housing development.
