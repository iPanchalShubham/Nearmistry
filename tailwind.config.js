const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's-phones': '360px',//small phones
      'n-phones':'380px',//normal phones
      ...defaultTheme.screens,
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}