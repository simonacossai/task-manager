/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
colors:{
  'white': '#F3F4F8',
  'bg-color': '#F3F4F8',
  'accent-color': '#6772FE',
  'deep-accent-color': '#232360',
  'grey': '#768396',
  'light-accent': "#FBFAFF"
},
    fontFamily: {
      sans: ['DM Sans',...defaultTheme.fontFamily.sans],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

