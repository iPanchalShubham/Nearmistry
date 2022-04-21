const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's-phones': '360px',
      'n-phones':'380px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}