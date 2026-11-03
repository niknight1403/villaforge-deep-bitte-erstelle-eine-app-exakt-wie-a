import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F13',
        card: '#1A1A22',
        primary: '#FF3366',
        secondary: '#A0A0B0',
      },
    },
  },
  plugins: [],
};
export default config;