# Dawn Brew - Coming Soon Landing Page

A sleek, static landing page for "Dawn Brew," a hand-roasted coffee shop opening in Karnal, India, in Summer 2026. This single-page site features a dark theme with warm amber accents, brand storytelling, and a UI-only email signup form.

## Features

- **Hero Section**: Prominent branding with a compelling tagline announcing the Summer 2026 opening.
- **Email Signup Form**: Client-side validated form with a fake success message (no backend/data collection).
- **Content Sections**: Three distinct sections detailing the shop's origin, brewing philosophy, and Karnal location.
- **Social Links**: Functional Instagram and Twitter links in the footer.
- **Responsive Design**: Mobile-first layout that adapts seamlessly to all screen sizes.
- **Accessibility**: Semantic HTML, ARIA labels, and WCAG-compliant color contrast.

## Tech Stack

- **HTML5**: Semantic markup.
- **CSS3**: Vanilla CSS with custom properties for theming.
- **JavaScript (ES6)**: Minimal client-side interactivity for form handling.
- **Google Fonts**: Playfair Display (headings) and Inter (body).
- **No Build Tools**: Pure static files—no frameworks, bundlers, or package managers.

## Project Structure

```
app_56c3/
├── index.html          # Main HTML document
├── styles.css          # All styling (dark theme, responsive layout)
├── script.js           # Form validation and success message logic
└── README.md           # Project documentation (this file)
```

## Setup & Deployment

### Local Development

1. **Clone or download** the project files.
2. Open `index.html` directly in any modern web browser.
3. No server, build step, or dependencies required.

### Live Deployment

Deploy to any static hosting service (e.g., GitHub Pages, Netlify, Vercel, or a traditional web server):

- **GitHub Pages**:
  1. Push the files to a GitHub repository.
  2. Go to **Settings > Pages**.
  3. Select the `main` branch and `/ (root)` folder.
  4. Your site will be live at `https://<username>.github.io/<repository>/`.

- **Netlify**:
  1. Drag and drop the project folder into the Netlify dashboard.
  2. Your site will be instantly deployed with a public URL.

## Usage

1. **View the Page**: Open `index.html` in a browser.
2. **Interact with the Form**:
   - Enter a valid email address (format: `user@example.com`).
   - Click "Notify Me".
   - A success message will appear for 5 seconds, then fade out.
   - *Note*: No data is sent or stored—this is a UI-only simulation.
3. **Navigate Social Links**: Click Instagram or Twitter links in the footer to visit Dawn Brew's social pages (opens in a new tab).

## Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0A1628` | Main page background |
| Surface | `#0F1E3A` | Content section cards |
| Text (Primary) | `#F8FAFC` | Headings, body text |
| Text (Dim) | `#94A3B8` | Secondary text, captions |
| Accent (Amber) | `#D97706` | Tagline, buttons, links, hover states |
| Border | `#1E293B` | Section borders, input borders |
| Success | `#14B8A6` | Form success message |

## Fonts

- **Playfair Display**: Used for all headings (`h1`, `h2`). Evokes an artisanal, refined feel.
- **Inter**: Used for all body text, labels, and buttons. Ensures readability across devices.

## Browser Support

Compatible with all modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). Gracefully degrades on older browsers.

## License

All rights reserved © 2026 Dawn Brew. This project is for demonstration purposes.