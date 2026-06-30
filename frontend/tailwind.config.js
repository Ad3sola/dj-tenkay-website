/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tk-black': '#0A0A0A',
        'tk-surface': '#111111',
        'tk-accent': '#7C3AED',
        'tk-accent-hover': '#6D28D9',
        'tk-text': '#F5F5F5',
        'tk-muted': '#888888',
        'tk-border': '#1F1F1F',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}