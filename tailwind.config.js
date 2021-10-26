const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        tedRed: {
          default: '#FF0000',
        },
        darkGray:{
          default: '#3F3F3F',
          600: '#363636',
          700: '#2e2e2e'

        }
      },
      ring: ['hover', 'active'],
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover','hover'],
      backgroundColor: ['active'],
      ringWidth: ['hover', 'active'],
      textColor: ['disabled'],
      dropShadow: ['focus'],
    }
  },
  plugins: [],
}
