import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
