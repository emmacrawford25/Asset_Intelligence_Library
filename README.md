# Asset Intelligence Library — frog Data

Modern, responsive single-page web experience for exploring frog Data AI assets, capabilities, clients, and team contacts.

## Quick Start

### Prerequisites
- Modern browser (Chrome, Edge, Firefox, Safari)
- No build tools required (static HTML/CSS/JS)

### Run Locally
1. Open the project folder:
```bash
cd asset_lib
```

2. Start a local server (recommended):
```bash
python3 -m http.server 8005
```

3. Open:
```text
http://localhost:8005/home.html
```

You can also open `home.html` directly, but local server mode is best for consistent asset loading.

## Project Structure

```text
asset_lib/
├── home.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── client_logos/
│   ├── frog_logos/
│   ├── headshots/
│   ├── Icons/
│   └── font/
└── README.md
```

## Current Features

- Hero section with animated counters and ambient background effects
- Search + filter command bar for asset discovery
- Asset cards rendered from `ASSETS` data in `js/main.js`
- In-page asset detail modal (opens from card click, includes close button, backdrop close, `Esc` close)
- Capabilities & Domains section with custom SVG iconography from `assets/Icons`
- Client logo network + rotating testimonial carousel
- Contact cards with local headshots
- Fully responsive layout (desktop/tablet/mobile)

## Branding + Design System (Current)

- **Core palette**:
  - Dark Green `#33CE2A`
  - Light Green `#00F900`
  - Black `#000000`
  - White `#FFFFFF`
- **Secondary accents in use**: Indigo, Teal, Magenta, Orange, and Grey tones from the Custom Comms/Initiatives palette
- **Typography**:
  - Primary: local `frogSerif` (`assets/font/frogSerif-Regular.woff2`, `assets/font/frogSerif-Italic.woff2`)
  - Monospace support UI: JetBrains Mono

## Imagery + Asset Sources

- Asset card thumbnails: remote Unsplash URLs (configured in `ASSETS` inside `js/main.js`)
- Brand logos: local files in `assets/frog_logos/`
- Capability icons: local SVG files in `assets/Icons/`
- Contact photos: local files in `assets/headshots/`
- Client logos: local files in `assets/client_logos/`

## Key Customization Points

### Update Assets
Edit `ASSETS` in `js/main.js`:
- title/description/category/status
- thumbnail image URL
- tags/actions/contact/updated date

### Update Capability Cards
Edit `CAPS` in `js/main.js`:
- label + description + accent color
- `iconFile` mapping to an SVG under `assets/Icons/`

### Update Contact Profiles
Edit contact card markup in `home.html` and point `img` sources to files under `assets/headshots/`.

### Update Theme
Edit CSS variables in `:root` at the top of `css/styles.css`.

## Deployment

Static hosting ready. Can be deployed directly to:
- GitHub Pages
- Netlify
- Vercel
- S3 + CloudFront
- Any static web server

## Browser Compatibility

- Chrome / Edge (modern)
- Firefox (modern)
- Safari (modern)
- Mobile browsers

## Notes

- No build step required
- Vanilla JS only (no framework dependency)
- Optimized for simple maintenance and direct edits

## License

© 2026 frog Customer Data & Technology — Internal Use Only

---

Last Updated: April 2026  
Version: 1.2  
Status: Active
