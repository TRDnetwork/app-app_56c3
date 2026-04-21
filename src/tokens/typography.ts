// Dawn Brew Design Tokens - Typography System

export const typography = {
  // Font families
  display: "'Playfair Display', serif",
  body: "'Inter', sans-serif",
  
  // Font sizes (rem)
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
  
  // Font weights
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
  
  // Line heights
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  
  // Letter spacing
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
  
  // Text styles
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.02em'
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: '400',
    lineHeight: '1.6',
    letterSpacing: '0'
  },
  caption: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: '400',
    lineHeight: '1.4',
    letterSpacing: '0',
    fontSize: '0.875rem'
  }
};