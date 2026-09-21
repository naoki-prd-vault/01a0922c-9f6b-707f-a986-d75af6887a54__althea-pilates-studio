import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        altheaSage: '#959C79',
        altheaDeepOlive: '#707859',
        altheaIvory: '#F3F2ED',
      },
      fontFamily: {
        // Placeholder for serif display font
        display: ['Cormorant Garamond', 'serif'], 
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
