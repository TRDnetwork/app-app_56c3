# Testing Documentation

This is a static HTML landing page with minimal JavaScript functionality. Due to the `static-html` framework choice, traditional automated testing (Vitest, Jest, etc.) is not applicable.

## Manual Testing Procedure

### 1. Visual & Layout Verification
- [ ] Confirm dark theme with amber (#D97706) accents is consistently applied
- [ ] Verify responsive design on mobile (320px), tablet (768px), and desktop (1024px+)
- [ ] Check proper spacing and typography hierarchy
- [ ] Validate color contrast meets WCAG AA standards

### 2. Form Functionality
- [ ] Test email input validation with valid/invalid formats
- [ ] Verify success message appears after submission
- [ ] Confirm form prevents page reload on submission
- [ ] Check accessibility: proper labels, ARIA attributes, keyboard navigation

### 3. Link Verification
- [ ] Test all social media links open in new tabs with `rel="noopener"`
- [ ] Verify Instagram and Twitter URLs are correct
- [ ] Confirm footer links are accessible

### 4. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 5. Performance & SEO
- [ ] Validate meta tags and Open Graph data
- [ ] Check page load performance
- [ ] Verify semantic HTML structure
- [ ] Confirm analytics tracking is properly implemented

## Automated Checks
Run these command-line checks to validate the static site:

```bash
# Check HTML validity
npx html-validate index.html

# Check for broken links
npx broken-link-checker http://localhost:3000

# Lighthouse audit (install Chrome CLI)
npx lighthouse http://localhost:3000 --view

# Check bundle size
npx source-map-explorer index.html
```

## Browser Compatibility
- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)

## Accessibility Requirements
- [ ] All interactive elements keyboard accessible
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Semantic HTML with proper heading hierarchy
- [ ] Screen reader friendly (test with NVDA/VoiceOver)
- [ ] No flashing content that could cause seizures