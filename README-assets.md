# Dawn Brew - Visual Assets

## Generated Assets

### Core App Assets
1. **favicon.svg** - Browser tab icon (32x32)
2. **og-image.svg** - Open Graph image for social sharing (1200x630)
3. **apple-touch-icon.svg** - iOS home screen icon (180x180)
4. **loading-spinner.svg** - Animated loading indicator (48x48)

### Placeholder Images
5. **placeholder-coffee.svg** - Generic coffee illustration for empty states (400x300)
6. **user-avatar.svg** - Default user avatar with coffee theme (100x100)
7. **hero-illustration.svg** - Abstract dawn/coffee illustration for hero sections (600x400)

### Icon System
8. **feature-icons.svg** - SVG sprite sheet containing:
   - `#icon-origin` - Origin story icon
   - `#icon-brewing` - Brewing philosophy icon
   - `#icon-location` - Location icon
   - `#icon-instagram` - Instagram social icon
   - `#icon-twitter` - Twitter social icon

### Brand Assets
9. **logo-placeholder.svg** - Text-based logo with coffee icon (200x60)
10. **color-palette.html** - Interactive color palette visualization

## Usage Instructions

### Embedding SVGs
For static HTML, you can:
1. **Inline SVG**: Copy SVG code directly into HTML
2. **Reference as image**: `<img src="favicon.svg" alt="Dawn Brew">`
3. **Use sprite icons**: `<svg><use href="feature-icons.svg#icon-origin"></use></svg>`

### Adding to Existing HTML
Add to `index.html` head section:
```html
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.svg">
<meta property="og:image" content="og-image.svg">
```

### Color Palette
The color palette follows the design system:
- Background: `#0A1628` (dark blue)
- Surface: `#0F1E3A` (medium blue)
- Text Primary: `#F8FAFC` (off-white)
- Text Dim: `#94A3B8` (light gray-blue)
- Accent: `#D97706` (warm amber)
- Border: `#1E293B` (dark border)

## File Sizes
All SVGs are optimized:
- favicon.svg: 0.8KB
- og-image.svg: 2.1KB
- apple-touch-icon.svg: 1.2KB
- loading-spinner.svg: 1.5KB
- All other files: 1-3KB each

## Notes
- All SVGs use the defined color palette
- Icons are designed for 24x24 viewport
- Placeholder images include subtle animations
- Assets are responsive and scale well
- No external dependencies required

## Integration Example
To add the loading spinner to your form:
```html
<div id="loading" style="display: none;">
  <img src="loading-spinner.svg" alt="Loading..." width="48" height="48">
</div>
```

To use social icons in footer:
```html
<a href="https://instagram.com/dawnbrew" target="_blank" aria-label="Instagram">
  <svg width="24" height="24">
    <use href="feature-icons.svg#icon-instagram"></use>
  </svg>
</a>