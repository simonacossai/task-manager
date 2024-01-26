/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
colors:{
  'white': '#FFFFFF',
  'bg-color': '#F3F4F8',
  'accent-color': '#6772FE',
  'deep-accent-color': '#232360',
  'grey': '#768396',
  'icons':'#5F6388',
  'light-grey': '#E3E8EE',
  'light-accent': "#FBFAFF"
},
fontFamily: {
  sans: [
    '"Inter var", sans-serif',
    {
      fontFeatureSettings: '"cv11", "ss01"',
      fontVariationSettings: '"opsz" 32'
    },
  ],
},
  },
  plugins: [],
}

