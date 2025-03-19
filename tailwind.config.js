/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        primary: {
          50: '#f2f7f4',
          100: '#e4f0e8',
          200: '#cce3d4',
          300: '#a5cfb3',
          400: '#7cba8e',
          500: '#4d9a63',
          600: '#357a47',
          700: '#2a613a',
          800: '#1e472a',
          900: '#183a23',
          950: '#0b1f12',
        },
        secondaryGray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0b0c0e',
        },
      },
    },
  },
  plugins: [],
}
