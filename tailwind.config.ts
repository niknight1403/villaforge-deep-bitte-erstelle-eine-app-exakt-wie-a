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
        accent: '#FF3366',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0B0',
      },
    },
  },
  plugins: [],
};
export default config;