import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#4568fe',
        secondary: '#18c4fe',
        background: '#0e1533',
      },
      fontSize: {
        '20xl': '7rem',
      },
      fontFamily: {
        luxury: 'Luxurious Script',
        Kalam: 'Kalam',
      },
      container: {
        center: true,

        screens: {
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
