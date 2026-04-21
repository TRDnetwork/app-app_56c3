// Dawn Brew Design Tokens - Breakpoints System

export const breakpoints = {
  // Mobile first breakpoints
  sm: '480px',       // Small mobile devices
  md: '768px',       // Tablets and small screens
  lg: '1024px',      // Desktops
  xl: '1280px',      // Large desktops
  '2xl': '1536px',   // Extra large desktops
  
  // Media query helpers
  untilSm: '(max-width: 479px)',
  untilMd: '(max-width: 767px)',
  untilLg: '(max-width: 1023px)',
  untilXl: '(max-width: 1279px)',
  until2Xl: '(max-width: 1535px)',
  
  fromSm: '(min-width: 480px)',
  fromMd: '(min-width: 768px)',
  fromLg: '(min-width: 1024px)',
  fromXl: '(min-width: 1280px)',
  from2Xl: '(min-width: 1536px)'
};