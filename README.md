# Asset Intelligence Library — frog Data

A modern, responsive web application showcasing frog Data's AI asset library, featuring an interactive showcase of AI capabilities, client testimonials, and team contacts.

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required — this is a static web application

### Running Locally

1. **Clone or Download** this repository to your local machine

2. **Navigate** to the project directory:
   ```bash
   cd asset_library
   ```

3. **Open** `home.html` in your web browser:
   - **Mac/Linux**: `open home.html` or drag the file to your browser
   - **Windows**: Double-click `home.html` or right-click → Open with → Browser
   - **Or**: Use a local server (recommended for best experience):
     ```bash
     # Using Python 3
     python -m http.server 8005
     # Then visit http://localhost:8005/home.html
     
     # Or using Node.js (if installed)
     npx http-server
     ```

## 📁 Project Structure

```
asset_library/
├── home.html              # Main HTML file
├── css/
│   └── styles.css        # All styling (no preprocessor)
├── js/
│   └── main.js           # Interactive features (vanilla JS)
├── assets/
│   ├── client_logos/     # Client company logos
│   └── [team photos]     # Team member photos
├── README.md             # This file
└── .gitignore           # Git ignore file
```

## ✨ Features

- **Hero Section** — Welcoming introduction with animated statistics
- **Asset Library** — Interactive grid showcasing AI assets with team member attribution
- **Capabilities Grid** — 8 tech domains with detailed descriptions
- **Technology Ticker** — Scrolling marquee of tech stack (appears above and below client section)
- **Client Logos** — Floating 3×2 grid of trusted clients with hover animations
- **Client Feedback** — Auto-rotating carousel of testimonials (5s rotation, manual dot navigation)
- **Team Contacts** — Key contact cards with photos, roles, and tech specialties
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Smooth Animations** — Subtle floating effects, fade-ins, and gradient shifts

## 🎨 Design System

- **Colors**: Purple (`#6d28d9`–`#c4b5fd`), Cyan (`#22d3ee`), Magenta (`#ec4899`), Dark Void (`#06060e`)
- **Fonts**: 
  - Headings: Space Grotesk
  - Body: Inter
  - Code/Monospace: JetBrains Mono
- **Animations**: Cubic-bezier easing, floating effects, gradient flows

## 🔧 Customization

### Change Client Logos
1. Replace images in `assets/client_logos/` with your own
2. Update `home.html` lines 126–130 with new file names and alt text

### Update Asset Data
Edit the `ASSETS` array in `js/main.js` (lines 6–116) to add/modify assets, contacts, and tags

### Modify Capabilities
Edit the `CAPABILITIES` array in `js/main.js` (lines 118–162) to update tech domains

### Update Team Contacts
Edit the contact cards in `home.html` (lines 241–300) or update JavaScript contact data

### Change Feedback Testimonials
Edit the `.feedback-card` divs in `home.html` (lines 154–172) or populate dynamically from `js/main.js`

## 🌐 Deployment

### Option 1: Static Hosting (Recommended)
Deploy directly to any static hosting service:
- **Vercel**: Connect GitHub repo → Auto-deploy
- **Netlify**: Drag & drop folder or connect repo
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3 + CloudFront**: Upload files, configure for web hosting

### Option 2: Web Server
Copy all files to any web server (Apache, Nginx, etc.) and serve over HTTP/HTTPS

### Option 3: Local Network Sharing
Run `python -m http.server 8000` and share your local IP (e.g., `http://192.168.1.x:8000`)

## 📱 Browser Compatibility

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Notes

- **No build step** — Open and run immediately
- **Vanilla JavaScript** — No framework overhead
- **Optimized animations** — Uses CSS transforms and GPU acceleration
- **Responsive images** — Logos auto-scale for all screen sizes

## 💡 Tips

- **Full-screen**: Press `F11` in browser for immersive viewing
- **Slow animations**: Inspect page source (`Ctrl+Shift+J`) to adjust animation durations in CSS
- **Mobile testing**: Use browser DevTools (F12) → Toggle Device Toolbar (`Ctrl+Shift+M`)
- **Dark mode**: All colors are designed for dark mode; light mode support available via CSS variable adjustments

## 📧 Support

For questions or issues, contact the frog Data team.

## 📝 License

© 2026 frog Customer Data & Technology — Internal Use Only

---

**Last Updated**: April 2026  
**Version**: 1.0  
**Status**: Production Ready
